import React from 'react'
import PropTypes from 'prop-types'

import {
    ListItem
} from '@material-ui/core'


import UserIcon from './icons/user'
import ExperienceIcon from './icons/experience'
import ProjectsIcon from './icons/projects'
import SkillsIcon from './icons/skills'
import EducationIcon from './icons/education'
import ContactIcon from './icons/contact'
import BlogIcon from './icons/blog'

import BlocksArray from '../blocks'

import './index.scss'

const iconsArray = [
    <UserIcon key='UserIcon' />,
    <ExperienceIcon key='ExperienceIcon' />,
    <ProjectsIcon key='ProjectsIcon' />,
    <SkillsIcon key='SkillsIcon' />,
    <EducationIcon key='EducationIcon' />,
    <ContactIcon key='ContactIcon' />,
    <BlogIcon key='BlogIcon' />
]

const smoothScroll = (scrollableContainer, scrollTarget) => {
    scrollableContainer.scrollTo({
        top: scrollTarget.offsetTop,
        behavior: 'smooth'
    })
}

function Sidebar({ references }) {
    const menuItems = BlocksArray.map((blockName, index) => {
        return <ListItem
            button
            key={index}
            className='list__item'
            onClick={() => {
                smoothScroll(
                    references.componentsWrapperRef.current,
                    references.blocks[index].reference.current
                )
            }}>
            <div className='list__item__svg-wrapper'>{iconsArray[index]}</div>
            <p>{blockName}</p>
        </ListItem>
    })

    return (
        <div className='Sidebar'>
            <ul className='list'>
                <li className='list__intro'>
                    <p>Grigory Babajanyan</p>
                    <span>Software Engineer</span>
                </li>
                {menuItems}
            </ul>
        </div>
    )
}

Sidebar.propTypes = {
    references: PropTypes.object
}

export default Sidebar
