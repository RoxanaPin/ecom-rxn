import { cartContext } from '@/contexts';
import { useContext, useState } from 'react';
import { baseUrl } from '..';

export const useAddToCart = () => {
  const { cartProducts, cartId, userId, setCartProducts } =
    useContext(cartContext);

  // user intercation: usually loading false
  // auto intercation: usually loading true
  /**
 *  {
        userId:3,
        date:2019-12-10,
        products:[{productId:1,quantity:3}]
    }
   */
  const [loading, setLoading] = useState(false);

  const addToCart = (product, quantity = 1) => {
    // clone cartProducts from state
    // shallow copy
    const newProducts = [...cartProducts];

    // determine if the product to be added
    // is in the cart
    const cartProduct = newProducts.find(({ productId }) => {
      return productId === product.id;
    });

    if (cartProduct) {
      // if in cart, update the product object reference
      // quantity
      cartProduct.quantity += quantity;
    } else {
      // if not in cart, push new object
      newProducts.push({
        productId: product.id,
        quantity,
      });
    }

    console.log(newProducts);

    // prepare payload
    const payload = {
      cartId,
      userId,
      date: new Date().toLocaleDateString().replaceAll('/', '-'),
      products: newProducts,
    };

    // mark as loading
    setLoading(true);

    // make request
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
      .then((response) => {
        // .json is also a promise
        return response.json();
      })
      .then((cart) => {
        console.log(cart);
        setCartProducts(newProducts);
      })
      .finally(() => {
        setLoading(false);
      });

    // synchronously return added product
    // (doesn't wait for request)
    return {
      productId: product.id,
      quantity,
    };
  };

  return { loading, addToCart };
};
