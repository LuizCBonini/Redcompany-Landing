// logo:
import logo from '../assets/imgs/logos/color logo.svg'

// svgs:
import semic from '../assets/imgs/svgs/Elemento_05.svg'
import ondas from '../assets/imgs/svgs/Grupo 12.svg'

// icons:
import face from '../assets/imgs/icons/facebook.svg'
import insta from '../assets/imgs/icons/instagram.svg'
import linkedin from '../assets/imgs/icons/linkedin.svg'


const Footer = () => {
    return ( 
        <>
            {/* ===== Versão para telas maiores: */}
            <div className='hidden laptop:block relative overflow-hidden'>
                    <img src={semic} alt="semicírculo" className='absolute top-24 left-36'/>
                    <img src={ondas} alt="ondas vermelhas" className='w-48 laptop:w-64 absolute -right-10 top-28'/>
                <footer className="bg-grey-lighter mt-36 h-96">

                    <div className='flex justify-evenly'>
                        <div className='mt-28'>
                            <img src={logo} alt="Logo colorido da Redcompany" />

                            <address className='mt-20'>
                                <p className='font-gothamLight'>Rua xxxxxx, 123,</p>
                                <p className='font-gothamLight'>xxxxx</p>
                                <p className='font-gothamLight'>Cidade - CEP</p>
                            </address>
                        </div>

                        <div className='mt-28'>
                            <h2 className='uppercase font-gothamBold mb-4'>entre em contato</h2>
                            <p className='font-gothamLight'>contato@redcomp.com.br</p>
                            <p className='font-gothamLight  mt-20 mb-4'>Siga-nos</p>
                            <span className='flex'>
                                <a href="/"><img src={face} alt="icone do facebook"  className='w-6'/></a>
                                <a href="/"><img src={insta} alt="icone do instagram"  className='w-6 ml-6'/></a>
                                <a href="/"><img src={linkedin} alt="icone do Linkedin"  className='w-6 ml-6'/></a>
                            </span>
                        </div>


                        <div className='flex flex-col  mt-28'>
                            <h2 className='uppercase font-gothamBold mb-4'>fale conosco</h2>
                            <a href="/" className='font-gothamLight'>Quem Somos</a>
                            <a href="/" className='font-gothamLight mt-2'>Como funciona</a>
                            <a href="/" className='font-gothamLight mt-2'>Solicitar Orçamento</a>
                        </div>

                        <div className='mt-28'>
                            <h2 className='uppercase font-gothamBold mb-4'>políticas</h2>
                            <a href="/" className='font-gothamLight'>Política de Privacidade</a>
                        </div>

                    </div>
                </footer>
            </div>

            {/* ===== Versão para telas menores: */}
            <div className=' laptop:hidden'>
                <footer className='bg-grey-lighter'>
                    
                    <div className='flex flex-col pt-16 ml-8 mt-32'>
                        <h2 className='uppercase font-gothamBold mb-4'>fale conosco</h2>
                        <a href="/" className='font-gothamLight'>Quem Somos</a>
                        <a href="/" className='font-gothamLight mt-2'>Como funciona</a>
                        <a href="/" className='font-gothamLight mt-2'>Solicitar Orçamento</a>
                    </div>

                    <div className='mt-9 ml-8'>
                        <h2 className='uppercase font-gothamBold mb-4'>políticas</h2>
                        <a href="/" className='font-gothamLight'>Política de Privacidade</a>
                    </div>
                    
                    <div className='mt-9 ml-8'>
                        <h2 className='uppercase font-gothamBold mb-4'>entre em contato</h2>
                        <p className='font-gothamLight'>contato@redcomp.com.br</p>
                    </div>

                    <div className='mt-12 ml-8 pb-28'>
                        <address>
                            <p className='font-gothamLight'>Rua xxxxxx, 123,</p>
                            <p className='font-gothamLight'>xxxxx</p>
                            <p className='font-gothamLight'>Cidade - CEP</p>
                        </address>
                    </div>

                    <div className='flex flex-col items-center justify-center relative bg-white'>
                        <img src={ondas} alt="ondas vermelhas" className='w-32 absolute bottom-48 -left-11'/>
                        <img src={logo} alt="logo colorido da empresa Redcompany"  className='mt-9'/>
                        <span className='flex mt-8 mb-14'>
                            <a href="/"><img src={face} alt="icone do facebook"  className='w-6'/></a>
                            <a href="/"><img src={insta} alt="icone do instagram"  className='w-6 ml-6'/></a>
                            <a href="/"><img src={linkedin} alt="icone do Linkedin"  className='w-6 ml-6'/></a>
                        </span>
                    </div>
                </footer>
            </div>
        </>
     );
}
 
export default Footer;