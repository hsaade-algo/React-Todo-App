import React, { Component } from 'react';

import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import classes from './ToDoItem.module.css';
 
// This is a Popper Container for the DatePicker
// Source: https://bit.ly/2L1Tudw
import { Portal } from "react-overlays";

const CalendarContainer = ({ children }) => {
  const el = document.getElementById("calendar-portal");

  return <Portal container={el}>{children}</Portal>;
};
//////////////////////////////////////////////////

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.inputTask = React.createRef();

        this.state = {
            startDate: new Date(),
        }
    }

    focusTask() {
        this.inputTask.current.focus();
        this.inputTask.current.value = '';
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    componentDidMount() {
        this.focusTask();
    }


    render() {
        let textInput = '';

        return (
            <div className={classes.ToDoItem}>
    
                <button className={[classes.Btn, classes.Success].join(' ')} onClick={() => this.props.all()}>✓ All</button>
                <input
                    type="text"
                    id="task"
                    className={classes.Task}
                    // ref={el => this.inputTask = el}
                    ref={this.inputTask}
                    placeholder="Enter a new task"
                    onChange = {(e) => textInput = e.target.value}
                    onKeyPress = {
                        (e) => {
                            if (e.key === 'Enter'){
                                textInput = document.getElementById("task").value;
                                this.props.clicked(textInput, moment(this.state.startDate).format("DD/MM/yyyy"));
                                this.focusTask();
                            }
                        }
                    }
                >
                </input>
                <DatePicker
                    className={classes.DatePicker}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    name="startDate"
                    dateFormat="dd/MM/yyyy"
                    dropdownMode='select'
                    popperContainer={CalendarContainer}
                />
                <button
                    className={[classes.Btn, classes.Primary].join(' ')}
                    onClick={() => {
                        textInput = document.getElementById("task").value;
                        this.props.clicked(textInput, moment(this.state.startDate).format("DD/MM/yyyy"));
                        this.focusTask();
                    }}
                >Add</button>

            </div>
        );
    }
}


export default ToDoItem;