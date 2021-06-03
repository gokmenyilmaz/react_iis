import React, { Component } from 'react'
import store from '../store'

export default class Adres extends Component {

    Ekle=()=>
    {
        store.dispatch({
            type:"bugAdded",
            payload:{
              description:"Bug2"
            }
          
          });

    }

    Sil=()=>
    {
        store.dispatch({
            type:"bugRemoved",
            payload:{
              id:3
            }
          
          });
    }

    render() {
        return (
            <div>
                adres
                <button onClick={()=>this.Ekle()}>
                    Ekle
                </button>

                <button onClick={()=>this.Sil()}>
                    Sil 3ü
                </button>
            </div>
        )
    }
}
