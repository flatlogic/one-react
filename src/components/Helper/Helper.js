import React, { Component } from "react";
import cx from "classnames";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  DashboardThemes,
  SidebarTypes,
  NavbarTypes,
} from "../../reducers/layout";
import {
  changeTheme,
  changeThemeColor,
  changeSidebarColor,
  changeNavbarColor,
  navbarTypeToggle,
  sidebarTypeToggle,
} from "../../actions/layout";
import CustomColorPicker from "../ColorPicker";
import config from "../../config";

import themeImg from "../../images/theme-change-img.svg";

import Widget from "../Widget";

import s from "./Helper.module.scss"; // eslint-disable-line

class Helper extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dashboardTheme: PropTypes.string,
  };

  static defaultProps = {
    dashboardTheme: DashboardThemes.DARK,
  };

  state = {
    isOpened: false,
  };

  toggle = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  };

  changeTheme = (state) => {
    // this.props.dispatch(changeTheme(state));
    this.props.dispatch(changeSidebarColor(state));
    if (state === 'dark') {
      this.props.dispatch(sidebarTypeToggle("solid"));
    }
  };

  navbarStateToggle = (state) => {
    this.props.dispatch(navbarTypeToggle(state));
  };

  sidebarStateToggle = (state) => {
    this.props.dispatch(sidebarTypeToggle(state));
    if (state === 'transparent') {
      this.props.dispatch(changeSidebarColor("light"));
    }
  };

  updateColor = (value) => {
    this.props.dispatch(changeNavbarColor(value));
  };

  updateThemeColor = (value) => {
    this.props.dispatch(changeTheme(value));
    this.props.dispatch(changeThemeColor(value));
  };

  render() {
    const { isOpened } = this.state;
    const { navbarColor, sidebarColor, navbarType, sidebarType } = this.props;

    return (
      <div className={cx(s.themeHelper, { [s.themeHelperOpened]: isOpened })}>
        <div
          className={`${s.themeHelperBtn} helper-button`}
          onClick={this.toggle}
        >
          <img src={themeImg} alt="theme-color-change" className={"mr-1"} width={"30px"}/>
        </div>
        <Widget className={`${s.themeHelperContent} mb-0 rounded-0`}>
          <div className={s.helperHeader}>
            <h5 className="m-0 fw-bold">Theme</h5>
          </div>

          <div className="theme-settings">
            <h6 className="navbar-type-switcher mb-3 fw-semi-bold">
              Navbar Type
            </h6>
            <div className="form-group row">
              <div className="abc-radio">
                <input
                  onChange={() => this.navbarStateToggle(NavbarTypes.STATIC)}
                  type="radio"
                  checked={navbarType === NavbarTypes.STATIC}
                  name="navbar-type"
                  id="navbar_static"
                />
                <label htmlFor="navbar_static">Static</label>
              </div>

              <div className="abc-radio">
                <input
                  onChange={() => this.navbarStateToggle(NavbarTypes.FLOATING)}
                  type="radio"
                  checked={navbarType === NavbarTypes.FLOATING}
                  name="navbar-type"
                  id="navbar_floating"
                />
                <label htmlFor="navbar_floating">Floating</label>
              </div>
            </div>

            <h6 className="mt-4 navbar-color-picker mb-3 fw-semi-bold">
              Navbar Color
            </h6>
            <CustomColorPicker
              colors={config.app.colors}
              activeColor={navbarColor}
              updateColor={this.updateColor}
              customizationItem={"navbar"}
            />

            <h6 className="mt-4 sidebar-type-switcher mb-3 fw-semi-bold">
              Sidebar Type
            </h6>
            <div className="form-group row">
              <div className="abc-radio">
                <input
                  type="radio"
                  onChange={() =>
                    this.sidebarStateToggle(SidebarTypes.TRANSPARENT)
                  }
                  checked={sidebarType === SidebarTypes.TRANSPARENT ? true : ""}
                  name="sidebar-type"
                  id="sidebar_transparent"
                />
                <label htmlFor="sidebar_transparent">Transparent</label>
              </div>

              <div className="abc-radio">
                <input
                  type="radio"
                  onChange={() => this.sidebarStateToggle(SidebarTypes.SOLID)}
                  checked={sidebarType === SidebarTypes.SOLID ? true : ""}
                  name="sidebar-type"
                  id="sidebar_solid"
                />
                <label htmlFor="sidebar_solid">Solid</label>
              </div>
            </div>

            <h6 className="mt-4 sidebar-color-picker mb-3 fw-semi-bold">
              Sidebar Color
            </h6>
            <CustomColorPicker
              colors={config.app.colors}
              activeColor={sidebarColor}
              updateColor={this.changeTheme}
              customizationItem={"sidebar"}
            />

            <h6 className="mt-4 navbar-color-picker mb-3 fw-semi-bold">
              Theme Color
            </h6>
            <CustomColorPicker
              colors={config.app.themeColors}
              activeColor={this.props.themeColor}
              updateColor={this.updateThemeColor}
              customizationItem={"theme"}
            />
          </div>
          <div className="mt-5">
            <Button
              href="https://flatlogic.com/admin-dashboards/sing-app-react"
              target="_blank"
              className="btn-block fs-mini purchase-button"
              style={{ backgroundColor: "#323232" }}
            >
              <span className="text-white">Purchase</span>
            </Button>
            <Button
              href="http://demo.flatlogic.com/sing-app/documentation/"
              target="_blank"
              className="btn-block fs-mini text-white mt-3"
              color="warning"
            >
              Documentation
            </Button>
          </div>
        </Widget>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    dashboardTheme: store.layout.dashboardTheme,
    sidebarColor: store.layout.sidebarColor,
    navbarColor: store.layout.navbarColor,
    navbarType: store.layout.navbarType,
    sidebarType: store.layout.sidebarType,
    themeColor: store.layout.themeColor
  };
}

export default connect(mapStateToProps)(Helper);
