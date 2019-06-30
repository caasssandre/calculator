var entries = []
var temporaryValue = ''
var number = 0
// isResult allows the code to know whether the value stored in temporaryValue is the previous result
// temporaryValue will contain the result of the previous calculation after the user clicks =
var isResult = false
var buttons = document.getElementsByTagName('button')
var clickSound = new Audio();
clickSound.src = 'buttonClick.wav';

// add event listener for each button clicked
for (let i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', function (){runEventListener(i)})
}
//this function executes the correct button function for each button clicked 
function runEventListener (i){
  clickSound.play()
  let currentButtonText = buttons[i].innerHTML
  if ((!isNaN(currentButtonText) || currentButtonText === '.') && temporaryValue.length < 10){
    clickNumberButton(currentButtonText)
  }
  else if (currentButtonText === 'AC'){
    clickAcButton ()
  }
  else if (currentButtonText === 'CE'){
    clickCeButton ()
  }
  else if (currentButtonText === '='){
    clickEqualButton ()
  }
  else if (isNaN(currentButtonText)){
    clickSymbolButton (currentButtonText)
  }
}

function clickNumberButton (buttonNumber){
    if (isResult){
      temporaryValue = ''
      isResult = false
    }
    else if (temporaryValue.includes('.') && buttonNumber === '.'){
      return
    }
    temporaryValue = temporaryValue + (buttonNumber) 
    // show temporaryValue in input display (10 digits max)
    document.getElementById('inputField').value = temporaryValue
}

function clickAcButton (){
  document.getElementById('inputField').value = ''
  entries = []
  temporaryValue = ''
}

function clickCeButton (){
  document.getElementById('inputField').value = ''
  temporaryValue = ''
}

//performs calculation and sets display conditions
function clickEqualButton (){
  entries.push(temporaryValue)
  number = Number(entries[0])
  for (let j=1; j<entries.length-1; j += 2){
    let nextNumber = Number(entries[j+1])
    let symbol = entries[j]
    if (symbol === '+'){number += nextNumber}
    if (symbol === '-'){number -= nextNumber}
    if (symbol === 'x'){number *= nextNumber}
    if (symbol === '÷'){number /= nextNumber}
    if (symbol === '%'){number = number/100 * nextNumber}
  }

  //Display result in a way that fits the screen
  let result;
  const MAX_SCREEN_VALUE = 9999999999;
  const MIN_ABS_SCREEN_VALUE = 0.000000001;

  if ((number > MAX_SCREEN_VALUE || Math.abs(number) < MIN_ABS_SCREEN_VALUE)
    && number !==0){
    result = number.toExponential(2)
  }
  else if (JSON.stringify(number).length>10){
    result = JSON.stringify(number).substring(0,10)
  }
  else if (number < 0) {
    result = '-' + Math.abs(number)
  }
  else {
    result = number
  }
  document.getElementById('inputField').value = result
  entries = []
  temporaryValue = JSON.stringify(number)
  isResult = true
}

function clickSymbolButton (buttonSymbol){
  if (temporaryValue !== '') {
    entries.push(temporaryValue)
    entries.push(buttonSymbol)
    temporaryValue = ''
  }
}

// add an event listener to each button with a for loop
// stretch, make * and / come before - and +