import React from 'react';

// images:
import logo from '../assets/imgs/logos/white logo.svg'
import logoR from '../assets/imgs/logos/logoWhiteR.png'
import capa from '../assets/imgs/photos/capa.webp'
import capaMobile from '../assets/imgs/photos/capaMobile.webp'
import ondas from '../assets/imgs/svgs/Grupo 3.svg'

// components:
import MenuMobile from '../components/MenuMobile';


const Home = () => {

    let Links = [
        {name:"Depoimentos", link: "/"},
        {name:"Projetos", link: "/"},
        {name:"Fale Conosco", link: "/"},
        {name:"Sobre nós", link: "/"},
    ];

    return ( 
        <section className='relative'>
            <header className='absolute flex w-full items-center justify-around pt-10'>
                <a href="/" className='hidden sm:inline'><img src={logo} alt="Logo em branco da Redcompany" /></a>
                <a href="/" className='w-1/3 sm:hidden'><img src={logoR} alt="Logo em branco da Redcompany" className='w-8'/></a>
                <MenuMobile/>


                <nav className='hidden laptop:block'>
                    <ul className="flex text-xl text-white font-poppins font-normal">

                    {
                        Links.map((link) => (
                            <li key={link.name} className='first:border-l-0 border-l-2 pl-2'>
                                <a href={link.link} className='pr-2'>
                                    <span className=' hover:border-b-2 hover:border-b-red'>{link.name}</span>
                                </a>
                            </li>
                        ))
                    }
                    </ul>
                </nav>

                
            </header>

            <div className='overflow-hidden'>

                <picture>
                    <source media='(max-width: 500px)' srcSet={capaMobile}/>
                    <img src={capa} alt="Foto de duas mulheres e um homem de braços cruzados sorrindo" className='w-screen'/>
                </picture>

                <h1 className='font-poppins font-semibold text-white absolute text-3xl laptop:text-5xl ml-home-title max-w-home-title bottom-24 laptop:bottom-52'>Implantação de Lojas com quem mais entende de franquias</h1>

                <button className='btn-primary relative bottom-12 mobileG:bottom-20 left-[12%]'>
                    Baixar Apresentação
                </button>

                <img src={ondas} alt="Ondas amarelas" className='relative bottom-4 left-9 laptop:bottom-6 laptop:left-8 float-right w-32 laptop:w-44'/>
            </div>
        </section>
     );
}
 
export default Home;