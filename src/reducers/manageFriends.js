export function manageFriends(state={friends: []}, action){
  if(action.type === "ADD_FRIEND")
    return {friends: [...state.friends, action.friend]}
  else 
    return state;
}
