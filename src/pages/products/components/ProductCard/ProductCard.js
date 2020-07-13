import React, {Component} from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

import Widget from "../../../../components/Widget";

import {Button} from "reactstrap";


import s from "./ProductCard.module.scss";

class ProductCard extends Component {
    state = {
        favourite: this.props.favourite,
    };

    changeFavourite() {
        this.setState((pvState) => ({favourite: !pvState.favourite}));
    }

    openProduct(id) {
        this.props.history.push("/app/ecommerce/product/" + id);
    }

    render() {
        const {
            img,
            title,
            price,
            discount,
            rating,
            id,
            createdAt,
            updatedAt,
            activeList
        } = this.props;
        const label = discount ? "Sale" : createdAt === updatedAt ? "New" : null;
        return (
            <Widget>
                <div className={cx(s.productCard, "product-card", {[s.productCardList]: activeList})}>
                    <div
                        onClick={() => {
                            this.openProduct(id);
                        }}
                        className={s.productCardPhoto}
                        style={{backgroundImage: `url(${img})`}}
                    >
                        {label && (
                            <div
                                className={cx(
                                    s.label,
                                    label === "Sale" ? "bg-danger" : "bg-success", "rounded-left"
                                )}
                            >
                                {label}
                            </div>
                        )}
                    </div>
                    <div className={s.productCardDataWrapper}>
                        <div className={cx(s.productsCardTitle, "title mb-1")}>{title}</div>
                    </div>
                    <div className={`${s.productsCardPrice} mb-2`}>
                        {rating && (
                            <div className={"d-flex align-items-center"}>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <small className={"mb-0 pl-1"}>{rating}.0</small>
                                <button className="btn-link ml-3" style={{fontSize: 14}}>
                                    53 Reviews
                                </button>
                            </div>
                        )}
                    </div>
                    <div className={s.sale}>
                        <label className={"mb-1"}>STARTING MSRP</label>
                        <h3 className={"mb-4"}>${price}</h3>
                    </div>
                    <Button color={"success"} className={s.addBtn}>
                        <i className={"la la-shopping-cart"} style={{fontSize: 21, marginTop: -5, marginRight: 5}}/>
                        Add to Cart
                    </Button>
                </div>
            </Widget>
        );
    }
}

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

ProductCard.getDefaultProps = {
    rating: null,
};

export default withRouter(ProductCard);
