import TestCard from '../Utils/TestCard';
let pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png"

export default function Products(){
  document.title = "Danh mục sản phẩm";
  return <>

    <div className="container" style={{marginTop: '0.5%'}}>
      <nav className="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style={{marginTop: '0.5%'}}>
        <div className="container-fluid">
          <a style={{fontSize: '150%', fontWeight: 'bold'}}>Laptop Gaming Asus</a>
        </div>
      </nav>

      <div className="col-md-12" style={{marginBottom: '1%',textAlign: 'right'}}>
        <div className="row">
          <div className="col-sm-12">
            <div className="browse-tags pull-right">
              <span>Sắp xếp theo</span>
              <span className="custom-dropdown custom-dropdown--white">
                <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                  <option value="price-ascending">Giá tăng dần</option>
                  <option value="price-descending">Giá giảm dần</option>
                  <option value="title-ascending">Tên A - Z</option>
                  <option value="title-descending">Tên Z - A</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5" data-masonry="{&quot;percentPosition&quot;: true }" style={{marginBottom: '2%'}}>          
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(() => (
          <div className="col">
            <TestCard/>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation example">
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

  </>
}
