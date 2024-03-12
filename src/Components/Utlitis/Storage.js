// The getStorageValues function find a value in local storage if the function find any trueth vlaue then is convert it a javascript format else it could't find any trueth value it return a empty array
function getStorageValues() {
    const isValueExist = localStorage.getItem("cart");
    if (isValueExist) {
        return JSON.parse(isValueExist)
    }
    return [];
}
// The setValueInStorage function get a paramiter then the function push the paramiter value in localStorage //
function setValueInStorage(cart) {
    const jsonFormatObj = JSON.stringify(cart);
    localStorage.setItem("cart",jsonFormatObj);
}
function addToValues(id) {
    const value = getStorageValues();
    value.push(id);
    setValueInStorage(value);
}
export { addToValues,getStorageValues }