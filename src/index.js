import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {designJSON} from './designJSON'

/*
const designJSON = {
    type:"body",
    children: [
        {
            type: "header",
            name: "header",
            text: "This is a header",
            displaySubText: "This is a subtext",
            children: []
        },
        {
            type: "tab",
            name: "myTab",
            text: "",
            displaySubText: "",
            children: [
                {
                    type: "tabpane",
                    name: "pane1",
                    children: [
                        {
                            type: "text",
                        },
                        {
                            type: "text",
                        },
                        {
                            type: "text",
                        },
                        {
                            type: "text",
                        },
                        {
                            type: "text",
                        },
                    ]
                },
                {
                    type: "tabpane",
                    name: "pane2",
                    children: [
                        {
                            type: "text",
                        },
                        {
                            type: "text",
                        },
                        {
                            type: "text",
                        },
                    ]
                },
                {
                    type: "tabpane",
                    name: "pane3",
                    children: [
                        {
                            type: "text",
                        },
                        {
                            type: "text",
                        },
                    ]
                },
            ]
        },
        {
            type: "footer",
            name: "footer",
            text: "This is a footer",
            displaySubText: "This is a subtext",
            children: []
        },
    ]
}
*/


ReactDOM.render(<App designJSON={designJSON} />, document.getElementById('root'));
registerServiceWorker();
