import React from 'react'
import PropTypes from 'prop-types'

import BlocksArray from '../../blocks'

import ExperienceCard from './Card'

import PulsarLogo from './pulsar.png'
import ShotaRustaveliNSFLogo from './shota-rustaveli-nsf.png'

import '../index.scss'
import './index.scss'

const blockName = BlocksArray[1]

class Experience extends React.Component {
    static get propTypes() {
        return {
            onRefUpdate: PropTypes.func.isRequired
        }
    }

    constructor(props) {
        super(props)

        this.componentRef = React.createRef(null)

        this.state = {
            experience: [
                {
                    title: 'Pulsar AI',
                    subtitle: 'Software Engineer',
                    companyUrl: 'https://www.pulsar.ai/',
                    avatar: PulsarLogo,
                    about: "Pulsar focuses on AI. It created the world's most multifunctional chatbot for the largest commercial bank in Georgia. Pulsar AI team consists of 15+ deep learning specialists, developers, data scientists and operations members with significant industry experience. The entire team is dedicated and driven to make solutions better, faster and more fulfilling with each step of the journey.",
                    accomplishments: [
                        // 'Sales automation with AI',
                        'Bots builder platform',
                        'Remote identification',
                        'Emotions are Georgia',
                        'Mention Analytics',
                        'NLU for the Georgian language'
                    ],
                    footer: 'Jul 2017 - Present | Tbilisi, GE'
                },
                {
                    title: 'Shota Rustaveli National Science Foundation',
                    subtitle: 'Junior front-end Engineer',
                    companyUrl: 'https://rustaveli.org.ge/',
                    avatar: ShotaRustaveliNSFLogo,
                    about: 'The Shota Rustaveli National Science Foundation of Georgia (SRNSFG) is a Legal Entity of Public Law under the aegis of the Ministry of Education and Science of Georgia, which supports the development of Science, Technology and Innovation (STI) system in Georgia. The foundation implements grant calls, targeted programmes and projects, and is involved in international scientific networks and joint projects.',
                    accomplishments: ['Wordnet for the Georgian language'],
                    footer: 'Nov 2016 - Jun 2017 | Tbilisi, GE'
                }
            ]
        }
    }

    componentDidMount() {
        this.props.onRefUpdate(blockName, this.componentRef)
    }

    render() {
        const experienceList = this.state.experience.map((experience, index) => (
            <ExperienceCard
                key={index}
                title={experience.title}
                subtitle={experience.subtitle}
                companyUrl={experience.companyUrl}
                avatar={experience.avatar}
                about={experience.about}
                accomplishments={experience.accomplishments}
                footer={experience.footer}
            />
        ))

        return (
            <div ref={this.componentRef} className='Experience block'>
                <div className='block__header'>{blockName}</div>

                <div className='Experience__body block__content'>
                    {experienceList}
                </div>
            </div>
        )
    }
}

export default Experience
