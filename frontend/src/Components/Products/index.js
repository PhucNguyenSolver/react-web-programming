import TestCard from '../Utils/TestCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import React from 'react';
let pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";

export default function Products(){
  document.title = "Danh mục sản phẩm";
  const {manu} = useParams();
  const [products, setProducts] = useState([]);
  const [productsPriceAsc, setProductsPriceAsc] = useState([]);
  const [productsPriceDesc, setProductsPriceDesc] = useState([]);
  const [productsNameAsc, setProductsNameAcs] = useState([]);
  const [productsNameDesc, setProductsNameDesc] = useState([]);
  const [sortOption, setSortOption] = useState({value: 'sort-nothing'});
  useEffect(() => {
    axios.get("/Controller/ProductController.php/?rq=manu&name=" + manu)
    .then(res => {
      setProducts(res.data);
    })
    .catch(err => {
      alert("occur when loading products");
    })
  }, []);

  useEffect(() => {
    axios.get("/Controller/ProductController.php/?orderby=newCost&a=0&b=15&asc=asc&groupby=" + manu)
    .then(res => {
      setProductsPriceAsc(res.data);
    })
    .catch(err => {
      alert("occur when loading products by ascending price");
    })
  }, []);

  useEffect(() => {
    axios.get("/Controller/ProductController.php/?orderby=newCost&a=0&b=15&asc=desc&groupby=" + manu)
    .then(res => {
      setProductsPriceDesc(res.data);
    })
    .catch(err => {
      alert("occur when loading products by descending price");
    })
  }, []);

  useEffect(() => {
    axios.get("/Controller/ProductController.php/?orderby=name&a=0&b=15&asc=asc&groupby=" + manu)
    .then(res => {
      setProductsNameAcs(res.data);
    })
    .catch(err => {
      alert("occur when loading products by ascending name");
    })
  }, []);

  useEffect(() => {
    axios.get("/Controller/ProductController.php/?orderby=name&a=0&b=15&asc=desc&groupby=" + manu)
    .then(res => {
      setProductsNameDesc(res.data);
    })
    .catch(err => {
      alert("occur when loading products by descending name");
    })
  }, []);
  //console.log(products);


  const handleSort = (obj) => {
    if(sortOption.value == "sort-nothing") {
      return(
        products.map((val, index) => (
          <div className="col" key={index}>
            <TestCard product={val}/>
          </div>
        ))
      )
    }
    else if(sortOption.value == "price-ascending") {
      return(
        productsPriceAsc.map((val, index) => (
          <div className="col" key={index}>
            <TestCard product={val}/>
          </div>
        ))
      )
    }
    else if(sortOption.value == "price-descending") {
      return(
        productsPriceDesc.map((val, index) => (
          <div className="col" key={index}>
            <TestCard product={val}/>
          </div>
        ))
      )
    }
    else if(sortOption.value == "title-ascending") {
      return(
        productsNameAsc.map((val, index) => (
          <div className="col" key={index}>
            <TestCard product={val}/>
          </div>
        ))
      )
    }
    else if(sortOption.value == "title-descending") {
      return(
        productsNameDesc.map((val, index) => (
          <div className="col" key={index}>
            <TestCard product={val}/>
          </div>
        ))
      )
    }
    else return(
      <p>Loading...</p>
    )
    
  }



  return <>

    <div className="container" style={{marginTop: '0.5%'}}>
      <nav className="navbar navbar-expand navbar-dark" aria-label="Second navbar example" style={{marginTop: '0.5%'}}>
        <div className="container-fluid">
          <a style={{fontSize: '150%', fontWeight: 'bold'}}>Laptop {manu}</a>
        </div>
      </nav>

      <div className="col-md-12" style={{marginBottom: '1%',textAlign: 'right'}}>
        <div className="row">
          <div className="col-sm-12">
            <div className="browse-tags pull-right">
              <span>Sắp xếp theo</span>{' '}
              <span className="custom-dropdown custom-dropdown--white">
                <select id="sortOption" className="sort-by custom-dropdown__select custom-dropdown__select--white" onChange={(event) => handleSort(setSortOption({value: event.target.value}))} value={sortOption.value}>
                  <option value="sort-nothing">Không lựa chọn</option>
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

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5 mb-5" data-masonry="{&quot;percentPosition&quot;: true }">          
          {handleSort()}
      </div>

      <div className="d-flex justify-content-center">
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
    </div>

  </>
}