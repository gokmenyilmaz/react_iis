import React, { Component } from 'react'
import store from '../store'

export default class Adres extends Component {

    Kaydet=()=>
    {
        store.dispatch({
            type:"bugAdded",
            payload:{
              description:"Bug2"
            }
          
          });

          alert("kaydet");
    }

    render() {
        return (
            <div>
                adres

                <button onClick={()=>this.Kaydet()}>
                    Kaydet
                </button>
            </div>
        )
    }
}
