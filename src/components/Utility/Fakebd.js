const AddToLocalStorage = (id) => {
    let TshartCart = getStorageCart();
    const quantity =TshartCart[id]
    if (quantity) {
     const newQuantity = quantity + 1
         TshartCart[id]=newQuantity
    }
    else {
        TshartCart[id] = 1;
    }
    localStorage.setItem('TshartCart',JSON.stringify(TshartCart))
}

const getStorageCart = () => {
    let TshartCart = {};
    const storageCart = localStorage.getItem('TshartCart')
    if (storageCart) {
        TshartCart =JSON.parse(storageCart)
    }
    return TshartCart
}
const removeTodb = (id) => {
    const storageCart=  localStorage.getItem('TshartCart');
      if (storageCart) {
          const shoppingCart = JSON.parse(storageCart);
          if (id in shoppingCart) {
              delete shoppingCart[id];
              localStorage.setItem('TshartCart', JSON.stringify(shoppingCart));
          }
  }
  }
export { AddToLocalStorage,getStorageCart,removeTodb }

 