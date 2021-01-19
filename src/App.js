import './App.css';
import React, { Component } from 'react';

class App extends Component{
  
  bonjour =(e)=> {
    console.log('Bonjour');
    };

  passeDessu =(e) =>{
    e.target.classList.add(`couleur`)
  };
  dblclick =(e)=>{

    console.log('quel vitesse ');

  }

	render(){
		return(
			<div className="App">

			  <h1>Exercice 8 </h1>
        <button onClick={this.bonjour}>Bonjour</button>
        <button onMouseOver={this.passeDessu}>passse dessus</button>
        <button onDoubleClick={this.dblclick}>double click</button>

			</div>
		)
	}
}

export default App;
