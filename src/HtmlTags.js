import React, { Component } from 'react'
import { Header, Footer, Tab, TabPanel } from './components';

export default class HTMLTag extends Component {
    render() {
        if (this.props.type == "div") {
            return (
                <div>{this.props.children}</div>
            )
        } else if (this.props.type == "h1") {
            return (
                <h1>{this.props.text}</h1>
            )
        } else if (this.props.type == "h2") {
            return (
                <h2>{this.props.text}</h2>
            )
        } else if (this.props.type == "h3") {
            return (
                <h3>{this.props.text}</h3>
            )
        } else if (this.props.type == "p") {
            return (
                <p>{this.props.text}</p>
            )
        } else if (this.props.type == "header") {
            return (
                <Header>{this.props.children}</Header>
            )
        } else if (this.props.type == "footer") {
            return (
                <Footer>{this.props.children}</Footer>
            )
        } else if (this.props.type == "tab") {
            return (
                <Tab>{this.props.children}</Tab>
            )
        } else if (this.props.type == "tabpanel") {
            return (
                <TabPanel>{this.props.children}</TabPanel>
            )
        }
    }
}
