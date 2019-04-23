import React from 'react';
import Film from '../components/Film.js'
import PagesLink from '../components/Pagination'
import { connect } from 'react-redux'
import { getFilms, setCurrentPage, setActualGenre} from '../actions/FilmActions'
import { withRouter } from 'react-router-dom'

import '../style/FilmList.css'



export class FilmsList extends React.Component {

    componentDidMount() {
        const { getFilms, setActualGenre, setCurrentPage } = this.props;
        const { actualGenre, searchText, timeFrame } = this.props.filmList;
        setActualGenre(this.props.match.params.genre);
        if (this.props.match.params.page !== undefined) {
            setCurrentPage(this.props.match.params.page);
            getFilms(parseInt(this.props.match.params.page), actualGenre, timeFrame, searchText)
        }
        else {
            setCurrentPage(1);
            getFilms(1, actualGenre, timeFrame, searchText);
        }
    }



    componentDidUpdate(prevProps) {
        const { getFilms, setActualGenre, setCurrentPage } = this.props;
        const {actualGenre, searchText, currentPage, timeFrame} = this.props.filmList;
        if (actualGenre !== this.props.match.params.genre) {
            setActualGenre(this.props.match.params.genre);
            getFilms(currentPage, this.props.match.params.genre, timeFrame, searchText)
        }
        if (currentPage !== parseInt(this.props.match.params.page)){
            if (this.props.match.params.page !== undefined) {
                setCurrentPage(parseInt(this.props.match.params.page));
                getFilms(this.props.match.params.page, actualGenre, timeFrame, searchText)
            }
            if (currentPage !== 1) {
                setCurrentPage(1);
                getFilms(1, actualGenre, timeFrame, searchText)
            }
        }
        if (prevProps.filmList.actualGenre !== actualGenre) {
            setActualGenre(actualGenre);
            getFilms(currentPage, actualGenre, timeFrame, searchText)
        }
        if (currentPage !== prevProps.filmList.currentPage) {
            setCurrentPage(currentPage);
            getFilms(currentPage, actualGenre, timeFrame, searchText);
        }
        if (prevProps.filmList.timeFrame !== timeFrame || prevProps.filmList.searchText !== searchText) {
            getFilms(currentPage, actualGenre, timeFrame, searchText)
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
            <div>
            <div className='film-container'>
                {this.renderFilms()}
            </div>
                <PagesLink
                    setCurrentPage={this.props.setCurrentPage}
                    lastPage={this.props.filmList.lastPage}
                    page={this.props.filmList.currentPage}
                    url={this.props.match.params.genre}/>
            </div>

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
        getFilms: (page, genres, timeFrame, searchText) => dispatch(getFilms(page, genres, timeFrame, searchText)),
        setCurrentPage: (page) => dispatch(setCurrentPage(page)),
        setActualGenre: (genres) => dispatch(setActualGenre(genres)),
    }
};


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsList))




