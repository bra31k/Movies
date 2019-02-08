import React from 'react';
import Film from '../components/Film.js'
import PagesLink from '../components/Pagination'
import {Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux'
import { getFilms, getCurrentPage } from '../actions/FilmListActions'


export class FilmsList extends React.Component {

    componentDidMount() {
        const { getFilms, getCurrentPage } = this.props;
        if (this.props.page){
            getFilms(this.props.page);
            getCurrentPage(this.props.page);
        }
        else {
            getFilms(1);
        }
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
                    {this.renderFilms()}
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <PagesLink
                            page = {this.props.filmList.currentPage}/>
                        </Col>
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
        getFilms: (page) => dispatch(getFilms(page)),
        getCurrentPage: (page) => dispatch(getCurrentPage(page)),
    }
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsList)




