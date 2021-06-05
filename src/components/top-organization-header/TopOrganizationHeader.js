import React, {useEffect} from 'react';
import ChartIcon from '../../assets/icons/chart-area-solid.svg';
import {CirclesIcon, GridIcon, TurnOffIcon, UserIcon} from '../icon';
import {v4 as uuidv4} from 'uuid';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function TopOrganizationHeader() {
  const counters = [
    {
      id: uuidv4(),
      icon: UserIcon,
      value: 3
    },
    {
      id: uuidv4(),
      icon: CirclesIcon,
      value: 1
    },
    {
      id: uuidv4(),
      icon: GridIcon,
      value: 1
    }
  ];

  const [action, setAction] = React.useState('myOrg');

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
      <div className="smaply-global-nav-top">
        <div className="smaply-global-nav-left-group">
          <ul className="smaply-group-controls">
            <li className="smaply-group-item smaply-img">
              <img src={ChartIcon} alt="SmaplyLogo"/>
            </li>
            {
              counters.map(counter => {
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
        <div className="smaply-global-nav-center-group">
          <span>Dashboard&nbsp;/&nbsp;My project&nbsp;/&nbsp;</span>
          <span><strong>Persona Tess</strong></span>
        </div>
        <div className="smaply-global-nav-right-group">
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
  );
}