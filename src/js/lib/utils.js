export function randomChoice (choices = []) {
  return choices[Math.floor(Math.random() * choices.length)]
}

export function getChoiceObj (choices = [], value) {
  const choice = choices.filter(elm => elm.name == value
  })

  return choice.length === 1 ? choice[0] : ''
}

export function getWinner (players) {
  if (players[0].choice.strength.win.includes(players[1].choice.name)) {
    return 0
  }
  if (players[0].choice.strength.lose.includes(players[1].choice.name)) {
    return 1
  }
  return -1
}
