import React, { useState } from 'react';
import {HiMenu} from 'react-icons/hi';

// icons:
import close from '../assets/imgs/icons/x-circle-white.svg'

const MenuMobile = () => {

    let Links = [
        {name:"Depoimentos", link: "/"},
        {name:"Projetos", link: "/"},
        {name:"Fale Conosco", link: "/"},
        {name:"Sobre nós", link: "/"},
    ];    

    let [open, setOpen] = useState(false);

    return ( 
        <div>
            <HiMenu 
            className='text-white w-9 h-8 laptop:hidden' 
            onClick={() => setOpen(true)}/>

            <nav className={`absolute w-full h-full z-10 flex items-center justify-center bg-bordo p-24 mobileG:p-40 laptop:hidden transition-all duration-500 ease-in right-0 ${open ? 'top-0' : 'top-[-490px]'}`}
            >
            
                <img src={close} alt="Fechar janela" className='absolute top-10 mobileG:top-14 right-12 mobileG:right-32 laptop:hidden'
                onClick={() => setOpen(false)}/>
                <ul className="flex flex-col justify-center items-center gap-5 font-poppins text-white font-semibold  mobileG:text-xl laptop:hidden">
            
                    {
                        Links.map((link) => (
                            <li key={link.name}>
                                <a href={link.link} className='pr-2 '>
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
     );
}
 
export default MenuMobile;