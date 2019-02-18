import React from 'react';
import Film from '../components/Film.js'
import PagesLink from '../components/Pagination'
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { getFilms, setCurrentPage, setActualGenre} from '../actions/FilmListActions'


export class FilmsList extends React.Component {

    componentDidMount() {
        const { getFilms, setActualGenre, setCurrentPage } = this.props;
        setActualGenre(this.props.match.params.genre);
        if (this.props.match.params.page !== undefined) {
            setCurrentPage(this.props.match.params.page);
            getFilms(parseInt(this.props.match.params.page), this.props.filmList.actualGenre);
        }
        else {
            setCurrentPage(1);
            getFilms(1, this.props.filmList.actualGenre);
        }

    }


    componentDidUpdate(prevProps) {
        const { getFilms, setActualGenre, setCurrentPage } = this.props;
        if (prevProps.filmList.actualGenre !== this.props.filmList.actualGenre) {
            setActualGenre(this.props.filmList.actualGenre);
            getFilms(this.props.filmList.currentPage, this.props.filmList.actualGenre);
        }
        if (this.props.filmList.actualGenre !== this.props.match.params.genre) {
            setActualGenre(this.props.match.params.genre);
            getFilms(this.props.filmList.currentPage, this.props.match.params.genre);
        }
        if (this.props.filmList.currentPage !== this.props.match.params.page && this.props.match.params.page !== undefined){
            setCurrentPage(this.props.match.params.page);
            getFilms(this.props.match.params.page, this.props.filmList.actualGenre)
        }
        console.log(this.props);
    }


    renderFilms() {
        return this.props.filmList.films.map(film => {
            return <Film key={film.id}
                        poster_path={film.poster_path}
                        original_title={film.original_title}
                    />
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 9 }}>
                        <PagesLink
                            lastPage={this.props.filmList.lastPage}
                            page={this.props.filmList.currentPage}
                            url={this.props.match.params.genre}/>
                        </Col>
                </Row>
                <Row>
                    {this.renderFilms()}
                </Row>
            </Container>
    )
  }
}

const mapStateToProps = store => {
    return {
        filmList: store.film,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFilms: (page, genres) => dispatch(getFilms(page, genres)),
        setCurrentPage: (page) => dispatch(setCurrentPage(page)),
        setActualGenre: (genres) => dispatch(setActualGenre(genres)),
    }
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsList)




