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
