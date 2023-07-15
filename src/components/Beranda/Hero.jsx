import React from 'react';
import Typed from 'react-typed';
import Bgamec from '../../assets/bgamec2.mp4';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';


const Hero = () => {

   Aos.init({
      duration: 2500,
      offset: 0,
    });  

 return(
      <div id='beranda' className='relative w-full h-screen shadow-md shadow-dark'>
          <video className='w-full h-full object-cover' src={Bgamec} autoPlay loop muted />
      
      {/* Main text */}
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/60'>
         <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center p-4' data-aos="fade-down">
            <Typed className='text-[#fff] font-bold p-2 md:text-2xl' strings={['AMECINDO', 'AMECINDO', 'AMECINDO']} typeSpeed={180} backSpeed={180} loop/>
            <h1 className='md:text-6xl sm:text-7xl text-5xl font-bold md:py-6 text-[#00df9a]'>American English Course</h1>
            <p className='text-white text-xl md:text-2xl sm:text-4xl font-medium pt-2'>The Test Center</p>
            <a href='#about' className='bg-transparent border-2 font-semibold border-[#00df9a] pt-4 w-[200px] rounded-md my-6 mx-auto py-3 text-[#00df9a] hover:bg-[#00df9a] hover:text-black transition-ease-in-out duration-150'>About Us</a>
         </div>
      </div>
      </div>

 )
}
export default Hero;