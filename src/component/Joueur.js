import React from 'react'

function Joueur (props) {
  return ( 
    <p>Joueurs choisis :  {
    props.joueursalreadyadd.map(function(joueur) {
      return <span key={joueur}>{joueur}, </span>
			})
    }
    </p>
  )	
}


export default Joueur
