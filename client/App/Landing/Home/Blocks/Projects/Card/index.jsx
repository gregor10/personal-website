import React from 'react'

import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from '@material-ui/core'

import emRge from '../emRge.png'

import './index.scss'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { fullDescriptionOpened: false }
    }

    showFullDescription() {
        this.setState({ fullDescriptionOpened: true })
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
                image={emRge}
                classes={{
                    root: 'ProjectCard__image'
                }}
                title='Image title'
            />
            <CardContent>
                <h2>Dummy project</h2>
                <p>Project description and technologies used</p>
            </CardContent>
        </CardActionArea>

        const projectDescription = <div>
            <CardContent>
                Full Desc
                <span onClick={() => this.hideFullDescription()}>Close</span>
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
