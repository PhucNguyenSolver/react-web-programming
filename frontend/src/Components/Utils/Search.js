import TestCard from './TestCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import React from 'react';
let pic = "https://mona.media/wp-content/uploads/2021/10/guest-post-377x247.png";

export default function Search(){
  document.title = "Danh mục sản phẩm";
  const {name} = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/Controller/ProductController.php/?find=" + name)
    .then(res => {
      setProducts(res.data);
    })
    .catch(err => {
      alert("occur when loading products");
    })
  }, []);

  //console.log(products);


  return <>

    <div className="container" style={{marginTop: '0.5%'}}>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 row-cols-md-5 g-5 mb-5" data-masonry="{&quot;percentPosition&quot;: true }">          
          {products.map((val, index) => {
              return(
                <div className="col" key={index}>
                    <TestCard product={val}/>
                </div>
              )
          })}
      </div>
    </div>

  </>
}