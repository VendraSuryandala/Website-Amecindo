import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Lottie from 'lottie-react';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Profilvideo from '../../assets/Video American English Course.mp4';
import arrowDown from '../../assets/arrow.json';


const Hero = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return(
        <div className='relative w-full py-16 px-4 p-6 bg-dark shadow-md shadow-black'>
            <div className='max-w-[1240px] mt-20 mx-auto grid md:grid-cols-2'>

                <div className=' box-border shadow-md shadow-black'  data-aos="fade">
                <Video autoPlay loop><source src={Profilvideo} type='video/webm'/></Video> 
                </div>

                <div className='flex flex-col justify-center' data-aos="fade-down">
                    <h1 className='text-green font-bold md:text-4xl sm:text-3xl text-2xl py-2 mx-auto my-8'>American English Course</h1>
                    <p className='text-white text-base px-8 '><span className='text-green'>AMECINDO</span> merupakan Penyedia Pelatihan Bahasa Inggris Resmi untuk persiapan test bahasa inggris  international  ITP- TOEFL ataupun sebagai tempat test kompetensi bahasa inggris Nasioanal. Di bawah naungan AMECINDO Education Fondation, AMECINDO kini telah berhasil menjadi sekolah bahasa Inggris besar di Indonesia . AMECINDO Education Fondation adalah  Pendidikan swasta terbesar yang  bergerak di bidang pembelajaran bahasa, perjalanan edukasi dan program akademis bergelar.</p>
                </div>  
            </div>  

            <div className='w-full justify-center p-4 mt-10'>
              <Lottie animationData={arrowDown} className='w-[50px] mx-auto justify-center'/>
            </div> 

        </div>

    )
}
export default Hero;