export const objToParameter = (option) => {
    let param = '';
    if (option) {
        param = JSON.stringify(option).replace(/["{}]/g, '').replace(/:/g, '=').replace(/,/g, '&')
    }
    return param
}
