import Hero from '../components/Beranda/Hero';
import About from '../components/Beranda/about';
import Navbar from '../components/Beranda/Navbar';
import Content1 from '../components/Beranda/Content1';
import Footer from '../components/Beranda/Footer';

const Beranda = () => {

    return (
      <div> 
       <Navbar />
       <Hero /> 
       <About />
       <Content1 />
       <Footer />
      </div>
    )
  }
  
  export default Beranda;