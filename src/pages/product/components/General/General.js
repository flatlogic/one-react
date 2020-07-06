import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import Rating from "../Rating/Rating";

import s from "./General.module.scss";
import { Label } from "reactstrap";

const General = ({ rating, title, subtitle, price }) => (
  <div className={s.general}>
    <div className={s.dataWrapper}>
      <span className={cx(s.title, "title")}>{title}</span>
      <span className={"d-flex align-items-center mt-1"}>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star pl-1" aria-hidden="true"></i>
        <i className="fa fa-star pl-1" aria-hidden="true"></i>
        <i className="fa fa-star pl-1" aria-hidden="true"></i>
        <i className="fa fa-star pl-1 text-black-50" aria-hidden="true"></i>
        <small className={"ml-2"}>(4.0)</small>
        <button className="btn-link ml-1" style={{ fontSize: 14 }}>
          53 Reviews
        </button>
      </span>
      <small className={"mt-2"}>{subtitle}</small>
      <span className="btn-link" style={{ fontSize: 14 }}>
        Learn more
      </span>
    </div>
      <span className={cx(s.title, "title")}>Select color</span>
      <div className={"d-flex mt-2"}>
          <div className={`${s.colorBox} mr-3`} style={{backgroundColor: '#080A08'}}/>
          <div className={`${s.colorBox} mr-3`} style={{backgroundColor: '#757575'}}/>
          <div className={`${s.colorBox} mr-3`} style={{backgroundColor: '#5D674F'}}/>
          <div className={s.colorBox} style={{backgroundColor: '#D1CACA'}}/>
      </div>
      <span className={cx(s.title, "title", "fw-semi-bold", 'mt-4')}>${price}</span>
  </div>
);

General.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
};

export default General;
