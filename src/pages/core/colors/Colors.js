import React from 'react';
import {
  Row,
  Col,
  Table,
  Button,
} from 'reactstrap';

import Widget from '../../../components/Widget';

const tableData = [
  {
    id: 0,
    state: 'Success',
    usage: ['text-success', 'btn-success'],
  },
  {
    id: 1,
    state: 'Warning',
    usage: ['badge-warning', 'bg-warning'],
  },
  {
    id: 2,
    state: 'Danger',
    usage: ['btn-danger', 'text-danger'],
  },
  {
    id: 3,
    state: 'Info',
    usage: ['alert-info', 'badge-info'],
  },
  {
    id: 4,
    state: 'Primary',
    usage: ['bg-primary', 'text-primary'],
  },
  {
    id: 5,
    state: 'Secondary',
    usage: ['bg-secondary'],
  },
];

const Colors = () => (
  <div>
    <Row>
      <Col>
        <Widget
          title={<p style={{ fontWeight: 700 }}>States Colors</p>}
          customDropDown
        >
          <p>Flatlogic One comes with a number of state colors that can be applied to
          the most of elements and components. It reuses Bootstrap&apos;s original 6 states:</p>
          <Table>
            <thead>
              <tr>
                <th>STATE</th>
                <th>PREVIEW</th>
                <th>CLASS POSTFIX</th>
                <th>USAGE EXAMPLE</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(({ state, usage, id }) =>
                <tr key={id}>
                  <th scope="row" className="fw-thin">{state}</th>
                  <td><span className={`circle bg-${state.toLowerCase()}`}>&nbsp;</span></td>
                  <td><code>*-{state.toLowerCase()}</code></td>
                  <td>{usage.map(item => <code key={item} className="mr-xs">{item}</code>)}</td>
                </tr>,
              )}
            </tbody>
          </Table>
        </Widget>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Widget
          title={<p style={{ fontWeight: 700 }}>Text Colors</p>}
          customDropDown
        >
          <p>Convey meaning through color with a handful of color utility classes.
            Includes support for styling links with hover states, too. Use <code>text-*</code> class to fill text.</p>
          <div className="widget-padding-md border rounded w-100 h-100 text-left">
            <h1 className={"text-inverse"}>h1. Heading</h1>
            <h2 className={"text-warning"}>h2. Heading</h2>
            <h3 className={"text-danger"}>h3. Heading</h3>
            <h4 className={"text-success"}>h4. Heading</h4>
            <h5 className={"text-primary"}>h5. Heading</h5>
            <h6 className={"text-info"}>h6. Heading</h6>
          </div>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<p style={{ fontWeight: 700 }}>Example Buttons</p>}
          customDropDown
        >
          <p>Use any of the available button classes to quickly create a styled button.
            Semantically distinguishable beauty.</p>
          <Button className="mb-md mr-md" color="default">Default</Button>
          <Button className="mb-md mr-md" color="primary">Primary</Button>
          <Button className="mb-md mr-md" color="info">Info</Button>
          <Button className="mb-md mr-md" color="success">Success</Button>
          <Button className="mb-md mr-md" color="warning">Warning</Button>
          <Button className="mb-md mr-md" color="danger">Danger</Button>
          <Button className="mb-md mr-md" color="gray">Gray</Button>
          <Button className="mb-md" color="inverse">Inverse</Button>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Colors;
