import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Card, CardImg, CardBody,
  CardTitle, Container, Row, Col} from 'reactstrap';

export class FilmsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            next_page: '',
            pages: 0,
        };
    }


    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/films/`).then(res => {
        const films = res.data['results'];
        const next_page = res.data['next'];
        const pages = parseInt(res.data['count']/films.length);
        this.setState({ films, next_page, pages });
        })
    }

    getImg(poster_path) {
        var img = 'http://image.tmdb.org/t/p/w300/' + poster_path;
        return img
    }


    renderFilms() {
        return this.state.films.map(film => {
            return (
                <Col xs="auto" sm={{ size: '4'}}>
                    <Card body className="text-center">
                        <CardImg width="100" src={this.getImg(film.poster_path)} />
                        <CardBody>
                            <CardTitle>{film.original_title}</CardTitle>
                        </CardBody>
                        </Card>
                </Col>
              );
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.renderFilms()}
                </Row>
            </Container>
    )
  }
}

ReactDOM.render(<FilmsList />, document.getElementById('root'))

export default FilmsList;

