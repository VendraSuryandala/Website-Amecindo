import React from "react";
import Lottie from 'lottie-react';


//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Study from '../../assets/study.json';


const Content = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return(
        <div className='w-full h-full px-4 p-6'>      
            <div className='max-w-[1240px] mb-16 mx-16 grid lg:grid-cols-2' data-aos="fade-down">

                <div>  
                <h1 className='text-blue lg:text-2xl md:text-3xl sm:text-4xl font-bold text-center mb-10'>Belajar Bahasa Inggris Bersama Amecindo</h1>
                <p>AMECINDO menyediakan beragam kursus bahasa Inggris bagi kelompok usia yang berbeda-beda. Mulai dari program kursus bahasa Inggris untuk anak-anak, remaja dan dewasa, serta pelatihan bahasa Inggris untuk perusahaan, semua bisa Anda temukan di AMEC American English Course. Program kursus bahasa Inggris untuk remaja di AMECINDO dibedakan menjadi program Teenagers untuk remaja berusia 10-13 tahun dan program Frontrunner untuk remaja berusia 14 tahun keatas. Selain kedua program ini, para remaja juga bisa mengikuti program Conversation Club untuk meningkatkan kemampuan berbahasa Inggris lisan dan International Exams Preparation untuk memper
                siapkan diri mengikuti berbagai ujian internasional seperti TOEFL, ITP TOEFL, TOEIC etc.
                Selain untuk anak-anak dan remaja, AMECINDO juga menyediakan rangkaian kursus bahasa Inggris untuk dewasa dan pelatihan bahasa Inggris untuk perusahaan.</p>
                </div>

                <div>
                <Lottie animationData={Study} className='max-w-[440px] mx-auto' data-aos="fade-down" />
                </div>
            </div>
    
            <p className='mx-16 mb-20'>Kami mengerti bahwa bagi siswa dewasa, kesuksesan dalam belajar bahasa Inggris tidak hanya ditentukan dari kemampuan berbicara dan penggunakan kosakata bahasa Inggris saja, melainkan juga dari kemampuan berbahasa Inggris secara tepat, alami dan percaya diri.
            Di American English Course INDONESIA, melalui sistem pembelajaran terkini, siswa dewasa akan diajarkan cara mengaplikasikan bahasa Inggris mereka untuk situasi bisnis dan profesional dengan fasih, akurat dan penuh percaya diri.</p>
        </div>
    )
}
export default Content;