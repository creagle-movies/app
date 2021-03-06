/* eslint-disable react/no-multi-comp */

/* Node */
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';
import React, { Component } from 'react';

/* Relative Components */
import RemoteContext from './components/RemoteContext';
import Splashscreen from './components/Splashscreen';
import ContextMenu from './components/ContextMenu';
import KeyListener from './components/KeyListener';
import { Database } from './components/Database';
import { Toaster } from './components/Toaster';

/* Relative Pages */
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Video from './pages/Video';

/* Relative PropTypes, Schemas */
import propTypes from './App.propTypes';

/* Relative Variables */
import fonts from '../config/fonts';

class App extends Component {
    static propTypes = propTypes;

    componentDidMount () {
        const { loadMovies } = this.props;

        loadMovies();
    }

    render () {
        const { remote, initiating, toastRoot } = this.props;

        return (
            <RemoteContext.Provider value={remote}>
                <Toaster renderTo={toastRoot}>
                    <Database>
                        <ContextMenu />
                        <KeyListener />
                        <GoogleFontLoader fonts={fonts} />

                        <Splashscreen delay={1500} ready={!initiating}>
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={Movies} />
                                    <Route exact path="/movies/:id" component={Movie} />
                                    <Route exact path="/movies/:id/watch" component={Video} />
                                </Switch>
                            </Router>
                        </Splashscreen>
                    </Database>
                </Toaster>
            </RemoteContext.Provider>
        );
    }
}

export default App;
