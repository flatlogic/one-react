const { test, expect } = require('@playwright/test');

test('backend authentication, user controls, charts, table controls, list tree and logout work', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error(error); });
  const user = { id: 'test-admin', firstName: 'Ada', lastName: 'Lovelace', email: 'admin@example.test', role: 'admin', avatars: [], avatar: [], disabled: false, phoneNumber: '5551234567' };
  let users = [user, ...Array.from({ length: 11 }, (_, i) => ({ ...user, id: `user-${i}`, firstName: `User ${String(i).padStart(2, '0')}`, email: `user${i}@example.test`, role: 'user' }))];
  const token = [Buffer.from('{"alg":"HS256","typ":"JWT"}').toString('base64url'), Buffer.from(JSON.stringify({ user, exp: 2000000000 })).toString('base64url'), 'test'].join('.');
  await page.route(url => url.pathname.startsWith('/api/'), async route => {
    const request = route.request(), path = new URL(request.url()).pathname;
    let data;
    if (path === '/api/auth/signin/local') data = token;
    else if (path === '/api/auth/me') data = user;
    else if (path === '/api/analytics') data = require('./fixtures/analytics.json');
    else if (path === '/api/users') data = { rows: users, count: users.length };
    else if (path === '/api/users/test-admin') data = user;
    else if (path === '/api/users/user-0' && request.method() === 'DELETE') { users = users.filter(row => row.id !== 'user-0'); data = {}; }
    else throw new Error(`Unexpected API ${request.method()} ${path}`);
    await route.fulfill({ json: data });
  });
  await page.goto('./');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page).toHaveURL(/#\/app\/dashboard\/analytics$/);
  await expect(page.locator('.apexcharts-svg').first()).toBeVisible();
  await page.goto('./#/admin/users');
  await expect(page.getByRole('table')).toContainText(user.email);
  await page.getByLabel('Search users').fill('Ada');
  await expect(page.locator('tbody tr')).toHaveCount(1);
  await page.getByRole('button', { name: 'View', exact: true }).click();
  await expect(page.locator('input[readonly][value="admin@example.test"]')).toBeVisible();
  await page.goBack();
  await expect(page.getByLabel('Search users')).toBeVisible();
  await page.goForward();
  await expect(page.locator('input[readonly][value="admin@example.test"]')).toBeVisible();
  await page.goBack();
  await page.getByLabel('Search users').fill('');
  await page.getByRole('columnheader', { name: /^First Name/ }).click();
  await expect(page.locator('tbody tr').first()).toContainText('User 10');
  await page.getByRole('columnheader', { name: /^First Name/ }).click();
  await expect(page.locator('tbody tr').first()).toContainText('Ada');
  await page.getByRole('link', { name: '2', exact: true }).click();
  await expect(page.locator('tbody tr')).toHaveCount(2);
  await page.getByLabel('Search users').fill('User 00');
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Delete', exact: true }).click();
  await expect(page.getByRole('cell', { name: 'User 00', exact: true })).toHaveCount(0);
  expect(users.some(row => row.id === 'user-0')).toBe(false);
  await page.goto('./#/admin/users/new');
  await page.getByRole('button', { name: 'Cancel', exact: true }).click();
  await expect(page).toHaveURL(/#\/admin\/users$/);

  await page.goto('./#/app/tables/dynamic');
  await page.getByLabel('Search table').fill('Leon');
  await expect(page.locator('table tbody tr')).toHaveCount(1);
  await expect(page.locator('table tbody')).toContainText('Leon');
  await page.getByLabel('Search table').fill('');
  await page.locator('.ReactTable .rt-th input').first().fill('Victoria');
  await expect(page.locator('.ReactTable .rt-tbody')).toContainText('Victoria Cantrell');

  await page.goto('./#/app/charts/nivocharts');
  for (const title of ['Nivo Bar Chart', 'Nivo Pie Chart', 'Nivo Chord Chart', 'Nivo Stream Chart', 'Nivo Waffle Chart', 'Nivo CirclePackingCanvas Chart', 'Nivo SwarmPlot Chart', 'Nivo SunBurst Chart', 'Nivo Radar Chart', 'Nivo Calendar Chart']) {
    const widget = page.locator('section').filter({ has: page.getByText(title, { exact: true }) });
    await expect(widget.locator('svg').first()).toBeVisible();
    const shape = title.includes('CirclePacking') || title.includes('SwarmPlot') ? 'svg circle' : title.includes('Bar Chart') || title.includes('Waffle') || title.includes('Calendar') ? 'svg rect' : 'svg path[d]';
    await expect(widget.locator(shape).first()).toBeVisible();
    if (title.includes('CirclePacking') || title.includes('Waffle') || title.includes('Calendar')) {
      await widget.screenshot({ path: `test-results/${title.replace(/[^a-z0-9]/gi, '-')}.png` });
    }
  }
  await page.screenshot({ path: 'test-results/one-nivo.png' });
  await page.goto('./#/app/charts/echarts');
  await expect(page.locator('.echarts-for-react canvas').first()).toBeVisible();
  const plot = await page.locator('.echarts-for-react canvas').first().boundingBox();
  expect(plot.width).toBeGreaterThan(50); expect(plot.height).toBeGreaterThan(50);
  await page.goto('./#/app/ui/list-groups');
  await expect(page.getByText('Item 1', { exact: true }).first()).toBeVisible();
  await page.locator('.rst__collapseButton').first().click();
  await expect(page.getByText('Item 3', { exact: true }).first()).not.toBeVisible();
  await page.locator('.rst__expandButton').first().click();
  await expect(page.getByText('Item 3', { exact: true }).first()).toBeVisible();
  await page.goto('./#/app/extra/calendar');
  await expect(page.locator('.fc-daygrid-day').first()).toBeVisible();
  await page.locator('nav .dropdown').last().locator(':scope > a').click();
  await page.getByText('Log out', { exact: true }).click();
  await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});
