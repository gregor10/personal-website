import React from 'react'

import Sidebar from './Sidebar'

import BlocksArray from './blocks'

import AboutBlock from './Blocks/About'
import ExperienceBlock from './Blocks/Experience'
import ProjectsBlock from './Blocks/Projects'
import SkillsBlock from './Blocks/Skills'
import EducationBlock from './Blocks/Education'
import ContactBlock from './Blocks/Contact'
import BlogBlock from './Blocks/Blog'

import './index.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blocks: BlocksArray.map((block) => ({ name: block }))
        }

        this.componentsWrapperRef = React.createRef(null)
    }

    onRefUpdate(name, reference) {
        const { blocks } = this.state

        const index = blocks.findIndex((block) => block.name === name)
        blocks[index] = {
            ...blocks[index],
            reference
        }

        this.setState({ blocks })
    }

    render() {
        return (
            <div className='Home' >
                <Sidebar references={{
                    componentsWrapperRef: this.componentsWrapperRef,
                    blocks: this.state.blocks
                }} />

                <div ref={this.componentsWrapperRef} className='Home__components-wrapper'>
                    <AboutBlock
                        onRefUpdate={(name, reference) => this.onRefUpdate(name, reference)} />

                    <ExperienceBlock
                        onRefUpdate={(name, reference) => this.onRefUpdate(name, reference)} />

                    <ProjectsBlock
                        onRefUpdate={(name, reference) => this.onRefUpdate(name, reference)} />

                    <SkillsBlock
                        onRefUpdate={(name, reference) => this.onRefUpdate(name, reference)} />

                    <EducationBlock
                        onRefUpdate={(name, reference) => this.onRefUpdate(name, reference)} />

                    <ContactBlock
                        onRefUpdate={(name, reference) => this.onRefUpdate(name, reference)} />

                    <BlogBlock
                        onRefUpdate={(name, reference) => this.onRefUpdate(name, reference)} />
                </div>
            </div>
        )
    }
}

export default Home
