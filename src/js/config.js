export default {
  choices: [
    {
      name: 'rock',
      img: 'images/actions/rock.png',
      strength: {
        win: ['scissors'],
        lose: ['paper']
      }
    },
    {
      name: 'paper',
      img: 'images/actions/paper.png',
      strength: {
        win: ['rock'],
        lose: ['scissors']
      }
    },
    {
      name: 'scissors',
      img: 'images/actions/scissors.png',
      strength: {
        win: ['paper'],
        lose: ['rock']
      }
    }
  ]
}
