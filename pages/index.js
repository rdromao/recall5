import React from "react";
import Navbar from "../components/navbar/navbar";
import Content from "../components/content/content";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { Provider } from "react-redux";
import Head from 'next/head';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const App = () => (
    <Provider store={store}>
        <Head>
            <title>Recall5</title>
            <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <Navbar />
        <Content />
    </Provider>
)

export default App