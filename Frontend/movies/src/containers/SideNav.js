import React from 'react';
import { Button } from 'reactstrap';
import { getGenres } from "../actions/GenresActions";
import { setActualGenre, setReleaseDate } from '../actions/FilmActions'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import '../style/SideNav.css'


export class SideNav extends React.Component {

    onBtnClick(genre) {
        const { setActualGenre } = this.props;
        setActualGenre(genre);
    }

    componentDidMount() {
        const { getGenres } = this.props;
        getGenres();
    }



    renderButton (){
        return this.props.sidenav.genres.map(genre => {
            return (
                <Link
                    className = { genre.genre_name }
                    key = { genre.genre_name }
                    to={ `/${genre.genre_name}/` }>
                    <Button className='button-genre'
                            color = "secondary"
                            size = "sm"
                            onClick = {() => this.onBtnClick(genre.genre_name)}
                            key = { genre.genre_name }>
                        { genre.genre_name }
                    </Button>
                </Link>
            )
        })
    }

    render() {
        const { setReleaseDate } = this.props;
        return (
            <div className='container'>
                    {this.renderButton()}
                        <InputRange
                            maxValue={2020}
                            minValue={1874}
                            value={{ min: this.props.filmList.timeFrame.start_date, max: this.props.filmList.timeFrame.end_date }}
                            onChange={value => setReleaseDate(value)} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        sidenav: store.sidenav,
        filmList: store.film,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenres()),
        setActualGenre: (genres) => dispatch(setActualGenre(genres)),
        setReleaseDate: (value) => dispatch(setReleaseDate(value)),
    }
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNav)
