import React from 'react';
import {Input, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentsStyle from './ComponentsStyle.css';

export default class SearchBar extends React.Component {
  render(){
    return(
      <div id="subTabSearchBar">
          <Input name="localizar" id= "inputStyle" placeholder="Localizar..." />
      </div>
    );
  }
}
