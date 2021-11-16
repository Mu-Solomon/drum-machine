import React from "react";
import "./styles.css";

class Drum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.id}
        onClick={this.props.play}
        onKeyPress={this.props.press}
      >
        {this.props.innerText}
        <audio
          src={this.props.audioSrc}
          className="clip"
          id={this.props.innerText}
        ></audio>
      </button>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
      words: [
        "BASS",
        "CLAP",
        "RIFFLE",
        "RINE",
        "ALARM",
        "GONG",
        "BANG",
        "WOOSH",
        "SQAAAASH",
      ],
    };
    this.playAudio = this.playAudio.bind(this);
    this.playAudio_2 = this.playAudio_2.bind(this);
    this.playAudio_3 = this.playAudio_3.bind(this);
    this.playAudio_4 = this.playAudio_4.bind(this);
    this.playAudio_5 = this.playAudio_5.bind(this);
    this.playAudio_6 = this.playAudio_6.bind(this);
    this.playAudio_7 = this.playAudio_7.bind(this);
    this.playAudio_8 = this.playAudio_8.bind(this);
    this.playAudio_9 = this.playAudio_9.bind(this);
  }
  playAudio = function () {
    const audio = document.getElementById("Q");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[0];
  };

  playAudio_2 = function () {
    const audio = document.getElementById("W");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[1];
  };
  playAudio_3 = function () {
    const audio = document.getElementById("E");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[2];
  };
  playAudio_4 = function () {
    const audio = document.getElementById("A");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[3];
  };
  playAudio_5 = function () {
    const audio = document.getElementById("S");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[4];
  };
  playAudio_6 = function () {
    const audio = document.getElementById("D");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[5];
  };
  playAudio_7 = function () {
    const audio = document.getElementById("Z");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[6];
  };
  playAudio_8 = function () {
    const audio = document.getElementById("X");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[7];
  };
  playAudio_9 = function () {
    const audio = document.getElementById("C");
    audio.play();
    document.getElementById("display").innerHTML = this.state.words[8];
  };
  handlePress = (e) => {
    if(e.key !== 'Enter') {
      alert('You pressed Enter');
    }
  }
  render() {
    return (
      <div id="container">
        <div id="drum-machine">
          <div id="display">BASS</div>
          <div id="pad-container">
            <Drum
              id="bass"
              innerText={this.state.letter[0]}
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              play={this.playAudio}
              press={this.handlePress}
            />
            <Drum
              id="bass"
              innerText="W"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              play={this.playAudio_2}
            />
            <Drum
              id="bass"
              innerText="E"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              play={this.playAudio_3}
            />
            <Drum
              id="bass"
              innerText="A"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              play={this.playAudio_4}
            />
            <Drum
              id="bass"
              innerText="S"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              play={this.playAudio_5}
            />
            <Drum
              id="bass"
              innerText="D"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              play={this.playAudio_6}
            />
            <Drum
              id="bass"
              innerText="Z"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              play={this.playAudio_7}
            />
            <Drum
              id="bass"
              innerText="X"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              play={this.playAudio_8}
            />
            <Drum
              id="bass"
              innerText="C"
              audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              play={this.playAudio_9}
            />
          </div>
        </div>
      </div>
    );
  }
}