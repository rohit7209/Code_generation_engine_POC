import React, { Component } from 'react'
import HTMLTag from './HtmlTags'
import { Header, Footer, Tab, TabPanel } from './components';

export default class GeneratePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            designJSON: this.props.designJSON
        }
    }

    render() {
        return (
            <div>
                {addComponent(this.state.designJSON)}
            </div>
        )

        function addComponent(currentComponent) {
            //console.log(currentComponent.text)
            return (
                <HTMLTag type={currentComponent.type} text={currentComponent.text}>
                    {currentComponent.children.map(child => {
                        return addComponent(child)
                    })}
                </HTMLTag>
            )
        }
    }
}

/**
                <Tab>
                    <TabPanel>I am tab panel 1</TabPanel>
                    <TabPanel>I am tab panel 2</TabPanel>
                    <TabPanel>I am tab panel 3</TabPanel>
                    <TabPanel>I am tab panel 4</TabPanel>
                </Tab> */