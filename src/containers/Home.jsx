import React from 'react';

// images:
import logo from '../assets/imgs/logos/white logo.svg'
import capa from '../assets/imgs/photos/capa.png'
import ondas from '../assets/imgs/svgs/Grupo 3.svg'

// components:
import Button from '../components/button';

const Home = () => {
    return ( 
        <section className=''>
            <header className='absolute flex w-full items-center justify-around pt-10'>
                <a href="/"><img src={logo} alt="Logo em branco da Redcompany" /></a>

                <ul className="flex text-xl text-white font-poppins font-normal">
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
                        <a href="/" className='pl-2 pr-2 border-l-2 '><span className='hover:border-b-2 border-red'>Sobre nós</span></a>
                    </li>
                </ul>
            </header>

            <div className='overflow-hidden'>
                <img src={capa} alt="Foto de duas mulheres e um homem de braços cruzados sorrindo" className='w-auto'/>

                <h1 className='font-poppins font-bold text-white absolute text-5xl ml-home-title max-w-home-title bottom-5'>Implantação de Lojas com quem mais entende de franquias</h1>

                <div className='absolute ml-home-title -bottom-16'>
                    <Button>Baixar Apresentação</Button>
                </div>

                <img src={ondas} alt="Ondas amarelas" className='relative bottom-8 left-8 float-right'/>
            </div>
        </section>
     );
}
 
export default Home;