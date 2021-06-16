import React, {useReducer} from 'react';
import ComponentsFields from '../components-fields/ComponentsFields';
import {reducer} from '../../reducers/drag-and-drop-reducer';

const DragAndDrop = props => {

  const { componentsData } = props;

  const [data, dispatch] = useReducer(
    reducer, { dropDepth: 0, inDropZone: false, data: componentsData }
  )

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target;
    const dropZoneID = target.id;

    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1, activeDropZoneID:  dropZoneID });
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1});
    if (data.dropDepth > 0) return
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = 'move';
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    const draggableFieldID = e.dataTransfer.getData("text/plain");

    dispatch({ type: 'UPDATE_FIELDS_ORDER', draggableFieldID: draggableFieldID });
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
  };

  return (
    <div
         onDrop={e => handleDrop(e)}
         onDragOver={e => handleDragOver(e)}
         onDragEnter={e => handleDragEnter(e)}
         onDragLeave={e => handleDragLeave(e)}
    >
      <div className="smaply-user-dashboard-content">
        {data && data.data[1] && (
          <div className="smaply-user-dashboard-content-left-column">
            <ComponentsFields fieldsArrayByColumn={data.data[1]} column={1}/>
          </div>
        )}
        {data && data.data[1] && (
          <div className="smaply-user-dashboard-content-right-column">
            <ComponentsFields fieldsArrayByColumn={data.data[1]} column={1}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;