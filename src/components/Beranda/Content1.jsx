import React from 'react';

//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import Beasiswa from '../../assets/beasiswa.json';
import PTN from '../../assets/universitas.json';
import Job from '../../assets/job.json';

const Content1 = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });
  
      return(
      <div className='w-full h-full bg-white mb-10 lg:mt-14 px-4'>

          <div className='relative justify-center lg:flex py-16 px-4 sm:col-2' data-aos="fade-down" >    
              <h1 className='text-center font-bold text-[min(15vw,42px)] text-[#000]'>Untuk apasih <span className='text-blue'>TOEFL ITP</span> itu ? </h1>
          </div> 

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' data-aos="fade-down">
            {/* beasiswa  */}
            <div className='w-full border-4 border-blue bg-gray-200 rounded py-10 px-4 shadow-2xl shadow-dark'> 
            <Lottie animationData={Beasiswa} className='mx-auto w-[200px] py-6'/>
            <h1 className='font-bold text-2xl text-center py-6'>1. Program <span className='text-blue'>Beasiswa</span> </h1>
            <p className='font-base'>Beasiswa merupakan sebuah bantuan biaya pendidikan sehingga seorang pelajar atau mahasiswa dapat mengikuti kegiatan belajar dengan biaya yang lebih ringan atau bahkan tanpa mengeluarkan biaya sepeserpun.</p>
            </div>

            {/* PTN */}
            <div className='w-full border-4 border-blue bg-gray-200 rounded py-10 px-4 shadow-2xl shadow-dark'> 
            <Lottie animationData={PTN} className='mx-auto w-[200px] py-6'/>
            <h2 className='font-bold text-2xl text-center py-6'>2. Syarat Masuk <span className='text-blue'>PTN</span> </h2>
            <p className='font-base'>PTN adalah Perguruan tinggi yang dikelola oleh pemerintah, tepatnya berada di bawah koordinasi Kementerian Pendidikan dan Kebudayaan. PTN diwajibkan untuk mencari dan menjaring calon mahasiswa yang memiliki potensi akademik tinggi.</p>
            </div>

            {/* apply job */}
            <div className='w-full border-4 border-blue bg-gray-200 rounded py-10 px-4 shadow-2xl shadow-dark'> 
            <Lottie animationData={Job} className='mx-auto w-[265px] py-6'/>
            <h1 className='font-bold text-2xl text-center py-6'>3. Melamar <span className='text-blue'>Pekerjaan</span> </h1>
            <p className='font-base'>Melamar pekerjaan adalah aktivitas utama yang dilakukan manusia untuk memenuhi kebutuhan hidupnya. Dalam arti yang sempit pekerjaan yaitu suatu aktivitas yang dapat menghasilkan uang.</p>
            </div>          
        </div>

        <div className='max-w-[1240px] mx-auto'>          
            <p className='font-semibold text-center mt-32'> </p>   
        </div>
      </div>

      )
} 
export default Content1;