module.exports = function reverse (n) {
    let arr = String(n).split('');
    let arrReverse = [];
    let newArr = '';
    let result = '';
    if (arr[0] !== '-') {
        arrReverse = arr.reverse();
        newArr = arrReverse.join('');
        result = Number(newArr);
    } else {
       arr.shift();
       arrReverse = arr.reverse();
       newArr = arrReverse.join('');
       result = Number(newArr);
    }
    return result;
}
