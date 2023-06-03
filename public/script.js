const display = document.querySelector('.input');
const buttons = document.querySelectorAll('button');
let inputValue = '';
let calculation = '';
let result = null;


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerText;
    if (button.classList.contains('number')) {
      inputValue += buttonValue;
      display.value = inputValue;
    } else if (button.classList.contains('operator')) {
      if (!inputValue) return;
      if (result !== null) {
        calculate();
      } else {
        result = parseFloat(inputValue);
      }
      calculation = buttonValue;
      display.value = '';
      inputValue = '';
    } else if (button.classList.contains('equal')) {
      if (!calculation) return;
      calculate();
      display.value = result;
      calculation = '';
      inputValue = result.toString();
      result = null;
    } else if (button.classList.contains('clear')) {
      clear();
    } else if (button.classList.contains('dot')) {
      if (inputValue.includes('.')) return;
      inputValue += buttonValue;
      display.value = inputValue;
    }
  });
});

function calculate() {
  const secondOperand = parseFloat(inputValue);
  switch (calculation) {
    case '+':
      result += secondOperand;
      break;
    case '-':
      result -= secondOperand;
      break;
    case '*':
      result *= secondOperand;
      break;
    case '/':
      result /= secondOperand;
      break;
    default:
      return;
  }
}

function clear() {
  inputValue = '';
  calculation = '';
  result = null;
  display.value = '';
}

// add keyboard events listener to calculator app
document.addEventListener('keydown', (event) => {
  switch (event.key ) {
    case 'Escape':
        clear();
        break;
    case 'Backspace':
        clear();
        break;
    case 'Enter':
        handleEqual(event.key);
        break;
    case '+':
        handleOperator(event.key);
        break;
    case '-':
        handleOperator(event.key);
        break;
    case '*':
        handleOperator(event.key);
        break;
    case '/':
       handleOperator(event.key);
        break;
    case '.':
        handleNumber(event.key);
        break;
    case'0':
        handleNumber(event.key);
        break;
    case'1':
        handleNumber(event.key);
        break;
    case'2':
        handleNumber(event.key);
        break;
    case'3':
        handleNumber(event.key);
        break;
    case'4':
        handleNumber(event.key);
        break;
    case'5':
        handleNumber(event.key);
        break;
    case'6':
        handleNumber(event.key);
        break;
    case'7':
        handleNumber(event.key);
        break;
    case'8':
        handleNumber(event.key);
        break;
    case'9':
        handleNumber(event.key);
        break;
    default:
        return;
  }
})

function handleOperator(key){
    if (!inputValue) return;
      if (result !== null) {
        calculate();
      } else {
        result = parseFloat(inputValue);
      }
      calculation = key;
      display.value = '';
      inputValue = '';
}

function handleNumber(key){
    inputValue += key;
    display.value = inputValue;
}

function handleEqual(){
    if (!calculation) return;
      calculate();
      display.value = result;
      calculation = '';
      inputValue = result.toString();
      result = null;
}