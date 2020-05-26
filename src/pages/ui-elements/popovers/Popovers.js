import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Tooltip,
} from 'reactstrap';

import Widget from '../../../components/Widget';

class PopoverExamples extends Component {
  state = {
    tooltips: [false, false, false, false, false, false],
    popovers: [false, false, false, false, false, false],
    tooltipOpen: false,
  }

  toggle(id, field) {
    const newState = [...this.state[field]];
    newState.fill(false);

    if (!this.state[field][id]) {
      newState[id] = true;
    }

    this.setState({
      [field]: newState,
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
            <Widget
              className="mb-xlg"
              title={<p style={{ fontWeight: 700 }}>Popover Example</p>}
              customDropDown
            >
              <Button
                id="p-1" className="mr-md mb-md" color="danger"
                onClick={() => this.toggle(0, 'popovers')}
              >Click to toggle popover</Button>
              <Button
                id="p-2" color="danger" disabled
                onClick={() => this.toggle(1, 'popovers')}
              >Disabled button</Button>
            </Widget>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Popover Directions</p>}
              customDropDown
            >
              <Button
                id="p-3" className="mr-md mb-md" color="info"
                onClick={() => this.toggle(2, 'popovers')}
              >Popover on top</Button>
              <Button
                id="p-4" className="mr-md mb-md" color="warning"
                onClick={() => this.toggle(3, 'popovers')}
              >Popover on right</Button>
              <Button
                id="p-5" className="mb-md mr-md" color="inverse"
                onClick={() => this.toggle(4, 'popovers')}
              >Popover on bottom</Button>
              <Button
                id="p-6" className="mb-md mr-md" color="default"
                onClick={() => this.toggle(5, 'popovers')}
              >Popover on left</Button>
            </Widget>
          </Col>
          <Col xs={12} md={6}>
            <Widget
              className="mb-xlg"
              title={<p style={{ fontWeight: 700 }}>Tooltip Example</p>}
              close collapse
            >
              <Button id="t-1" className="mr-md" color="success">Tooltip</Button>
              <Button id="t-2" color="success" disabled>Disabled button</Button>
            </Widget>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Tooltip Directions</p>}
              close collapse
            >
              <Button id="t-3" className="mb-md mr-md" color="info">Tooltip on top</Button>
              <Button id="t-4" className="mb-md mr-md" color="warning">Tooltip on right</Button>
              <Button id="t-5" className="mb-md mr-md" color="inverse">Tooltip on bottom</Button>
              <Button id="t-6" className="mb-md mr-md" color="default">Tooltip on left</Button>
            </Widget>
          </Col>
        </Row>

        {/* Popovers & Tooltips */}

        <Popover placement="top" isOpen={this.state.popovers[0]} target="p-1" toggle={() => this.toggle(0, 'popovers')}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.popovers[1]} target="p-2" toggle={() => this.toggle(1, 'popovers')}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
        <Popover placement="top" isOpen={this.state.popovers[2]} target="p-3" toggle={() => this.toggle(2, 'popovers')}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
        <Popover placement="right" isOpen={this.state.popovers[3]} target="p-4" toggle={() => this.toggle(3, 'popovers')}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
        <Popover placement="bottom" isOpen={this.state.popovers[4]} target="p-5" toggle={() => this.toggle(4, 'popovers')}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>
        <Popover placement="left" isOpen={this.state.popovers[5]} target="p-6" toggle={() => this.toggle(5, 'popovers')}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </Popover>

        <Tooltip placement="top" isOpen={this.state.tooltips[0]} toggle={() => this.toggle(0, 'tooltips')} target="t-1">
          Hello world!
        </Tooltip>
        <Tooltip placement="top" isOpen={this.state.tooltips[1]} toggle={() => this.toggle(1, 'tooltips')} target="t-2">
          Hello world!
        </Tooltip>
        <Tooltip placement="top" isOpen={this.state.tooltips[2]} toggle={() => this.toggle(2, 'tooltips')} target="t-3">
          Top
        </Tooltip>
        <Tooltip placement="right" isOpen={this.state.tooltips[3]} toggle={() => this.toggle(3, 'tooltips')} target="t-4">
          Right
        </Tooltip>
        <Tooltip placement="bottom" isOpen={this.state.tooltips[4]} toggle={() => this.toggle(4, 'tooltips')} target="t-5">
          Bottom
        </Tooltip>
        <Tooltip placement="left" isOpen={this.state.tooltips[5]} toggle={() => this.toggle(5, 'tooltips')} target="t-6">
          Left
        </Tooltip>
      </div>
    );
  }
}

export default PopoverExamples;
