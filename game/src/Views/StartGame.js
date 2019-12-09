import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Button, Input } from '@material-ui/core';
import firebase from '../data/firebase';

// vista incial, donde se va a crear el juego
const StartGame  = () => {

  const [userName, setUserName] = useState('Jugador');

  function sentToFirebase(userName) {
    const db = firebase.firestore();
    db.collection("game").add({
      nombre1: userName,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    console.log('Hola jugador:', userName);
  }

  return (
    <section id="start-game">
          <Input 
          type="text" 
          placeholder="Ingresa tu nombre"
          onChange={(event) => setUserName(event.target.value)}
          required={true}>
          </Input>
            <Link to="/PlacingPieces"><Button
          onClick={() => sentToFirebase(userName)}>Crear Partida</Button></Link>
		 <a><img height="100px" src="https://i.ibb.co/CzRsWYX/portada.jpg" alt="portada"></img></a>   
    </section>   
  );
};

export default StartGame;
