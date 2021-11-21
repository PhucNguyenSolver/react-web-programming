import TestCard from '../Utils/TestCard';
import pc1 from './pc1.png';
import pc2 from './pc2.png';
import slide1 from './slideshow1.png';
import slide2 from './slideshow2.png';
import slide3 from './slideshow3.png';

let pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";

export default function Homepage(){
  document.title = "Trang chủ";
  return <>

    <div className="container" style={{marginTop: '0.5%'}}>
  <div className="row">
    <div className="col-sm-3">
      <table className="table table-bordered">
        <tbody>
          <tr><th>
              <a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Acer</a>
            </th></tr>
          <tr><th>
              <a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Asus</a>
            </th></tr>
          <tr><th>
              <a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop MSI</a>
            </th></tr>
          <tr><th>
              <a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Lenovo</a>
            </th></tr>
          <tr><th>
              <a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Dell</a>
            </th></tr>
          <tr><th>
              <a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop HP</a>
            </th></tr>
          <tr><th>
              <a href="#" style={{color: 'black', textDecoration: 'none'}}>Phu kien khac</a>
            </th></tr>
        </tbody>
      </table>
    </div>
    <div className="col-sm-6" style={{marginBottom: '0.5%'}}>
      <div className="slider-wrap">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
            <li data-target="#carousel-example-generic" data-slide-to={1} className />
            <li data-target="#carousel-example-generic" data-slide-to={2} className />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="#">
                <img className="w-100" src={slide1} alt="" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <img className="w-100" src={slide2} alt="" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <img className="w-100" src={slide3} alt="" />
              </a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel-example-generic" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel-example-generic" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div className="col-sm-3">
      <div style={{paddingBottom: '3%'}}>
        <a href="#"> <img className="img-fluid" src={pc1} alt="" /> </a>
      </div>
      <div>
        <a href="#"> <img className="img-fluid" src={pc2} alt="" /> </a>
      </div>
    </div>      
  </div>
  <nav className="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style={{backgroundColor: 'red', marginTop: '0.5%', width: '100%'}}>
    <div className="container-fluid">
      <a className="navbar-brand" style={{fontWeight: 'bold'}}>DEAL HOT TRONG THANG</a>
    </div>
  </nav>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry="{&quot;percentPosition&quot;: true }" style={{marginBottom: '2%'}}>
    {[1,2,3,4,5,1,1,1,1,1,1,1].map(() => (
      <div className="col">
        <TestCard/>
      </div>
    ))}
  </div>
  <nav className="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style={{backgroundColor: 'red', marginTop: '0.5%', width: '100%'}}>
    <div className="container-fluid">
      <a className="navbar-brand" style={{fontWeight: 'bold'}}>LAPTOP GAMING</a>
      <a className="navbar-brand" style={{fontWeight: 'bold', fontSize: 'medium', float: 'right'}} href="#">Xem tat ca</a>
    </div>
  </nav>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry="{&quot;percentPosition&quot;: true }" style={{marginBottom: '2%'}}>
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={pic} alt="" />
        <div className="card-body">
          <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
          <del className="text-muted">11.990.000d</del>
          <h5 className="d-flex justify-content-between align-items-center" style={{color: 'red', fontWeight: 'bold'}}>11,490,000d</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={pic} alt="" />
        <div className="card-body">
          <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
          <del className="text-muted">11.990.000d</del>
          <h5 className="d-flex justify-content-between align-items-center" style={{color: 'red', fontWeight: 'bold'}}>11,490,000d</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={pic} alt="" />
        <div className="card-body">
          <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
          <del className="text-muted">11.990.000d</del>
          <h5 className="d-flex justify-content-between align-items-center" style={{color: 'red', fontWeight: 'bold'}}>11,490,000d</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={pic} alt="" />
        <div className="card-body">
          <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
          <del className="text-muted">11.990.000d</del>
          <h5 className="d-flex justify-content-between align-items-center" style={{color: 'red', fontWeight: 'bold'}}>11,490,000d</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={pic} alt="" />
        <div className="card-body">
          <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
          <del className="text-muted">11.990.000d</del>
          <h5 className="d-flex justify-content-between align-items-center" style={{color: 'red', fontWeight: 'bold'}}>11,490,000d</h5>
        </div>
      </div>
    </div>                   
  </div>
</div>


  </>
}