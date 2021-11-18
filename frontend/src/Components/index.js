import Header from "../Utils/Header";
import Footer from "../Utils/Footer";
import pic from 'https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png'

export default function Products(){
  document.title = "Danh mục sản phẩm";
  return <>
    <Header></Header>

    <div className="container" style="margin-top: 0.5%;">
      <nav className="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style="margin-top: 0.5%;">
        <div className="container-fluid">
          <a style="font-size: 150%; font-weight: bold;">Laptop Gaming Asus</a>
        </div>
      </nav>

      <div className="col-md-12" style="margin-bottom: 1%; text-align: right;">
        <div className="row">
          <div className="col-sm-12">
            <div className="browse-tags pull-right">
              <span>Sap xep theo</span>
              <span className="custom-dropdown custom-dropdown--white">
                <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                  <option value="price-ascending">Gia tang dan</option>
                  <option value="price-descending">Gia giam dan</option>
                  <option value="title-ascending">Ten A - Z</option>
                  <option value="title-descending">Ten Z - A</option>
                  <option value="selling">Ban chay nhat</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry='{"percentPosition": true }' style="margin-bottom: 2%;">           

        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" src={pic} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Laptop Acer Aspire 3 A315 56 37DV</h5>
              <del className="text-muted">11.990.000d</del>
              <h5 className="d-flex justify-content-between align-items-center" style="color: red; font-weight: bold;">11,490,000d</h5>
            </div>
          </div>
        </div>    
      </div>

      <nav aria-label="Page navigation example" style="float: right;">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>      
    </div>

    <Footer></Footer>
  </>
}