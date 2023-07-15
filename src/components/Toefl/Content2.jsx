import React from 'react';
import Toeflgrade from '../../assets/Toeflgrade.PNG';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';

const Content2 = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return(
    <div className='h-full bg-white mb-10 z-10 px-6'>
        <div className='lg:grid grid-cols-2 sm:gap-y-20'>

            <div data-aos="fade-down">
            <h3 className='font-bold text-xl text-black mb-6'>Award Your Students a Certificate</h3>
            <p className='text-base text-black'>You can recognize your students' achievement in English-language proficiency with three levels of certificates awarded by the TOEFL ITP program. Each TOEFL ITP certificate corresponds to a CEFR level.</p>
            </div>
            <img src={Toeflgrade} className='w-[300px] h-full mx-auto border-2 border-slate-400 shadow-md shadow-slate-400' alt='/' data-aos="fade"/>

        </div>
    </div>
    )
}
export default Content2;