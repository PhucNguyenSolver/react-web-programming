import TestCard from '../Utils/TestCard';
import pc1 from './pc1.png';
import pc2 from './pc2.png';
import EditSlide from './EditSlide'

const brands = [
  { name: 'Laptop Acer', url: '#'},
  { name: 'Laptop Asus', url: '#'},
  { name: 'Laptop MSI', url: '#'},
  { name: 'Laptop Lenovo', url: '#'},
  { name: 'Laptop Dell', url: '#'},
  { name: 'Laptop HP', url: '#'},
];
export default function Homepage(){
  document.title = "Trang chủ";
  return <>

  <div className="container" style={{marginTop: '0.5%'}}>
    <div className="row">
      <div className="col-sm-3">
        <table className="table table-bordered table-hover">
          <tbody>
            {brands.map(({name, url}) => (
              <tr key={name}>
                <th><a href={url} style={{color: 'black', textDecoration: 'none'}}>{name}</a></th>
              </tr>
            ))}
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
  <nav className="bg-primary rounded mb-3 navbar navbar-expand navbar-dark" aria-label="Second navbar example" style={{marginTop: '0.5%', width: '100%'}}>
    <div className="container-fluid">
      <a className="navbar-brand fw-bold">DEAL HOT TRONG THÁNG</a>
    </div>
  </nav>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-5" data-masonry="{&quot;percentPosition&quot;: true }" style={{marginBottom: '2%'}}>
    {[1,2,3,4,5].map(() => (
      <div className="col">
        <TestCard/>
      </div>
    ))}
  </div>
  <nav className="bg-primary rounded mb-3 navbar navbar-expand navbar-dark" aria-label="Second navbar example" style={{marginTop: '0.5%', width: '100%'}}>
    <div className="container-fluid">
      <a className="navbar-brand fw-bold">LAPTOP GAMING</a>
      <a className="navbar-brand" style={{ fontSize: 'medium', float: 'right'}} href="#">Xem tất cả &gt;&gt;</a>
    </div>
  </nav>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-5" data-masonry="{&quot;percentPosition&quot;: true }" style={{marginBottom: '2%'}}>
    {[1,2,3,4,5].map(() => (
      <div className="col">
        <TestCard/>
      </div>
    ))}
  </div>
</div>


  </>
}