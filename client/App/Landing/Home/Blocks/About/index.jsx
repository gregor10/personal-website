import React from 'react'
import PropTypes from 'prop-types'

import BlocksArray from '../../blocks'

import '../index.scss'
import './index.scss'

const blockName = BlocksArray[0]

class About extends React.Component {
    static get propTypes() {
        return {
            onRefUpdate: PropTypes.func.isRequired
        }
    }

    constructor(props) {
        super(props)

        this.componentRef = React.createRef(null)
    }

    componentDidMount() {
        this.props.onRefUpdate(blockName, this.componentRef)
    }

    render() {
        return (
            <div ref={this.componentRef} className='About block'>
                <div className='block__header'>{blockName}</div>

                <div className='About__body'>
                    <blockquote>
                        <h2>An awesome headline about me</h2>
                    </blockquote>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Totam non eos beatae officia adipisci asperiores, vero assumenda consequatur maxime ducimus!
                        Fugit itaque ex a omnis, animi non ea voluptatibus quod.
                    </p>

                    <br />

                    <p>
                        <b>Current focus</b>:
                        <a href='#'>Tech1</a>{'//'}
                        <a href='#'>Tech2</a>{'//'}
                        <a href='#'>Tech3</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default About
