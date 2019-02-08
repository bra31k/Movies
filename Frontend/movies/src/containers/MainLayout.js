import React from 'react';

export class MainLayout extends React.Component {
    render() {
        return (
            <main>
                { this.props.children }
            </main>
            )

  }
}

export default MainLayout;