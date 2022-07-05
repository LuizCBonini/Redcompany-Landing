import React from 'react';

// svgs:
import ondasVermelhas from '../assets/imgs/svgs/Grupo 6.svg'

// components:
import Button from '../components/button';

const Orçamento = () => {
    return ( 
        <>
            <div className='flex relative'>
                <div className='ml-36 mt-28'>
                    <h1 className='font-poppins text-text text-5xl font-bold max-w-lg mb-12'>Tenha o suporte de quem é <span className='text-bordo'>referência</span> no mercado!</h1>
                    <p className='text-text font-poppins text-lg font-bold max-w-sm'>Com <span className='text-bordo'>personalização, padronização</span> e <span className='text-bordo'>móveis exclusivos</span> com design italiano, <span className='text-bordo'>desenvolvemos, planejamos e executamos</span> o projeto da sua loja física.</p>
                </div>

                <div className='w-[527px] h-[717px] shadow-orçamento-shadow rounded-2xl mt-20 ml-24 p-10 '>
                    <h1 className='text-text font-poppins font-bold text-4xl text-center pb-10'>Solicite um orçamento para sua empresa.</h1>

                    
                    <span>
                        <label htmlFor="Nome" className='text-text font-poppins text-sm font-bold'>Nome*</label>
                        <input required type="text" name="nome" id="Nome" placeholder='Seu nome' className='border rounded-lg w-[444px] h-[61px] border-text p-3 font-poppins  placeholder:text-xs'/>
                    </span>
                    
                    <div className='grid grid-cols-2 gap-4 mt-5'>
                        <span>
                            <label htmlFor="email" className='text-text font-poppins text-sm font-bold'>E-mail*</label>
                            <input required type="text" name="email" id="email"  className='border rounded-lg w-[211px] h-[61px] border-text p-3 font-poppins  placeholder:text-xs'/>
                        </span>
                        <span>
                            <label htmlFor="tel" className='text-text font-poppins text-sm font-bold'>Telefone*</label>
                            <input required type="text" name="tel" id="tel" className='border rounded-lg w-[211px] h-[61px] border-text p-3 font-poppins  placeholder:text-xs'/>
                        </span>
                        <span>
                            <label htmlFor="empresa" className='text-text font-poppins text-sm font-bold mt-5'>Empresa*</label>
                            <input required type="text" name="empresa" id="empresa"  className='border rounded-lg w-[211px] h-[61px] border-text p-3 font-poppins  placeholder:text-xs'/>
                        </span>
                        <span>
                            <label htmlFor="site" className='text-text font-poppins text-sm font-bold mt-5'>Site</label>
                            <input type="text" name="site" id="site" placeholder='www.' className='border rounded-lg w-[211px] h-[61px] border-text p-3 font-poppins  placeholder:text-xs'/>
                        </span>
                    </div>

                    <span className='flex mt-20 justify-center'><input type="checkbox" name="" id="" /> <p className='text-text font-poppins text-xs font-bold ml-2'>Li e aceito os <a href="/" className='text-green border-b-2 border-green'>Termos de Uso</a> e <a href="/" className='text-green border-b-2 border-green'>Política de Privacidade</a></p></span>

                    <span className='flex justify-center mt-9'><Button>Solicitar Orçamento</Button></span>
                </div>

                <img src={ondasVermelhas} alt="Ondas vermelhas" className='absolute bottom-0 left-12'/>
            </div>
        </>
     );
}
 
export default Orçamento;