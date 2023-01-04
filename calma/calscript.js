buttons.addEventListener('click', function (event) {
    // 버튼을 눌렀을 때 작동하는 함수입니다.
  
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클래스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  
    if (target.matches('button')) {
      // 클릭된 HTML 엘리먼트가 button이면
      if (action === 'number') {
        // 그리고 버튼의 클래스가 number이면
        // 아래 코드가 작동됩니다.
        console.log('숫자 ' + buttonContent + ' 버튼');
        previousKey = 'number';
      }
      // ...
      }
  // ...
  }