import { types } from "node-sass"


export const login = (uid, displayName) => 
   (  {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })
