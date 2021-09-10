import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { logoutUser } from "../../../actions/auth";

import s from "./ListGroup.module.scss";

import settingsIcon from "../../../images/settings.svg";
import logoutIcon from "../../../images/logout.svg";
import accountIcon from "../../../images/account.svg";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class MessagesDemo extends React.Component {
  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user") || {});
    return (
      <ListGroup className={[s.listGroupAccount, "thin-scroll"].join(" ")}>
          {user.user === undefined ?
              <div>
                  <p className={`${s.listGroupTitleAccount}`}>Admin</p>
                  <p className={`${s.listGroupSubtitleAccount}`}> Sara_smith@gmail.com </p>
              </div> :
              <div>
                  <p className={`${s.listGroupTitleAccount}`}>{user.user.name ? user.user.name : 'Admin'}</p>
                  <p className={`${s.listGroupSubtitleAccount}`}>{user.user.email ? user.user.email : 'Sara_smith@gmail.com'}</p>
              </div>
          }
        {/*<p className={`${s.listGroupTitleAccount}`}>{user.user.name ? user.user.name : 'Admin'}</p>*/}
        {/*<p className={`${s.listGroupSubtitleAccount}`}>{user.user.email ? user.user.email : 'Sara_smith@gmail.com'}</p>*/}
        <ListGroupItem className={`${s.listGroupItemAccount} mt-3`}>
            <img src={settingsIcon} alt="settings" className={"mr-2"} /> Settings
        </ListGroupItem>
        <ListGroupItem tag="a" href="/profile#/app/profile" action className={`${s.listGroupItemAccount} mt-2`}>
            <img src={accountIcon} alt="settings" className={"mr-2"} /> Account
        </ListGroupItem>
        <ListGroupItem className={`${s.listGroupItemAccount} mt-2 mb-3`} onClick={() => this.doLogout()}>
          <img src={logoutIcon} alt="logOut" className={"mr-2"} /> Log out
        </ListGroupItem>
      </ListGroup>
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

export default withRouter(connect(mapStateToProps)(MessagesDemo));
