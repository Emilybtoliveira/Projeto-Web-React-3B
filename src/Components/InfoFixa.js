import React from 'react';
import {Button, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class InfoFixa extends React.Component {
  render(){
    return(
        <div>
          <Row>
            <h6> Você atualmente está habilitado como avaliador na plataforma. </h6>
            <Button color="danger"> Deixar de ser avaliador </Button>
          </Row>
        </div>
    );
  }
}
