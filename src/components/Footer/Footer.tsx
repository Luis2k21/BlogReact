import React from 'react'
import Container from '@mui/material/Container'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';

import './Footer.css';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != '') {
        footerComponent =
            <Grid alignItems="center">
                <Box className="box1">
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h6" align="center" gutterBottom className='textos'>Siga-me nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.instagram.com/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/luis-hariel-8152281b7/?_l=pt_BR" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
            </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer
