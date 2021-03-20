import React from 'react'
import PropTypes from 'prop-types'

import {
    Card,
    CardHeader,
    CardContent,
    CardActions
} from '@material-ui/core'

import './index.scss'

function ExperienceCard({
    title, subtitle, companyUrl, avatar, about, accomplishments, footer
}) {
    const accomplishmentsList = accomplishments.map((accomplishment, index) => (
        <li key={index}>
            {accomplishment}
        </li>
    ))

    return (
        <div className='Card ExperienceCard'>
            <Card>
                <CardHeader
                    title={title}
                    subheader={subtitle}
                    avatar={
                        <a
                            href={companyUrl}
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
                <hr />
                <CardContent
                    classes={{
                        root: 'ExperienceCardContent'
                    }}>
                    <p className='ExperienceCard__about'>{about}</p>

                    {!!accomplishments.length && <h3>accomplishments</h3>}

                    <ul>{accomplishmentsList}</ul>
                </CardContent>
                <CardActions
                    classes={{
                        root: 'ExperienceCardFooter'
                    }}>
                    {footer}
                </CardActions>
            </Card>
        </div >
    )
}

ExperienceCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    companyUrl: PropTypes.string,
    avatar: PropTypes.node,
    about: PropTypes.string,
    accomplishments: PropTypes.array,
    footer: PropTypes.string
}

export default ExperienceCard
