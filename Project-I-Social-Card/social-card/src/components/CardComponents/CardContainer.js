import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import FooterBar from '../FooterComponents/Footer';

function CardContainer() {
    return(
        <div className="card-container">
            <HeaderContainer />
            <CardBanner />
            <CardContent />
            <FooterBar />
        </div>
    );
};

export default CardContainer;