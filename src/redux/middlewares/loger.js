const logger = (store) => (next) => (action)=>{
  const currentState = store.getState();
  console.log('current state => ',currentState)
  console.log('current dispatch => ',action)
  next(action)
  const updatedState = store.getState();
  console.log('updated state => ', updatedState)
}
export default logger