import React, {useEffect} from 'react';
import {AddIcon} from '../../icon';

export default function ShortText({data}) {
  // console.log(data);

  return (
    <div className="smaply-user-templates-item smaply-drop-zone short-text"
      id={data.uniqueID}
    >
      <div className="smaply-user-templates-item-title-wrapper">
        <p className="smaply-user-templates-item-title">
          {data.title}
        </p>
        <div className="smaply-user-templates-item-settings">
          <div className="smaply-icon icon-middle">
            <AddIcon/>
          </div>
        </div>
      </div>
      <div className="smaply-user-templates-item-content-wrapper">
        <p>
          {data.data}
        </p>
      </div>
    </div>
  )
}