// import React, { useState } from 'react';

// import Card from '../UI/Card/Card';
// import { useStore } from '../../hooks-store/store';
// import './ProductItem.css';

// const ProductItem = React.memo(props => {
//     const [openDetail, setOpenDetail] = useState(false);
//   console.log('RENDERING');
//   const dispatch =  useStore(false)[1];

//   const toggleFavHandler = () => {
//     dispatch('TOGGLE_FAV', props.name);
//   };

//   return (
//     <Card style={{ marginBottom: '1rem' }}>
//       <div className="product-item">
//         <h2 className={props.isFav ? 'is-fav' : ''}>{props.aliases}</h2>
//         <p>{props.playedBy}</p>
//         <button
//           className={!props.isFav ? 'button-outline' : ''}
//           onClick={toggleFavHandler}
//         >
//           {props.isFav ? 'Un-Favorite' : 'Favorite'}
//         </button>
//       </div>
//     </Card>
//   );
// });

// export default ProductItem;
