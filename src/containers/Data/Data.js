// import React, { useEffect, useState, Fragment } from "react";
// // import { connect } from "react-redux";
// import axios from "axios";

// // import * as actions from '../../store/actions/index';

// const url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

// const Data = () => {
//   const [data, setData] = useState({quotes: []});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(false);
//       setIsLoading(true);
//       try {
//         const result = await axios(url);
//         setData(result.data);
//       } catch (error) {
//         setIsError(true);
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);

//   // async componentDidMount() {
//   //     const url = "https://anapioficeandfire.com/api/characters/"; 
//   //     const response = await fetch(url);
//   //     const data = await response.json();
//   //     console.log(data);
      
//   //     this.setState({data: data , loading: false });
//   //     console.log(this.state);
//   // }

  
//   // render() {

//     const listItems = () => {
//       data.quotes.map((d) => <p key={d.id}>{d.aliases[0]}</p>);}

//     return (
//       <div>
//         {/* <div>{this.state.person.aliases[0]}</div> */}
//         <div>{listItems}</div>
//         {/* <div>{this.state.person.name.last}</div>
//         <img alt="" src={this.state.person.picture.large} /> */}
//       </div>
//     );
// }

// export default Data;