export const reducer = (state, action) => {
  let updated;
  switch (action.type) {
    case 'SET_DROP_DEPTH':
      updated = { ...state, dropDepth: action.dropDepth};
      if(!action.activeDropZoneID){
        return updated;
      }
      updated = { ...updated, activeDropZoneID:action.activeDropZoneID };
      return updated;

    case 'SET_IN_DROP_ZONE':
      updated = { ...state, inDropZone: action.inDropZone };
      return updated;
    case 'UPDATE_FIELDS_ORDER':
      const [draggableItemID, draggableItemStartIndex, column] = action.draggableFieldID.split('_');

      const activeDropZoneStartIndex = state.data[column].findIndex(item => item.uniqueID === state.activeDropZoneID);

      if(activeDropZoneStartIndex === -1){
        console.log('not allowed drop column');
        return state
      }

      const updatedData = [...state.data[column]];

      const tmp = state.data[column][activeDropZoneStartIndex];
      updatedData[activeDropZoneStartIndex] = updatedData[draggableItemStartIndex];
      updatedData[draggableItemStartIndex] = tmp;

      console.log('updatedData', updatedData);

      return { ...state, data: {[column]:updatedData}};
    default:
      return state;
  }
};