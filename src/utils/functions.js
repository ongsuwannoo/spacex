export const objToParameter = (option) => {
    let param = '';
    if (option) {
        param = JSON.stringify(option).replace(/["{}]/g, '').replace(/:/g, '=').replace(/,/g, '&')
    }
    return param
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
