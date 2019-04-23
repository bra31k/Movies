import React from 'react';
import { withRouter } from 'react-router'

import '../style/index.css'

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