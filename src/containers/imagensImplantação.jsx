import React from 'react';

// icons:
import house from '../assets/imgs/icons/lar.svg'

// fotos:
import slide1 from '../assets/imgs/photos/slide1.webp'
import slide2 from '../assets/imgs/photos/slide2.webp'
import slide3 from '../assets/imgs/photos/slide3.webp'
import slide4 from '../assets/imgs/photos/slide4.webp'

// Components:
import Carousel from '../components/Carousel';

const Carrossel = () => {

    return ( 
        <section>
            <h1 className='text-text font-bold font-poppins text-3xl laptop:text-5xl mobileG:text-center max-w-[300px] mobileG:max-w-4xl ml-5 mobileG:mx-auto mt-40'>Contribuindo para a aceleração de Grandes Marcas</h1>

            <div className=' mobileG:mx-auto max-w-md flex justify-around laptop:justify-between mt-24'>
                <div className='flex flex-col items-center '>
                    <img src={house} alt="Ícone de uma casa vermelha" className='w-6 laptop:w-12'/>
                    <p className='text-text font-poppins font-bold mt-4'>+100 lojas</p>
                    <p className='text-text font-poppins'>implantadas</p>
                </div>

                <div className='flex flex-col items-center '>
                    <img src={house} alt="Ícone de uma casa vermelha" className='w-6 laptop:w-12'/>
                    <p className='text-text font-poppins font-bold mt-4'>+250 lojas</p>
                    <p className='text-text font-poppins'>em implantação</p>
                </div>
            </div>

            {/* ===== Fotos ===== */}

            <div className='hidden mobileG:flex justify-around mt-28'>
                <img src={slide1} alt="" className='w-44 laptopG:w-80'/>
                <img src={slide2} alt="" className='w-44 laptopG:w-80'/>
                <img src={slide3} alt="" className='w-44 laptopG:w-80'/>
                <img src={slide4} alt="" className='w-44 laptopG:w-80'/>
            </div>

            {/* ===== Mobile Carrossel ===== */}
            <div className='overflow-hidden max-w-fit mobileG:hidden'>
                <Carousel>
                    <img src={slide1} alt="" className='max-w-none w-56 mobileM:w-72 ml-5 mr-2'/>
                    <img src={slide2} alt="" className='max-w-none w-56 mobileM:w-72 mr-2'/>
                    <img src={slide3} alt="" className='max-w-none w-56 mobileM:w-72 mr-2'/>
                    <img src={slide4} alt="" className='max-w-none w-56 mobileM:w-72'/>
                </Carousel>
            </div>

        </section>
     );
}
 
export default Carrossel;