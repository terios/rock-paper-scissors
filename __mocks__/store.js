export const mockSubscribe = jest.fn()
const mock = jest.fn().mockImplementation(() => {
  return {
    subscribe: mockSubscribe
  }
})

export default mock
