import React from 'react';

// svgs:
import ondasVermelhas from '../assets/imgs/svgs/Grupo 6.svg'


const Orçamento = () => {


    return ( 
        
        <section className='laptop:flex relative'>
            <div className='ml-5 laptop:ml-36 mt-9 laptop:mt-28'>

                <h1 className='font-poppins text-text text-3xl laptop:text-5xl font-semibold max-w-lg mb-5 laptop:mb-12'>
                    Tenha o suporte de quem é <span className='text-bordo font-bold'>referência</span> no mercado!
                </h1>

                <p className='text-text font-poppins text-base laptop:text-lg font-normal max-w-sm'>Com <span className='text-bordo font-bold'>
                    personalização, padronização</span> e <span className='text-bordo font-bold'>móveis exclusivos</span> com design italiano, <span className='text-bordo font-bold'>desenvolvemos, planejamos e executamos</span> o projeto da sua loja física.
                </p>
            </div>

            <form action='./' className=' w-[90%] laptop:max-w-lg shadow-orçamento-shadow rounded-2xl mt-12 laptop:mt-20 mx-auto laptop:ml-10 p-10 flex flex-col flex-wrap laptopG:ml-24'>

                <h1 className='text-text font-poppins font-bold text-2xl laptop:text-4xl text-center pb-10'>
                    Solicite um orçamento para sua empresa.
                </h1>                               
                    
                <label htmlFor="Nome" className='text-text font-poppins text-xs laptop:text-sm font-semibold'>Nome*</label>
                <input required type="text" name="nome" id="Nome" placeholder='Seu nome' className='border rounded-lg w-auto h-10 laptop:h-[61px] border-text p-3 font-poppins text-xs mobileG:text-xl placeholder:text-xs'/>
                
                
                <div className='grid grid-cols-2 gap-4 mt-5'>
                    <span>
                        <label htmlFor="email" className='text-text font-poppins text-xs laptop:text-sm font-semibold'>E-mail*</label>
                        <input required type="email" name="email" id="email"  className='border rounded-lg w-full h-10 laptop:h-[61px] border-text p-3 font-poppins  text-xs mobileG:text-xl placeholder:text-xs'/>
                    </span>

                    <span>
                        <label htmlFor="tel" className='text-text font-poppins text-xs laptop:text-sm font-semibold'>Telefone*</label>
                        <input required type="text" name="tel" id="tel" className='border rounded-lg w-full h-10 laptop:h-[61px] border-text p-3 font-poppins  text-xs mobileG:text-xl placeholder:text-xs'/>
                    </span>

                    <span>
                        <label htmlFor="empresa" className='text-text font-poppins text-xs laptop:text-sm font-semibold mt-5'>Empresa*</label>
                        <input required type="text" name="empresa" id="empresa"  className='border rounded-lg w-full h-10 laptop:h-[61px] border-text p-3 font-poppins  text-xs mobileG:text-xl placeholder:text-xs'/>
                    </span>
                    
                    <span>
                        <label htmlFor="site" className='text-text font-poppins text-xs laptop:text-sm font-semibold mt-5'>Site</label>
                        <input type="text" name="site" id="site" placeholder='www.' className='border rounded-lg w-full h-10 laptop:h-[61px] border-text p-3 font-poppins  text-xs mobileG:text-xl ml-px placeholder:text-xs'/>
                    </span>
                </div>
                <span className='flex mt-10 laptop:mt-20 justify-center'>
                    <input type="checkbox" required value='aceito' name='termos' id='termos'/>
                    <label htmlFor="termos" className='text-text font-poppins text-xs font-semibold ml-2'>Li e aceito os <a href="/" className='text-green border-b-2 border-green'>Termos de Uso</a> e <a href="/" className='text-green border-b-2 border-green'>Política de Privacidade</a></label>
                </span>

                <button className='btn-primary mt-16 mx-auto'>Solicitar Orçamento</button>
            </form>

            <img src={ondasVermelhas} alt="Ondas vermelhas" className='absolute w-48 -left-16 -bottom-32 laptop:bottom-0 laptop:left-12'/>
        </section>
        
     );
}
 
export default Orçamento;