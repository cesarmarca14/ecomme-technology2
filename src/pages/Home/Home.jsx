import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
import SliderCesar from "../../cesar/SliderCesar";
import '../../cesar/Categorias.css'
import '../../cesar/ModoDarck1.css'
import '../../styles/Slider.css'
import Galeria from "../../cristhian/Galeria";
import Especificaciones from "../../cristhian/Especificaciones";


const Home = ({filteredApiNew}) => {
  return (
    <>
    
      <Carru />
      <Novedades items={filteredApiNew} />
      <SliderCesar />
      <Slider />
     
     
      
    
    </>
  );
};

export default Home;
