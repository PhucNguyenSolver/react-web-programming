import {useState} from 'react';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Laptop Gaming MSI Bravo 15 B5DD 028VN
const defaultItem = {
  id: 1,
  img: "https://product.hstatic.net/1000026716/product/028vn_710aac8009614321ba3103b049a0a3c4_large.png",
  name: "Laptop Gaming Acer Aspire 7 A715 42G R6ZR",
  price: 24990000,
  sale: 23990000,
  discount: true
};

export default function TestCard() {
  const {id, img, name, price, sale, discount} = defaultItem;
  const handleClick = () => {
    document.location.href = '/product-info/' + id;
  }

  return (<>
    <div class="card shadow border-0" style={{cursor: 'pointer'}} onClick={handleClick}>
      <img class="card-img-top" src={img} alt="" />
      <div class="card-body bg bg-light">
        <h5 class="card-name">{name}</h5>
        {discount && 
        <del class="card-text">{numberWithCommas(price) + 'đ'}</del>}
        <h4 class="card-text text-primary text-lg">{numberWithCommas(sale) + 'đ'}</h4>
      </div>
    </div>
  </>);
}