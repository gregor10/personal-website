import React from 'react'

import {
    Card,
    CardHeader,
    CardActions
} from '@material-ui/core'

import './index.scss'

function EducationCard({ title, subtitle, url, avatar, footer }) {
    return (
        <div className='EducationCard ExperienceCard'>
            <Card>
                <CardHeader
                    title={title}
                    subheader={subtitle}
                    avatar={
                        <a
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img src={avatar} alt={title} />
                        </a>
                    }
                    classes={{
                        root: 'ExperienceCardHeader',
                        title: 'ExperienceCardHeader__title',
                        subheader: 'ExperienceCardHeader__subheader',
                        avatar: 'ExperienceCardHeader__avatar'
                    }}></CardHeader>
                <CardActions
                    classes={{
                        root: 'ExperienceCardFooter'
                    }}>
                    {footer}
                </CardActions>
            </Card>
        </div>
    )
}

export default EducationCard
