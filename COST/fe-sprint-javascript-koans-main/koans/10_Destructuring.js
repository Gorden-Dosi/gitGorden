describe('구조 분해 할당(Destructing Assignment)에 관해서', () => {
  it('배열을 분해합니다', () => {
    const array = ['code', 'states', 'im', 'course']

    const [first, second] = array
    expect(first).to.eql('code')
    expect(second).to.eql('states')

    const result = []
    function foo([first, second]) {
      result.push(second)
      result.push(first)
    }

    foo(array)
    expect(result).to.eql(['states', 'code'])
  })

  it('rest/spread 문법을 배열 분해에 적용할 수 있습니다', () => {
    const array = ['code', 'states', 'im', 'course']
    const [start, ...rest] = array
    expect(start).to.eql('code')
    expect(rest).to.eql(['states', 'im', 'course'])

    // 다음과 같은 문법은 사용할 수 없습니다. 할당하기 전 왼쪽에는, rest 문법 이후에 쉼표가 올 수 없습니다
    // const [first, ...middle, last] = array
  })

  it('객체의 단축(shorthand) 문법을 익힙니다', () => {
    const name = '김코딩'
    const age = 28

    const person = {
      name,
      age,
      level: 'Junior',
    }
    expect(person).to.eql({name,
      age,
      level: 'Junior'})
  })

  it('객체를 분해합니다', () => {
    const student = { name: '박해커', major: '물리학과' }

    const { name } = student
    expect(name).to.eql('박해커')
  })

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #1', () => {
    const student = { name: '최초보', major: '물리학과' }
    const { name, ...args } = student

    expect(name).to.eql('최초보')
    expect(args).to.eql({major: '물리학과'})
  })

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #2', () => {
    const student = { name: '최초보', major: '물리학과', lesson: '양자역학', grade: 'B+' }

    function getSummary({ name, lesson: course, grade }) {
      return `${name}님은 ${grade}의 성적으로 ${course}을 수강했습니다`
    }

    expect(getSummary(student)).to.eql('최초보님은 B+의 성적으로 양자역학을 수강했습니다')
  })

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #3', () => {
    const user = {
      name: '김코딩',
      company: {
        name: 'Code States',
        department: 'Development',
        role: {
          name: 'Software Engineer'
        }
      },
      age: 35
    }

    const changedUser = {
      ...user,
      name: '박해커',
      age: 20
    }

    const overwriteChanges = {
      name: '박해커',
      age: 20,
      ...user
    }

    const changedDepartment = {
      ...user,
      company: {
        ...user.company,
        department: 'Marketing'
      }
    }

    expect(changedUser).to.eql({name: '박해커',
    company: {
      name: 'Code States',
      department: 'Development',
      role: {
        name: 'Software Engineer'
      }
    },
    age: 20})

    expect(overwriteChanges).to.eql({
      name: '김코딩',
      age: 35,
      company: {
          name: 'Code States',
          department: 'Development',
          role: {
            name: 'Software Engineer'
          }
        },
      }
    )

    expect(changedDepartment).to.eql({
      name: '김코딩',
      company: {
        name: 'Code States',
        department: 'Marketing',
        role: {
          name: 'Software Engineer'
        }
      },
      age: 35
    })
  })
})
// window name 을 찾아보면 됨, node.js의 문제
//10번 마지막 'rest/spread 문법 객체 분해' 에서

// 마지막 문제인 changedDepartment에서
// ...user가 먼저오면 user 안에 있는 company를 기존에 있던 company가 덮어 쓰는건지 궁금합니다.

// const user = {
//       name: '김코딩',
//       company: {
//         name: 'Code States',
//         department: 'Development',
//         role: {
//           name: 'Software Engineer'
//         }
//       },
//       age: 35
//     }

// expect(changedDepartment).to.eql({
//       ...user,
//       company : {
//         ...user.company,
//         department : 'Marketing'
//       }
//     })
// this는 지역객체라도 전체객체로 될떄가 있음.
//ECMA script(JS의 헌법같은 것) 에 속성이랑 name이랑 같게 하게 나와있음
// 오오피?
//Const {name, …args} 에 대괄호를 쓰는게 궁금합니다  -- 이유가 없음
// const argsArr = Array.from(argumentsObj);  할때 argumentsObj가 객체일때 length 값이 없으면 배열을 안주고 빈배열을 반환하던데


//10번 마지막 'rest/spread 문법 객체 분해' 에서

// 마지막 문제인 changedDepartment에서
// ...user가 먼저오면 user 안에 있는 company를 기존에 있던 company가 덮어 쓰는건지 궁금합니다.

// const user = {
//       name: '김코딩',
//       company: {
//         name: 'Code States',
//         department: 'Development',
//         role: {
//           name: 'Software Engineer'
//         }
//       },
//       age: 35
//     }

// expect(changedDepartment).to.eql({
//       ...user,
//       company : {
//         ...user.company,
//         department : 'Marketing'
//       }
//     })
// arguments 객체는 프로퍼티에 length가 포함되어있다.