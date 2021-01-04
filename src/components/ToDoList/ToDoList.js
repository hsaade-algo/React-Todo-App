import React, { Component } from 'react';

import classes from './ToDoList.module.css';
// import Aux from '../../hoc/Auxiliary/Auxiliary';

class ToDoList extends Component {


    render() {
        const taskList = this.props.taskList.map((data, index) => {
            return (
                <div
                    className={classes.Item}
                    key={index} draggable={true}
                >
                    <button className={[classes.Btn,classes.Danger].join(' ')} onClick={() => this.props.deleted(index)}>✘</button>
                    <button className={[classes.Btn,classes.Success].join(' ')} onClick={() => this.props.toggleFinish(index)}>✓</button>
                    <span className={data.taskStatus === 'Pending'? classes.Task : classes.FinishedTask}> {data.taskDescription}</span>
                    <span className={classes.TaskDate}>{data.taskDate}</span>
                </div>
            );
        });
    
        return (
            <div className={classes.Wrapper}>
                {taskList}
            </div>
        );
    }
}

export default ToDoList;