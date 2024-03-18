import React from 'react'
import useFetch from '../../hooks/useFetch'
import BASE_URL from '../../hooks/baseURL'

import { HiSpeakerphone } from "react-icons/hi";
import { FaEnvelopeOpen } from "react-icons/fa";

const Marquee = () => {
  const { data: bannerText } = useFetch(BASE_URL + '/bannerText');
  // console.log(bannerText.text);
  return (
    <div style={{position:'relative'}}>
      <HiSpeakerphone size={30} className='p-2 rounded' color='#ddd' style={{position:'absolute',left:'10px',top:'10px',background:'#00354d'}} />
      <marquee className='p-2 shadow-lg rounded  text-light py-1 px-2 m-2 border border-warning' >
        {bannerText && bannerText.text}
        {!bannerText && 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis tempora cupiditate quaerat pariatur consequuntur libero a, necessitatibus rerum nemo eius voluptatibus! Voluptatum ducimus dolore alias laboriosam, accusamus harum vitae.'}
      </marquee>
      <div>
      <FaEnvelopeOpen size={30} color='#ddd' className='p-2 rounded' style={{position:'absolute',right:'10px',top:'10px',background:'#00354d'}}/>
      </div>
    </div>
  )
}

export default Marquee
