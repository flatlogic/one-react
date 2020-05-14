import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { dismissAlert } from "../../actions/alerts";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup";
import { changeActiveSidebarItem } from "../../actions/navigation";
import { logoutUser } from "../../actions/user";

import lightDashboardIcon from "../../images/theme-icons/yellow/Dashboard_outlined.svg";
import darkDashboardIcon from "../../images/theme-icons/yellow/Dashboard_filled.svg";
import lightTables from "../../images/tables.svg";
import darkTables from "../../images/tables-dark.svg";
import lightUI from "../../images/ui-elements.svg";
import darkUI from "../../images/ui-elements-dark.svg";
import logo from "../../images/logo.svg";
import settingsIcon from "../../images/settings.svg";
import logoutIcon from "../../images/logout.svg";
import accountIcon from "../../images/account.svg";
import eCommerceOutlined from "../../images/theme-icons/yellow/E-commerce_outlined.svg";
import eCommerceFilled from "../../images/theme-icons/yellow/E-commerce_filled.svg";
import packageOutlined from "../../images/theme-icons/yellow/Package_outlined.svg";
import packageFilled from "../../images/theme-icons/yellow/Package_filled.svg";
import profileOutlined from "../../images/theme-icons/yellow/Profile_outlined.svg";
import profileFilled from "../../images/theme-icons/yellow/Profile_filled.svg";
import emailOutlined from "../../images/theme-icons/yellow/Email_outlined.svg";
import emailFilled from "../../images/theme-icons/yellow/Email_filled.svg";
import documentationOutlined from "../../images/theme-icons/yellow/Documentation_outlined.svg";
import documentationFilled from "../../images/theme-icons/yellow/Documentation_filled.svg";
import coreOutlined from "../../images/theme-icons/yellow/Core_outlined.svg";
import coreFilled from "../../images/theme-icons/yellow/Core_filled.svg";
import formsOutlined from "../../images/theme-icons/yellow/Forms_outlined.svg";
import formsFilled from "../../images/theme-icons/yellow/Forms_filled.svg";
import chartsOutlined from "../../images/theme-icons/yellow/Charts_outlined.svg";
import chartsFilled from "../../images/theme-icons/yellow/Charts_filled.svg";
import gridOutlined from "../../images/theme-icons/yellow/Grid_outlined.svg";
import gridFilled from "../../images/theme-icons/yellow/Grid_filled.svg";
import tablesOutlined from "../../images/theme-icons/yellow/Tables_outlined.svg";
import tablesFilled from "../../images/theme-icons/yellow/Tables_filled.svg";
import mapsOutlined from "../../images/theme-icons/yellow/Maps_outlined.svg";
import mapsFilled from "../../images/theme-icons/yellow/Maps_filled.svg";
import extraOutlined from "../../images/light-extra.svg";
import extraFilled from "../../images/dark-extra.svg";

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
    activeItem: "",
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <div
        className={`${
          !this.props.sidebarOpened && !this.props.sidebarStatic
            ? s.sidebarClose
            : ""
        } ${s.sidebarWrapper}`}
      >
        <nav className={s.root}>
          <header className={s.logo}>
            <img src={logo} alt="logo" className={s.logoStyle} />
            <span>Flatlogic&nbsp;</span> One
          </header>
          <section className={s.menuWrapper}>
            <h5 className={s.navTitle}>APP</h5>
            <ul className={s.nav}>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Dashboard"
                isHeader
                link="/app/dashboard"
                index="dashboard"
                exact={false}
                childrenLinks={[
                  {
                    header: "Analytics",
                    link: "/app/dashboard/analytics",
                  },
                  {
                    header: "Visits",
                    link: "/app/dashboard/visits",
                  },
                ]}
              >
                {window.location.href.includes("dashboard") ? (
                  <img
                    src={darkDashboardIcon}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={lightDashboardIcon}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="E-commerce"
                isHeader
                link="/app/ecommerce"
                index="ecommerce"
                exact={false}
                childrenLinks={[
                  {
                    header: "Product Management",
                    link: "/app/dashboard/analytics",
                  },
                  {
                    header: "Products Grid",
                    link: "/app/dashboard/visits",
                  },
                  {
                    header: "Product Page",
                    link: "/app/dashboard/visits",
                  },
                ]}
              >
                {window.location.href.includes("ecommerce") ? (
                  <img
                    src={eCommerceFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={eCommerceOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Package"
                isHeader
                link="/app/package"
                index="package"
              >
                {window.location.href.includes("package") ? (
                  <img
                    src={packageFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={packageOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Profile"
                isHeader
                link="/app/profile"
                index="profile"
              >
                {window.location.href.includes("profile") ? (
                  <img
                    src={profileFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={profileOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Email"
                isHeader
                link="/app/email"
                index="email"
                badge={9}
              >
                {window.location.href.includes("email") ? (
                  <img
                    src={emailFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={emailOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Documentation"
                isHeader
                link="/app/documentation"
                index="documentation"
              >
                {window.location.href.includes("documentation") ? (
                  <img
                    src={documentationFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={documentationOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
            </ul>
            <h5 className={s.navTitle}>TEMPLATE</h5>
            <ul className={s.nav}>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Core"
                isHeader
                link="/app/core"
                index="core"
                exact={false}
                childrenLinks={[
                  {
                    header: "Typography",
                    link: "/app/core/typography",
                  },
                  {
                    header: "Colors",
                    link: "/app/core/colors",
                  },
                  {
                    header: "Grid",
                    link: "/app/core/grid",
                  },
                ]}
              >
                {window.location.href.includes("core") ? (
                  <img
                    src={coreFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={coreOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="UI Elements"
                isHeader
                link="/app/ui"
                index="ui"
                exact={false}
                childrenLinks={[
                  {
                    header: "Alerts",
                    link: "/app/ui/alerts",
                  },
                  {
                    header: "Badge",
                    link: "/app/ui/badge",
                  },
                  {
                    header: "Buttons",
                    link: "/app/ui/buttons",
                  },
                  {
                    header: "Card",
                    link: "/app/ui/card",
                  },
                  {
                    header: "Notifications",
                    link: "/app/ui/notifications",
                  },
                ]}
              >
                {window.location.href.includes("ui") ? (
                  <img
                    src={darkUI}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={lightUI}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Forms"
                isHeader
                link="/app/forms"
                index="forms"
                exact={false}
                childrenLinks={[
                  {
                    header: "Forms Elements",
                    link: "/app/forms/elements",
                  },
                  {
                    header: "Forms Validation",
                    link: "/app/forms/validation",
                  },
                  {
                    header: "Forms Wizard",
                    link: "/app/forms/wizard",
                  },
                ]}
              >
                {window.location.href.includes("forms") ? (
                  <img
                    src={formsFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={formsOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Charts"
                isHeader
                link="/app/charts"
                index="charts"
                exact={false}
                childrenLinks={[
                  {
                    header: "Charts Overview",
                    link: "/app/charts/overview",
                  },
                  {
                    header: "Apex Charts",
                    link: "/app/charts/apex",
                  },
                  {
                    header: "Echarts Charts",
                    link: "/app/charts/echarts",
                  },
                ]}
              >
                {window.location.href.includes("charts") ? (
                  <img
                    src={chartsFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={chartsOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Grid"
                isHeader
                link="/app/grid"
                index="grid"
              >
                {window.location.href.includes("grid") ? (
                  <img
                    src={gridFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={gridOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Tables"
                isHeader
                link="/app/tables"
                index="tables"
                exact={true}
                childrenLinks={[
                  {
                    header: "Tables Basic",
                    link: "/app/tables/basic",
                  },
                  {
                    header: "Tables Dynamic",
                    link: "/app/tables/dynamic",
                  },
                ]}
              >
                {window.location.href.includes("tables") ? (
                  <img
                    src={darkTables}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={lightTables}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Maps"
                isHeader
                link="/app/maps"
                index="maps"
                exact={true}
                childrenLinks={[
                  {
                    header: "Google Maps",
                    link: "/app/maps/google",
                  },
                  {
                    header: "Vektor Map",
                    link: "/app/maps/vektor",
                  },
                ]}
              >
                {window.location.href.includes("maps") ? (
                  <img
                    src={mapsFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={mapsOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                activeItem={this.props.activeItem}
                header="Extra"
                isHeader
                link="/app/extra"
                index="extra"
                exact={true}
                childrenLinks={[
                  {
                    header: "Calendar",
                    link: "/app/extra/calendar",
                  },
                  {
                    header: "Invoice",
                    link: "/app/extra/invoice",
                  },
                  {
                    header: "Login Page",
                    link: "/app/login",
                  },
                  {
                    header: "Error Page",
                    link: "/app/extra/error",
                  },
                  {
                    header: "Gallery",
                    link: "/app/extra/gallery",
                  },
                  {
                    header: "Search Result",
                    link: "/app/extra/search",
                  },
                  {
                    header: "Time line",
                    link: "/app/extra/timeline",
                  },
                ]}
              >
                {window.location.href.includes("extra") ? (
                  <img
                    src={extraFilled}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={extraOutlined}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
            </ul>
            <ul className={s.downNav}>
              <hr />
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                header="Settings"
                isHeader
                index="main"
              >
                <img
                  src={settingsIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                header="Account"
                isHeader
              >
                <img
                  src={accountIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              </LinksGroup>
              <LinksGroup
                onActiveSidebarItemChange={(activeItem) =>
                  this.props.dispatch(changeActiveSidebarItem(activeItem))
                }
                header="Logout"
                isHeader
                onClick={() => this.doLogout()}
              >
                {window.location.href.includes("another-page") ? (
                  <img
                    src={logoutIcon}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                ) : (
                  <img
                    src={logoutIcon}
                    alt="lightDashboard"
                    width={"24px"}
                    height={"24px"}
                  />
                )}
              </LinksGroup>
            </ul>
          </section>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    alertsList: store.alerts.alertsList,
    activeItem: store.navigation.activeItem,
    navbarType: store.navigation.navbarType,
    sidebarColor: store.layout.sidebarColor,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
