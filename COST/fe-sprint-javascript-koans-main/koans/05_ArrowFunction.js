describe('화살표 함수에 관해서', function () {
  it('함수 표현식 사용법을 복습합니다', function () {
    const add = function (x, y) {
      return x + y
    }
 // const add = (x.y) => 
 // 
 // 다른 언어에서 람다함수를 통해 유행하던 문법, 함수 지향적인 코딩
    expect(add(5, 8)).to.eql(13)
  })
 // 객체에 메서드를 사용하려면 화살표 함수를 사용하면 안됨
 // 새로 생긴 class 문법을 보면 좋음, this 바인딩도 가능
  it('화살표 함수 사용법을 익힙니다', function () {
    // function 키워드를 생략하고 화살표 => 를 붙입니다
    const add = (x, y) => {
      return x + y
    }
    expect(add(10, 20)).to.eql(30)

    // 리턴을 생략할 수 있습니다
    const subtract = (x, y) => x - y
    expect(subtract(10, 20)).to.eql(-10)

    // 필요에 따라 소괄호를 붙일 수도 있습니다
    const multiply = (x, y) => (x * y)
    expect(multiply(10, 20)).to.eql(200)

    // 파라미터가 하나일 경우 소괄호 생략이 가능합니다
    const divideBy10 = x => x / 10
    expect(divideBy10(100)).to.eql(10)
  })

  it('화살표 함수를 이용해 클로저를 표현합니다', function () {
    const adder = x => {
      return y => {
        return x + y
      }
    }


    expect(adder(50)(10)).to.eql(60)

    const subtractor = x => y => {
      return x - y
    }

    expect(subtractor(50)(10)).to.eql(40)

    const htmlMaker = tag => textContent => `<${tag}>${textContent}</${tag}>`
    expect(htmlMaker('div')('code states')).to.eql('<div>code states</div>')

    const liMaker = htmlMaker('li')
    expect(liMaker('1st item')).to.eql('<li>1st item</li>')
    expect(liMaker('2nd item')).to.eql('<li>2nd item</li>')
  })
})