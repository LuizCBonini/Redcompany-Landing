// svgs:
import ball2 from '../assets/imgs/svgs/Grupo 8.svg'
import ondas2 from '../assets/imgs/svgs/Grupo 9.svg'

// components:
import Button from '../components/button';

const Consultor = () => {
    return ( 
        <section>
            <div className="bg-bordo w-[85%] h-[32.5em] shadow-md mx-auto mt-32 p-8 flex flex-col items-center justify-center relative">
                <h1 className='text-white font-poppins text-center text-4xl max-w-3xl mx-auto mb-10'>Fale com um especialista e veja como podemos <span className='font-bold'>alavancar</span> e <span className='font-bold'>transformar</span> o seu negócio através de <span className='font-bold'>excelência</span> e <span className='font-bold'>pontualidade</span> na implantação.</h1>
                <img src={ball2} alt="bola amarela com ondas" className='w-64 -top-12 -left-10 absolute'/>
                <img src={ondas2} alt="bola amarela com ondas" className='w-60 bottom-6 -right-8 absolute'/>
                <Button>Fale com um consultor</Button>
            </div>
        </section>
     );
}
 
export default Consultor;