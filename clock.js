var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))
var containerReal = document.querySelector('.seconds')
var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function updateTime() {
  var now = new Date

  var lastHours = last.getHours().toString()
  var nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }

  var lastMinutes = last.getMinutes().toString()
  var nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }

  var lastSeconds = last.getSeconds().toString()
  var nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds)
  }

  last = now
}

function tick() {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer(container, newTime) {
  containerReal = container

  var time = newTime.split('')

  if (time.length === 1) {
    time.unshift('0')
  }


  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }

  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}
function changeAttributes(okorno, container) {
  if (okorno === "okay" && !(container.classList.contains("seconds"))) {
    console.log(container.classList)


    var number1 = document.getElementById("number1")
    var number2 = document.getElementById("number2")
    var number3 = document.getElementById("number3")
    var number4 = document.getElementById("number4")
    var number5 = document.getElementById("number5")
    //transition:line-height 0.2s ease-out;
    number1.classList.add("lineHeightNormal")
    number1.classList.remove("lineHeightTaller")
    number2.classList.add("lineHeightNormal")
    number2.classList.remove("lineHeightTaller")
    number3.classList.add("lineHeightNormal")
    number3.classList.remove("lineHeightTaller")
    number4.classList.add("lineHeightNormal")
    number4.classList.remove("lineHeightTaller")
    number5.classList.add("lineHeightNormal")
    number5.classList.remove("lineHeightTaller")
 
  } else {
    if (okorno == "no" && (container.classList.contains("seconds"))) {
      console.log(container.classList)
      var number1 = document.getElementById("number1")
      var number2 = document.getElementById("number2")
      var number3 = document.getElementById("number3")
      var number4 = document.getElementById("number4")
      var number5 = document.getElementById("number5")
      number1.classList.add("lineHeightTaller")
      number1.classList.remove("lineHeightNormal")
      number2.classList.add("lineHeightTaller")
      number2.classList.remove("lineHeightNormal")
      number3.classList.add("lineHeightTaller")
      number3.classList.remove("lineHeightNormal")
      number4.classList.add("lineHeightTaller")
      number4.classList.remove("lineHeightNormal")
      number5.classList.add("lineHeightTaller")
      number5.classList.remove("lineHeightNormal")
    }
  }
}


function updateNumber(element, number) {
  //element.lastElementChild.textContent = number
  if (element.classList.contains("first")){
    containerReal = element
    changeAttributes("okay", containerReal)
  }
  var second = element.lastElementChild.cloneNode(true)
  second.textContent = number

  element.appendChild(second)

  changeAttributes("okay", containerReal)



  element.classList.add('move')

  setTimeout(function () {
    changeAttributes("no", containerReal)
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 100)
function changeLineHeight(){
  var number1 = document.getElementById("number1")
  var number2 = document.getElementById("number2")
  var number3 = document.getElementById("number3")
  var number4 = document.getElementById("number4")
  var number5 = document.getElementById("number5")
  number1.setAttribute('style', "line-height: 1.15")
  number2.setAttribute('style', "line-height: 1.15")
  number3.setAttribute('style', "line-height: 1.15")
  number4.setAttribute('style', "line-height: 1.15")
  number5.setAttribute('style', "line-height: 1.15")
  setTimeout(function(){
    number1.setAttribute('style', "line-height")
    number1.setAttribute('style', "line-height: 1.15")
    number1.setAttribute('style', "line-height: 1.15")
    number1.setAttribute('style', "line-height: 1.15")
    number1.setAttribute('style', "line-height: 1.15")
  })
}