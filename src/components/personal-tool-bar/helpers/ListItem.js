import React from 'react';

const ListItem = ( {action, actionButtonHandlersMapper} ) => {
  const GeneratedIcon = action.icon;
  const caption = action.text;

  return (
    <li className="smaply-group-item" key={action.id}>
      <button className={"smaply-icon-button button-caption-bottom button-middle"}
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
}

export default ListItem;