import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
/* eslint-disable */
import s from './Rating.module.scss';
/* eslint-enable */
const Rating = ({ rating, size }) => (
  <div className={cx(s.rating, 'rating', { [s[`rating-${size}`]]: size })}>
      <i className="fa fa-star" aria-hidden="true"></i>
    <span className={"pl-2"}>({rating})</span>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
  ]).isRequired,
  size: PropTypes.string,
};

Rating.defaultProps = {
  size: '',
};

export default Rating;
