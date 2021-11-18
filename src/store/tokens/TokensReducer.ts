import { Action } from './Actions';

export interface TokenState {
    tokens: string
}

const initialState = { //definindo valor inicial como Vazio
    tokens: ""
}

//primeiro parametro é o State e o segundo é a ação que vai modificar o State, 
//A variavel chamada state vai se chamar TokenState ou seja ela é do tipo da minha model
//Vamos atribuir o State com valor inicial que é o initialState.
//o meu State da minha modela está recebendo o initialState que está vazio, logo ele vai ser atribuido no State como vazio
export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){ //Switch faz uma verificação

        //Caso a action seja do tipo add token, então retorne um objeto token que recebe o action.payload
        //payload é o token em si
        case "ADD_TOKEN": { 
            return {tokens: action.payload}
        }

        default:
            return state
    }
}