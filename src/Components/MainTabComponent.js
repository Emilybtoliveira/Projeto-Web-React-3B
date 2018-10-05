import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Input, Col, Row } from 'reactstrap';
import classnames from 'classnames';
import SubTabComponent from './SubTabComponent.js';
import ComponentsStyle from './ComponentsStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
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
      <div>

        <Nav tabs id="MainTabStyle">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Informações Pessoais
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Status como Avaliador
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <SubTabComponent/>
              </Col>
              <Col>
                <Input name="localizar" id= "inputStyle" placeholder="Localizar..." />
              </Col>
            </Row>
          </TabPane>
        </TabContent>

      </div>
    );
  }
}
