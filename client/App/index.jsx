import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Grid } from 'react-flexbox-grid'

import Landing from './Landing'

import './index.scss'

class App extends React.Component {
    static get propTypes() {
        return {
            authenticated: PropTypes.bool.isRequired,
        }
    }

    static get defaultProps() {
        return {
            authenticated: false
        }
    }

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Grid className='App'>
                <Route path='/' render={() => (
                    this.props.authenticated && <Redirect to='/dashboard' />
                )} />
                <Landing />
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    const { authenticated } = state.login

    return {
        authenticated
    }
}

export default withRouter(connect(mapStateToProps, {})(App))
