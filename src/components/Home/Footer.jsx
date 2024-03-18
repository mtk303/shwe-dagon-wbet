import React from 'react';
// import home from '../../assets/img/footerIcons/home.png';
// import promo from '../../assets/img/footerIcons/promo.png';
// import livechat from '../../assets/img/footerIcons/livechat.png';
// import wallet from '../../assets/img/footerIcons/wallet.png';
// import history from '../../assets/img/history.png';
// import summary from '../../assets/img/summary.png';

import '../../assets/css/footer.css'

import { IoHome } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { LuFileClock } from "react-icons/lu";
import { IoNewspaper } from "react-icons/io5";

import profile from '../../assets/img/footerIcons/account.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const footerIcons = [
    { img: IoHome, title: 'Home', link: '/' },
    { img: IoGiftSharp, title: 'Promotion', link: '/promotion' },
    { img: LuFileClock, title: 'History', link: '/history' },
    { img: IoNewspaper, title: 'GameLog', link: '/game-log' },
  ];
  return (
    <footer className=' rounded-top-5 px-3 px-sm-5 py-3 fixed-bottom   z-3 d-flex  align-items-center justify-content-between mt-5'>
      {footerIcons.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.link}
            className='text-light d-flex flex-column text-center align-items-center text-decoration-none'
          >
            <item.img size={30} 
            style={{color:'#80bdff'}}/>
            <span className='footerTitle'>{item.title}</span>
          </NavLink>
        );
      })}
    </footer>
  );
};

export default Footer;
