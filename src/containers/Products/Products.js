import React from 'react';
import { connect } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = React.memo(props => {
 
  return (
    <ul className="products-list">
      {props.data.map(prod => (
        <ProductItem
          key={prod.name}
          name={prod.name}
          aliases={prod.aliases[0]}
          playedBy={prod.playedBy}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
});

const mapStateToProps = (state) => ({
  data: state.data,
  })

export default connect(mapStateToProps)(Products);