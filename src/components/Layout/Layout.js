import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Hammer from "rc-hammerjs";

import Dashboard from "../../pages/dashboard";
import { SidebarTypes } from "../../reducers/layout";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  openSidebar,
  closeSidebar,
  toggleSidebar,
} from "../../actions/navigation";
import s from "./Layout.module.scss";
import { DashboardThemes } from "../../reducers/layout";
import BreadcrumbHistory from "../BreadcrumbHistory";
import Helper from "../Helper";

// pages
import Typography from "../../pages/core/typography";
import Colors from "../../pages/core/colors";
import Grid from "../../pages/core/grid";
import Maps from "../../pages/maps";
import Notifications from "../../pages/notifications/Notifications";
import Icons from "../../pages/icons";
import StaticTables from "../../pages/tables/static";
import DynamicTables from "../../pages/tables/dynamic";
import Alerts from "../../pages/ui-elements/alerts";
import Badge from "../../pages/ui-elements/badge";
import Card from "../../pages/ui-elements/card";
import Buttons from "../../pages/ui-elements/buttons";
import VectorMap from "../../pages/maps/vector";
import Carousel from "../../pages/ui-elements/carousel";
import Jumbotron from "../../pages/ui-elements/jumbotron";
import ListGroups from "../../pages/ui-elements/list-groups";
import Nav from "../../pages/ui-elements/nav";
import Navbar from "../../pages/ui-elements/navbar";
import Popovers from "../../pages/ui-elements/popovers";
import Progress from "../../pages/ui-elements/progress";
import Tabs from "../../pages/ui-elements/tabs-accordion";
import Calendar from "../../pages/extra/calendar";
import Invoice from "../../pages/extra/invoice";
import Gallery from "../../pages/extra/gallery";
import SearchResult from "../../pages/extra/search";
import Timeline from "../../pages/extra/timeline";
import FormValidation from "../../pages/forms/validation";
import FormElements from "../../pages/forms/elements";
import FormWizard from "../../pages/forms/wizard";
import ChartsOverview from "../../pages/charts";
import ApexCharts from "../../pages/charts/apex";
import Echarts from "../../pages/charts/echarts";
import GridSeparate from "../../pages/grid";
import Visits from "../../pages/dashboard/Visits";
import Modal from '../../pages/ui-elements/modal'
import Management from "../../pages/management";
import Products from "../../pages/products";
import Product from "../../pages/product";
import Profile from "../../pages/profile";
import SPackage from "../../pages/package";
import Email from '../../pages/email'
import ErrorPage from "../../pages/error";

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dashboardTheme: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
    dashboardTheme: DashboardThemes.DARK,
  };

  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    if (window.innerWidth < 768) {
      this.props.dispatch(toggleSidebar());
    } else if (window.innerWidth >= 768) {
      this.props.dispatch(openSidebar());
    }
  }

  handleCloseSidebar(e) {
    if (e.target.closest("#sidebar-drawer") == null && this.props.sidebarOpened && window.innerWidth <= 768) {
      this.props.dispatch(toggleSidebar());
    }
  }

  handleSwipe(e) {
    if ("ontouchstart" in window) {
      if (e.direction === 4) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          !this.props.sidebarOpened ? s.sidebarClose : "",
          "flatlogic-one",
          `dashboard-${this.props.sidebarType === SidebarTypes.TRANSPARENT ? "light" : this.props.sidebarColor}`,
          `dashboard-${
            this.props.dashboardTheme !== "light" &&
            this.props.dashboardTheme !== "dark"
              ? this.props.dashboardTheme
              : "" 
          }`,

        ].join(" ")}
        onClick={e => this.handleCloseSidebar(e)}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header />
          <Helper />

          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              <BreadcrumbHistory url={this.props.location.pathname} />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route
                      path="/app/dashboard"
                      exact
                      render={() => <Redirect to="/app/dashboard/analytics" />}
                    />
                    <Route
                      path="/app/dashboard/analytics"
                      exact
                      component={Dashboard}
                    />
                    <Route
                      path="/app/dashboard/visits"
                      exact
                      component={Visits}
                    />
                    <Route
                      path={"/app/core/typography"}
                      component={Typography}
                    />
                    <Route path={"/app/core/colors"} component={Colors} />
                    <Route path={"/app/core/grid"} component={Grid} />
                    <Route
                      path={"/app/tables/basic"}
                      component={StaticTables}
                    />
                    <Route
                      path={"/app/tables/dynamic"}
                      component={DynamicTables}
                    />
                    <Route path={"/app/maps/google"} component={Maps} />
                    <Route path={"/app/maps/vector"} component={VectorMap} />
                    <Route
                      path={"/app/ui/notifications"}
                      component={Notifications}
                    />
                    <Route path={"/app/ui/icons"} component={Icons} />
                    <Route path={"/app/ui/alerts"} component={Alerts} />
                    <Route path={"/app/ui/badge"} component={Badge} />
                    <Route path={"/app/ui/card"} component={Card} />
                    <Route path={"/app/ui/buttons"} component={Buttons} />
                    <Route path={"/app/ui/carousel"} component={Carousel} />
                    <Route path={"/app/ui/jumbotron"} component={Jumbotron} />
                    <Route
                      path={"/app/ui/list-groups"}
                      component={ListGroups}
                    />
                    <Route path={"/app/ui/modal"} component={Modal} />
                    <Route path={"/app/ui/nav"} component={Nav} />
                    <Route path={"/app/ui/navbar"} component={Navbar} />
                    <Route path={"/app/ui/popovers"} component={Popovers} />
                    <Route path={"/app/ui/progress"} component={Progress} />
                    <Route path={"/app/ui/tabs"} component={Tabs} />
                    <Route path={"/app/ui/modal"} component={Modal} />
                    <Route path={"/app/extra/calendar"} component={Calendar} />
                    <Route path={"/app/extra/invoice"} component={Invoice} />
                    <Route path={"/app/extra/gallery"} component={Gallery} />
                    <Route
                      path={"/app/extra/search"}
                      component={SearchResult}
                    />
                    <Route path={"/app/extra/timeline"} component={Timeline} />
                    <Route path={"/app/extra/error"} component={ErrorPage} />
                    <Route
                      path={"/app/forms/validation"}
                      component={FormValidation}
                    />
                    <Route
                      path={"/app/forms/elements"}
                      component={FormElements}
                    />
                    <Route path={"/app/forms/wizard"} component={FormWizard} />
                    <Route
                      path={"/app/charts/overview"}
                      component={ChartsOverview} 
                    />
                    <Route path={"/app/charts/apex"} component={ApexCharts} />
                    <Route path={"/app/charts/echarts"} component={Echarts} />
                    <Route path={"/app/grid"} component={GridSeparate} />
                    <Route path={"/app/ecommerce/management"} component={Management} />
                    <Route path={"/app/ecommerce/products"} component={Products} />
                    <Route path={"/app/ecommerce/product/:id"} component={Product} exact/>
                    <Route path={"/app/ecommerce/product"} component={Product} />
                    <Route path={"/app/profile"} component={Profile} />
                    <Route path={"/app/package"} component={SPackage} />
                    <Route path={"/app/email"} component={Email} />
                    <Route render={() => <Redirect to={{pathname: '/error'}}/>}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    dashboardTheme: store.layout.dashboardTheme,
    sidebarType: store.layout.sidebarType,
    sidebarColor: store.layout.sidebarColor,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
