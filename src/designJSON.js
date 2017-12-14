export const designJSON = {
    type: "div",
    children: [
        {
            type: "header",
            children: [
                {
                    text: "This is a header",
                    type: "h1",
                    children: [],
                },
            ]
        },
        {
            type: "tab", children: [
                {
                    type: "tabpanel", children: [
                        { type: "h1", text: "rohit is a good boy", children: [] },
                        { type: "h2", text: "kolkata is a nyc place to visit", children: [] },
                        { type: "h3", text: "How far is delhi from here??", children: [] },
                    ]
                },
                {
                    type: "tabpanel", children: [
                        { type: "h1", text: "kolkata is a nyc place to visit", children: [] },
                    ]
                },
                {
                    type: "tabpanel", children: [
                        { type: "h2", text: "How far is delhi from here??", children: [] },
                        { type: "h3", text: "rohit is a good boy", children: [] },
                    ]
                },
            ]
        },
        {
            type: "footer",
            children: [
                {
                    type: "h2",
                    text: "This is a footer",
                    children: [],
                },
            ]
        },
    ]
}