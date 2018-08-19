import stateContainer from '../../hoc/stateContainer.js'
import store from '../../store/store'
import config from '../../config'
import './index.scss'
export default class Choices extends stateContainer {
  constructor (props) {
    super({
      store,
      element: props.element || {}
    })
    this.props = props
  }

  render () {
    let self = this
    let content = ''
    const props = self.props
    if (props.selected) {
      content = `
            <div class="choice single" value="${props.selected.name}">
              <img src=${props.selected.img}>
            </div>`
    } else {
      content = `${config.choices
        .map((choice) => {
          return `
            <div class="choice" value="${choice.name}">
              <img src=${choice.img}>
            </div>`
        })
        .join('')}`
    }
    self.element.innerHTML = `
    <div class="choices-container">
     ${content}
    </div>
`
  }
}
