import React from 'react';
import { Button } from 'reactstrap';
import {getGenres, setActualGenre, setReleaseDate} from "../actions/SideNavActions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Container from "reactstrap/es/Container";
import { Row } from "reactstrap";


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
                    <Button
                        outline color = "primary"
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
            <Container>
                <Row>
                    {this.renderButton()}
                </Row>
                <Row>
                        <InputRange
                            maxValue={2020}
                            minValue={1874}
                            value={{ min: this.props.film.time_frame.start_date, max: this.props.film.time_frame.end_date }}
                            onChange={value => setReleaseDate(value)} />
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = store => {
    return {
        sidenav: store.sidenav,
        film: store.film,
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
