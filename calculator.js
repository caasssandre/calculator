

var entries = []
var temporaryValue = ''
var currentValue = ''
var number = 0
var isResult = false

var buttons = document.getElementsByTagName('button')
// add an event listener to each button with a for loop
for (let i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', function (){
    console.log('entries befor click ' + entries)
    // assign the innerHTML of the button just clicked to currentValue
    currentValue = buttons[i].innerHTML
    // if the button clicked is a number, or a full stop, add the currentValue to temporaryValue
    if ((!isNaN(currentValue) || currentValue === '.')&& temporaryValue.length < 10){
      if (isResult){
        temporaryValue = ''
        isResult = false
      }
      temporaryValue = temporaryValue + (currentValue) 
      // show temporaryValue in input display (10 digits max)
      document.getElementById('inputField').value = temporaryValue
    }
    // if the button clicked is AC, clear all fields
    else if (currentValue === 'AC'){
      document.getElementById('inputField').value = ''
      entries = []
      temporaryValue = ''
    }
    // if the button clicked is CE, clear temporaryValue
    else if (currentValue === 'CE'){
      document.getElementById('inputField').value = ''
      temporaryValue = ''
    }
    // if the button clicked is =, perform calculation, display result, clear entries and tempValue
    else if (currentValue === '='){
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
      //Clear entries and temporaryValue
      //Set isResult to true to allow performing further operation on result.
      if ((number > 9999999999 || number < 0.000000001)&& number !==0){
        document.getElementById('inputField').value = number.toExponential(2)
      }
      else if (JSON.stringify(number).length>10){
        document.getElementById('inputField').value = JSON.stringify(number).substring(0,10)
      }
      else {
        document.getElementById('inputField').value = number
      }
      entries = []
      temporaryValue = JSON.stringify(number)
      isResult = true
    }
    //if the button pushed is anything else and not null 
    //(not a number, not AC, not CE, not =)
    //Push the temporaryvalue to entries and the currentValue to entries.
    //Clear both
    else if (isNaN(currentValue)){
      if (temporaryValue !== '') {
        entries.push(temporaryValue)
        entries.push(currentValue)
        temporaryValue = ''
      }
    }
    console.log('entries after click ' + entries)
  })
}
// stretch, make complex * and / come before - and +