    const { Component } = require("react");

    class MyComponent extends Component {
        // 마운트 되었을 때
    componentDidMount() {
        console.log("class component, mount 됨!!")
    }

    // update 되었을 때
    componentDidUpdate() {
        console.log("class component, update 됨!!")
    }

    // unmount 예정일 때
    componentWillUnmount() {
        console.log("class component, unmount 됨!!")
    }

    render() {
        return (
            <p>my Component {this.props.number}</p>
        )
    }
}

class LifeCylcleClass extends Component{
    state = {
        number: 0,
        visible: true,
    };

    changeNumberState = () => {
        this.setState({ number: this.state.number + 1 });
    }

    changeVisibleState = () => {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        // visible true일 경우 보이고, 아닐경우 안보임
        return(
            <>
            <button onClick={this.changeNumberState}>num + 1</button>
            <button onClick={this.changeVisibleState}>on/off</button>
            {this.state.visible && <MyComponent number={this.state.number}></MyComponent>}
            </>
        )
    }
}

export default LifeCylcleClass;