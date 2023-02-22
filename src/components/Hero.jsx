import React from 'react';
import avatar from '../assets/avatar.png'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaGithub, FaArrowDown} from 'react-icons/fa';

const Hero = () => {
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

    window.addEventListener('scroll', function () {
        const downArrow = this.document.querySelector(".down-arrow");

        if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    })
  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-4xl text-rose-600 uppercase font-bold'>Shubham Nimje</h2>
        <h3 className='py-3 text-2xl'>I'm Frontend Developer</h3>
        <p className='max-w-xl font-light text-gray-500'>hello
            <span className='animate-pulse tect-4xl'>👋</span>, Welcome to my
            I'm a skilled front-end developer specializing in ReactJS, HTML, CSS,
            and JavaScript.
        </p>
        {/*Social icons*/}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
        {Social.map(({id, link, icon}) => (
            <a href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600">
            {icon}
            </a>
        ))}
        </div>
        {/*avatar and resume */}
        <div className=''>
            <img
            src={avatar}
            alt="Shubham Nimje"
            className='w-60 h-74 md:w-60 md:h-74 object-coverobject-top bg-gradient-to-b
            from-rose-600 rounded-xl pt-5'/>
            <a href="/yash-resume.pdf"
            download={true}
            className="flex items-center justify-center mt-10 bg-gradient-to-r
            from-rose-600 to-teal-500 text-white py-2 rounded-lg">
            Resume
            </a>
        </div>
        {/*arrow down animation*/}
        <div className='mt-10 down-arrow'>
            <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
        </div>
    </section>
  )
}

export default Hero;
