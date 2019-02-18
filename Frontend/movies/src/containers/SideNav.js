import React from 'react';
import { Button } from 'reactstrap';
import {getGenres, setActualGenre} from "../actions/SideNavActions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";


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
        return (
            <div>
                {this.renderButton()}
            </div>
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
    }
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNav)
