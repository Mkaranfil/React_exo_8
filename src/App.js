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

  nombre =(e)=>{

    console.log(this.state.nombre);
  }

  state={
    nombre: 1,
    musique: `rap`,
  };

 

	render(){

    // console.log(this.state.nombre);
    // console.log(this.state.musique);
    
		return(
			<div className="App">

			  <h1 onMouseOver={this.nombre}>Exercice 8 </h1>
        <button onClick={this.bonjour}>Bonjour</button>
        <button onMouseOver={this.passeDessu}>passse dessus</button>
        <button onDoubleClick={this.dblclick}>double click</button>
        

			</div>
		)
	}
}

export default App;
