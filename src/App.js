import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props);
    this.displayState =  (this.state.show)? 'flex': 'none';
  }

  state = {
    Person: {
      fullName: "Abdou Yakhya SEYE",
      bio: "I am a dedicated and enthusiastic junior software developer with a strong passion for technology and coding. My curiosity and eagerness to learn have driven me to constantly improve my skills and take on new challenges in the tech world. Outside of the coding world, I have a deep passion for cars, motorbikes, and sports. These interests have shaped my character and taught me valuable lessons about precision, speed, and teamwork.",
      imgSrc: "./me.JPG",
      profession: "Junior Software Developer"
    },
    show: true,
    interval: null,
    elapsedTime: 0
  };

  changeShowState = () => {
    (this.state.show)? this.setState({show: false}): this.setState({show: true});
  }

  componentDidMount () {
    // Réglage d'un intervalle qui incrémente l'heure chaque seconde
    const interval = setInterval(() => {this.setState((prevState) => ({elapsedTime: prevState.elapsedTime + 1}))}, 1000);
    this.setState({interval});
  }

  componentWillUnmount () {
    // L'intervalle est effacé à chaque fois que la page est rechargée et qu'une nouvelle page est lancée.
    clearInterval(this.state.interval);
  }


  render () {
    this.displayState = (this.state.show) ? 'flex' : 'none';

    return(
    <div style = {{width: '500px'}}>
      <div className="App">
        <div style = {{display: this.displayState, flexDirection: 'column', justifyContent:'space-around'}}>
            <img src = {this.state.Person.imgSrc} alt = "presentation" style = {{borderRadius: '10%', width: '400px', height: '500px', margin: 'auto'}}></img>
            <h1 style = {{margin: '20px', fontSize: '50px'}}>{this.state.Person.fullName}</h1>
            <h2 style = {{margin: '6px', fontSize: '30px'}}>{this.state.Person.profession}</h2>
            <p style = {{textAlign: 'justify', textIndent: '40px', color:'black', margin: '6px'}}>{this.state.Person.bio}</p>
        </div> 
        <button onClick = {this.changeShowState} style = {{borderRadius: '10px', padding: '10px', border:'none', backgroundColor:'blue', color:'black', cursor: 'pointer'}}>Change View</button>
      </div>
      <div className = "intervalWatcher">
        <label htmlFor = "intervalDisplay">Time elapsed since the component was last mounted:  <br/><br/> <input readOnly id = "intervalDisplay" value = {this.state.elapsedTime} type='text'></input></label>
      </div>
    </div>
    );
  }
}

export default App;