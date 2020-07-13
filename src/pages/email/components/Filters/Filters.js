import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Badge } from "reactstrap";
import Widget from "../../../../components/Widget";

import s from "./Filters.module.scss";

class Filters extends Component {
  state = { activeButtonId: 0 };

  handleButtonClick(id, filterCond) {
    const { filter, openMessage } = this.props;
    this.setState({ activeButtonId: id });

    openMessage(null);
    filter(filterCond);
  }

  render() {
    const mainButtons = [
      { id: 0, title: "Inbox", notifications: 2, filter: null, lable: "primary" },
      { id: 1, title: "Starred", filter: "starred" },
      { id: 2, title: "Sent Mail", filter: "sent" },
      {
        id: 3,
        title: "Draft",
        notifications: 3,
        lable: "primary",
        filter: "draft",
      },
      { id: 4, title: "Trash", filter: "trash" },
    ];
    const quickViewButton = [
      { id: 0, title: "Work", colour: "danger" },
      { id: 1, title: "Private", colour: "success" },
      { id: 2, title: "Saved", colour: "warning" },
    ];
    const { activeButtonId } = this.state;
    const { compose } = this.props;
    return (
      <Widget>
        <div className={s.filters}>
          <button
            className="btn btn-warning btn-block mb-4"
            onClick={() => compose(true)}
          >
            Compose
          </button>
          <div className={s.mainFilterButtons}>
            {mainButtons.map((button) => (
              <button
                className={cx("btn", s.button, {
                  [s.buttonActive]: button.id === activeButtonId,
                })}
                key={button.id}
                onClick={() => this.handleButtonClick(button.id, button.filter)}
              >
                {button.title}
                {button.notifications && (
                  <Badge color={button.lable || "default"} pill>
                    {button.notifications}
                  </Badge>
                )}
              </button>
            ))}
          </div>
          <div>
            <h6 style={{paddingLeft: 13}}>Quick View</h6>
            {quickViewButton.map((button) => (
              <button className={cx("btn", s.button)} key={button.id}>
                <i
                    className={cx("fa fa-circle", {
                      [`text-${button.colour}`]: true,
                    })}
                />
                {button.title}
              </button>
            ))}
          </div>
        </div>
      </Widget>
    );
  }
}

Filters.propTypes = {
  filter: PropTypes.func.isRequired,
  openMessage: PropTypes.func.isRequired,
  compose: PropTypes.func.isRequired,
};

export default Filters;
