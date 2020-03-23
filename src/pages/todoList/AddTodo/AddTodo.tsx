import React from "react";
import {TodoStateModel} from "../../../redux/models";
import {ITodoStates} from "../TodoList";

export interface IAddTodoProp extends ITodoStates{
    // fetchUser: (param: any) => any;
    addToDo: (param: any) => any;
}

export interface IAddTodoState {
    inputVal?: string
}

export class AddTodo extends React.Component<IAddTodoProp, IAddTodoState>{
    constructor(props){
        super(props);
        this.state = {
            inputVal: ''
        }
    }

    inputText(e) {
        this.setState({
            inputVal: e.target.value.trim()
        });
    }
    handleAddToDo({addToDo}: IAddTodoProp) {
        addToDo(this.state.inputVal);
        this.setState({
            inputVal: ''
        });
    }
    render() {
        const { todos, addToDo } = this.props;
        return (
            <div>
                <input type="text" onChange={this.inputText.bind(this)} value={this.state.inputVal}/>
                <button onClick={() => this.handleAddToDo(this.props)}>
                    Add Todos
                    {(todos && todos.length) || 0}
                </button>
            </div>
        );
    }
}
