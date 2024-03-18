import { Component } from "react";

export default class ClassComp extends Component{
    render() {
        const title = "hello world";
        return (
            <div style={{ backgroundColor: "bisque", color: "orange" }}>
            <div>{title}</div>
            </div>
        );
    }
}

