import React, { useState } from 'react';
import './Footer.css';
import comment from '../../images/bubble2.png';
import heart from '../../images/heart.png';
import share from '../../images/mail2.png';
import repost from '../../images/spinner9.png';


function FooterBar() {
    const [num1, setNum1] = useState(7);
    const [num2, setNum2] = useState(12);
    const [num3, setNum3] = useState(8);
    const [num4, setNum4] = useState(5);
    return(
        <div className="footer">
            <img onClick={() => setNum1(num1 + 1)} src={comment} alt="comment"/><span class="number">{num1}</span>
            <img onClick={() => setNum2(num2 + 1)} src={heart} alt="heart"/><span class="number">{num2}</span>
            <img onClick={() => setNum3(num3 + 1)} src={share} alt="share"/><span class="number">{num3}</span>
            <img onClick={() => setNum4(num4 + 1)} src={repost} alt="repost"/><span class="number">{num4}</span>
        </div>
    );
};



export default FooterBar;