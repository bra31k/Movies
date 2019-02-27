import React from 'react';
import { Container, Row, Col} from "reactstrap";

export class MainLayout extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>{ this.props.children[0] }</Col>
                </Row>
                <Row>
                    <Col xs={2}>{ this.props.children[1] }</Col>
                    <Col xs={10}>{ this.props.children[2] } { this.props.children[3] } { this.props.children[4] }</Col>
                </Row>
            </Container>
            )

  }
}

export default MainLayout;