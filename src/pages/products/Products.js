import React, { Component } from "react";
import PropTypes from "prop-types";

import ProductCard from "./components/ProductCard/ProductCard";
import Widget from "../../components/Widget";


import {
  Row,
  Col,
  Input,
  InputGroupAddon,
  Button,
  InputGroup,
  Label,
  FormGroup,
} from "reactstrap";
import cx from 'classnames'
import { Range, createSliderWithTooltip } from "rc-slider";
import s from "./Products.module.scss";
import { getProductsRequest } from "../../actions/products";
import { withRouter } from "react-router";
import { connect } from "react-redux";

// icons
import SearchIcon from "../../images/icons/search-black.svg";
import GridOutlined from "../../images/icons/Grid_list.svg";
import GridFilled from "../../images/icons/Grid_filled_list.svg";
import ListOutlined from "../../images/icons/List_outlined.svg";
import ListFilled from "../../images/icons/List_filled.svg";

const RangeTooltip = createSliderWithTooltip(Range);

class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: [],
  };

  state = {
    isModalActive: false,
    modalId: null,
    activeGrid: true,
    activeList: false,
    localProducts: [],
  };

  openModal(id) {
    this.setState({ isModalActive: true, modalId: id });
  }

  closeModal = () => {
    this.setState({ isModalActive: false, modalId: null });
  };

  toggleGrid = () => {
    this.setState({
      activeGrid: !this.state.activeGrid,
      activeList: !this.state.activeList,
    });
  };

  forceUpdate() {
    return this.setState({});
  }

  componentDidMount() {
    this.props.dispatch(getProductsRequest());
    if (this.props.products.length !== 0) {
      this.setState({ localProducts: this.props.products });
    }
    window.addEventListener("resize", this.forceUpdate.bind(this));
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.setState({ localProducts: this.props.products });
    }
  }

  render() {
    const productFilter = (e) => {
      let products = [];
      this.props.products.forEach((c) => {
        if (
          c.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        ) {
          products.push(c);
        }
        return;
      });
      this.setState({
        localProducts: products,
      });
    };

    return (
      <Row>
        <Col xs={3} className={cx({"d-none": window.innerWidth < 1164})}>
          {/* eslint-disable */}
          {/* eslint-enable */}
          <Widget title={<p className={"fw-bold"}>Filters</p>} >
            <small className={"fw-semi-bold"}>Body Style</small>
            <FormGroup
              className="checkbox abc-checkbox abc-checkbox-warning mb-1 mt-1"
              check
            >
              <Input id="checkbox1" type="checkbox" defaultChecked  onChange={(e) => console.log(e.currentTarget)}/>{" "}
              <Label for="checkbox1" check>
                All
              </Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox2" type="checkbox" />{" "}
              <Label for="checkbox2">Sedan</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox3" type="checkbox" />{" "}
              <Label for="checkbox3">Coupe</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox4" type="checkbox" />{" "}
              <Label for="checkbox4">Sports Car</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox5" type="checkbox" />{" "}
              <Label for="checkbox5">Hatchback</Label>
            </FormGroup>
            <div className={"text-right fs-sm text-muted pt-2"}>
              View more >
            </div>
            <hr />
            <small className={"fw-semi-bold"}>Price</small>
            <span className="slider-warning">
              <RangeTooltip
                allowCross={false}
                defaultValue={[10061, 70000]}
                min={0}
                max={100000}
                className={`${s.sliderCustomization} ${s.rangeSlider} ${s.sliderYellow} mt-2`}
              />
              &nbsp;
            </span>
            <hr />
            <small className={"fw-semi-bold"}>Brand</small>
            <FormGroup
              className="checkbox abc-checkbox abc-checkbox-warning mb-1 mt-1"
              check
            >
              <Input id="checkbox6" type="checkbox" defaultChecked />{" "}
              <Label for="checkbox6" check>
                All
              </Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox7" type="checkbox" />{" "}
              <Label for="checkbox7">Tesla</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox8" type="checkbox" />{" "}
              <Label for="checkbox8">BMW</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox9" type="checkbox" />{" "}
              <Label for="checkbox9">Ferrari</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox10" type="checkbox" />{" "}
              <Label for="checkbox10">Ford</Label>
            </FormGroup>
            <div className={"text-right fs-sm text-muted pt-2"}>
              View more >
            </div>
            <hr />
            <small className={"fw-semi-bold"}>Colour</small>
            <FormGroup
              className="checkbox abc-checkbox abc-checkbox-warning mb-1 mt-1"
              check
            >
              <Input id="checkbox1" type="checkbox" defaultChecked />{" "}
              <Label for="checkbox11" check>
                All
              </Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox12" type="checkbox" />{" "}
              <Label for="checkbox12">Black</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox13" type="checkbox" />{" "}
              <Label for="checkbox13">White</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox14" type="checkbox" />{" "}
              <Label for="checkbox14">Red</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox15" type="checkbox" />{" "}
              <Label for="checkbox15">Blue</Label>
            </FormGroup>
            <div className={"text-right fs-sm text-muted pt-2"}>
              View more >
            </div>
            <hr />
            <small className={"fw-semi-bold"}>Year</small>
            <FormGroup
              className="checkbox abc-checkbox abc-checkbox-warning mb-1 mt-1"
              check
            >
              <Input id="checkbox16" type="checkbox" defaultChecked />{" "}
              <Label for="checkbox16" check>
                All
              </Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox17" type="checkbox" />{" "}
              <Label for="checkbox17">2020</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox18" type="checkbox" />{" "}
              <Label for="checkbox18">2019</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox19" type="checkbox" />{" "}
              <Label for="checkbox19">2018</Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox20" type="checkbox" />{" "}
              <Label for="checkbox20">2017</Label>
            </FormGroup>
            <div className={"text-right fs-sm text-muted pt-2"}>
              View more >
            </div>
            <hr />
            <small className={"fw-semi-bold"}>Rating</small>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1 mt-1">
              <Input id="checkbox21" type="checkbox" />{" "}
              <Label for="checkbox21">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
              </Label>
            </FormGroup>
            <FormGroup
              className="checkbox abc-checkbox abc-checkbox-warning mb-1 mt-1"
              check
            >
              <Input id="checkbox22" type="checkbox" defaultChecked />{" "}
              <Label for="checkbox22" check>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
              </Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox23" type="checkbox" />{" "}
              <Label for="checkbox23">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
              </Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox24" type="checkbox" />{" "}
              <Label for="checkbox24">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star pl-1" aria-hidden="true"></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
              </Label>
            </FormGroup>
            <FormGroup className="checkbox abc-checkbox abc-checkbox-warning mb-1">
              <Input id="checkbox25" type="checkbox" />{" "}
              <Label for="checkbox25">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star pl-1 text-black-50"
                  aria-hidden="true"
                ></i>
              </Label>
            </FormGroup>
            <div className={"text-right fs-sm text-muted pt-2"}>
              View more >
            </div>
            <Button color={"danger"} outline className={"mt-3 w-100"} style={{fontSize: 12}}>remove filters</Button>
          </Widget>
        </Col>
        <Col xs={window.innerWidth < 1164 ? 12 : 9}>
          <Row>
            <Col xs={12}>
              <Widget>
                <div className={"d-flex justify-content-between"}>
                  <InputGroup style={{ width: "auto" }}>
                    <InputGroupAddon
                      addonType="prepend"
                      className={s.searchIcon}
                    >
                      <img src={SearchIcon} alt="search" width={"24px"} height={"23px"}/>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder={"Search"}
                      className={s.searchInput}
                      onChange={(e) => productFilter(e)}
                    />
                  </InputGroup>
                  <Button
                    className={"bg-transparent ml-auto border-0"}
                    onClick={this.toggleGrid}
                  >
                    {this.state.activeGrid ? (
                      <img src={GridFilled} alt="grid" />
                    ) : (
                      <img src={GridOutlined} alt="grid" />
                    )}
                  </Button>
                  <Button
                    className={"bg-transparent pr-0 border-0"}
                    onClick={this.toggleGrid}
                  >
                    {this.state.activeList ? (
                      <img src={ListFilled} alt="list" />
                    ) : (
                      <img src={ListOutlined} alt="list" />
                    )}
                  </Button>
                </div>
              </Widget>
            </Col>
            <Col xs={12}>
              <Row>
                {this.state.localProducts.map((item) => (
                  <Col
                    sm={12}
                    md={this.state.activeList ? 12 : 6}
                    lg={this.state.activeList ? 12 : 6}
                    xl={this.state.activeList ? 12 : 6}
                  >
                    <ProductCard key={item.id} {...item} activeList={this.state.activeList} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.data,
  };
}

export default withRouter(connect(mapStateToProps)(ProductList));
