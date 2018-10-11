import React from 'react';
import {Button, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentsStyle from './ComponentsStyle.css';

export default class InfoFixa extends React.Component {
  render(){
    return(
        <div id="infoFixaStyle">
          <h6> Você atualmente está habilitado como avaliador na plataforma. </h6>
          <Button color="danger"> Deixar de ser avaliador </Button>
        </div>
    );
  }
}
