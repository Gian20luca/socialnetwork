import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Actions/counterActions';
import { login, logout } from './Redux/Actions/loggedActions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const logged = useSelector(state => state.loggedReducer);

  const dispatch = useDispatch();

  console.log('Connesso: ', logged);
  console.log('counter: ', counter);

  return (
    <div>
      {!logged ? <div><button onClick={() => dispatch(login())}>Login</button></div> :
        <div> <h1>Sei connesso</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <h1>counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>Incrementa</button>
          <button onClick={() => dispatch(decrement())}>Decrementa</button>
        </div>}
    </div>
  );
}

export default App;
