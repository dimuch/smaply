import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
export default function PersonaCard({persona}) {

  console.log('persona ==>', persona);

  return (
    <Link to={'/dashboard/' + persona.id}>
      <div className="smaply-persona-card">
        <h2>{persona.name}</h2>
      </div>
    </Link>
  );
}