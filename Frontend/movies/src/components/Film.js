import React from 'react';
import '../style/FilmList.css'
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";

export class Film extends React.Component {

    getImg(poster_path) {
        let img = 'http://image.tmdb.org/t/p/w300/' + poster_path;
        return img
    }

    render() {
        return (
                    <Card body className = "text-center card-style">
                        <CardImg width="100" src={this.getImg(this.props.poster_path)} />
                        <CardBody>
                            <CardTitle>{this.props.original_title}</CardTitle>
                        </CardBody>
                        </Card>
    )
  }
}

export default Film;