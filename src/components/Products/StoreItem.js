// import React from 'react';

// import Card from '../UI/Card/Card';
// import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// const storeItem = ( props ) => {
//     console.log(props);
//     let transformedData = Object.keys( props.ingredients )
//         .map( igKey => {
//             return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
//                 return <BurgerIngredient key={igKey + i} type={igKey} />;
//             } );
//         } )
//         .reduce((arr, el) => {
//             return arr.concat(el)
//         }, []);
//     if (transformedData.length === 0) {
//         transformedData = <p>Please start adding data!</p>;
//     }
//     return (
//         <Card>
//             {transformedIngredients}
//         </Card>
//     );
// };

// export default storeItem;