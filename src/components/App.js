import React, { Component } from 'react';
/* import Carousel from 'nuka-carousel';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar/NavBar'; */
import Grid from '@material-ui/core/Grid';
import Slider from './Slider/Slider';
import '../utils/typography';
import Header from './Header/Header';
import RegistroAbogado from './RegistroAbogado/RegistroAbogado';
import RegistroAbogadoData from './RegistroAbogadoData/RegistroAbogadoData';
import RegistroDespacho from './RegistroDespacho/RegistroDespacho';
import RegistroDespachoData from './RegistroDespachoData/RegistroDespachoData';
import MiniDrawer from './MiniDrawer/MiniDrawer';
import PageNotFound from './PageNotFound/PageNotFound';
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import RegisterSide from './RegisterSide/RegisterSide';


class App extends Component {
render() {
    return (
      <BrowserRouter>
        <div>
        <Header />
        <Grid container >
          <Grid className="cuadro" item xs={6}>
            <Slider />
          </Grid>
          <Grid item xs={6}>
              <Switch>
                        <Route exact path="/" component={RegisterSide} />
                        <Route exact path="/RegistroAbogado" component={RegistroAbogado} />
                        <Route exact path="/RegistroAbogadoData" component={RegistroAbogadoData} />
                        <Route exact path="/RegistroDespacho" component={RegistroDespacho} />
                        <Route exact path="/RegistroDespachoData" component={RegistroDespachoData} />
                        <Route component={PageNotFound} />
                </Switch>
            
          </Grid>
        </Grid>
        </div>
      </BrowserRouter> 
    )
  }
}
export default App;
