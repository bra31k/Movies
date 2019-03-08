import React from 'react';
import '../style/index.css'
import { withRouter } from 'react-router'

export class MainLayout extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className='header'>{ this.props.children[0] }</div>
                <div className='sidebar'>{ this.props.children[1] }</div>
                    <div className="content">{ this.props.children[2] }</div>
            </div>
            )

  }
}

export default withRouter(MainLayout);