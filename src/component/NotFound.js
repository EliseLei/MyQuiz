import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h2 className="erreur404"> ERREUR 404 :()</h2>
    <center><Link to="/">Retourner à la home</Link></center>
  </div>
);
 

export default NotFound;
