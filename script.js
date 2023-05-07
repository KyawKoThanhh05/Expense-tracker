let expenseList = document.getElementById("expense-list")
let dateList = document.getElementById("date-list")
let amountList = document.getElementById("amount-list")
let expenseInput = document.getElementById("expense-input")
let dateInput = document.getElementById("date-input")
let amountInput = document.getElementById("amount-input")
let total = document.getElementById("total")
let listItems = document.getElementsByTagName('li')

//input function//
expenseInput.addEventListener("keypress", function(e){
  if(e.key === 'Enter') {
    expenseList.innerHTML += `
    <li> ${expenseInput.value} </li>`
    expenseInput.value = ""
    localStorage.setItem("expense", JSON.stringify(expenseList.value))
  }
})

dateInput.addEventListener("keypress", function(e){
  if(e.key === 'Enter') {
    dateList.innerHTML += `
    <li> ${dateInput.value} </li>`
    dateInput.value = ""
  }
})

amountInput.addEventListener("keypress", function(e){
  if(e.key === 'Enter') {
    amountList.innerHTML += `
    <li> ${amountInput.value} </li>`
    amountInput.value = ""
  }
})


 // TOTAL //
 let sum = 0
 const list = document.getElementById('amount-list').getElementsByTagName('li')
  for (let i = 0; i <= list.length - 1; i++) {
      sum += JSON.parse(list[i].innerText)
    }
  total.textContent+= sum


  //REMOVE FUNCTION// 

expenseList.addEventListener("click", function(e){
  this.removeChild(e.target)
})

dateList.addEventListener("click", function(e){
  this.removeChild(e.target)
})

amountList.addEventListener("click", function(e){
  this.removeChild(e.target)
})