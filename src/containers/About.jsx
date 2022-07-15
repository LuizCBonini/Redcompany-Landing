// svgs:
import semiCirculo from '../assets/imgs/svgs/Grupo 10.svg'

// icons:
import house from '../assets/imgs/icons/larAmarelo.svg'
import coração from '../assets/imgs/icons/coracao.svg'
import conf from '../assets/imgs/icons/configuracoes.svg'
import estrela from '../assets/imgs/icons/estrela.svg'
import time from '../assets/imgs/icons/usuarios-alt.svg'

const About = () => {
    return ( 
        <section>
            <span className='flex ml-8 mobileG:mx-auto max-w-max mt-28'>
                <h2 className='text-amarelo font-poppins text-base laptop:text-lg uppercase'>sobre nós</h2>
                <img src={semiCirculo} alt="Um semicírculo ao lado do subtitulo" className='mt-2 ml-2'/>
            </span>

            <h1 className='text-text font-bold font-poppins text-3xl laptop:text-5xl ml-8 mobileG:text-center max-w-[240px] mobileG:max-w-xl mobileG:mx-auto'>O que nos torna expert no que fazemos?</h1>
            
            <div className='mx-auto flex flex-wrap mt-12 laptop:mt-24 justify-around max-w-5xl'>
                <div className='flex flex-col items-center'>
                    <img src={house} alt="Ícone de uma casa amarela" className='w-6 laptop:w-12'/>
                    <p className='text-text font-poppins mt-4'>implantação</p>
                    <p className='text-text font-poppins'>de <span className='font-bold'>+100 lojas</span></p>
                </div>

                <div className='flex flex-col items-center'>
                    <img src={coração} alt="Ícone de um coração amarelo" className='w-6 laptop:w-12'/>
                    <p className='text-text font-poppins text-center mt-4'>Parceria com </p>
                    <p className='text-text font-poppins font-bold text-center max-w-about-content'>grandes redes de franquias</p>
                </div>

                <div className='flex-col items-center hidden laptop:flex '>
                    <img src={conf} alt="Ícone de uma engrenagem amarela" className='w-12'/>
                    <p className='text-text font-poppins text-center mt-4 max-w-about-content'>Metodologia Única de <span className='font-bold'>Gerenciamento de Obra</span></p>
                </div>
                
            </div>

            <div className='flex flex-col items-center mt-4 laptop:hidden'>
                    <img src={conf} alt="Ícone de uma engrenagem amarela" className='w-6 laptop:w-12'/>
                    <p className='text-text font-poppins text-center mt-4 max-w-about-content'>Metodologia Única de <span className='font-bold'>Gerenciamento de Obra</span></p>
            </div>

            <div className='mx-auto flex flex-wrap mt-4 justify-around max-w-5xl'>
                <div className='flex flex-col items-center'>
                    <img src={time} alt="Ícone de uma engrenagem amarela" className='w-6 laptop:w-12'/>
                    <p className='text-text font-poppins text-center mt-4 max-w-about-content'><span className='font-bold'>Time de especialistas </span>à sua disposição </p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={estrela} alt="Ícone de uma engrenagem amarela" className='w-6 laptop:w-12'/>
                    <p className='text-text font-poppins text-center mt-4 max-w-about-content'><span className='font-bold'>Excelência e Qualidade </span>no que fazemos </p>
                </div>
            </div>

            <span className='mobileG:flex'>
                <h2 className='text-text font-bold font-poppins text-3xl laptop:text-5xl max-w-home-title ml-8 laptop:ml-36 mt-32'>Muito prazer, somos a <span className='text-bordo'>RedCompany!</span></h2>
                <h3 className='text-text font-semibold font-poppins text-xl laptop:text-4xl max-w-xs laptop:max-w-md ml-8 laptop:ml-36 mt-8 mobileG:mt-32'>Planejamento&#38; Desenvolvimento&#38; Implantação de lojas.</h3>
            </span>
        </section>
     );
}
 
export default About;