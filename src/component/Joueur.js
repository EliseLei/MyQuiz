import React from 'react'

function Joueur(props) {
  return ( 
    <p>{
    props.lettersalreadyplayed.map(function(lettre) {
      return <span key={lettre}>{lettre} <button>x</button>, </span>
			})
    }
    </p>
  )	
}


export default Joueur
