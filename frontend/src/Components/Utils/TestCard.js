import {useState} from 'react';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function newCost(oldCost, discount) {
  return oldCost*(1-discount/100);
}

// Laptop Gaming MSI Bravo 15 B5DD 028VN
// const defaultItem = {
//   id: 1,
//   img: "https://product.hstatic.net/1000026716/product/028vn_710aac8009614321ba3103b049a0a3c4_large.png",
//   name: "Laptop Gaming Acer Aspire 7 A715 42G R6ZR",
//   price: 24990000,
//   sale: 23990000,
//   discount: true
// };

export default function TestCard(props) {
  const product = props.product;
  // const {id, img, name, price, sale, discount} = defaultItem;
  const handleClick = () => {
    document.location.href = '/product-info/' + product.productId;
  }
  console.log(product.productId);

  return (<>
    <div class="card shadow border-0" style={{cursor: 'pointer'}} onClick={handleClick}>
      <img class="card-img-top" src={product.image1} alt="" />
      <div class="card-body bg bg-light">
        <h5 class="card-name">{product.name}</h5>
        {product.discount && 
        <del class="card-text">{numberWithCommas(product.oldCost) + 'đ'}</del>}
        <h4 class="card-text text-primary text-lg">{numberWithCommas(newCost(product.oldCost,product.discount)) + 'đ'}</h4>
      </div>
    </div>
  </>);
}