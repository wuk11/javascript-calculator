import './App.scss';

function App() {
  const clear = () => {
    const display = document.getElementById("display")
    const inputDisplay = document.getElementById("input")
    display.textContent = "0"
    inputDisplay.textContent = ``
  }

  const appendToDisplay = (input) => {
    const display = document.getElementById("display")
    const inputDisplay = document.getElementById("input")
    const regex = /[\+\-\*\/]/g

    if(display.textContent === "0"){
      display.textContent = ""
    }

    if(input === "*" || input === "/" || input === "+" || input === "-" || input === "."){
      if(inputDisplay.textContent.charAt(inputDisplay.textContent.length - 1) === input){
        return;
      }
      else if(input === "."){
        const lastNumber = inputDisplay.textContent.split(regex).pop()
        if(lastNumber?.includes(".")) return
      }
      else{
        inputDisplay.textContent = display.textContent
      }
    }
  
    inputDisplay.textContent += input
    display.textContent += `${input}`
  }

  const calc = () => {
    const display = document.getElementById("display")
    const inputDisplay = document.getElementById("input")

    try{
      const filtered = display.textContent.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join("")
      console.log(filtered)

      const result = eval(filtered)
      inputDisplay.textContent += ` = ${result}`
      display.textContent = result
    }
    catch(error){
        inputDisplay.textContent = `error`
        console.log(error)
    }
  }

  return (
    <div className="App">
      <div id="screen">
        <div id="input"></div>
        <div id="display">0</div>
      </div>
      <div id="keys">
        <button id="clear" onClick={() => {clear()}}>AC</button>
        <button id="zero" onClick={() => {appendToDisplay("0")}}>0</button>
        <button id="one" onClick={() => {appendToDisplay("1")}}>1</button>
        <button id="two" onClick={() => {appendToDisplay("2")}}>2</button>
        <button id="three" onClick={() => {appendToDisplay("3")}}>3</button>
        <button id="four" onClick={() => {appendToDisplay("4")}}>4</button>
        <button id="five" onClick={() => {appendToDisplay("5")}}>5</button>
        <button id="six" onClick={() => {appendToDisplay("6")}}>6</button>
        <button id="seven" onClick={() => {appendToDisplay("7")}}>7</button>
        <button id="eight" onClick={() => {appendToDisplay("8")}}>8</button>
        <button id="nine" onClick={() => {appendToDisplay("9")}}>9</button>
        <button id="add" onClick={() => {appendToDisplay(" +")}}>+</button>
        <button id="subtract" onClick={() => {appendToDisplay("-")}}>-</button>
        <button id="multiply" onClick={() => {appendToDisplay("*")}}>*</button>
        <button id="divide" onClick={() => {appendToDisplay("/")}}>/</button>
        <button id="decimal" onClick={() => {appendToDisplay(".")}}>.</button>
        <button id="equals" onClick={() => {calc()}}>=</button>
      </div>
    </div>
  );
}

export default App;
