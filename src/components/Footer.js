import React from 'react'
import contact from '../assests/icons/contact.svg'
import email from '../assests/icons/email.svg'
import location from '../assests/icons/location.svg'
export const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className=" flex-shrink-0 md:mx-0  text-center md:text-left">
      <div className='flex justify-center'>
          <img  className="h-60 text-white  " src='https://e-cellmnnit.netlify.app/static/media/logo1.aa59d10dce000c1b6a45.png'/>
   
          </div>
    
        <p className=" flex justify-center text-2xl text-gray-100">
          E-Cell MNNIT
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/2 md:w-1/2  w-full px-4">
          <h2 className="title-font text-center  text-black tracking-widest text-2xl lg:text-4xl rounded-md font-semibold bg-gradient-to-r from-green-600 to-[#92f242] p-6 mb-3">
          GET IN TOUCH
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="flex justify-between mb-2  text-gray-400 text-2xl hover:text-white"> <img className='h-[8vh] bg-gray-300 rounded-xl p-1' src={location}></img>E-Cell, MNNIT Allahabad, India</a>
            </li>
            <li>
              <a className="flex justify-between mb-2 text-2xl text-gray-400 hover:text-white">   <img className='h-[8vh] bg-gray-300 rounded-xl p-1' src={contact}></img> +91 7726924556</a>
            </li>
            <li>
              <a className="flex justify-between break-all text-2xl text-gray-400 hover:text-white"><img className='h-[8vh] bg-gray-300 rounded-xl p-1' src={email}></img> support@ecellmnnit.com</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white">Fourth Link</a>
            </li>
          </nav>
        </div>
       
        <div className="lg:w-1/2 md:w-1/2 w-full px-4">
          
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7202.697571927987!2d81.85372687770996!3d25.493411800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1689057849063!5m2!1sen!2sin"
  title="map"
  width="100%"
  height="100%"
  frameBorder={0}
  marginHeight={0}
  marginWidth={0}
  scrolling="no"
/>
        </div>
        
      </div>
    </div>
    <div className="bg-gray-800 bg-opacity-75">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-400 hover:text-gray-100 text-lg text-center sm:text-left">
          © 2024 E-Cell MNNIT 
        
        </p>
        <span className="inline-flex  sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-400 hover:text-gray-100">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-gray-100">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-gray-100">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-gray-100">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  
  )
}
