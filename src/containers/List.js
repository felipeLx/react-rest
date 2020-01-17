// import store from "../store/saga/api";
// import { addArticle } from "../store/actions/api";
// window.store = store;
// window.addArticle = addArticle;
import React from 'react';
import { connect } from 'react-redux';

const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

const mapStateToProps = state => {
    return { articles: state.articles };
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;