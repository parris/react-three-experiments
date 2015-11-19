import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import OurScene from './Scene';
import styles from '../../css/app.css';

class Home extends Component {

    constructor() {
        super();
        this.state = this.getSize();
    }

    getSize() {
        return {
            width: window.innerWidth - 300,
            height: window.innerHeight,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState(this.getSize());
        });
    }

    render() {
        const {title, dispatch} = this.props;
        const actions = bindActionCreators(HomeActions, dispatch);
        return (
            <main>
                <div className="canvas-container" ref="container">
                    <OurScene width={this.state.width} height={this.state.height} />
                </div>
            </main>
        );
    }
}

export default connect(state => state.Sample)(Home)
