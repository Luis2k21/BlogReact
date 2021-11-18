//o service fica responsavel por toda a regra de negocio, com a comunicação do back end com o front end

//nossa api é o back-end, toda requisição que fazemos para nossa API ela devolve para nós um resultado JSON

//Vai ser enviado dentro do parametro URL o endereço da API concatenado com a rota que ira utilizar, por exemplo /usuarios/cadastrar

//na parte de DADOS está enviado os dados, "NOME" "USUARIO" e "SENHA"

//na parte do setDADO vai capturar os dados que retornaram da API ou seja um objeto json, e vai atribuir a um estado ou state do componente.

import axios from 'axios';

export const api = axios.create({
    baseURL: "https://luisworks.herokuapp.com"
})

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {    //usuario/cadastrar
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
} 

export const login = async(url: any, dados: any, setDado: any) => {    // /usuario/logar exemplo
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
} 

export const busca = async(url: any, setDado: any, header: any) => {   //só vou poder listar as postagens e temas se meu usuario estiver registrado. HEADER é o TOKEN, URL é a ROTA
    const resposta = await api.get(url, header)
    setDado(resposta.data)
} 

export const buscaId = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
} 

export const post = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
} 

export const put = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header) //Token é para verificar se o usuario é valido
    setDado(resposta.data)
} 

export const deleteId = async(url: any, header: any) => {
    await api.delete(url, header) //não estamos passando nenhuma constante com uma variavel, pois no metodo delete eu não vou querer guardar alguma requsição do tipo delete em alguma variavel,
} 
