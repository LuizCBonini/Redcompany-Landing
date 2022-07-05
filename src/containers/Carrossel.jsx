import React from 'react';

// icons:
import house from '../assets/imgs/icons/lar.svg'

// fotos:
import slide1 from '../assets/imgs/photos/slide1.png'
import slide2 from '../assets/imgs/photos/slide2.png'
import slide3 from '../assets/imgs/photos/slide3.png'
import slide4 from '../assets/imgs/photos/slide4.png'

const Carrossel = () => {
    return ( 
        <section>
            <h1 className='text-text font-bold font-poppins text-5xl text-center max-w-4xl mx-auto mt-40'>Contribuindo para a aceleração de Grandes Marcas</h1>

            <div className='mx-auto max-w-md flex justify-between mt-24'>
                <div className='flex flex-col items-center '>
                    <img src={house} alt="Ícone de uma casa vermelha" className='w-12'/>
                    <p className='text-text font-poppins font-bold mt-4'>+100 lojas</p>
                    <p className='text-text font-poppins'>implantadas</p>
                </div>

                <div className='flex flex-col items-center '>
                    <img src={house} alt="Ícone de uma casa vermelha" className='w-12'/>
                    <p className='text-text font-poppins font-bold mt-4'>+250 lojas</p>
                    <p className='text-text font-poppins'>em implantação</p>
                </div>
            </div>

            {/* ===== Fotos ===== */}

            <div className='flex justify-around mt-28'>
                <img src={slide1} alt="" className='w-72'/>
                <img src={slide2} alt="" className='w-72'/>
                <img src={slide3} alt="" className='w-72'/>
                <img src={slide4} alt="" className='w-72'/>
            </div>

            {/* =====  Carrossel ===== */}
            {/* <div>
                <ul className=''>
                    <li><img src={slide1} alt="" /></li>
                </ul>
                <ul>
                    <li><img src={slide2} alt="" /></li>
                </ul>
                <ul>
                    <li><img src={slide3} alt="" /></li>
                </ul>
                <ul>
                    <li><img src={slide4} alt="" /></li>
                </ul>
            </div> */}
        </section>
     );
}
 
export default Carrossel;