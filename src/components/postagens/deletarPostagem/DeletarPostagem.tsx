import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../Models/Postagem';
import { useHistory, useParams } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../Services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {

  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [postagem, setPostagens] = useState<Postagem>()

  useEffect(() => {   //responsavel por fazer o controle de um ciclo de vida de um componente
    if (token == "") {
      toast.error('você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      history.push("/login")
    }
  }, [token])

  useEffect(() => {
    if (id != undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagens, {
      headers: {
        "Authorization": token
      }
    })
  }

  function sim() {
    history.push("/postagens") //rota do front end
    deleteId(`/postagens/${id}`, { //rota do back end / api
      headers: {
        "Authorization": token
      }
    });
    toast.success('postagem deletada com sucesso', {
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

  function nao() {
    history.push("/postagens")
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {postagem?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;