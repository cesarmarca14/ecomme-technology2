import { categoriaApi } from "./Categorias1"

const Categorias = () => {
  return (
    <div className="containerCategorias">
      {categoriaApi.map((item)=>(
        <div>
            <img src={item.img} alt="" />
            <h2>{item.Id}</h2>
            
        </div>
     

      ))}
    </div>
  )
}

export default Categorias
