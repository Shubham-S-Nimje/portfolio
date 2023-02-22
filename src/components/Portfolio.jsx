import React from 'react';
import Section from './common/Section';

import {FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const Portfolio = () => {
    const projects = [
        {
            id:1,
            image:p1,
            title:"Best App",
            github: "https://shubham.nimje.co.in/",
            demo:"https://shubham.nimje.co.in/"
        },
        {
            id:2,
            image:p2,
            title:"Best App",
            github: "https://shubham.nimje.co.in/",
            demo:"https://shubham.nimje.co.in/"
        },
        {
            id:3,
            image:p3,
            title:"Best App",
            github: "https://shubham.nimje.co.in/",
            demo:"https://shubham.nimje.co.in/"
        },
        {
            id:4,
            image:p4,
            title:"Best App",
            github: "https://shubham.nimje.co.in/",
            demo:"https://shubham.nimje.co.in/"
        },
        {
            id:5,
            image:p5,
            title:"Best App",
            github: "https://shubham.nimje.co.in/",
            demo:"https://shubham.nimje.co.in/"
        },
        {
            id:6,
            image:p6,
            title:"Best App",
            github: "https://shubham.nimje.co.in/",
            demo:"https://shubham.nimje.co.in/",
        }
    ];

  return (
    <Section
    title="Portfolio 👤"
    subtitle="these are the projects that i have worked on, some of thdem i have woked before i gained some experiance. so go gentle on them">      
    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
    {projects.map(({id, image, title, github, demo}) => (
    <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-2/3" />
        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
            <h2>{title}</h2>
            <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target="_blank"><FaGithub /></a>
            <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target="_blank"><FaExternalLinkSquareAlt /></a>
        </div>
    </div>
  ))}
    </div>
    </Section>
  )
}

export default Portfolio
