import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { addToken } from '../../store/tokens/Actions';
import {toast} from 'react-toastify';

function NavBar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {

        //o valor do addtoken vai ser vazio pois vai garantir que ira ser eliminado, consequentemente vamos ser redirecionados para tela de login
        dispatch(addToken(''));
        toast.info('usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != '') {
        navbarComponent =
            <AppBar position="static" className="color">
                <Toolbar>
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">
                            Gaming
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Início
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagens" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/tema" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default NavBar
