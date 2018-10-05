import React from 'react';
import {Input, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SearchBar extends React.Component {
  render(){
    return(
          <Input name="localizar" id= "inputStyle" placeholder="Localizar..." />
    );
  }
}
