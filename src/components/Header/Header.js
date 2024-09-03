import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  InputGroupAddon,
  InputGroup,
  Input,
  Form,
  NavItem,
  NavLink,
} from "reactstrap";
import cx from "classnames";
import { NavbarTypes } from "../../reducers/layout";
import Notifications from "../Notifications";
import { logoutUser } from "../../actions/auth";
import chroma from "chroma-js";
import {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  changeActiveSidebarItem,
} from "../../actions/navigation";

import userAvatar from "../../images/userAvatar.png";
import search from "../../images/search.svg";
import notify from "../../images/notify.svg";
import lightNotify from "../../images/light-notify.svg";
import messages from "../../images/messages.svg";
import lightMessages from "../../images/messages-filled.svg";
import arrowActive from '../../images/Arrow 6.svg'
import arrowUnactive from '../../images/Arrow 5.svg'

// light navbar icons
import messagesLightTheme from '../../images/theme-icons/light-navbar/message.svg'
import notifyLightTheme from '../../images/theme-icons/light-navbar/notification.svg'
import lightSearch from '../../images/theme-icons/light-navbar/search.svg'

import s from "./Header.module.scss";

class Header extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool.isRequired,
    sidebarStatic: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.switchSidebar = this.switchSidebar.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.toggleMessages = this.toggleMessages.bind(this);
    this.toggleAccount = this.toggleAccount.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.doLogout = this.doLogout.bind(this);
    this.changeArrowImg = this.changeArrowImg.bind(this);
    this.changeArrowImgOut = this.changeArrowImgOut.bind(this);

    this.state = {
      menuOpen: false,
      notificationsOpen: false,
      messagesOpen: false,
      accountOpen: false,
      notificationsTabSelected: 1,
      focus: false,
      showNewMessage: false,
      hideMessage: true,
      run: false,
      arrowImg: arrowUnactive
    };
  }

  componentDidMount() {
    if (window.location.href.includes('main')){
      this.setState({run: true})
    }
  }

  toggleFocus = () => {
    this.setState({ focus: !this.state.focus });
  };

  toggleNotifications() {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  }

  toggleMessages() {
    this.setState({
      messagesOpen: !this.state.messagesOpen,
    });
  }

  toggleAccount() {
    this.setState({
      accountOpen: !this.state.accountOpen,
    });
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  changeArrowImg() {
    this.setState({
      arrowImg: arrowActive
    })
  }

  changeArrowImgOut() {
    this.setState({
      arrowImg: arrowUnactive
    })
  }

  // collapse/uncolappse
  switchSidebar() {
    if (this.props.sidebarOpened) {
      this.props.dispatch(closeSidebar());
      this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      const paths = this.props.location.pathname.split("/");
      paths.pop();
      this.props.dispatch(openSidebar());
      this.props.dispatch(changeActiveSidebarItem(paths.join("/")));
    }
  }

  // tables/non-tables
  toggleSidebar() {
    this.props.dispatch(toggleSidebar());
    if (this.props.sidebarStatic) {
      localStorage.setItem("staticSidebar", "false");
      this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      localStorage.setItem("staticSidebar", "true");
      const paths = this.props.location.pathname.split("/");
      paths.pop();
      this.props.dispatch(changeActiveSidebarItem(paths.join("/")));
    }
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }
  render() {
    const { focus } = this.state;
    const { navbarType, navbarColor, openUsersList } = this.props;

    const user = JSON.parse(localStorage.getItem("user") || {});
    //const firstUserLetter = (user.name || user.email || "A")[0].toUpperCase();

    return (
      <Navbar
        className={`${s.root} ${cx({[s.rootLight]: navbarColor === '#FFFFFF'})} d-print-none ${
          navbarType === NavbarTypes.FLOATING ? s.navbarFloatingType : ""
        }`}
        style={{ zIndex: !openUsersList ? 100 : 0, backgroundColor: navbarColor }}
      >
        <NavItem className={`${s.toggleSidebarNav} d-md-none d-flex mr-2`}>
          <NavLink
            className="ml-2 pr-4 pl-3"
            id="toggleSidebar"
            onClick={this.toggleSidebar}
          >
            <i
              className={`la la-bars text-color`}
            />
          </NavLink>
        </NavItem>
        <NavItem className={"d-md-down-block d-md-none ml-auto"}>
          <img
            src={navbarColor === '#FFF' ? lightSearch : search}
            alt="search"
            width="24px"
            height="23px"
            style={{ marginRight: 12 }}
          />
        </NavItem>
        <button className={`btn btn-bordered ml-auto ${s.fullVersionBtn}`} onMouseOver={() => this.changeArrowImg()} onMouseLeave={() => this.changeArrowImgOut()}>
          <a href="https://flatlogic.com/templates/one-react-template" target={"_black"}>Buy Now<img src={this.state.arrowImg} alt="" style={{marginLeft: 14}}/></a></button>
        <Form className={`d-md-down-none`} inline>
          <InputGroup
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            className={`${cx("input-group-no-border", { focus: !!focus })}`}
          >
            <Input
              id="search-input"
              placeholder="Search"
              className={`${cx({ focus: !!focus, ['form-control-light']: navbarColor === "#FFFFFF", [s.headerSearchInput]: navbarColor === '#323232', [s.headerSearchInputLight]: navbarColor === '#FFFFFF'})}`}
              style={{ borderBottomLeftRadius: 4, borderTopLeftRadius: 4 }}
            />
            <InputGroupAddon addonType={"prepend"} className={`${cx({['input-group-prepend-light']: navbarColor === "#FFFFFF" })}`}
            >
              <img
                src={search}
                alt="search"
                width="24px"
                height="23px"
                style={{ marginRight: 12 }}
              />
            </InputGroupAddon>
          </InputGroup>
        </Form>
        <Nav>
          <Dropdown
            nav
            isOpen={this.state.notificationsOpen}
            toggle={this.toggleNotifications}
            id="basic-nav-dropdown"
            className={`${s.notificationsMenu}`}
          >
            <DropdownToggle
              nav
              className={`${
                chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""
              }`}
              style={{ marginLeft: 20 }}
            >
              {this.state.notificationsOpen ? (
                <img
                  src={lightNotify}
                  alt="notify"
                  width="24px"
                  height={"24px"}
                />
              ) : (
                <>
                  <img src={navbarColor === "#FFFFFF" ? notifyLightTheme: notify} alt="notify" width="24px" height={"24px"} />
                  <i
                    className={`fa fa-circle text-danger mb-2 ${s.circleStyle}`}
                  />
                </>
              )}
            </DropdownToggle>
            <DropdownMenu
              right
              className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
            >
              <Notifications />
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            isOpen={this.state.messagesOpen}
            toggle={this.toggleMessages}
            nav
            className={`${s.notificationsMenu}`}
          >
            <DropdownToggle
              nav
              className={`${
                chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""
              }`}
              style={{ marginLeft: 20 }}
            >
              {this.state.messagesOpen ? (
                <img
                  src={lightMessages}
                  alt="notify"
                  width="24px"
                  height={"24px"}
                />
              ) : (
                <>
                  <img
                    src={navbarColor === "#FFFFFF" ? messagesLightTheme : messages}
                    alt="email"
                    width="24px"
                    height={"24px"}
                  />
                  <i
                    className={`fa fa-circle text-success mb-2 ${s.emailStyle}`}
                  />
                </>
              )}
            </DropdownToggle>
            <DropdownMenu
              right
              className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
            >
              <Notifications notificationsTabSelected={2} />
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav className={`${s.notificationsMenu}`} isOpen={this.state.accountOpen}
                    toggle={this.toggleAccount}>
            <DropdownToggle
              nav
              className={`${
                chroma(navbarColor).luminance() < 0.4 ? "text-white" : ""
              }`}
              style={{ marginLeft: 20 }}
            >
              <span
                className={`${s.avatar} rounded-circle thumb-sm float-left mr-2`}
              >
                {user.avatar || user.email === "admin@flatlogic.com" ? (
                  <img src={user.avatar || userAvatar} alt="..." />
                ) : (
                    <span>{user.user.email[0].toUpperCase()}</span>
                    // <span>{firstUserLetter}</span>
                )}
              </span>
            </DropdownToggle>
            <DropdownMenu
                right
                className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
            >
              <Notifications notificationsTabSelected={4} />
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    navbarType: store.layout.navbarType,
    navbarColor: store.layout.navbarColor,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
