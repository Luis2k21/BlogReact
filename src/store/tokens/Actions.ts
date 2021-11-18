export type Action = {type: "ADD_TOKEN"; payload: string}; //payload é para armazenar o nosso token, quando criamos uma action temos uma propiedade, a primeira é o tipo e a segunda é a informação que a action está levando, no caso vamos enviar um token nesse caso.  TYPE É O NOME DA NOSSA ACTION

//addtoken é resposavel por enviar a nossa ação para o reducer.
export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});