import React from 'react'
import Section from './common/Section';

import commerce from "../assets/commerce.png";
import research from "../assets/research.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
const Services = () => {
    const services = [
        {
            id: 1,
            image: commerce,
            title: "Ecommerce Website",
        },
        {
            id: 2,
            image: web,
            title: "web dev Website",
        },
        {
            id: 3,
            image: mobile,
            title: "mobile Website",
        },
        {
            id: 4,
            image: research,
            title: "research Website",
        },
    ];
  return (
    <Section
    title='services 🛠️'
    subtitle='Im a skilled front-end developer
    specializing in ReactJS, HTML, CSS, and JavaScript. Discover his portfolio
    and see the projects he has built to showcase his expertise and creativity'>
    <div className='grid gap-10 lg:grid-cols-2'>
        {services.map(({id, image, title}) => {
            return (
            <div 
            key={id}
            className='flex flex-col items-center justify-center p-5 shadow-lg
            dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
            
            <img
            src={image}
            alt={title}
            className='w-36 h-36 md:w-44 md:h-44 object-contain' />

            <h3 className='mt-5 text-base'>{title}</h3>
            </div>
        )})}
    </div>
    
    </Section>
  )
}
export default Services;
