// this is our initial state
export default {
  game: {
    type: 1
  },
  players: [
    {
      score: 0,
      type: 'human',
      avatar: 'images/player/human.png'
    },
    {
      score: 0,
      type: 'com',
      avatar: 'images/player/ai.png'
    }
  ],
  ready: 0,
  winner: false
}
