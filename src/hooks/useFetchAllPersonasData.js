import React, {useState, useEffect} from 'react';

export function useFetchAllPersonasData(url) {
  const [serverData, setServerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if(!url){
        return {
          data: [
            {
              id: 20,
              name: 'Klaus',
              initials: 'KLA',
              color: '#F46060',
              avatar: 'klaus'
            }
          ]
        };
      }
      const response = await fetch(url);
      const {data, message, status} = await response.json();

      if (response.status.toString().match(/^4/gi)) {
        throw new Error(JSON.stringify({data, message, status}));
      }

    };

    fetchData()
      .then((data) => {
        setServerData(data);
      })
      .catch(err => {
        const {data} = JSON.parse(err.message);
        setServerData({data});
      })
  }, [url]);

  return {serverData};
}
