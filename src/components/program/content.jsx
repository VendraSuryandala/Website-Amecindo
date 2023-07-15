import React from 'react';
import {TicketIcon} from '@heroicons/react/20/solid'
import Lottie from 'lottie-react';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Gradient from '../../assets/gradient.json'

const Content = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return (
    <div className='relative w-full h-full bg-slate-200 py-20'>
        <div className=' absolute object-cover'>
               <Lottie animationData={Gradient} className='w-[200px] h-[200px]' data-aos="fade" /> 
        </div>

                <div className='px-4' data-aos="fade-down">
                    <h2 className='text-[min(15vw,40px)] uppercase text-center font-extrabold text-black'>Kost <span className='text-blue'>Amecindo</span> </h2>
                </div>

                <div className='max-w-[1240px] mx-16 mt-10' data-aos="fade-down">
                <p className='text-base text-black'>Kost di <span className='font-bold'>Pondok Bahasa Amecindo</span>  ada beberapa tipe, mulai dari kost yang sederhana hingga yang Vip, namun pada umumnya kost di kawasan Pondok Bahasa  adalah kost yang sederhana, biayanya pun sangat bervariasi mulai dari yang dibawah 100.000 hingga yang diatas 1 juta, durasi kost minimal adalah 1 bulan, misalnya jika kost hanya selama 2 minggu maka biayanya tetap terhitung 1 bulan, namun terkadang ada pengelola kost yang berbaik hati memberikan potongan khusus dibulan-bulan tertentu jika menempati kurang dari 1 bulan.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 gay-y-16 px-4 pt-10 sm:pt-20 text-black' data-aos="fade-down">
                    <div className='bg-white rounded-xl shadow-md shadow-black border-2 border-gray-300'>
                        <div className='p-8'>
                            <TicketIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md shadow-black' />
                            <h3 className='font-bold text-2xl my-6 text-black'>Survival English</h3>
                            <p className='text-base mt-4'>* Speaking Basic</p>
                            <p className='text-base mt-2'>* 7x Pertemuan Sehari</p>
                            <p className='text-base mt-2'>* Free Modul & Sertifikat</p>
                            <p className='text-base mt-2'>* Speaking, Pronunciation, Grammar,</p>
                            <p className='text-base mt-1 ml-3'> Vocab, Presentation </p>
                            <p className='text-base mt-2'>* 2x Study Club</p>
                        </div> 
                    </div>
                    <div className='bg-white rounded-xl shadow-md shadow-black border-2 border-gray-300'>
                        <div className='p-8'>
                            <TicketIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md shadow-black' />
                            <h3 className='font-bold text-2xl my-6' >Conversation English</h3>
                            <p className='text-base mt-4'>* 2x Kursus Bhs.ARAB</p>
                            <p className='text-base mt-2'>* 1x Kursus Bhs.INGGRIS</p>
                            <p className='text-base mt-2'>* Plus Asrama</p>
                            <p className='text-base mt-2'>* 3x Program Kursus</p>
                            <p className='text-base mt-2'>* Free Modul & Sertifikat </p>
                            <p className='text-base mt-2'>* Dibimbing Sampai Bisa</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-md shadow-black border-2 border-gray-300'>
                        <div className='p-8'>
                            <TicketIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md shadow-black' />
                            <h3 className='font-bold text-xl my-6'>Survival English Conversation</h3>
                            <p className='text-base mt-4'>* 2x Program & Biaya Asrama</p>
                            <p className='text-base mt-2'>* Termasuk Uang Pangkal & Pendaftaran</p>
                            <p className='text-base mt-2'>* SPP Bln Ke-1</p>
                            <p className='text-base mt-2'>* Berlaku Untuk Bln Pertama</p>
                            <p className='text-base mt-2'>* Bisa LANJUT Conversation English </p>
                        </div>
                    </div>
                </div>
    </div>
    )
}
export default Content;