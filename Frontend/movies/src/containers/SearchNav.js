import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    FormGroup,
    Input,
    Col,
} from 'reactstrap';
import { changeSearchForm } from "../actions/SearchNavActions";
import { connect } from "react-redux";

export class SearchNav extends React.Component {

    onInputChange = (event) => {
        const { changeSearchForm } = this.props;
        changeSearchForm(event.target.value)
    };


    render() {
        return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Movies</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            type="search" name="search"
                            id="exampleSearch"
                            placeholder="search movies"
                            value = {this.props.filmList.searchText}
                            onChange = {this.onInputChange}
                        />
                    </Col>
                </FormGroup>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = store => {
    return {
        filmList: store.film,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeSearchForm: (text) => dispatch(changeSearchForm(text)),
    }
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchNav);