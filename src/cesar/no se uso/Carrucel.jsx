import 'bootstrap/dist/css/bootstrap.min.css'

const carrucel = () => {
  return (
    <>
    <section className='containerCarrucel'>

   <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='color'></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.postimg.cc/Dy30TvJV/146986187-225018912671501-8241824379022586542-n.jpg" className="imgCarrucel" alt="tienda" />
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/TYZ8K0MB/1366-2000.jpg" className="imgCarrucel" alt="pantalla"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/KYdSM5M1/imagen-27.png" className="imgCarrucel" alt="teclado"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden btn btn-warning">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
    </>
  )
}

export default carrucel
