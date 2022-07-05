import React from 'react';
import Button from '../components/button';

// svgs:
import cone from '../assets/imgs/svgs/Grupo 4.svg'
import checked from '../assets/imgs/icons/verificar.svg'
import R from '../assets/imgs/logos/R.png'
import ball from '../assets/imgs/svgs/Grupo 13.svg'

const PorqueContratar = () => {
    return ( 
        <>
            <div className='mt-20 text-center max-w-why-content mx-auto'>
                <h1 className='font-poppins font-bold text-title text-5xl mb-10'>Por que contratar a Red?</h1>

                <p className='text-text font-poppins font-bold text-center text-xl mb-8'>Sabemos como o processo de implantação de um negócio pode ser oneroso e demorado. A RedCompany é a <span className='text-red'>solução</span> para empresas que buscam <span className='text-red'>tranquilidade, qualidade e agilidade</span> na implantação de lojas físicas.</p>

                <Button>Ver como funciona</Button>
            </div>

            <div className='bg-bordo w-[85%] h-[32.5em] shadow-md mx-auto mt-32 p-8 flex gap-x-28'>
                <div className='p-10 items-center'>
                    <span className='flex'>
                        <h1 className='font-poppins text-white font-bold text-5xl max-w-xs'>Implantação Turn Key</h1>
                        <img src={cone} alt="Cone amarelo" />
                    </span>
                    <div className='max-w-sm mt-14'>
                        <span className='flex mt-4'><img src={checked} alt="sinal de checado em verde" /><p className='text-white ml-2 text-lg'>Auxílio na escolha do ponto;</p></span>
                    
                        <span className='flex mt-4'><img src={checked} alt="sinal de checado em verde" /><p className='text-white ml-2 text-lg'>Desenvolvimento do projeto arquitetônico;</p></span>
                        <span className='flex mt-4'><img src={checked} alt="sinal de checado em verde" /><p className='text-white ml-2 text-lg'>Móveis premium com design italiano no padrão da rede;</p></span>
                        <span className='flex mt-4'><img src={checked} alt="sinal de checado em verde" /><p className='text-white ml-2 text-lg'>Execução e gerenciamento de obra;</p></span>
                        <span className='flex mt-4'><img src={checked} alt="sinal de checado em verde" /><p className='text-white ml-2 text-lg'>Entrega da loja pronta.</p></span>
                    </div>
                </div>

                <img src={R} alt="Inicial do logo da RedCompany" className='opacity-40'/>

            </div>
                <img src={ball} alt="bola amarela com ondas" className='relative bottom-24 right-14 float-right'/>
        </>
     );
}
 
export default PorqueContratar;