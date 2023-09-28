// import React from 'react';
// import { useCart } from 'react-use-cart';

// const Item = (props) => {
//   const { addItem } = useCart()

//   return (
//     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
//       <div className="card p-0 overflow-hidden h-100 shadow">
//         <img src={props.img} width={200} height={200} className="card-img-top img-fluid" alt="" />
//         <div className="card-body text-center">
//           <h5 className="card-title">{props.title}</h5>
//           <h5 className="card-text">{props.price} com</h5>
//           <p className="card-text">{props.desc}</p>
//           <button
//             className="btn btn-success"
//             onClick={()=>addItem(props.item)}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;

import React from 'react';
import { useCart } from 'react-use-cart';

const Item = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} width={200} height={200} className="card-img-top img-fluid" alt="" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-text">{props.price} com</h5>
          <p className="card-text">{props.desc}</p>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

