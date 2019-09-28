import React from 'react'
import PropTypes from 'prop-types'

import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Fab
} from '@material-ui/core'

import CloseIcon from './icons/close'
import LinkIcon from './icons/link'

import './index.scss'

class ProjectCard extends React.Component {
    static get propTypes() {
        return {
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        }
    }

    constructor(props) {
        super(props)

        this.state = { fullDescriptionOpened: false }
    }

    showFullDescription() {
        setTimeout(() => {
            this.setState({ fullDescriptionOpened: true })
        }, 200)
    }

    hideFullDescription() {
        this.setState({ fullDescriptionOpened: false })
    }

    render() {
        const {
            title,
            subtitle,
            image,
            description,
            href
        } = this.props

        const projectOverview = <div>
            <CardActionArea
                onClick={() => this.showFullDescription()}>
                <CardMedia
                    component='img'
                    alt={title}
                    height='200'
                    image={image}
                    classes={{
                        root: 'ProjectCard__image'
                    }}
                    title={title}
                />
                <CardContent
                    classes={{
                        root: 'ProjectCard__content'
                    }}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </CardContent>
            </CardActionArea>
        </div>

        const projectDescription = <div>
            <CardContent classes={{
                root: 'ProjectCardDescription__content'
            }}>
                <div className='heading' onClick={() => this.hideFullDescription()}>
                    <p>Details</p>
                    <span><CloseIcon /></span>
                </div>

                <div className='body'>
                    <p>{description}</p>

                    <br />
                    <a href={href} target='_blank' rel='noopener noreferrer'>
                        <Fab
                            variant='extended'
                            classes={{
                                root: 'Fab-root'
                            }}
                            aria-label={title}>
                            <LinkIcon />
                        </Fab>
                    </a>
                </div>
            </CardContent>
        </div>

        return (
            <div className='ProjectCard'>
                <Card>
                    {!this.state.fullDescriptionOpened ? projectOverview : projectDescription}
                </Card>
            </div>
        )
    }
}

export default ProjectCard
