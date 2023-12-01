import { getStorageCart } from "../components/Utility/Fakebd"

export const CartLoaders = async() => {
    const productLoaders = await fetch(`tShart.json`)
    const products = await productLoaders.json()
    const storageCart = getStorageCart()
    let saveCart = []
    for (const id in storageCart) {
        const addedCart = products.find(product => product._id === id)
        if (addedCart) {
            const quantity = storageCart[id]
            addedCart.quantity = quantity
            saveCart.push(addedCart)
         }
    }
    return {products, saveCart}
}