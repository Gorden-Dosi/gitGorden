const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let operatorcall = 'oc';
let numone = '0';
let numtwo = '0';
//DOM js에 생명력을 부여
function calculate(n1, operatorcall, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  if (operatorcall === '+') {
    result = parseFloat(n1) + parseFloat(n2);
    return String(result);
  }
  else if (operatorcall === '-') {
    result = parseFloat(n1) - parseFloat(n2);
    return String(result);
  }
  else if (operatorcall === '*') {
    result = parseFloat(n1) * parseFloat(n2);
    return String(result);
  }
  else if (operatorcall === '/') {
    result = parseFloat(n1) / parseFloat(n2);
    return String(result);
  }

  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
}

// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.
//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

//   if (target.matches('button')) {
//     // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
//     // 클릭된 HTML 엘리먼트가 button이면
//     if (action == 'number') {
//       if (operatorcall === 'oc') {
//         firstOperend.innerHTML = buttonContent;
//         numone = firstOperend.innerHTML;
//       } else if (operatorcall !== 'oc') {
//         secondOperend.innerHTML = buttonContent;
//         numtwo = secondOperend.innerHTML;
//       }
//       // 그리고 버튼의 클레스가 number이면
//       // 아래 코드가 작동됩니다.
//       console.log('숫자 ' + buttonContent + ' 버튼');
//     }

//     if (action === 'operator') {
//       operator.innerHTML = buttonContent;
//       operatorcall = target.textContent;
//       return operator;
//       console.log('연산자 ' + buttonContent + ' 버튼');
//     }

//     if (action === 'decimal') {
//       // console.log('소수점 버튼');
//     }

//     if (action === 'clear') {
//       console.log('초기화 버튼');
//       firstOperend.innerHTML = 0;
//       secondOperend.innerHTML = 0;
//       operatorcall = 'oc';
//       calculatedResult.innerHTML = 0;
//       0
//     }

//     if (action === 'calculate') {
//       console.log('계산 버튼');
//       calculatedResult.innerHTML = calculate(numone, operatorcall, numtwo)
//     }
//   }
// });


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  let calculatedResultof = '0'
  let savePreviousop = '0'
  let savePreviousm2 = '0'
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if (display.textContent === '0' && numtwo === '0') {
        console.log('숫자 ' + buttonContent + ' 버튼');
        numone = buttonContent;
        display.textContent = numone;
        previousKey = 'number';
      }else if (display.textContent !== '0' && operatorcall === 'oc') {
        console.log('숫자 ' + buttonContent + ' 버튼');
        numone += buttonContent;
        display.textContent = numone;
        previousKey = 'number';
      }else if (operatorcall !== 'oc' && numone !== '0' && numtwo ==='0') {
        console.log('숫자 ' + buttonContent + ' 버튼');
        numtwo = buttonContent;
        display.textContent = numtwo;
        previousKey = 'number';
      }else if( operatorcall !== 'oc' && numtwo !== '0' ){
        console.log('숫자 ' + buttonContent + ' 버튼');
        numtwo += buttonContent;
        display.textContent = numtwo;
        previousKey = 'number';
      }
    }
    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      if (numone !== '0' && numtwo === '0' && calculatedResultof === '0'){
      operatorForAdvanced = buttonContent; // 변수 operatorForAdvanced에 버튼의 텍스트(연산자 기호, 여기서는 '*')를 할당합니다.
      display.textContent = operatorForAdvanced;
      operatorcall = buttonContent;
      previousKey = 'operator';
      }
    }
    if (action === 'decimal') {
       if(!display.textContent.includes('.'===)){
        display.textContent = display.textContent + '.';
     }
    if (action === 'clear') {
      display.textContent = '0';
      numone = '0';
      numtwo = '0';
      previousKey = '0';
      operatorcall = 'oc';
      savePreviousop = '0';
      savePreviousm2 = '0';
    }
    if (action === 'calculate') { 
      console.log('계산 버튼');
      if(calculateResultof === '0'){
        display.textContent = calculate(numone, operatorcall, numtwo)
        calculatedResultof = display
     }else{
      display.textContent = calculate(numone, savePreviousop, savePreviousm2)
      calculatedResultof = display
     }
    }
  }
});
// 계산기에 키보드 입력치 연동하는 법 확인하기
// 변수 설정하고 최초에 상태는 undefined가 된다