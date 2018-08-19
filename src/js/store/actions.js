const actions = {
  selectedGame (context, payload) {
    context.commit('selectedGame', payload)
  },

  selectedChoice (context, payload) {
    context.commit('selectedChoice', payload)
  },

  restartGame (context) {
    context.commit('restartGame')
  }
}

export default actions
