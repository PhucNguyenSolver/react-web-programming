import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import pic from 'https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png'
import pc1 from './pc1.png';
import pc2 from './pc2.png';
import slide1 from './slideshow1.png';
import slide2 from './slideshow2.png';
import slide3 from './slideshow3.png';

export default function Homepage(){
  document.title = "Trang chủ";
  return <>
    <Header></Header>

    <div class="container" style="margin-top: 0.5%;">
      <div class="row">

        <div class="col-sm-3">
          <table class="table table-bordered">
            <tbody>
              <tr><th>
                <a href="#" style="color: black; text-decoration: none;">Laptop Acer</a>
              </th></tr>
              <tr><th>
                <a href="#" style="color: black; text-decoration: none;">Laptop Asus</a>
              </th></tr>
              <tr><th>
                <a href="#" style="color: black; text-decoration: none;">Laptop MSI</a>
              </th></tr>
              <tr><th>
                <a href="#" style="color: black; text-decoration: none;">Laptop Lenovo</a>
              </th></tr>
              <tr><th>
                <a href="#" style="color: black; text-decoration: none;">Laptop Dell</a>
              </th></tr>
              <tr><th>
                <a href="#" style="color: black; text-decoration: none;">Laptop HP</a>
              </th></tr>
              <tr><th>
                <a href="#" style="color: black; text-decoration: none;">Phu kien khac</a>
              </th></tr>
            </tbody>
          </table>
        </div>

        <div class="col-sm-6" style="margin-bottom: 0.5%;">
          <div class="slider-wrap">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1" class></li>
                <li data-target="#carousel-example-generic" data-slide-to="2" class></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <a href="#">
                    <img class="w-100" src={slide1} alt="..."/>
                  </a>
                </div>
                <div class="carousel-item">
                  <a href="#">
                    <img class="w-100" src={slide2} alt="..."/>
                  </a>
                </div>
                <div class="carousel-item">
                  <a href="#">
                    <img class="w-100" src={slide3} alt="..."/>
                  </a>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel-example-generic" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel-example-generic" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div style="padding-bottom: 3%;" >
            <a href="#"> <img  class="img-fluid" src={pc1} alt=""/> </a>
          </div>
          <div>
            <a href="#"> <img  class="img-fluid" src={pc2} alt=""/> </a>
          </div>
        </div>      
      </div>

      <nav class="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style="background-color: red; margin-top: 0.5%; width: 100%;">
        <div class="container-fluid">
          <a class="navbar-brand" style="font-weight: bold;">DEAL HOT TRONG THANG</a>
        </div>
      </nav>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry='{"percentPosition": true }' style="margin-bottom: 2%;">
        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>                   
      </div>

      <nav class="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style="background-color: red; margin-top: 0.5%; width: 100%;">
        <div class="container-fluid">
          <a class="navbar-brand" style="font-weight: bold;">LAPTOP GAMING</a>
          <a class="navbar-brand" style="font-weight: bold; font-size: medium; float: right;" href="#">Xem tat ca</a>
        </div>
      </nav>
        
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry='{"percentPosition": true }' style="margin-bottom: 2%;">
        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" src={pic} alt=""/>
            <div class="card-body">
              <h5 class="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del class="text-muted">11.990.000d</del>
              <h5 class="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>                   
      </div>
    </div>
    
    <Footer></Footer>
  </>
}