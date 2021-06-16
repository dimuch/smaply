import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
const dataPull = ['', 'columns', 'fields'];

export function useFetchPersonaDataByID(id) {
  const [serverData, setServerData] = useState({});

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      return await response.json();
    };

    const requestPull = dataPull.map(requestParams => {
      let url = `${process.env.REACT_APP_API.trim()}/${id}`
      if(requestParams){
        url = `${url}/${requestParams}`
      }

      return fetchData(url)
    })

    Promise.allSettled(requestPull)
      .then(data => {
        const summary = dataPull.reduce((res, item, index) => {
          res[item || 'id'] = data[index]['value']
          return res;
        }, {});


        const fieldsByColumn = summary.fields.reduce((res, item) => {
          res[item.column_id] = [
            ...res[item.column_id] || [], {...item, uniqueID: uuidv4()}
          ]
          return res
        }, {});

        setServerData({...summary.id, fieldsByColumn});
      })

  }, []);

  return serverData;
}
