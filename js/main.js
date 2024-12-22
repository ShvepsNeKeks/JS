function randomNumber() {
  let nubmer = Math.floor(Math.random() * 101);

  for(let count = 10; count >= 0; count--) {
    let digitUser = +prompt(`Введите ваша число, у вас ${count} попыток`);
    if(digitUser == nubmer) {
      alert(`Поздравляю! Вы угадали число: ${nubmer}, остаток попыток: ${count}`)
      break
    } else if(digitUser < nubmer) {
      alert('Ваше число меньше загадоного')
    } else if(digitUser > nubmer) {
      alert('Ваше число больше загадоного')
    } else {
      alert('Вы проиграли, вы не угадали число!')
      break
    }
  }
}

let startGame = confirm('Начать игру? Угадай число от 1 до 100')
if(startGame == true) randomNumber() 






