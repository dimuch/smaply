import React, {useEffect, useState} from 'react';
import {CirclesIcon, EditIcon, GridIcon, TurnOffIcon, UserIcon} from '../icon';
import {v4 as uuidv4} from 'uuid';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {getUserAction} from '../../services/persona';

export default function PersonalToolBar() {
  const actions = getUserAction();

  const [persona, setPersona] = useState({
    "id": 20,
    "name": "Klaus",
    "initials": "KLA",
    "color": "#F46060",
    "avatar": "klaus"
  });

  const [action, setAction] = React.useState('myOrg');

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Source Sans Pro',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="smaply-persona-tool-bar-top">
        <div className="smaply-persona-tool-bar-left-group">
          <ul className="smaply-group-controls">
            <li className="smaply-group-item">
              <div className="smaply-icon icon-middle">
                <UserIcon/>
              </div>
              <div className="smaply-icon-text plain-text">
                <span>Persona&nbsp;</span>
                <input type="text" value={persona.name}/>
              </div>
              <div className="smaply-icon icon-middle">
                <EditIcon/>
              </div>
            </li>

            {
              actions.map(counter => {
                const GeneratedIcon = counter.icon;
                const value = counter.value;
                return (
                  <li className="smaply-group-item" key={counter.id}>
                    <div className="smaply-icon icon-middle">
                      <GeneratedIcon/>
                    </div>
                    <div className="smaply-icon-text">
                      <span><strong>{value}</strong></span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="smaply-persona-tool-bar-right-group">
          <ul className="smaply-group-controls">
            <li className="smaply-group-item ">
              <Select
                value={action}
                onChange={handleChange}
                displayEmpty
                style={{minWidth: 150, color: '#DCDCDC', fontSize: 14}}
              >
                <MenuItem value="myOrg">My organization</MenuItem>
                <MenuItem value="mySubNet">My SubNet</MenuItem>
                <MenuItem value="myCompetitors">My Competitors</MenuItem>
              </Select>
            </li>
            <li className="smaply-group-item">
              <div className="smaply-icon icon-middle">
                <UserIcon/>
              </div>
              <div className="smaply-icon-text plain-text">
                <span>Jane Doe</span>
              </div>
            </li>
            <li className="smaply-group-item">
              <div className="smaply-icon icon-middle">
                <TurnOffIcon/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
}