import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentsStyle from './ComponentsStyle.css';

export default class Example extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
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
      <div className="SubTabsStyle">
        <Nav tabs>
          <NavItem>
            <NavLink
              id = "border"
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              CNPq
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              id = "border"
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Pós-Graduação
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              id = "border"
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Periódicos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              id = "border"
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Extensão
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              id = "border"
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Demandas
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
