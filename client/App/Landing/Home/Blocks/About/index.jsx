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

                <div className='block__content About__body'>

                    <div className='About__body__media'>
                        <div className='About__body__media__avatar'></div>
                        <blockquote>
                            <h2>
                                The place for a motivational quote
                                {/* &quot;We are just an advanced breed of monkeys on a minor planet of a very average star&quot;
                                (Stephen Hawking) */}
                            </h2>
                        </blockquote>
                    </div>


                    <p>
                        I am a software engineer from Georgia,
                         who loves to write software to build great products and help businesses succeed with their goals.
                         I appreciate good design and I am seeing it{"'"}s importance more then ever in todays apps,
                        web sites and products.
                        <br /><br />
                        I have a 2 - 2.5 years of experience in this field, basically using Javascript in projects.
                    </p>

                    <br /><br />

                    <p>
                        <b>Current focus</b>:
                        <a href='#'>React</a>
                        {'//'}
                        <a href='#'>Redux</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default About
