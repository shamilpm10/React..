// const heading=React.createElement("h1",{id:"head"},"hello world")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

const heading=React.createElement("div",{id:"parent"},createElement("div",{id:"child"},[createElement("h1",{},"im an h1 tag"),createElement("h2",{},"im an h2 tag")]))
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)