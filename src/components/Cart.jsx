import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { addToCart} from '../Redux/cart/cartslice'

function Cart() {
    const carted = useSelector((state) => state.cart.basket)
    const dispatch = useDispatch()
    let cart = [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 59.99
        },
        {
          id: 2,
          name: "Smartphone",
          price: 699.99
        },
        {
          id: 3,
          name: "Gaming Mouse",
          price: 29.99
        },
        {
          id: 4,
          name: "Laptop",
          price: 999.99
        },
        {
          id: 5,
          name: "Bluetooth Speaker",
          price: 49.99
        },
        {
          id: 6,
          name: "Smartwatch",
          price: 199.99
        },
        {
          id: 7,
          name: "External Hard Drive",
          price: 89.99
        },
        {
          id: 8,
          name: "4K Monitor",
          price: 299.99
        },
        {
          id: 9,
          name: "Mechanical Keyboard",
          price: 79.99
        },
        {
          id: 10,
          name: "Action Camera",
          price: 249.99
        }
      ]


    //   const handleAddItems = (items) => {
        
    //   }

      
  return (
    <div >
        <h1>Home Page</h1>
        <div >
            {
                cart.map((items) => (
                    <div key={items.id} style={{height:'3cm', width:'4cm', backgroundColor:'blue',marginTop:'1cm'}}>
                        {items.name}
                       <div> {items.price}</div>
                        <button onClick={() =>dispatch(addToCart(items))}>add to cart</button>
                    </div>

                ))
            }
        </div>
        <div>
            {
                carted.map((item) =>
                    (<div>{item.name}</div>)
                )
            }
        </div>
    </div>
  )
}

export default Cart