import { ADD_POST } from "../Types/Types";


export function addPostAction(payload){
    return {
        type: ADD_POST,
        payload: payload
    }
}
