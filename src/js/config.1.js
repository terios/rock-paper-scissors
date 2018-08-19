export default {
  choices: [
    {
      name: 'rock',
      img: 'images/actions/rock.png',
      strength: {
        win: ['scissors', 'lizard'],
        lose: ['paper', 'spock']
      }
    },
    {
      name: 'paper',
      img: 'images/actions/paper.png',
      strength: {
        win: ['rock', 'spock'],
        lose: ['scissors', 'lizard']
      }
    },
    {
      name: 'scissors',
      img: 'images/actions/scissors.png',
      strength: {
        win: ['paper', 'lizard'],
        lose: ['rock', 'spock']
      }
    },
    {
      name: 'lizard',
      img: 'images/actions/lizard.png',
      strength: {
        win: ['paper', 'spock'],
        lose: ['rock', 'scissors']
      }
    },
    {
      name: 'spock',
      img: 'images/actions/spock.png',
      strength: {
        win: ['rock', 'scissors'],
        lose: ['lizard', 'paper']
      }
    }
  ]
}
