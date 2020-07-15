import React from 'react';
import Header from './Header';
import Body from './homebody';
import { Helmet } from "react-helmet";

function Homepage() {
    return (
        <div>
            <Helmet>

                <title>Index Page</title>

            </Helmet>
            <Header />
            <Body />

        </div>
    );
}

export default Homepage;
