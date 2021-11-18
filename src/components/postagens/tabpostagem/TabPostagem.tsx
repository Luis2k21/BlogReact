import React, { useState } from 'react' //use state nesse caso, vai capturar o valor 1 ou 2, de cada um dos paineis, painel um contendo todas as postagens, e o 2 contendo um texto generico sobre nós.

import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}> {/*ele é como se fosse o container das nossas guias*/}
                <AppBar position="static"> {/*ele possui dois tabs, que nada mais são do que as nossas abas*/}
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />{/*percebe-se que os dois tabs tem valores "1" e "2", então toda a vez que eu clica por exemplo no valor 1, ele vai me redirecionar para o TabPanel 1, se fosse o valor 2, iria para o outro TabPanel*/}
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo"></Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;