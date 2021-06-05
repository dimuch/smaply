import {v4 as uuidv4} from 'uuid';
import {CirclesIcon, GridIcon, UserIcon} from '../components/icon';

export async function fetchUserConfig(personaId) {
  const baseUrl = `${process.env.REACT_APP_API}/personas/${personaId}`;
  const response = await fetch(baseUrl);
  try{
    // const {data} = await response.json();
    const {data} = await response.json();

    console.log(data);
    // if(status !== 'OK'){
    //   //errror notification
    //   return {data: null, message}
    // }
    //
    // return {data: data.data};
  } catch(err){
    return {data: null, message: 'Service is on maintenance. Please try latter'}
  }
}

export async function getUserAction(){
  return [
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

}