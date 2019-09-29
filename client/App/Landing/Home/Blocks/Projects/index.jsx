import React from 'react'
import PropTypes from 'prop-types'

import {
    Row,
    Col
} from 'react-flexbox-grid'

import BlocksArray from '../../blocks'

import Card from './Card'

import EmotionsAreGeorgiaImage from './assets/emotions-are-georgia.png'
import PulsarNluImage from './assets/nlu.png'
import RemoteIdImage from './assets/remote-id.png'
import PulsarLandingImage from './assets/pulsar-landing.png'
import MentionAnalyticsImage from './assets/dashboard.png'
import WordnetImage from './assets/wordnet.png'
import SmsTsuImage from './assets/sms.tsu.jpg'

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

        this.state = {
            projects: [
                {
                    title: 'Emotions are georgia',
                    subtitle: 'The stories and impressions of seven million visitors to Georgia have been united in one guidebook that was launched within the campaign ‘Emotions are Georgia’ to help new tourists discover Georgia as seen through the eyes of former visitors.',
                    image: EmotionsAreGeorgiaImage,
                    href: 'https://emotionsaregeorgia.com',
                    description: 'No more information'
                },
                {
                    title: 'Mention Analytics',
                    subtitle: 'Mention analytics is a media monitoring platform, it pulls all the news around a specific topic (person, company) from different channels such as social media, TV and web media.',
                    image: MentionAnalyticsImage,
                    href: 'https://mm.pulsar.ai',
                    description: 'No more information'
                },
                {
                    title: 'Remote Identification',
                    subtitle: 'Identity verification service for web and mobile, which takes less than five minutes with a consumer friendly process.',
                    image: RemoteIdImage,
                    href: 'https://web-id.pulsar.ai',
                    description: 'No more information'
                },
                {
                    title: 'Pulsar NLU',
                    subtitle: 'With this platorm you can easily create an application and train a model for Georgian language. Work done by me - User interface.',
                    image: PulsarNluImage,
                    href: 'https://nlp-admin.pulsar.ai',
                    description: 'No more information'
                },
                {
                    title: 'Pulsar AI landing',
                    subtitle: 'Pulsar AI revolutionize the auto retail industry by automating communication to deliver conversations at machine speed — with human intuition and accuracy rate over 98%.',
                    image: PulsarLandingImage,
                    href: 'https://www.pulsar.ai',
                    description: 'No more information'
                },
                {
                    title: 'GeWordnet',
                    subtitle: 'GeWordNet is a lexical database for the Georgian language. It groups georgian words into sets of synonyms called synsets, provides short definitions and usage examples, and records a number of relations among these synonym sets or their members.',
                    image: WordnetImage,
                    href: '',
                    description: 'No more information'
                },
                {
                    title: 'Extension for TSU',
                    subtitle: 'The extension beautifies some pages on sms.tsu.ge, website for Tbilisi State University students.',
                    image: SmsTsuImage,
                    href: 'https://chrome.google.com/webstore/detail/smstsuge-new-style/fhebnjlgmmblnfcpcmnndopkgfkmekgk?hl=en',
                    description: 'No more information'
                }
            ]
        }
    }

    componentDidMount() {
        this.props.onRefUpdate(blockName, this.componentRef)
    }

    render() {
        const renderProjects = this.state.projects.map((project, index) => (
            <Col xs={12} md={4} sm={6} key={index}>
                <Card {...project} />
            </Col>
        ))
        return (
            <div ref={this.componentRef} className='Projects block'>
                <div className='block__header'>{blockName}</div>

                <div className='Projects__body block__content'>
                    <Row>{renderProjects}</Row>
                </div>
            </div>
        )
    }
}

export default Projects
