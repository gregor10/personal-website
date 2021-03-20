import React from 'react'
import PropTypes from 'prop-types'

import {
    Row,
    Col
} from 'react-flexbox-grid'

import EducationCard from './Card'

import TsuLogo from './tsu.png'

import BlocksArray from '../../blocks'

import '../index.scss'

const blockName = BlocksArray[4]

class Education extends React.Component {
    static get propTypes() {
        return {
            onRefUpdate: PropTypes.func.isRequired
        }
    }

    constructor(props) {
        super(props)

        this.componentRef = React.createRef(null)

        this.state = {
            education: [
                {
                    title: 'Tbilisi State University',
                    subtitle: 'Master of Information Technology',
                    url: 'https://tsu.ge/',
                    avatar: TsuLogo,
                    footer: '2017 - 2019 | Tbilisi, GE'
                },
                {
                    title: 'Tbilisi State University',
                    subtitle: 'Bachelor of Informatics',
                    url: 'https://tsu.ge/',
                    avatar: TsuLogo,
                    footer: '2013 - 2017 | Tbilisi, GE'
                }
            ]
        }
    }

    componentDidMount() {
        this.props.onRefUpdate(blockName, this.componentRef)
    }

    render() {
        const renderEducation = this.state.education.map((item, index) => (
            <Col sm={12} lg={6} key={index}>
                <EducationCard {...item} />
            </Col>
        ))

        return (
            <div ref={this.componentRef} className='Education block'>
                <div className='block__header'>{blockName}</div>

                <div className='Education__body block__content'>
                    <Row>
                        {renderEducation}
                    </Row>
                </div>
            </div>
        )
    }
}

export default Education
