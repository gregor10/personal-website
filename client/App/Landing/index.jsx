import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import Home from './Home'

import './index.scss'

function Landing() {
    return (
        <div className='Landing' >
            <Route exact path='/' component={Home} />
        </div>
    )
}

export default withRouter(Landing)
