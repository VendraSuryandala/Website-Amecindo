import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import bglogo from '../../assets/logoamec.png'

//animation
import Aos from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav)
    }

    useEffect(()=> {
    Aos.init({duration: 2500, offset: 0}) }, [])

    const navigate = useNavigate()

    return(
    <div className='absolute flex w-full justify-between mx-auto h-20 max-w-[1440px] items-center px-4 z-10 text-white'>
      <div>
      <img src={bglogo} width={60} height={20} alt='/' className='relative' data-aos="fade" />
      </div>

      <div className='hidden md:flex p-4 gap-4' data-aos="fade">
          <button onClick={ () => navigate('/') }  className=' text-green font-semibold'>Beranda</button>
          <button onClick={ () => navigate('/profil') }  className=' text-green font-semibold'>Profil</button>
          <button onClick={ () => navigate('/program') }  className=' text-green font-semibold'>Program</button>
          <button onClick={ () => navigate('/partnerships') }  className=' text-green font-semibold'>Partnerships</button>
          <button onClick={ () => navigate('/About-Toefl') }  className=' text-green font-semibold'>About TOEFL</button>
          
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className='md:hidden z-10' data-aos="fade-down">
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose className='text-white' size={20} />}
      </div>
      <div onClick={handleNav} className={nav ? 'absolute text-green left-0 top-0 w-full bg-gray-900/80 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul className='uppercase'>
          <li onClick={ () => navigate('/')} className='py-2 border-b border-gray-600'>Beranda</li>
          <li onClick={ () => navigate('/profil')} className='py-2 border-b border-gray-600'>Profil</li>
          <li onClick={ () => navigate('/program')} className='py-2 border-b border-gray-600'>Program</li>
          <li onClick={ () => navigate('/partnerships')} className='py-2 border-b border-gray-600'>Partnerships</li>
          <li onClick={ () => navigate('/About-Toefl')} className='py-2 border-b border-gray-600'>About TOEFL</li>
         
        </ul>
      </div>
    </div>
    )
}
export default Navbar;