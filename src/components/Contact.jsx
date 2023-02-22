import React from 'react'
import Section from './common/Section'
import contact from '../assets/mobile.png'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaGithub, FaArrowDown} from 'react-icons/fa';

const Contact = () => {
  const Social = [
    {
        id:1,
        link:"https://www.linkedin.com/in/shubham-s-nimje/",
        icon:<FaLinkedin />
    },
    {
        id:2,
        link:"https://twitter.com/Shubham_S_Nimje",
        icon:<FaTwitter />
    },
    {
        id:3,
        link:"https://www.facebook.com/shubham.nimje.90/",
        icon:<FaFacebook />
    },
    {
        id:4,
        link:"https://www.instagram.com/shubham_s_nimje/",
        icon:<FaInstagram />
    },
    {
        id:5,
        link:"https://github.com/Shubham-S-Nimje",
        icon:<FaGithub />
    }
];
  return (
    <Section title='Contact 📞'
    subtitle="These are the ways you can get in touch with me.
    Hope to hear from you soon :)">
    <div className='flex flex-col items-center justify-center gap-8 text-center'>
      <div>
        <img
        className='w-32 h-32'
        src={contact} alt="" /></div>
      <div>
        <p className='max-w-xs md:max-w-lg font-extralight'>
          imopen to talk regarding freelancing or fill tome apportunity
          fell free to contact using your prefferd mediom</p>
      </div>
      <div className='flex w-full items-center justify-evenly text-3xl'>
        {Social.map(({id, link, icon}) => {
          return (
            <a
            className='duration-200 ease-in-out hover:text-rose-600' 
            href={link} target="_blank" rel="noopener moreferrer">{icon}</a>
          )})
        } 
      </div>
    </div>
    </Section>
  )
}

export default Contact;
