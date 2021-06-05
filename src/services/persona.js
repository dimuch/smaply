import {AddIcon, DuplicateIcon, ExportIcon, SaveIcon, MoveIcon, HelpIcon, MoreActionsIcon} from '../components/icon';

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

export function getUserAction(){
  return [
    {
      id: 'save-persona',
      icon: SaveIcon,
      text: "Save persona"
    },
    {
      id: 'add-element',
      icon: AddIcon,
      text: "Add element"
    },
    {
      id: 'export',
      icon: ExportIcon,
      text: "Export"
    },
    {
      isButtonGroup: true,
      items: [
        {
          id: 'duplicate',
          icon: DuplicateIcon,
          text: "Duplicate"
        },
        {
          id: 'move',
          icon: MoveIcon,
          text: "Move"
        }
      ]
    },
    {
      id: 'help',
      icon: HelpIcon,
      text: "Help"
    },
    {
      id: 'more-actions',
      icon: MoreActionsIcon,
      text: "More actions"
    }
  ];

}