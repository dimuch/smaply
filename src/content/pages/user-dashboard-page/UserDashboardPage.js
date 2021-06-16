import React, {useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import {useParams} from 'react-router-dom';

import PersonalToolBar from '../../../components/personal-tool-bar/PersonalToolBar';
import UserAvatarIcon from '../../../components/icon/user-avatar';
import {useFetchPersonaDataByID} from '../../../hooks/useFetchPersonaDataByID';
import DragAndDrop from '../../../components/drag-and-drop/DragAndDrop';

export default function UserDashboard() {
  const [state, setState] = useState({off: false});

  const { id } = useParams();
  const {id: userID, avatar,color,initials,name, fieldsByColumn} = useFetchPersonaDataByID(id);

  const [personaData, setPersonaData] = useState(null);

  const [inputsUIState, setInputsUIState] = useState({
    name: 'valid',
    initials: 'valid'
  })

  useEffect(() => {
    const mergedData = {userID, avatar,color,initials,name, fieldsByColumn};
    setPersonaData(mergedData);
  }, [userID, fieldsByColumn]);


  const toggleTemplatesPanel = () => {
    setState({...state, off: !state.off});
  }

  const updatePersonaField = (e, field) => {
    const value = e.target.value.trim();

    let updatedPersona = {
      ...personaData,
      [field]: value
    }

    const mappedInitialsValue = field === 'initials' ? updatedPersona.initials : updatedPersona.name;

    updatedPersona = {
      ...updatedPersona,
      initials: getPersonaInitials(mappedInitialsValue)
    }

    setPersonaData(updatedPersona);
  }

  const validatePersonaField = (e, field) => {
    const value = e.target.value.trim();
    const isValueEmpty = !value || value.length === 0;

    const updatedInputsUIState = {
      ...inputsUIState,
      [field]: isValueEmpty ? 'invalid' : 'valid'
    }
    setInputsUIState(updatedInputsUIState);
  }

  const getPersonaInitials = (name) => {
    const initials = name.slice(0,3).toLocaleUpperCase();
    return initials;
  }

  const styles = {
    userAvatar: {
      backgroundColor: color || 'grey'
    }
  }

  if(!personaData || !personaData.userID){
    return (
      <div className="smaply-dashboard-page">
        <p>...loading</p>
      </div>
    )
  }

  return (
    <div className="smaply-dashboard-page">
      <PersonalToolBar templatePanelToggler={toggleTemplatesPanel} userData={personaData}/>
      <div className="smaply-user-dashboard-wrapper">
        <div className="smaply-user-dashboard">
          <div className="smaply-user-dashboard-header">
            <div className="smaply-user-avatar" style={styles.userAvatar}>
              <div className="smaply-icon">
                <UserAvatarIcon/>
              </div>
            </div>
            <div className="smaply-user-name smaply-block-data">
              <div className="smaply-block-data-title">
                <p><strong>persona name</strong></p>
              </div>
              <div className={'smaply-block-data-data ' + inputsUIState['name']}>
                <input
                  id="name"
                  value={personaData.name}
                  onBlur={(e) => {
                    validatePersonaField(e, 'name')
                  }}
                  onChange={(e) => updatePersonaField(e, 'name')}
                />
              </div>
            </div>
            <div className="smaply-user-initials smaply-block-data">
              <div className="smaply-block-data-title">
                <p><strong>short name</strong></p>
              </div>
              <div className={'smaply-block-data-data ' + inputsUIState['initials']}>
                <input
                  id="initials"
                  value={personaData.initials}
                  onBlur={(e) => {
                    validatePersonaField(e, 'initials')
                  }}
                  onChange={(e) => updatePersonaField(e, 'initials')}
                />
              </div>
            </div>
          </div>

          <DragAndDrop componentsData={fieldsByColumn}/>
        </div>

        <CSSTransition
          timeout={250}
          classNames="smaply-user-templates-panel"
          in={state.off}
        >
          <div className="smaply-user-templates">

          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
