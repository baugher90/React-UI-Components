import React from 'react';
import './Footer.css';
import comment from '../../images/bubble2.png';
import heart from '../../images/heart.png';
import share from '../../images/mail2.png';
import repost from '../../images/spinner9.png';

function FooterBar() {
    return(
        <span className="footer">
            <img src={comment} alt="comment"/>
            <img class="counter" src={heart} alt="heart"/><span class="click-text"><a id="clicks"></span>
            <img class="counter" src={share} alt="share"/><span class="click-text"><a id="clicks"></span>
            <img class="counter" src={repost} alt="repost"/><span class="click-text"><a id="clicks"></span>
        </div>
    );
};

export default FooterBar;