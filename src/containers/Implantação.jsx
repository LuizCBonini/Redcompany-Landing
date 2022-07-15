import React from 'react';

// images:
import Meet from '../assets/imgs/photos/reuniao.webp'
import MeetMobile from '../assets/imgs/photos/reuniaoMobile.webp'

// svgs:
import semiCirculo from '../assets/imgs/svgs/Grupo 5.svg'


const Implantação = () => {
    return ( 
        
        <section className='relative'>
            <img src={semiCirculo} alt="Semicírculo"  className='relative top-14 left-14 w-20'/>
            <picture>
                <source media='(max-width: 500px)' srcSet={MeetMobile}/>
                <img src={Meet} alt="Pessoas em uma reunião de trabalho." className='w-screen'/>
            </picture>
            <p className='text-white font-normal font-poppins text-xl laptop:text-4xl max-w-lg bottom-36 ml-5 laptop:bottom-44 laptop:left-36 absolute'>Nós cuidamos da implantação para que você foque no que realmente importa, <span className='text-red font-bold'>nas vendas e no faturamento!</span></p>
            <button className='btn-primary relative bottom-20 ml-5 laptop:left-36'>Ver mais</button>
        </section>
        
     );
}
 
export default Implantação;