import React from 'react'

import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from '@material-ui/core'

import dashboardImage from '../dashboard.png'

import './index.scss'

class ProjectCard extends React.Component {
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
        const projectOverview = <CardActionArea
            onClick={() => this.showFullDescription()}>
            <CardMedia
                component='img'
                alt='Image title'
                height='200'
                image={dashboardImage}
                classes={{
                    root: 'ProjectCard__image'
                }}
                title='Image title'
            />
            <CardContent
                classes={{
                    root: 'ProjectCard__content'
                }}>
                <h2>Dummy project</h2>
                <p>Project description and technologies used</p>
            </CardContent>
        </CardActionArea>

        const projectDescription = <div>
            <CardContent classes={{
                root: 'ProjectCardDescription__content'
            }}>
                <div className='heading' onClick={() => this.hideFullDescription()}>
                    <p>Accomplishments</p>
                    <span>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                            <path d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'>
                            </path>
                        </svg>
                    </span>
                </div>

                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>

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
