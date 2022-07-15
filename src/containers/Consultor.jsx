// svgs:
import ball2 from '../assets/imgs/svgs/Grupo 8.svg'
import ondas2 from '../assets/imgs/svgs/Grupo 9.svg'


const Consultor = () => {
    return ( 
        <section className='relative overflow-hidden'>
            <div className="bg-bordo laptop:w-[85%] laptop:h-[32.5em] shadow-md mx-auto mt-32 py-14 px-8 laptop:p-8 flex flex-col items-start laptop:items-center justify-center relative">
                <h1 className='text-white font-poppins laptop:text-center text-2xl max-w-3xl mx-auto mb-10 text-base laptopG:text-4xl'>Fale com um especialista e veja como podemos <span className='font-bold'>alavancar</span> e <span className='font-bold'>transformar</span> o seu negócio através de <span className='font-bold'>excelência</span> e <span className='font-bold'>pontualidade</span> na implantação.</h1>
                <button className='btn-secondary'>Fale com um consultor</button>
            </div>

            <img src={ball2} alt="bola amarela com ondas" className='w-36 laptop:w-64 top-24 laptop:top-16 -left-2 laptop:left-10 absolute'/>
            <img src={ondas2} alt="bola amarela com ondas" className='w-24 laptop:w-60 bottom-6 -right-3 laptopG:right-4 absolute'/>
            
        </section>
     );
}
 
export default Consultor;