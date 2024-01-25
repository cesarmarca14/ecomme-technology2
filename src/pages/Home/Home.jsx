import Carru from "../../Carru";
import Categoria from "../../cristhian/Categoria";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
import SliderCesar from "../../cesar/SliderCesar";



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
