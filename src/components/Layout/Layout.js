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
import Helper from '../Helper'

// pages
import Typography from "../../pages/core/typography";
import Colors from '../../pages/core/colors'
import Grid from '../../pages/core/grid'
import Maps from "../../pages/maps";
import Notifications from "../../pages/notifications/Notifications";
import Icons from "../../pages/icons";
import StaticTables from "../../pages/tables/static";
import DynamicTables from "../../pages/tables/dynamic";
import Charts from "../../pages/charts";
import Alerts from '../../pages/ui-elements/alerts'
import Badge from '../../pages/ui-elements/badge'
import Card from '../../pages/ui-elements/card'
import Buttons from '../../pages/ui-elements/buttons'
import VektorMap from '../../pages/maps/vector'

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
  }

  componentDidMount() {

    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    if (window.innerWidth <= 768 && this.props.sidebarStatic) {
      this.props.dispatch(toggleSidebar());
    } else if (window.innerWidth >= 768) {
      this.props.dispatch(openSidebar());
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
          this.props.sidebarStatic ? `${s.sidebarStatic}` : "",
          !this.props.sidebarOpened ? s.sidebarClose : "",
          "flatlogic-one",
          `dashboard-${
            this.props.sidebarType === SidebarTypes.TRANSPARENT
              ? "light"
              : this.props.dashboardTheme
          }`,
        ].join(" ")}
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
                    <Route path={"/app/core/typography"} component={Typography} />
                    <Route path={"/app/core/colors"} component={Colors} />
                    <Route path={"/app/core/grid"} component={Grid} />
                    <Route path={"/app/tables/basic"} component={StaticTables} />
                    <Route path={"/app/tables/dynamic"} component={DynamicTables} />
                    <Route path={"/app/maps/google"} component={Maps} />
                    <Route path={"/app/maps/vektor"} component={VektorMap} />
                    <Route
                      path={"/app/ui/notifications"}
                      component={Notifications}
                    />
                    <Route path={"/app/ui/icons"} component={Icons} />
                    <Route path={"/app/ui/alerts"} component={Alerts} />
                    <Route path={"/app/ui/badge"} component={Badge} />
                    <Route path={"/app/ui/card"} component={Card} />
                    <Route path={"/app/ui/buttons"} component={Buttons} />
                    <Route path={"/app/charts/overview"} component={Charts} />
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
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
