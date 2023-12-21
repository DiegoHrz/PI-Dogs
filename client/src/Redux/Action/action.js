import axios from 'axios'

export function createDogs(state){
    return async function(dispatch){
        try{
            await axios.post('http://localhost:3001/dogs',state)
        }
        catch (error){
            return {error: error.message}
        }
    }
    
}