import React from 'react'
import PropTypes from 'prop-types'

import SkillsCard from './Card'

import BlocksArray from '../../blocks'

import ReactLogo from './icons/React.png'
import AngularJSLogo from './icons/AngularJS.png'
import IonicLogo from './icons/Ionic.png'
import JavascriptLogo from './icons/Javascript.png'
import NodeJSLogo from './icons/NodeJS.png'
import PythonLogo from './icons/Python.png'
import MongoDBLogo from './icons/MongoDB.png'
import DynamoDBLogo from './icons/DynamoDB.png'
import WebpackLogo from './icons/Webpack.png'
import GulpLogo from './icons/Gulp.png'
import AWSLogo from './icons/AWS.png'
import HerokuLogo from './icons/Heroku.png'
import DockerLogo from './icons/Docker.png'
import GitLogo from './icons/Git.png'

import '../index.scss'

const blockName = BlocksArray[3]

class Skills extends React.Component {
    static get propTypes() {
        return {
            onRefUpdate: PropTypes.func.isRequired
        }
    }

    constructor(props) {
        super(props)

        this.componentRef = React.createRef(null)

        this.state = {
            skills: [
                {
                    groupName: 'Javascript',
                    components: [
                        {
                            name: 'React',
                            image: ReactLogo
                        },
                        {
                            name: 'AngularJS',
                            image: AngularJSLogo
                        },
                        {
                            name: 'Ionic',
                            image: IonicLogo
                        },
                        {
                            name: 'Javascript',
                            image: JavascriptLogo
                        }
                    ]
                },
                {
                    groupName: 'Back-End',
                    components: [
                        {
                            name: 'NodeJS',
                            image: NodeJSLogo
                        },
                        {
                            name: 'Python',
                            image: PythonLogo
                        },
                        {
                            name: 'MongoDB',
                            image: MongoDBLogo
                        },
                        {
                            name: 'DynamoDB',
                            image: DynamoDBLogo
                        }
                    ]
                },
                {
                    groupName: 'Build tools',
                    components: [
                        {
                            name: 'Webpack',
                            image: WebpackLogo
                        },
                        {
                            name: 'Gulp',
                            image: GulpLogo
                        }
                    ]
                },
                {
                    groupName: 'Other',
                    components: [
                        {
                            name: 'AWS',
                            image: AWSLogo
                        },
                        {
                            name: 'Heroku',
                            image: HerokuLogo
                        },
                        {
                            name: 'Docker',
                            image: DockerLogo
                        },
                        {
                            name: 'Git',
                            image: GitLogo
                        }
                    ]
                }
            ]
        }
    }

    componentDidMount() {
        this.props.onRefUpdate(blockName, this.componentRef)
    }

    render() {
        const renderSkills = this.state.skills.map((skillsGroup, index) => (
            <SkillsCard
                key={index}
                title={skillsGroup.groupName}
                components={skillsGroup.components} />
        ))

        return (
            <div ref={this.componentRef} className='Skills block'>
                <div className='block__header'>{blockName}</div>

                <div className='Skills__body block__content'>
                    {renderSkills}
                </div>
            </div>
        )
    }
}

export default Skills
