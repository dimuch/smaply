import React, {useEffect} from 'react';
import {useFetchAllPersonasData} from '../../../hooks/useFetchAllPersonasData';
import PersonaCard from '../../../components/persona-card/PersonaCard';


export default function MainPage() {
  const {serverData: {data}} = useFetchAllPersonasData();

  if (!data) {
    return (
      <div className="smaply-main-page">
        <h1>Main page</h1>
      </div>
    )
  }

  console.log(11, data);

  return (
    <div className="smaply-main-page">
      <h1>Main page</h1>

      <div className="smaply-personas-list">
        <ul>
          {
            data.map(persona => {
              return (
                <li key={persona.id}>
                  <PersonaCard persona={persona}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
