import { json } from "react-router-dom"
const getStoreCartList = () => {
    const storedListStr = localStorage.getItem('cart-list')
    if (storedListStr) {
        const storeListObj = JSON.parse(storedListStr)
        return storeListObj
    }
    else {
        return []
    }
}
const getStoreWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storeListObj = JSON.parse(storedListStr)
        return storeListObj
    }
    else {
        return []
    }
}

const addToStoreCartList = (id) => {
    const storedList = getStoreCartList()
    if (storedList.includes(id)) {
        console.log(id)
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list',storedListStr)
    }
}
const addToStoreWishList = (id) => {
    const storedList = getStoreWishList()
    if (storedList.includes(id)) {
        console.log(id)
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list',storedListStr)
    }
}

export {addToStoreCartList,addToStoreWishList,getStoreCartList,getStoreWishList}