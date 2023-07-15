import React from 'react';


 //animation
 import Aos from "aos";
 import 'aos/dist/aos.css';

const Footer = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      }); 

    return(
    <div className='w-full h-full bg-dark'>   
        <div className='max-w-[1240px] mx-auto py-16 px-4 '>

            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-green font-bold text-3xl pb-10 text-center' data-aos="fade-down">
                    American English Course
                </h1>
            </div>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 '>

            <div> 
                <p className=' text-white text-center font-bold text-xl' data-aos="fade-down">Contact <span className='text-green font-bold'> us </span> </p>
                {/* <p className=' text-white text-center' data-aos="fade-down"> </p> */}
                <div className='max-w-[1240px] my-6 lg:ml-28' data-aos="fade-down">

                    {/* location */}
                    <div className='flex max-w-[1240px] lg:ml-[-28]'>  
                    <p className='text-white lg:text-[15px] sm:text-[5px]'>Jl Pol Sumarto No. 279 Purwokerto, Jawa Tengah, Indonesia. 53126</p>
                    </div>

                    {/* Telp */}
                    <div className='max-w-[1240px] flex mt-5'>    
                    <svg viewBox="0 0 48 48" id="b" width={30} height={30} xmlns="http://www.w3.org/2000/svg" fill="#00df9a"><path class="c" d="m19.308,12.467c-.4234-1.4115-.7215-2.8773-.8813-4.3843-.1571-1.4812-1.449-2.5826-2.9385-2.5826h-6.9092c-1.7767,0-3.1454,1.5345-2.989,3.3043,1.5754,17.8285,15.7771,32.0302,33.6056,33.6056,1.7698.1564,3.3043-1.2073,3.3043-2.9839v-6.1595c0-2.2488-1.1015-3.5362-2.5826-3.6932-1.507-.1598-2.9728-.4579-4.3843-.8813-1.7266-.5179-3.5957-.0304-4.8704,1.2442l-2.9566,2.9566c-5.326-2.8825-9.7164-7.2729-12.5989-12.5989l2.9566-2.9567c1.2746-1.2746,1.7621-3.1438,1.2442-4.8703Z"></path></svg>
                    <p className='text-white ml-10 mt-1'>0813-2870-7372 (Suryana)</p>
                    </div>

                    {/* Email */}
                    <div className='max-w-[1240px] flex mt-5'>
                    <svg viewBox="0 0 24 24" height={30} width={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#00df9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#00df9a" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                    <p className='text-white ml-10 mt-1'>suryanawiharja@gmail.com</p>
                    </div>
                    
                </div>
            </div>      
            
            <div className='mx-auto justify-center md:w-[75%]'>
                <p className='text-white text-center font-bold text-xl' data-aos="fade-down">Social Network <span className='text-green font-bold'> us </span></p>
                <div className='flex my-6 gap-4 justify-center'>
                {/* FB */}
               <a href='https://www.facebook.com/suryana.wiharja.3' target="_blank" className='text-[#1877F2] bg-transparent text-center rounded-full hover:bg-[#1877F2] hover:text-[#fff] transition ease-in-out duration-300' data-aos="fade-down" ><svg role="img" viewBox="0 0 24 24" width={30} height={30} className='fill-current' xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>

               {/* IG */}
               <a href='https://www.instagram.com/suryanawiharja/' target="_blank" className='text-[#E4405F] bg-transparent rounded-full hover:bg-[#E4405F] hover:text-[#fff] transition ease-in-out duration-300' data-aos="fade-down" ><svg role="img" viewBox="0 0 24 24" width={30} height={30} className='fill-current' xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
                </div>
            </div>
        </div>
                <p className='font-semibold text-center mt-10 text-white' data-aos="fade-down">Copyright © 2023 All right reserved | American English Course </p> 
        </div>
    </div>     
    )
}
export default Footer;