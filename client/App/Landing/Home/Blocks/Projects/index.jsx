import React from 'react'
import PropTypes from 'prop-types'

import {
    Row,
    Col
} from 'react-flexbox-grid'

import BlocksArray from '../../blocks'

import Card from './Card'

import '../index.scss'
import './index.scss'

const blockName = BlocksArray[2]

class Projects extends React.Component {
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
            <div ref={this.componentRef} className='Projects block'>
                <div className='block__header'>{blockName}</div>

                <div className='Projects__body block__content'>
                    <Row>
                        <Col xs={12} md={4} sm={6}>
                            <Card title='Project 1' />
                        </Col>
                        <Col xs={12} md={4} sm={6}>
                            <Card title='Project 1' />
                        </Col>
                        <Col xs={12} md={4} sm={6}>
                            <Card title='Project 1' />
                        </Col>
                        <Col xs={12} md={4} sm={6}>
                            <Card title='Project 1' />
                        </Col>
                        <Col xs={12} md={4} sm={6}>
                            <Card title='Project 1' />
                        </Col>
                        <Col xs={12} md={4} sm={6}>
                            <Card title='Project 1' />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Projects
