import React, { useState, useEffect, ChangeEvent } from 'react'

import { Grid, Box, Typography, Button, TextField } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom"
import { login } from '../../Services/Service' //importando o service que é a URL dentro do file service que nós exportamos

import UserLogin from '../../Models/UserLogin'
import { useDispatch } from 'react-redux'
import { addToken } from '../../store/tokens/Actions'
import { toast } from 'react-toastify'

function Login() {

    const dispatch = useDispatch();
    let history = useHistory();
    const [token, setToken] = useState(''); //ele vai gravar o token que está vindo da API no nosso localStorage
    
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: "",
        senha: "",
        token: "",
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) { //ele vai pegar as informações do meu usuario, vai jogar pra função updatedModel e depois vai joga-la para dentro do meu setUserLogin, lembrando que o updatedModel pega essas informações do textField
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value  //target name, seria o nome do meu usuario, no caso o campo. ::: O value é o valor que o usuario digita, no primeiro lado, eu capturo a propiedade no caso o (nome) e no segundo lado eu capturo o valor inserido no campo
        })
    }

    useEffect(() => {   //responsavel por fazer o controle de um ciclo de vida de um componente
        if(token != ""){
            dispatch(addToken(token))
            history.push("/home")
        }
    }, [token]) 

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try{
            await login(`/usuarios/logar`, userLogin, setToken)//o token é gravado no localStorage

            toast.success('usuario logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }catch(error){
            toast.error('usuario ou senha incorretos!', {
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
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant="h4" gutterBottom color="initial" component="h3" align="center" style={{ fontWeight: "bold" }}>
                                Entrar
                            </Typography>
                            <TextField
                                value={userLogin.usuario} //meio que estamos vinculando esse campo com a minha model
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} //aqui nós colocamos o evento que ira acontecer de fato
                                id="usuario"
                                label="usuário"
                                variant="outlined"
                                name="usuario"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                value={userLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="senha"
                                label="senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                type="password"
                                fullWidth
                            />
                            <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" color="primary" >
                                    Logar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant="subtitle1" gutterBottom align="center" style={{ fontWeight: "bold" }}>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid xs={6} style={{
                    backgroundImage: "url(https://static.highsnobiety.com/thumbor/FIomV2VNgdu5ROdz42jjd_RxciE=/1600x1067/static.highsnobiety.com/wp-content/uploads/2016/11/30150517/japan-drift-scene-04.jpg)",
                    backgroundRepeat: "no-repeat", width: "100vh", minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center"
                }}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
