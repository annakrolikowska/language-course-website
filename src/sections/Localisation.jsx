import React from 'react';
import classFirst from '../images/class1.webp';
import classSecond from '../images/class2.webp';
import classThird from '../images/class3.webp';

const classImages = [classFirst, classSecond, classThird];

function Localisation() {
  return (
    <section id='localisation'> 
      <div className='container mx-auto auto px-5 xl:px-0 mb-12 md:mb-16'>
        <div className='relative inline-block mt-8'>
          <h2 className='text-5xl font-radley relative z-10'>Місце</h2>
          <div className='w-100 h-4 bg-primary-25 absolute bottom-[-1px] left-0 right-0 rounded-basic'></div> 
        </div>
        <p className='my-8 lg:w-9/12'>
        Стаціонарні заняття проходять у двох локаціях:  інтимний зал на вулиці  <span className='font-semibold'> św Gertrudy 19/11 </span> або на вулиці
          <span className='font-semibold'> Kremerowskiej 6/9 </span>
          у Кракові. 
        </p> 
      </div>
      <div className='md:flex m-8 text-center justify-around max-w-screen-2xl mx-auto'>
        {classImages.map((imageSrc, index) => (
          <div key={index} className="relative w-full m-auto sm:w-11/12 mb-8 sm:p-4 hover:scale-105 transition-transform">
            <img src={imageSrc} alt={`class ${index + 1} photo`} className='relative mx-auto z-10 rounded-basic'/>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Localisation;