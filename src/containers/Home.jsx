import React from 'react';

// images:
import logo from '../assets/imgs/logos/white logo.svg'
import capa from '../assets/imgs/photos/capa.png'
import ondas from '../assets/imgs/svgs/Grupo 3.svg'

// components:
import Button from '../components/button';

const Home = () => {
    return ( 
        <div className=''>
            <header className='absolute flex w-full items-center justify-around pt-10'>
                <a href="/"><img src={logo} alt="" /></a>

                <ul className="flex text-xl text-white font-title font-semibold">
                    <li>
                        <a href="/" className='pr-2 '><span className='hover:border-b-2 border-red'>Depoimentos</span></a>
                    </li>

                    <li>
                        <a href="/" className='pl-2 pr-2 border-l-2 '><span className='hover:border-b-2 border-red'>Projetos</span></a>
                    </li>

                    <li>
                        <a href="/" className='pl-2 pr-2 border-l-2 '><span className='hover:border-b-2 border-red'>Fale Conosco</span></a>
                    </li>

                    <li>
                        <a href="/" className='pl-2 pr-2 border-l-2 '><span className='hover:border-b-2 border-red'>sobre nós</span></a>
                    </li>
                </ul>
            </header>

            <div className='overflow-hidden'>
                <img src={capa} alt="" className='w-auto'/>

                <h1 className='font-title font-bold text-white absolute text-5xl ml-home-title max-w-home-title bottom-5'>Implantação de Lojas com quem mais entende de franquias</h1>

                <div className='absolute ml-home-title -bottom-16'>
                    <Button>Baixar Apresentação</Button>
                </div>

                <img src={ondas} alt="" className='relative bottom-8 left-8 float-right'/>
            </div>
        </div>
     );
}
 
export default Home;