# 🚀 Flatlogic One React - A Free React Admin Dashboard!

[View Demo](https://flatlogic.com/templates/one-react-template/demo) | [Download](https://github.com/flatlogic/one-react/archive/refs/heads/master.zip) | [More Templates](https://flatlogic.com/templates) | [Discord Community](https://discord.gg/flatlogic-community) | [Support Forum](https://flatlogic.com/forum)

**Originally a premium product priced at $69+, made available for free in January 2025!** 🎉

[![image](https://user-images.githubusercontent.com/43149862/80715665-5d031c80-8aff-11ea-801b-dd22163b4874.png)](https://flatlogic.com/templates/one-react-template/demo)

Looking for a perfect codebase generator for your Startup? Try [Flatlogic AI Web App Generator](https://flatlogic.com/generator) - our new tool, sort of a template++.

---

## 🎯 Why Flatlogic One React?
- **Ex-Premium**: This template was previously paid. Enjoy it for free now. 😉
- **React + Bootstrap 4**: Built using modern tech stack for scalability and performance.
- **Join the Community**: [Flatlogic Discord](https://discord.gg/flatlogic-community) is where the action happens.
- **Free Node.js Backend**: Pair it up with [this backend](https://github.com/flatlogic/nodejs-backend) to go full-stack.

---

## 🚀 Quick Start

1. **Clone the repo**  
   ```bash
   git clone https://github.com/flatlogic/one-react.git
   cd one-react
   ```
2. **Install dependencies**  
   ```bash
   npm ci --legacy-peer-deps
   ```
3. **Run the app**  
   ```bash
   npm start
   ```
   Navigate to http://localhost:5173/.

4. **Backend Support**  
   ```bash
   npm run start:backend
   ```

5. **Build for production**  
   ```bash
   npm run build
   ```

Use Node.js 22.12 or newer. `package-lock.json` is the canonical dependency lock. The explicit legacy peer flag preserves existing React 18 / connected-react-router / Bootstrap 4 integration; several legacy libraries publish older React peer ranges. No global npm peer bypass is configured.

`npm run build` writes `build/`; `npm run preview` serves that production output. `npm test` runs JWT/URL/cache isolation checks and real Chrome regressions (local Google Chrome required). Use `PLAYWRIGHT_DEV=1 npm test` for the development server. Tests mock authentication and API responses; they exercise navigation, user actions, tables, charts, the rich text/Markdown editors, date inputs, tree dragging, calendar, and logout.

The `docs/` demo contains the same production build, with relative asset URLs for GitHub Pages. After changing the app, replace its generated output from `build/`, preserving deployment metadata. `PLAYWRIGHT_DOCS=1 npm test` checks the `/one-react/` base and retirement of the old scoped service worker. The retirement worker clears only responses within its own app scope and unregisters itself; other apps on the same origin retain their cached responses.

---

## 🧩 Features

- Fully Responsive Layout
- React 18
- Bootstrap 4
- Redux State Management
- Beautiful Charts (Amcharts, Echarts, Apexcharts)
- Google Maps Integration
- E-Commerce Pages
- Flatlogic Typography & Icons

---

## 🛠 Built With
- React 18
- Bootstrap 4
- Redux
- Vite 8
- JavaScript (ES6)

---

## 📦 Pages
- Dashboard
- E-commerce (Product Grid, Product Page, Management)
- Profile
- Forms
- Charts
- Tables
- Maps
- Icons
- Notifications
- Login / Error Pages

---

## 🌍 Available Variants

|               | **Material**                                              | **Transparent**                                         | **Classic**                                          | **Sofia**                                          | **Flatlogic**                                      |
|---------------|-----------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| **React**     | [React Material Admin](https://github.com/flatlogic/react-material-admin-full) | [Light Blue React](https://github.com/flatlogic/light-blue-react) | [Sing App React](https://github.com/flatlogic/sing-app-react) | [Sofia React](https://github.com/flatlogic/sofia-react) | [One React](https://github.com/flatlogic/one-react) |
| **Angular**   | [Angular Material Admin](https://github.com/flatlogic/angular-material-admin-full) | [Light Blue Angular](https://github.com/flatlogic/light-blue-angular) | [Sing App Angular](https://github.com/flatlogic/sing-app-angular) | - | - |
| **Vue**       | [Material Vue](https://github.com/flatlogic/material-vue-full) | [Light Blue Vue](https://github.com/flatlogic/light-blue-vue) | [Sing App Vue](https://github.com/flatlogic/sing-app-vue) | - | - |
| **Bootstrap** | - | [Light Blue HTML5](https://github.com/flatlogic/light-blue-html5) | [Sing App HTML5](https://github.com/flatlogic/sing-app-html5) | - | [One Bootstrap](https://github.com/flatlogic/one-bootstrap-template-full) |


Additionally, these templates are tailored for specific business needs:
- [E-Commerce Frontend (React)](https://github.com/flatlogic/ecommerce-frontend) - A complete e-commerce solution.
- [Bookkeeper UI (React)](https://github.com/flatlogic/bookkeeper-ui) - Accounting dashboard for finance management.
- [User Management Template (React)](https://github.com/flatlogic/user-management-template) - User authentication and management.

---

## 👨‍💻 How to Contribute
- **Star this repo ⭐** - show some love.
- **Report bugs** - but be nice.
- **Join the [Discord](<insert-discord-invite-link>)** - meet fellow devs.

---

## 🔥 About Flatlogic
[Flatlogic AI Software Engineer](https://flatlogic.com/ai-software-development-agent) builds modern business software so you don't have to. Our AI Software Development Agent helps you generate, deploy, and maintain enterprise applications with minimal effort.

---

## 📜 License
This template is free to use. Modify it, break it, make it your own. Just don’t try to sell it back to us. 😎

---

> **Questions or feedback?**  
> Join our [Flatlogic Community Discord](https://discord.gg/flatlogic-community) or visit our [support forum](https://flatlogic.com/forum). We might even reply!

