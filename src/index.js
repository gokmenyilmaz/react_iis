import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store'

const unsubscribe=store.subscribe(()=>{
  console.log("store değişti",store.getState());
})



store.dispatch({
  type:"bugAdded",
  payload:{
    description:"Bug1"
  }

});

// unsubscribe();

// store.dispatch({
//   type:"bugRemoved",
//   payload:{
//     id:1,
//     description:"Bug1"
//   }

// });




console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


