import { Button, Grid, TextField, Typography, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import User from '../../Models/User';
import { cadastroUsuario } from '../../Services/Service';
import React, {useState, useEffect, ChangeEvent} from 'react'
import { Link } from 'react-router-dom';
import "./CadastroUsuario.css";
import { toast } from 'react-toastify';

function CadastroUsuario() {
    let history = useHistory(); //use history é usada no use effect, porquê é no momento que eu efetivar meu cadastro e o usuario já estiver cadastrado, vou direcionar a tela de cadastro para a tela de login, para mostrar o usuario que acabei de cadastrar

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")//ela é utilizada para verificar se o campo confirmar senha é igual ao campo confirmarSENHA

    const [user, setUser] = useState<User>( //os campos estão vazio pois não foram preenchidos pelo usuario
        {       //na esquerda são variaveis, na direita é uma função, no caso setUser
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })
    const [userResult, setUserResult] = useState<User>( //vai ser resposavel por armazenar os valores da API, ela vai fazer o cadastro, quando terminar ela vai devolver um JSON e vai armazenar dentro de userResult
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => { //sera assionado após os envios das informações, vai verificar se é diferente de 0 pois o ID que nós inicializamos é 0, se n é 0 é pq n está mais utilizando os valores padrão, ou seja já tem algo cadastrado.
        if (userResult.id != 0) {
            history.push("/login") //metodo push em history para direcionar para a tela de login
            console.log(userResult)
        }

    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)//a confirmarSenha vai capturar o campo digitado em confirmarSENHA no texfield, então eu capturo o valor digitado e armazeno no state de confirmar senha
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value //nome do campo + o valor que o usuario digitou
        })
    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() //coloco esse comando para n atualizar a tela
        if (confirmarSenha == user.senha) { //se o confirmar senha for = ao user.senha do nosso typograph se for igual então é pq as senhas digitadas estão corretas
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult) // service criado na camada Services.ts envia valores digitados pelo usuario dentro do stateUser, que foram atualizadas na model graças ao updatedModel que espalha os valores que o usuario digitou e vai montando um objeto para envio (e.target.name) vai ser gerado um retorno que sera armazenado na setUserResult e ela quem vai armazenar os valores da API de userResult.
            toast.success('usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados invalidos!, verifique as informações de cadastro', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
        return (
            
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={6} className="imagem2">

                    </Grid>
                    <Grid item xs={6} alignItems="center">
                        <Box paddingX={10}>
                            <form onSubmit={onSubmit}>
                                <Typography variant="h4" gutterBottom color="initial" component="h3" align="center" style={{ fontWeight: "bold" }}>
                                    Cadastrar
                                </Typography>
                                <TextField
                                    value={user.nome}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    id="nome"
                                    label="nome"
                                    variant="outlined"
                                    name="nome"
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    value={user.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    id="usuario"
                                    label="usuario"
                                    variant="outlined"
                                    name="usuario"
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    value={user.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    id="senha"
                                    label="senha"
                                    variant="outlined"
                                    name="senha"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                                <TextField
                                    value={confirmarSenha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                    id="ConfirmarSenha"
                                    label="Confirmar senha"
                                    variant="outlined"
                                    name="ConfirmarSenha"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                                <Box marginTop={2} textAlign="center">
                                    <Link to="/login" className="text-decorator-nome btmCancelar">
                                        <Button type="submit" variant="contained" color="secondary" >
                                            Cancelar
                                        </Button>
                                    </Link>
                                    
                                        <Button type="submit" variant="contained" color="primary" >
                                            Cadastrar
                                        </Button>
                                   
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
        );
    }

export default CadastroUsuario;
