import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
    ListItem,

    Drawer
} from '@material-ui/core'


import UserIcon from './icons/user'
import ExperienceIcon from './icons/experience'
import ProjectsIcon from './icons/projects'
import SkillsIcon from './icons/skills'
import EducationIcon from './icons/education'
import ContactIcon from './icons/contact'
import BlogIcon from './icons/blog'

import MenuIcon from './icons/menu'

import BlocksArray from '../blocks'

import './index.scss'
import './index.mobile.scss'

const iconsArray = [
    <UserIcon key='UserIcon' />,
    <ExperienceIcon key='ExperienceIcon' />,
    <ProjectsIcon key='ProjectsIcon' />,
    <SkillsIcon key='SkillsIcon' />,
    <EducationIcon key='EducationIcon' />,
    <ContactIcon key='ContactIcon' />,
    <BlogIcon key='BlogIcon' />
]

const smoothScroll = (scrollableContainer, scrollTarget, deviceType) => {
    let params

    if (deviceType === 'desktop') {
        params = {
            top: scrollTarget.offsetTop,
            behavior: 'smooth'
        }
    } else {
        params = {
            top: scrollTarget.offsetTop - 60
        }
    }

    scrollableContainer.scrollTo(params)
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = { activeIndex: 0 }
    }

    componentDidUpdate(oldProps) {
        const { offsetTop, references } = this.props
        if (oldProps.offsetTop === offsetTop) {
            return
        }

        // Got scroll event, check if should update active list item
        this.updateActiveListItem(offsetTop, references)
    }

    updateActiveListItem(offsetTop, references) {
        const blocksOffsets = references.blocks.map((element) => (
            element.reference.current.offsetTop
        ))

        let activeIndex
        blocksOffsets.forEach((position, index) => {
            if (offsetTop >= position) {
                activeIndex = index
            }
        })

        this.setState({ activeIndex })
    }

    setMenuItem(references, index, deviceType) {
        smoothScroll(
            references.componentsWrapperRef.current,
            references.blocks[index].reference.current,
            deviceType
        )

        if (deviceType === 'mobile') {
            setTimeout(() => {
                this.setState({ menuOpened: false })
            }, 300)
        }
    }

    render() {
        const listItemClassnames = (index) => (
            classNames({
                list__item: true,
                'list__item--active': this.state.activeIndex === index
            })
        )

        const menuItems = (deviceType) => (BlocksArray.map((blockName, index) => {
            const { references } = this.props

            return <ListItem
                button
                key={index}
                className={listItemClassnames(index)}
                onClick={() => this.setMenuItem(references, index, deviceType)}>
                <div className='list__item__svg-wrapper'>{iconsArray[index]}</div>
                <p>{blockName}</p>
            </ListItem>
        }))

        return (
            <div>
                <div className='Sidebar'>
                    <ul className='list'>
                        <li className='list__intro'>
                            <p>Grigory Babajanyan</p>
                            <span>Software Engineer</span>
                        </li>
                        {menuItems('desktop')}
                    </ul>
                </div>

                <div className='Sidebar--mobile'>
                    <Drawer
                        classes={{
                            root: 'Sidebar--mobile__drawer'
                        }}
                        open={this.state.menuOpened}
                        onClose={() => { this.setState({ menuOpened: false }) }}>
                        {menuItems('mobile')}
                    </Drawer>

                    <div
                        className='Sidebar--mobile__menu'
                        onClick={() => { this.setState({ menuOpened: true }) }}>
                        <MenuIcon />
                    </div>

                    <div className='Sidebar--mobile__title'>
                        <h3>Grigory Babajanyan</h3>
                        <p>Software Engineer</p>
                    </div>
                </div>
            </div>
        )
    }
}

Sidebar.propTypes = {
    references: PropTypes.object,
    offsetTop: PropTypes.number
}

export default Sidebar
