import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Conteiner } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoFixa from './InfoFixa.js';
import ComponentsStyle from './ComponentsStyle.css';

export default class SubTabComponent extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.estaSelecionado = this.estaSelecionado.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  estaSelecionado(id){
    if(this.state.activeTab == id){
      return "Selecionado"
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
     this.setState({
       activeTab: tab
     });
    }
 }

 render() {
    return (
      <div className="SubTabsStyle" id="subTabSearchBar">
        <Nav tabs>
          <NavItem>
            <NavLink id ="1"
              id = "border"
              className={this.estaSelecionado("1")}
              onClick={() => { this.toggle('1'); }}
            >
              CNPq
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="2"
              id = "border"
              className={classnames(this.estaSelecionado("2"))}
              onClick={() => { this.toggle('2'); }}
            >
              Pós-Graduação
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="3"
              id = "border"
              className={this.estaSelecionado("3")}
              onClick={() => { this.toggle('3'); }}
            >
              Periódicos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="4"
              id = "border"
              className={this.estaSelecionado("4")}
              onClick={() => { this.toggle('4'); }}
            >
              Extensão
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="5"
              id = "border"
              className={this.estaSelecionado("5")}
              onClick={() => { this.toggle('5'); }}
            >
              Demandas
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">

          </TabPane>
          <TabPane tabId="2">

          </TabPane>
          <TabPane tabId="3">

          </TabPane>
          <TabPane tabId="4">

          </TabPane>
          <TabPane tabId="5">

          </TabPane>
        </TabContent>
      </div>
    )
  }
}
