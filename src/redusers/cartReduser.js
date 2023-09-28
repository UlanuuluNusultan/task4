// CartReducer.js
export const cartActionTypes = {
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    UPDATE_QUANTITY: "UPDATE_QUANTITY",
    EMPTY_CART: "EMPTY_CART",
  };
  
  const cartReducer = (state, action) => {
    switch (action.type) {
      case cartActionTypes.ADD_ITEM:
        // Добавляем товар в корзину или увеличиваем количество, если товар уже есть
        const updatedItems = [...state.items];
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingItemIndex !== -1) {
          updatedItems[existingItemIndex].quantity += 1;
        } else {
          updatedItems.push({ ...action.payload, quantity: 1 });
        }
  
        return {
          ...state,
          items: updatedItems,
        };
  
      case cartActionTypes.REMOVE_ITEM:
        // Удаляем товар из корзины
        const filteredItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          items: filteredItems,
        };
  
      case cartActionTypes.UPDATE_QUANTITY:
        // Обновляем количество товара
        const updatedItemQuantity = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
  
        return {
          ...state,
          items: updatedItemQuantity,
        };
  
      case cartActionTypes.EMPTY_CART:
        // Очищаем корзину
        return {
          ...state,
          items: [],
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  