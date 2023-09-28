// Cart.js
import React, { useReducer } from 'react';
import { useCart } from 'react-use-cart';
import cartReducer, { cartActionTypes } from '../../redusers/cartReduser';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    emptyCart,
    removeItem,
  } = useCart();

  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  // const updateItemQuantity = (id, quantity) => {
  //   dispatch({
  //     type: cartActionTypes.UPDATE_QUANTITY,
  //     payload: { id, quantity },
  //   });
  // };


  // const removeItem = (id) => {
  //   dispatch({
  //     type: cartActionTypes.REMOVE_ITEM,
  //     payload: id,
  //   });
  // };

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.img}
                        style={{ height: '6rem' }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td> Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)
                        
                        }
                        
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        
                        onClick={() =>  removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: {cartTotal} com</h2>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              emptyCart();
              dispatch({ type: cartActionTypes.EMPTY_CART });
            }}
          >
            Clear Cart
          </button>
          <button className="btn btn-primary ms-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
