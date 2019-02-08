import React from 'react';
import { Button } from 'reactstrap';
import {getGenres} from "../actions/SideNavActions";
import {connect} from "react-redux";
import Film from "./FilmsList";


export class SideNav extends React.Component {

    componentDidMount() {
        const { getGenres } = this.props;
        getGenres();

    }

    renderButton (){
        return this.props.sidenav.genres.map(genre => {
            return <Button  outline color="primary" >{ genre.genre_name }</Button>
        })
    }

    render() {
        return (
            <div>
                <h2>Категории</h2>
                {this.renderButton()}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        sidenav: store.sidenav,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenres()),
    }
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNav)
