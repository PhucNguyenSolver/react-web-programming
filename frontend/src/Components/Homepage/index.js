import TestCard from '../Utils/TestCard';
import pc1 from './pc1.png';
import pc2 from './pc2.png';
import EditSlide from './EditSlide'

let pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";

export default function Homepage(){
  document.title = "Trang chủ";
  return <>

  <div className="container" style={{marginTop: '0.5%'}}>
    <div className="row">
      <div className="col-sm-3">
        <table className="table table-bordered">
          <tbody>
            <tr><th><a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Acer</a></th></tr>
            <tr><th><a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Asus</a></th></tr>
            <tr><th><a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop MSI</a></th></tr>
            <tr><th><a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Lenovo</a></th></tr>
            <tr><th><a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop Dell</a></th></tr>
            <tr><th><a href="#" style={{color: 'black', textDecoration: 'none'}}>Laptop HP</a></th></tr>
          </tbody>
        </table>
      </div>
      <div className="col-sm-6" style={{marginBottom: '0.5%'}}>
        <EditSlide/>
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
      <a className="navbar-brand" style={{fontWeight: 'bold'}}>DEAL HOT TRONG THÁNG</a>
    </div>
  </nav>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry="{&quot;percentPosition&quot;: true }" style={{marginBottom: '2%'}}>
    {[1,2,3,4,5].map(() => (
      <div className="col">
        <TestCard/>
      </div>
    ))}
  </div>
  <nav className="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style={{backgroundColor: 'red', marginTop: '0.5%', width: '100%'}}>
    <div className="container-fluid">
      <a className="navbar-brand" style={{fontWeight: 'bold'}}>LAPTOP GAMING</a>
      <a className="navbar-brand" style={{fontWeight: 'bold', fontSize: 'medium', float: 'right'}} href="#">Xem tất cả</a>
    </div>
  </nav>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry="{&quot;percentPosition&quot;: true }" style={{marginBottom: '2%'}}>
    {[1,2,3,4,5].map(() => (
      <div className="col">
        <TestCard/>
      </div>
    ))}
  </div>
</div>


  </>
}