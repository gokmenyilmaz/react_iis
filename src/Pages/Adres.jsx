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

    }

    Sil=()=>
    {
        store.dispatch({
            type:"bugRemoved",
            payload:{
              id:3
            }
          
          });

          alert("sil");
    }

    render() {
        return (
            <div>
                adres
                <button onClick={()=>this.Kaydet()}>
                    Kaydet
                </button>

                <button onClick={()=>this.Sil()}>
                    Sil
                </button>
            </div>
        )
    }
}
