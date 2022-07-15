import React from 'react';

// svgs:
import cone from '../assets/imgs/svgs/Grupo 4.svg'
import checked from '../assets/imgs/icons/verificar.svg'
import R from '../assets/imgs/logos/R.png'
import ball from '../assets/imgs/svgs/Grupo 13.svg'

const PorqueContratar = () => {

    let checks =[
        {name:"Auxílio na escolha do ponto;"},
        {name:"Desenvolvimento do projeto arquitetônico;"},
        {name:"Móveis premium com design italiano no padrão da rede;"},
        {name:"Execução e gerenciamento de obra;"},
        {name:"Entrega da loja pronta."},
    ];

    return ( 
        <>
            <div className='mt-20 ml-5 laptop:text-center max-w-why-content laptop:mx-auto'>
                <h1 className='font-poppins font-bold text-title text-3xl max-w-[270px] laptop:max-w-full laptop:text-5xl mb-10'>Por que contratar a Red?</h1>

                <p className='text-text font-poppins font-normal text-xl mb-8'>Sabemos como o processo de implantação de um negócio pode ser oneroso e demorado. A RedCompany é a <span className='text-bordo font-bold'>solução</span> para empresas que buscam <span className='text-bordo font-bold'>tranquilidade, qualidade e agilidade</span> na implantação de lojas físicas.</p>

                <button className='btn-primary'>Ver como funciona</button>
            </div>

            <div className='laptop:bg-bordo laptop:w-[85%] laptop:h-[32.5em] laptop:shadow-md laptop:mx-auto laptop:mt-32 laptop:p-8 flex'>

                <div className='mx-auto flex flex-col justify-center'>

                    <span className='flex mt-20'>
                        <h1 className='ml-5 font-poppins text-text laptop:text-white font-bold text-3xl laptop:text-5xl max-w-[200px] mobileG:max-w-xs'>Implantação Turn Key</h1>
                        <img src={cone} alt="Cone amarelo" className='w-10 mobileG:w-14'/>
                    </span>

                    <div className='max-w-sm mt-8 ml-5 laptop:mt-14 font-poppins font-normal'>

                        {
                            checks.map((checks) => (
                                <span key={checks.name} className='flex mt-4'>
                                    <img src={checked} alt="sinal de checado em verde" />
                                    <p className='text-text laptop:text-white ml-2 text-base laptop:text-lg'>{checks.name}</p>
                                </span>
                            ))
                        }

                    </div>
                </div>

                <img src={R} alt="Inicial do logo da RedCompany" className='mix-blend-multiply opacity-80 hidden laptopG:block'/>

            </div>
                <img src={ball} alt="bola amarela com ondas" className='relative bottom-24 right-14 float-right hidden laptop:inline'/>
        </>
     );
}
 
export default PorqueContratar;