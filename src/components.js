import React, { Component } from 'react'

const style = {
    header: {
        height: "100px", padding: "10px", background: "orange", color: "white", fontSize: "30px",
        textAlign: "center",
    },
    footer: {
        height: "50px", padding: "10px", background: "orange", color: "white", fontSize: "20px",
        textAlign: "center",
    },
    button:{
        background:"blue",
        color:"white",
        border:"1px solid white",
        border:"0px",
        margin:"3px 0 0 3px",
        padding:"10px",
    },
}

class Header extends Component {
    render() {
        return (
            <div style={{ ...style.header }}>
                {this.props.children}
            </div>
        )
    }
}



class Footer extends Component {
    render() {
        return (
            <div style={{ ...style.footer }}>
                {this.props.children}
            </div>
        )
    }
}



class TabPanel extends Component {
    render() {
        return (
            <div>
                I am tab panel
            </div>
        )
    }
}



class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 0,
        }
    }

    render() {
        let showTab = (id) => {
            this.setState({
                show: id
            })
        }
        return (
            <div style={{ height: "500px", background: "red", margin:"20px" }}>
                <div style={{ background: "black" }}>
                    {
                        this.props.children.map((child, key) => {
                            return <button style={{...style.button, background:(this.state.show == key) ?"red":"blue"}} key={key} onClick={() => { showTab(key) }}>Tab {key + 1}</button>
                        })
                    }
                </div>
                <div style={{padding:"20px"}}>
                    {
                        this.props.children.map((child, key) => {
                            return <div key={key} style={{ display: (this.state.show == key) ? "block" : "none" }}>{(child.props.children.length > 0) ? child.props.children : "No Content"}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}


export { Header, Footer, TabPanel, Tab }
