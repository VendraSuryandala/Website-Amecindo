import React from 'react';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import aboutAnimation from '../../assets/aboutanimate.json';
import arrowDown from '../../assets/arrow.json';
import gradient from '../../assets/gradient.json';


const About = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return(
        <div id='about' className='w-full h-full bg-white py-16 px-4 p-6 lg:mt-14'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' data-aos="fade-down">
                <Lottie animationData={aboutAnimation} className='lg:w-[400px] md:w-[300px] sm:w-[90px] mx-auto my-4 z-10 ' />
                {/* bg-card */}
            
                <Lottie animationData={gradient} className='absolute lg:w-[400px] md:w-[300px] lg:ml-32 justify-center object-cover' />
              
                <div className='flex flex-col justify-center'>
                    <h1 className='text-[#000] font-bold md:text-4xl sm:text-3xl text-2xl py-2 mx-auto my-8 transform duration-300 ease-in-out'>About <span className='text-blue'> Us</span></h1>
                    <p className='font-base lg:text-xl'> <span className='text-[#3593c7] font-bold text-xl '>AMECINDO -</span> merupakan Penyedia Pelatihan Bahasa Inggris Resmi untuk persiapan test bahasa inggris  international  ITP-TOEFL ataupun sebagai tempat test kompetensi bahasa inggris Nasioanal. Di bawah naungan AMECINDO Education Fondation, AMECINDO kini telah berhasil menjadi sekolah bahasa Inggris besar di Indonesia . AMECINDO Education Fondation adalah  Pendidikan swasta terbesar yang  bergerak di bidang pembelajaran bahasa, perjalanan edukasi dan program akademis bergelar.</p>
                    
                </div>  
            </div>  
          <div className='w-full justify-center p-4 lg:mt-32'>
              <Lottie animationData={arrowDown} className='w-[50px] mx-auto justify-center'/>
          </div>        
        </div>
        
    )
}
export default About;