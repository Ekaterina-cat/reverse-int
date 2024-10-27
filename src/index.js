module.exports = function reverse (n) {
  let num = n.toString().split('');
    if(num[0] === '-'){
      num.splice(0, 1)
    }
    if(num[num.length - 1] === '0'){
      num.splice((num.length - 1), 1)
    }
  return Number(num.reverse().join(''));
}
