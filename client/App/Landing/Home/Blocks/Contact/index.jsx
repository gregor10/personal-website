import React from 'react'
import PropTypes from 'prop-types'

import {
    Row,
    Col
} from 'react-flexbox-grid'

import {
    Fab
} from '@material-ui/core'

import LinkedInIcon from  './icons/linkedin'
import GithubIcon from './icons/github'
import MailIcon from './icons/mail'

import BlocksArray from '../../blocks'

import '../index.scss'
import './index.scss'
import './index.mobile.scss'

const blockName = BlocksArray[5]

class Contact extends React.Component {
    static get propTypes() {
        return {
            onRefUpdate: PropTypes.func.isRequired
        }
    }

    constructor(props) {
        super(props)

        this.componentRef = React.createRef(null)

        this.state = {
            links: [
                {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/gr1gory',
                    logo: LinkedInIcon
                },
                {
                    name: 'GitHub',
                    href: 'https://github.com/gregor10',
                    logo: GithubIcon
                },
                {
                    name: 'Gmail',
                    href: 'mailto:grigory.babajanyan@gmail.com?Subject=Hi buddy',
                    logo: MailIcon
                }
            ]
        }
    }

    componentDidMount() {
        this.props.onRefUpdate(blockName, this.componentRef)
    }

    render() {
        const renderLinks = this.state.links.map((item, index) => (
            <Col
                key={index}
                xs={12}
                sm={6}
                className='Contact__body__column'
            >
                <a href={item.href} target='_blank' rel='noopener noreferrer'>
                    <Fab
                        variant='extended'
                        // color='#008073'
                        classes={{
                            root: 'Fab-root'
                        }}
                        aria-label={item.name}>
                        <item.logo />
                    </Fab>
                </a>
                <span>{item.name}</span>
            </Col>
        ))

        return (
            <div ref={this.componentRef} className='Contact block'>
                <div className='block__header'>{blockName}</div>

                <div className='Contact__body block__content'>
                    <Row>{renderLinks}</Row>
                </div>
            </div>
        )
    }
}

export default Contact
