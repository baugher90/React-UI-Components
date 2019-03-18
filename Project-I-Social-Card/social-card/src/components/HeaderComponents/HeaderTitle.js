import React from 'react';
import moment from 'moment';
import './Header.css';

function HeaderTitle() {
    return(
        <div className="header-title">
            <h1>Lambda School</h1>
            <a href="https://lambdaschool.com/">LambdaSchool - {moment().format("MMM Do")}</a>
        </div>
    )
}

export default HeaderTitle;