import React from 'react'
// import PropTypes from 'prop-types'

import {
    Card,
    CardHeader,
    CardContent,
} from '@material-ui/core'

import {
    Row,
    Col
} from 'react-flexbox-grid'

import './index.scss'
import '../../Experience/Card/index.scss'

function SkillsCard({ title, components }) {
    const renderComponents = components.map((component, index) => (
        <Col key={index} xs={6} sm={3} className='SkillsCardContent__skill-component'>
            <img src={component.image} alt='Image' />
            <p>{component.name}</p>
        </Col>
    ))

    return (
        <div className='Card ExperienceCard SkillsCard'>
            <Card>
                <CardHeader
                    title={title}
                    classes={{
                        root: 'ExperienceCardHeader SkillsCardHeader',
                        title: 'ExperienceCardHeader__title SkillsCardHeader__title',
                    }}></CardHeader>
                <hr />
                <CardContent
                    classes={{
                        root: 'SkillsCardContent'
                    }}>
                    <Row>
                        {renderComponents}
                    </Row>
                </CardContent>
            </Card>
        </div >
    )
}

export default SkillsCard
