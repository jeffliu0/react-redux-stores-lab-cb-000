export default function createStore(reducer){
// your code here!
  let state;
  let lisetners;

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const getState = () => {
    return state
  }


}
