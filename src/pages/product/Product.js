import React from 'react';
import PropTypes from 'prop-types';

import Section from './components/Section/Section';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Slider from './components/Slider/Slider';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getProductsRequest } from '../../actions/products';

class Product extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        products: []
    };

    componentDidMount() {
        document.querySelector('body').scrollTo(0,0)
        this.props.dispatch(getProductsRequest());
    }

    findProduct(id) {
        const {products} = this.props;
        return products.find(p => p.id === id);
    }

    getId() {
        const {match} = this.props;
        return parseInt(match.params.id);
    }

    render () {
        let product;
        if (this.getId()) {
            product = this.findProduct(this.getId());
        } else {
            product = this.findProduct(1);
        }
        const products = this.props.products;

        return (
            <div className="product-details">
                {
                    product && (
                        <div>
                            <Banner data={product}/>
                            <Section title="Product Description" h>
                                <Description data={product}/>
                            </Section>
                            <Section title="You may also like">
                                <Slider slides={products}/>
                            </Section>
                        </div>
                    )
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products: state.products.data,
    };
}

export default withRouter(connect(mapStateToProps)(Product));
