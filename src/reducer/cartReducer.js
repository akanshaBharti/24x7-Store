const cartReducer = (state, action) => {
  console.log("Reducer State:", state);
  console.log("Action Type:", action.type);
  console.log("Action Payload:", action.payload);
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }

          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
        // cart: [cartProduct],
      };
    }
  }

  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialValue, curElem) => {
      let { amount } = curElem;
      initialValue = initialValue + amount;
      return initialValue;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if(action.type === "CART_TOTAL_PRICE"){
    let total_amount = state.cart.reduce((initialValue, curElem) => {
      let {price, amount} = curElem;

      initialValue = initialValue + price * amount;
      return initialValue;
    }, 0);

    
    return {
      ...state,
      total_amount: total_amount,
      
    }
  }

  return state;
};

export default cartReducer;
