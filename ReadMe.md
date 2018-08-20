# ROCK PAPER SCISSORS
implementation of the game rock paper scissors using pure es6, jest for unit test.
the approach is similar to the stack react/redux. using pubsub for communication between components and the state
### Available commands

- `npm install`
- `npm run watch-build` for live reload
- `npm run build` for single build
- `npm run start` to run server
- `npm run jest` to run unit test

### extend the game even more

there are two mode already implemented
 
 - rock - paper - scissors 
 - rock - paper - scissors - spock - lizard
 
 to switch, all you have to do is change the last line int the file `/src/js/config.js`
to one of these options:
- export default regularGame
- export default bootsedGame

you can also add you own rules and motion icons for it.


### Future improvement
- add support for middlewares, (for example once both player made their choice, the middleware triggers an action to get who is the winner)
- add battle royal mode, maybe you want to be crazy and battle agains 100 other coms (lel)

### Real multiplayer mode
in order to have multiplayer, some things need to be added, here is the plan, or first draft for it:
- use node server along side sockets
- have pool of players on add state for each one (isReady, isPlaying)
- use sockets to communication actions done by the players e.g. (when a player makes a choice, his store/state is updated, and a middleware that listens to specific actions sends the action to server, for the server state to be updated, and server relays same action via socket to the other player)
- add battle royal with real persons (am a fan of battle royals :D )
