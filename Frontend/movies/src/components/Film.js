import React from 'react';
import {Card, CardBody, CardImg, CardTitle, Col} from "reactstrap";

export class Film extends React.Component {

    getImg(poster_path) {
        let img = 'http://image.tmdb.org/t/p/w300/' + poster_path;
        return img
    }

    render() {
        return (
            <Col xs="auto" sm={{ size: '4'}}>
                    <Card body className="text-center">
                        <CardImg width="100" src={this.getImg(this.props.poster_path)} />
                        <CardBody>
                            <CardTitle>{this.props.original_title}</CardTitle>
                        </CardBody>
                        </Card>
                    </Col>
    )
  }
}

export default Film;