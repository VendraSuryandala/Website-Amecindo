import React from 'react'
import Typed from 'react-typed';
import Lottie from 'lottie-react';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Earth from '../../assets/earth.json';

const Hero = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      }); 

    return(
    <div className='w-full h-screen'>
        {/* <Lottie animationData={Earth} className='w-full h-full mix-blend-overlay blur-xl py-10' /> */}
        
        <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
          <Lottie animationData={Earth} className='w-full h-full mix-blend-overlay blur-xl' />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        
          <div className="text-center" data-aos='fade-down'>
            <h1 className="text-4xl font-bold tracking-tight py-4 text-gray-900 sm:text-6xl">
            About The TOEFL ITP
            </h1>
            <Typed className='text-2xl leading-8 text-dark' strings={['American English Course', 'Assessment Series', 'The Test Center']} typeSpeed={80} backSpeed={80} loop/>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Bring the global standard in English-language assessment to your classroom with the TOEFL ITP® Assessment Series. Based on the long-standing heritage and expertise of the TOEFL® test, the TOEFL ITP tests allow you to measure and evaluate your students' English-language skills with confidence.
            </p>
            <div className='py-10'>
              <a
                href="https://forms.gle/rrPFHvZSeZ7HTFQw5" target='_blank'
                className="rounded-md bg-transparent border-2 border-dark px-3.5 py-2.5 text-sm font-semibold text-dark shadow-sm hover:bg-dark hover:text-white transition duration-300 ease-in-out"
              >
                TOEFL Schedule
              </a>
            </div>
        
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

        {/* <div className='absolute w-[1040px] h-[540px] start-24 top-0 left-0 bg-transparent'>
         <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center p-4' data-aos="fade-down">
            <h1 className='relative md:text-6xl sm:text-7xl text-5xl font-bold md:py-6 mt-20 text-dark'>About The TOEFL ITP</h1>
            <Typed className='text-dark font-bold p-2 md:text-2xl' strings={['American English Course', 'Assessment Series', 'The Test Center']} typeSpeed={80} backSpeed={80} loop/>
            <a href='https://www.iief.or.id/toefl-itp-test-schedule' className='bg-transparent border-2 font-semibold border-dark pt-4 w-[200px] rounded-md my-6 mx-auto py-3 text-dark hover:bg-dark hover:text-white transition-ease-in-out duration-150'>TOEFL Schedule</a> 
         </div>
      </div> */}

    </div>
    )
}
export default Hero;