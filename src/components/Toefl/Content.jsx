import React from 'react'


//animation
import Aos from "aos";
import 'aos/dist/aos.css';
import Toefl from '../../assets/bgtoefl.PNG';


const Content = () => {

    Aos.init({
        duration: 2500,
        offset: 0,
      });

    return(
        <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-down">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">American English Course</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About The  TOEFL ITP® Assessment Series</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                The TOEFL ITP tests offer unparalleled flexibility, convenience and reliability. You can choose when you want to test, the size of the group and various situations in which to use the test, including placement, monitoring progress and more. Learn more about how to use the TOEFL ITP tests. The TOEFL ITP Assessment Series give you the right tools to know where your students are today, so you can inspire and lead them to a successful tomorrow.
                </p>
                <dl className="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                <h3 className='font-bold text-xl text-black mb-6 w-2/3'>Seven Ways You Can Use the TOEFL ITP Assessment Series In Your Classroom</h3>
                    <p className='text-base text-black'>The TOEFL ITP® tests measure core English skills using 100 percent academic content similar to what is used in actual classroom tasks. This makes the tests an essential tool for :</p>
                <p className='text-base text-black mt-6'> 1. Placement in intensive English-language programs requiring academic English proficiency at a college or graduate level.</p>
                <p className='text-base text-black'>2. Progress monitoring in English-language programs stressing academic English proficiency.</p>
                <p className='text-base text-black'>3. Exiting English-language programs by demonstrating proficiency in English listening and reading.</p>
                <p className='text-base text-black mb-2'>4. Admissions to short-term, non-degree programs in English-speaking countries where the sending and receiving institutions agree to use TOEFL ITP scores.</p>
                <p className='text-base text-black mb-2'>5.Admissions to undergraduate and graduate degree programs in non-English speaking countries where English is not the dominant form of instruction.</p>
                <p className='text-base text-black mb-2'>6. Admissions and placement in collaborative international degree programs where English-language training will be a feature of the program.</p>
                <p className='text-base text-black mb-2'>7. Scholarship programs, as contributing documentation for academic English proficiency.</p>
                </dl>
              </div>
            </div>
            <img src={Toefl}
              className="w-[28rem] max-w-none rounded-xl border-2 border-gray-300 shadow-md shadow-gray-300 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    )
}
export default Content;