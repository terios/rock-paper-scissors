import Players from './js/components/players/index.js'
import GameType from './js/components/gameType'
import Results from './js/components/results'

// import global styling
import './style/index.scss'

const gameTypeComponent = document.querySelector('.game-type')
const gameType = new GameType({ element: gameTypeComponent })
gameType.render()

const playersComponent = document.querySelector('.players')
const players = new Players({ element: playersComponent })
players.render()

const resultsComponent = document.querySelector('.results')
const results = new Results({ element: resultsComponent })
results.render()
