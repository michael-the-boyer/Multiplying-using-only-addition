document.getElementById('button').addEventListener('click', mathFunction)

function mathFunction () {
  const num1 = parseInt(document.getElementById('input1').value)
  const num2 = parseInt(document.getElementById('input2').value)
  const answer = document.getElementById('answer')
  let total = 0
  if (num1 && num2) {
    for (let i = 0; i < num1; i++) {
      total = total + num2
    }
    answer.innerHTML = 'Total is ' + total
  } else {
    answer.innerHTML = 'Total is 0. If this is not your wanted result then something happened.'
  }
}
