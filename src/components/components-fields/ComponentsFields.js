import React, {useEffect}  from 'react';
import ShortText from './short-text/ShortText';

const ComponentMapper = {
  'short_text': ShortText
}

export default function ComponentsFields({fieldsArrayByColumn, column}) {
  const handleDragStart = (e, fieldParams, index) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", (`${fieldParams.uniqueID}_${index}_${column}`));
  };

  return (
    <ul className="smaply-user-templates-items-column">
      {
        fieldsArrayByColumn.map((componentSettings, index) => {
          const MappedComponent = ComponentMapper[componentSettings.field_type]
          return (
            <li key={componentSettings.uniqueID}
                draggable="true"
                onDragStart={e => handleDragStart(e, componentSettings, index)}
            >
              <MappedComponent data={componentSettings}/>
            </li>
          )
        })
      }
    </ul>
  )
}