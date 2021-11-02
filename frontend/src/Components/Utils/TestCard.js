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
  const item = defaultItem;
  return (<>
    <div class="card shadow"
    // TODO: style margin
    // <div class="card shadow m-2 m-md-2 m-lg-3 mx-xl-5"
      onClick={() => console.log("Go to /products/" + item.id)}
    >
      <img class={"card-img-top"} src={item.img} alt="" />
      <div class="card-body bg bg-light">
        <h5 class="card-name">{item.name}</h5>
        <del class="card-text">{numberWithCommas(item.price) + 'đ'}</del>
        <h4 class="card-text text-primary text-lg">{numberWithCommas(item.sale) + 'đ'}</h4>
      </div>
    </div>
  </>);
}