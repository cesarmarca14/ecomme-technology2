import Carru from "../../Carru";
import Novedades from "../../cristhian/Novedades";
import Slider from "../../cristhian/Slider";
import SliderCesar from "../../cesar/SliderCesar";
import '../../cesar/ModoDarck1.css'



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
