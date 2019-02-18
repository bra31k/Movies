import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export class SeachNav extends React.Component {
    render() {
        return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Movies</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default SeachNav;