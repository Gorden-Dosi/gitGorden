const { range } = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  return range(2,upTo+1,2);
}

module.exports = getListMultiplesOfTwo;