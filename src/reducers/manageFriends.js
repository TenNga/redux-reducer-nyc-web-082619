export function manageFriends(state={friends: []}, action){
  if(action.type === "ADD_FRIEND")
    return {friend: [...state.friends, action.friend]}
  if(action.type === "REMOVE_FRIEND")
    return {friend: 
  else 
    return state;
}
