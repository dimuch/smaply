import React, {useEffect, useState} from 'react';
import {EditIcon, TurnOffIcon, UserIcon} from '../icon';

import {getUserAction} from '../../services/persona';

export default function PersonalToolBar() {
  const actions = getUserAction();

  const [persona, setPersona] = useState({
    'id': 20,
    'name': 'Klaus',
    'initials': 'KLA',
    'color': '#F46060',
    'avatar': 'klaus'
  });

  const [disabledMode, setDisabledMode] = useState(true);
  const actionButtonHandlersMapper = {
    'save-persona': defaultHandler,
    'add-element': addElementHandler,
    'export': defaultHandler,
    'duplicate': defaultHandler,
    'move': defaultHandler,
    'help': defaultHandler,
    'more-actions': defaultHandler,
  }


  const updatePersonaName = (event) => {
    setPersona({...persona, name: event.target.value});
  };

  const validatePersonaName = () => {

  }


  function defaultHandler(action){
    console.log('defaultHandler', action.id)
  }

  function addElementHandler(action){
    console.log('addElementHandler')
  }

  return (
    <div className="smaply-persona-tool-bar-top">
      <div className="smaply-persona-tool-bar-left-group">
        <div className="group-content">
          <div className="smaply-icon icon-big">
            <UserIcon/>
          </div>
          <div className="smaply-icon-text persona-label">
            <span>Persona&nbsp;</span>
          </div>
            <input type="text"
                   className="smaply-user-input"
                   value={persona.name}
                   size={persona.name.length > 0 ? persona.name.length : 0}
                   onChange={(e) => updatePersonaName(e)}
                   onBlur={(e) => validatePersonaName()}
                   disabled={disabledMode}
            />
          <button className={"smaply-icon-button " + (disabledMode ? '' : 'active')}
            onClick={() => {setDisabledMode(!disabledMode)}}
          >
            <div className="smaply-icon icon-middle">
              <EditIcon/>
            </div>
          </button>
        </div>
      </div>
      <div className="smaply-persona-tool-bar-right-group">
        <ul className="smaply-group-controls">
          {
            actions.map(action => {
              const GeneratedIcon = action.icon;
              const caption = action.text;
              return (
                <li className="smaply-group-item" key={action.id}>
                  <button className={"smaply-icon-button button-caption-bottom button-middle" + (disabledMode ? '' : 'active')}
                          onClick={() => actionButtonHandlersMapper[action.id](action)}
                  >
                    <div className="smaply-icon">
                      <GeneratedIcon/>
                    </div>
                    <div className="smaply-button-caption">
                      <span>{caption}</span>
                    </div>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}