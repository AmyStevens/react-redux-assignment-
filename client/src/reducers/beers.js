const beers = (state = [], action) =>  {
  switch(action,type){
    case 'SET_BEERS':
    return action.restaurants
    default:
    return state;
  }
}

export default beers;
