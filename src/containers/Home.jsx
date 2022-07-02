import React from 'react';

// images:
import logo from '../assets/imgs/logos/white logo.svg'
import capa2x from '../assets/imgs/photos/capa 2x.png'

// components:
import Button from '../components/button';

const Home = () => {
    return ( 
        <>
            <header className='absolute flex w-screen items-center justify-around py-10'>
                <a href=""><img src={logo} alt="" /></a>

                <ul className="flex text-xl text-white font-title font-semibold">
                    <li>
                        <a href="" className='pr-2 '><span className='hover:border-b-2 border-red'>Depoimentos</span></a>
                    </li>

                    <li>
                        <a href="" className='pl-2 pr-2 border-l-2 '><span className='hover:border-b-2 border-red'>Projetos</span></a>
                    </li>

                    <li>
                        <a href="" className='pl-2 pr-2 border-l-2 '><span className='hover:border-b-2 border-red'>Fale Conosco</span></a>
                    </li>

                    <li>
                        <a href="" className='pl-2 pr-2 border-l-2 '><span className='hover:border-b-2 border-red'>sobre nós</span></a>
                    </li>
                </ul>
            </header>
            <div>
                <img src={capa2x} alt=""/>

                <h1 className='font-title font-bold text-white absolute text-5xl ml-home-title max-w-home-title bottom-5'>Implantação de Lojas com quem mais entende de franquias</h1>

                <div className='absolute ml-home-title -bottom-16'>
                    <Button>Baixar Apresentação</Button>
                </div>
            </div>
        </>
     );
}
 
export default Home;