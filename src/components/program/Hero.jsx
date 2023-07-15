import React from 'react';
import Bgamec from '../../assets/bgamec2.mp4';
import {BookOpenIcon} from '@heroicons/react/20/solid'

//animation
import Aos from "aos";
import 'aos/dist/aos.css';

const Hero = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return(
        <div className='relative w-full h-full bg-slate-200 py-10 '>

            <div className='max-w-[1240px] mx-auto text-white'>
                <div className='px-4 pt-28' data-aos="fade">
                    <h2 className='text-[min(10vw,40px)] pt-8 uppercase text-center font-extrabold text-black'>Pondok bahasa <span className='text-blue'>Amecindo</span> </h2>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 gay-y-16 px-4 pt-20 text-black' data-aos="fade-down">
                    <div className='bg-white rounded-xl shadow-md shadow-black border-2 border-gray-300'>
                        <div className='p-8'>
                            <BookOpenIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md shadow-black' />
                            <h3 className='font-bold text-2xl my-6 text-black'>Survival English</h3>
                            <p className='text-base mt-4'>* Speaking Basic</p>
                            <p className='text-base mt-2'>* 7x Pertemuan Sehari</p>
                            <p className='text-base mt-2'>* Free Modul & Sertifikat</p>
                            <p className='text-base mt-2'>* 2x Study Club</p>
                            <p className='text-base mt-2'>* Speaking, Pronunciation, Grammar, Vocab, Presentation</p>

                        </div> 
                    </div>
                    <div className='bg-white rounded-xl shadow-md shadow-black border-2 border-gray-300'>
                        <div className='p-8'>
                            <BookOpenIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md shadow-black' />
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
                            <BookOpenIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md shadow-black' />
                            <h3 className='font-bold text-xl my-6'>Survival English Conversation</h3>
                            <p className='text-base mt-4'>* 2x Program & Biaya Asrama</p>
                            <p className='text-base mt-2'>* SPP Bln Ke-1</p>
                            <p className='text-base mt-2'>* Berlaku Untuk Bln Pertama</p>
                            <p className='text-base mt-2'>* Bisa LANJUT Conversation English </p>
                            <p className='text-base mt-2'>* Termasuk Uang Pangkal & Pendaftaran</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
