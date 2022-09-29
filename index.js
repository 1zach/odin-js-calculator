let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let zero = document.getElementById("0")
let dot = document.getElementById(".")
let typed = document.getElementById("typed")
let plus = document.getElementById("+")
let subtract = document.getElementById("-")
let times = document.getElementById("x")
let divide = document.getElementById("/")
let equal = document.getElementById("=")
let clear = document.getElementById("clear")
let back = document.getElementById("back")
let percent = document.getElementById("percent")

one.addEventListener("click", setView)
two.addEventListener("click", setView)
three.addEventListener("click", setView)
four.addEventListener("click", setView)
five.addEventListener("click", setView)
six.addEventListener("click", setView)
seven.addEventListener("click", setView)
eight.addEventListener("click", setView)
nine.addEventListener("click", setView)
zero.addEventListener("click", setView)
dot.addEventListener("click", dotCheck)
plus.addEventListener("click", number)
subtract.addEventListener("click", number)
times.addEventListener("click", number)
divide.addEventListener("click", number)
equal.addEventListener("click", calc)
clear.addEventListener("click", allClear)
back.addEventListener("click", remove)
percent.addEventListener("click", calc)


function remove() {
  console.log(typed.innerHTML)
  rid = typed.innerHTML
  typed.innerHTML = rid.substring(0, rid.length -1)
}

function number() {
  if (typed.innerHTML == 0) {
    typed.innerHTML = (`${this.id}`)
  } else {
    first = typed.innerHTML
    console.log(first)
    setView(this)
    calc
  }
}

function dotCheck() {
    typed.append(`${this.id}`)
    dot.disabled = true
  }

function setView(e) {
    if (typed.innerHTML == 0) {
      typed.innerHTML = (`${this.id}`)
  } else {
    if (e.id == "+" || e.id =="-" || e.id =="x" || e.id == "/"){
      calc(e.id) 
      typed.append(` ${e.id} `)
  }
    else {
      typed.append(`${this.id}`)
}
  }
}



equation = 0
let total = 0

function calc(e) {
  equation = typed.innerHTML
  console.log(e)
  console.log(this.id)
  splitEquation = equation.split(" ")
  if (this.id == "percent") {
    //console.log(splitEquation)
    percentage = (splitEquation[0] * splitEquation[2])/100
    splitEquation = [splitEquation[0], splitEquation[1], percentage]
    console.log(splitEquation)
    splitEquation
  }

  console.log(splitEquation)
  dot.disabled = false
    if (splitEquation[1] == "+") {
      let plus = [splitEquation[0], splitEquation[2]]   
      total = plus.reduce((a,b) => {
      return parseFloat(a) + parseFloat(b)
    })
    setScreen(total)
  } 
  else if (splitEquation[1] == "x") {
    let times = [splitEquation[0], splitEquation[2]]
    total = times.reduce((a,b) => {
      return parseFloat(a) * parseFloat(b)
    })
    setScreen(total)
  }
  else if (splitEquation[1] == "/") {
    let divide = [splitEquation[0], splitEquation[2]]
    if (divide[1] == 0) {
      return typed.innerText = "ERROR"
    } else {
      total = divide.reduce((a,b) => {
        return parseFloat(a) / parseFloat(b)
    })}
    setScreen(total)
  }
  else if (splitEquation[1] == "-") {
    let minus = [splitEquation[0], splitEquation[2]]
    console.log(minus)
    total = minus.reduce((a,b) => {
      return parseFloat(a) - parseFloat(b)
    })
    setScreen(total)
  }
}

function setScreen(total) {
  answer.innerHTML = parseFloat((total).toFixed(5))
  typed.innerHTML = parseFloat((total).toFixed(5))
  equation = parseFloat((total).toFixed(5))
}

function allClear() {
  typed.innerHTML = 0
  answer.innerHTML = 0
  equation = 0
  dot.disabled = false
}