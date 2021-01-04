import React, { Component } from 'react';

import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';


class Layout extends Component {
    render () {
        return (
            <div className={classes.Container}>
                <div className={classes.Header}><h1>My Todo List</h1></div>
                <Aux>
                    {this.props.children}
                </Aux>
            </div>
        );
    }
}

export default Layout;