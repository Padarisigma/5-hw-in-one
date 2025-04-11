"use client";
import Link from 'next/link'
import SwiperSlider from '../(components)/swiper';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ClientGetById = ({id}) => { 
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header>
      <nav className="w-[80%] sm:w-[75%] py-[15px] m-auto flex justify-between items-center">
          <div className="flex items-center gap-[30px]">
            <div className='bg-gray-300 w-[200px] h-[50px]'></div>
            
            <ul className="hidden sm:flex gap-[50px] text-[#424551]">
              <li className="hover:text-[#FF5A30]">
                <Link href="/">HW1</Link>
              </li>
              <li className="text-[#FF5A30]">HW2</li>
              <li className="hover:text-[#FF5A30]">
                <Link href="/about">HW3</Link>
              </li>
              <li className="hover:text-[#FF5A30]">
                <Link href="/contact">HW4</Link>
              </li>
              <li className="hover:text-[#FF5A30]">
                <Link href="#">HW5</Link>
              </li>
            </ul>
            <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
          </div>
          <div className="hidden sm:flex gap-[30px]">
            <div className="flex items-center gap-[10px]">
            <div className='bg-gray-300 w-[20px] h-[20px]'></div>
              <div>
                <p className="text-[#424551] text-[14px]">{t('text3')}</p>
                <p className="text-[#1E212C] text-[18px]">(405) 555-0128</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-[10px]">
            <div className='bg-gray-300 w-[20px] h-[20px]'></div>
              <div>
                <p className="text-[#424551] text-[14px]">{t('text4')}</p>
                <p className="text-[#1E212C] text-[18px]">hello@createx.com</p>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {id == 1 ? (
       <div className="flex flex-col sm:flex-row items-center justify-center gap-20 mt-20">
       <div className='bg-gray-300 w-[400px] sm:w-[600px] h-[400px]'>
         
       </div>
       <div>
         <p className="text-3xl font-bold">{t('text1')}</p>
         <p className="text-gray-500 w-[400px] mt-10">
           {t('text2')}
         </p>
       </div>
     </div>
      ) : id == 2 ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-32 mt-20">
        <div>
          <p className="text-3xl font-bold">{t('text5')}</p>
          <p className="text-gray-500 w-[500px] mt-10">
            {t('text6')}
          </p>
      
        </div>
        <div className='bg-gray-300 w-[600px] h-[400px]'>
          
        </div>
      </div>
      ) : id == 3 ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-28 mt-20">
        <div className='bg-gray-300 w-[600px] h-[400px]'>
            
            </div>
          <div>
            <p className="text-3xl font-bold">{t('text7')}</p>
            <p className="text-gray-500 w-[500px] mt-10">
              {t('text8')}
            </p>
          
          </div>
        </div>
      ) : id == 4 ? (
        <div className="flex flex-col pb-[60px] sm:flex-row items-center justify-center gap-32 mt-20">
        <div>
          <p className="text-3xl font-bold">{t('text9')}</p>
          <p className="text-gray-500 w-[500px] mt-10">
            {t('text10')}
          </p>
         
        </div>
        <div className='bg-gray-300 w-[600px] h-[400px]'>
          
        </div>
      </div>
      ) : (
        <p>Error 404 not found</p>
      )}

      <SwiperSlider/>

      <footer className='bg-black pt-[50px] mt-[90px]'>
      <section className="text-white w-[55%] pb-[40px] ml-[12%] flex flex-col sm:flex-row gap-[40px] sm:gap-[0px] justify-between">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] uppercase tracking-[1px]">HEAD OFFICE</p>
            <p>
              {" "}
              Address: <span>8502 Preston Rd. Inglewood, New York</span>{" "}
            </p>
            <p>
              {" "}
              Call: <span>(405) 555-0128</span>{" "}
            </p>
            <p>
              {" "}
              Email: <span>hello@createx.com</span>
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] uppercase tracking-[1px]">WHO WE ARE</p>
            <p>About Us</p>
            <p>Available Positions</p>
            <p>Contacts</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] uppercase tracking-[1px]">OUR EXPERIENCE</p>
            <p>Services</p>
            <p>Work</p>
            <p>News</p>
          </div>
        </section>

        <section className="w-[75%] py-[40px] text-white m-auto flex flex-col gap-[40px] sm:gap-[0px] sm:flex-row justify-between sm:items-center">
          <p>© All rights reserved. Made with love by Createx Studio </p>
          <div className="flex items-end gap-[10px]">
            <p>GO TO TOP</p>
            <div className='bg-gray-300 w-[150px] h-[30px]'></div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default ClientGetById;