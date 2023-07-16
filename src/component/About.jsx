import React from 'react';
import { Link } from 'react-router-dom';

// Importing images
import work from '../images/Work.jpg';
import watsapp from '../images/wts.png';
import linkdin from '../images/in.png';
import fb from '../images/fb.png';
import email from '../images/email_ic.png';
import insta from '../images/insta.png';

// Importing CSS styles
import '../styles/about.css';

const About = () => {
  return (
    <>
      {/* Main container */}
      <div className='container'>
        <div className='row row_box'>
          {/* Left column with text */}
          <div className='col-md-6 about_text'>
            <h2 className='Resume_builder'>Resume Builder</h2>
            <p className='resume_text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. laborum at officiis, iure, adipisci provident nemo,
              fugit obcaecati iste. Architecto, dolorum aut! Ipsum consectetur nisi quia sunt nam accusantium ducimus ex
              quibusdam quam voluptatum molestiae saepe facilis, eligendi, possimus dignissimos, odio mollitia id aut?
              Accusamus nihil non quae veritatis iure nostrum ea inventore pariatur quasi minus nemo necessitatibus quidem
              facilis est fugiat perspiciatis repellendus quaerat dignissimos ipsam.
            </p>
          </div>

          {/* Right column with image */}
          <div className='col-md-6 about_img'>
            <img src={work} alt="" width="100%" />
          </div>
        </div>
      </div>

      {/* Container for icons */}
      <div className='container icon_container'>
        <div className='row icons'>
          <h4 className='icon_text'>Share With Your Friends</h4>
          <ul>
            {/* WhatsApp icon */}
            <li>
              <Link to={'https://web.whatsapp.com/'} target='_blank'>
                <img src={watsapp} alt="" width="45px" />
              </Link>
            </li>

            {/* Facebook icon */}
            <li>
              <Link to={'https://www.facebook.com/Google/'} target='_blank'>
                <img src={fb} alt="" width="32px" />
              </Link>
            </li>

            {/* LinkedIn icon */}
            <li>
              <Link to={'https://in.linkedin.com/'} target='_blank'>
                <img src={linkdin} alt="" width="26px" />
              </Link>
            </li>

            {/* Email icon */}
            <li>
              <Link to={'https://mail.google.com/'} target='_blank'>
                <img src={email} alt="" width="29px" />
              </Link>
            </li>

            {/* Instagram icon */}
            <li>
              <Link to={'https://instagram.com/'} target='_blank'>
                <img src={insta} alt="" width="65px" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About;
