import { randomChoice, getChoiceObj, getWinner } from './utils'

describe('testing utils functions', () => {
  test('get random entry from given array', () => {
    const dummyArray = ['rock', 'paper', 'scissors']
    expect(randomChoice(dummyArray)).toBeDefined()
  })

  test('get object from array based on name attribute', () => {
    const choices = [{ name: 'rock' }, { name: 'paper' }, { name: 'scissors' }]
    expect(getChoiceObj(choices, 'rock')).toEqual(choices[0])
  })

  test('getWinner based on given configuration', () => {
    const players = [
      {
        name: 'human',
        choice: {
          name: 'scissors',
          img: 'images/actions/scissors.png',
          strength: {
            win: ['paper'],
            lose: ['rock']
          }
        }
      },
      {
        name: 'com',
        choice: {
          name: 'paper',
          img: 'images/actions/paper.png',
          strength: {
            win: ['rock'],
            lose: ['scissors']
          }
        }
      }
    ]
    expect(getWinner(players)).toEqual(0)

    const players2 = [
      {
        name: 'human',
        choice: {
          name: 'paper',
          img: 'images/actions/paper.png',
          strength: {
            win: ['rock'],
            lose: ['scissors']
          }
        }
      },
      {
        name: 'com',
        choice: {
          name: 'paper',
          img: 'images/actions/paper.png',
          strength: {
            win: ['rock'],
            lose: ['scissors']
          }
        }
      }
    ]
    expect(getWinner(players2)).toEqual(-1)
  })
})
