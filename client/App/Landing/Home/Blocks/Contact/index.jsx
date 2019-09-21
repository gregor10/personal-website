import React from 'react'
import PropTypes from 'prop-types'

import BlocksArray from '../../blocks'

import '../index.scss'

const blockName = BlocksArray[5]

class Contact extends React.Component {
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
            <div ref={this.componentRef} className='Contact block'>
                <div className='block__header'>{blockName}</div>

            </div>
        )
    }
}

export default Contact
