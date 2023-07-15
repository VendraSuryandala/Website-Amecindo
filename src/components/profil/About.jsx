import React from "react";
import Lottie from 'lottie-react';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Loading from '../../assets/loading.json';


const About = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return(
    <div className='w-full h-full px-4 p-6'>
        <Lottie animationData={Loading} className='mx-auto lg:w-[100px] md:w-[100px] sm:w-[90px]' data-aos="fade-down" />
        <div className='max-w-[1240px] mb-16 mx-16' data-aos="fade-down">
            <p className='text-base text-[#000]'>Bersama dengan AMECINDO Anda dapat belajar bahasa Inggris di salah satu edukasi center di Indonesia, belajar secara online di rumah, atau pun belajar keluar negeri. Metode dan materi pembelajaran eksklusif AMECINDO dikembangkan secara teliti oleh para ahli di bidangnya masing-masing. Guru penutur asli bersertifikasi internasional, lab bahasa interaktif, teknologi pendukung pengajaran canggih, aktifitas luar kelas yang mendukung pembelajaran di dalam kelas, lokasi tempat kursus yang strategis, desain sekolah yang modern, kelas kecil serta jadwal kursus yang fleksibel merupakan sedikit dari banyak alasan mengapa Anda dapat belajar bahasa Inggris lebih cepat dan efektif di AMECINDO. Apapun yang Anda butuhkan, kursus, atau pelatihan bahasa Inggris - Anda dapat menemukannya di sini. Telusuri situs kami lebih jauh dan temukan berbagai alasan mengapa Anda harus belajar bahasa Inggris di AMECINDO.</p>
        </div>    
    </div>
    )
}
export default About;