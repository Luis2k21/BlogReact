interface User{
    id: number;
    nome: string;
    usuario: string;
    senha: string; //não terá um campo token pois é só na parte de login, porque você não faz cadastro de token.
}

export default User;