
// paginas:
import Home from './containers/Home';
import PorqueContratar from './containers/WhyHire';
import Implantação from './containers/Implantação';
import Orçamento from './containers/Orçamento';
import Carrossel from './containers/Carrossel';
import Consultor from './containers/Consultor';
import About from './containers/About';

export default function App() {
  return (
    <>
      <Home/>
      <PorqueContratar/>
      <Implantação/>
      <Orçamento/>
      <Carrossel/>
      <Consultor/>
      <About/>
    </>
  )
}
