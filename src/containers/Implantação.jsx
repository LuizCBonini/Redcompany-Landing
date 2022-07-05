import React from 'react';

// images:
import Meet from '../assets/imgs/photos/reuniao.png'

// svgs:
import semiCirculo from '../assets/imgs/svgs/Grupo 5.svg'

// components:
import Button from '../components/button';

const Implantação = () => {
    return ( 
        
        <section className='relative'>
            <img src={semiCirculo} alt="Semicírculo"  className='relative top-14 left-14'/>
            <img src={Meet} alt="Pessoas em uma reunião de trabalho." />
            <p className='text-white font-bold font-poppins text-4xl max-w-lg bottom-32 left-36 absolute'>Nós cuidamos da implantação para que você foque no que realmente importa, <span className='text-red'>nas vendas e no faturamento!</span></p>
            <span className='absolute bottom-16 left-36'><Button>Ver mais</Button></span>
        </section>
        
     );
}
 
export default Implantação;