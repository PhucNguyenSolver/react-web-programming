import React, {useState} from 'react';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CartItem(props) {
    const {cart} = props;
    const {handleIncrement} = props;
    const {handleDecrement} = props;
    const {removeItem} = props;
    return (
        <div class="row justify-content-center">
            {cart.map((item) => {
                return (
                    <div class="row border-bottom border-3">
                        <div class="col-md-2 col-sm-2 col-2">
                            <img src={item.image} alt={item.name} class="img-fluid"/>
                        </div>
                        <div class="col-md-5 align-self-center col-4 col-sm-4">
                            <p class="text-center"> {item.name}</p>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <p class="text-center">{numberWithCommas(item.price)}</p>
                        </div>
                        <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <div class="input-group col">
                                <button class="btn btn-primary" onClick={() => handleDecrement(item.id)}>-</button>
                                <div class="form-control text-center">{item.quantity}</div>
                                <button class="btn btn-primary" onClick={() => handleIncrement(item.id)}>+</button>
                            </div>
                        </div>
                        {/* <div class="col-md-2 align-self-center col-2 col-sm-2">
                            <p class="text-center">Thành tiền</p>
                        </div> */}
                        <div class="col-md-1 align-self-center col-2 col-sm-2 border">
                        <button onClick={()=> removeItem(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </button>
                        </div>
                    </div>
                );
            })}
            
        </div>
    )
}