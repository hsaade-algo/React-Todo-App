import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import ToDoItem from '../../components/ToDoItem/ToDoItem';
import ToDoList from '../../components/ToDoList/ToDoList';

class ToDoContainer extends Component {
    state = {
        ToDoList: [
            {
                taskID: '1',
                taskDescription: 'Wake up',
                taskDate: '01/01/2021',
                taskStatus: 'Pending'
            },
            {
                taskID: '2',
                taskDescription: 'Make coffee',
                taskDate: '01/01/2021',
                taskStatus: 'Pending'
            },

        ],
    };

    addTaskHandler = (task, startDate) => {
        if (!task) return;

        const currentList = [...this.state.ToDoList];
        const index = currentList.length;

        const newTask = {
            taskID: index,
            taskDescription: task,
            taskStatus: 'Pending',
            taskDate: startDate
        };

        currentList.push(newTask);

        this.setState({ToDoList: currentList});
    }

    deleteTaskHandler = (task) => {
        const tasks = this.state.ToDoList.slice();
        tasks.splice(task, 1);

        this.setState({ToDoList: tasks});
    }

    toggleFinishTaskHandler = (task) => {
        const tasks = this.state.ToDoList.slice();
        if (tasks[task].taskStatus === 'Finished')
            tasks[task].taskStatus = 'Pending';
        else
            tasks[task].taskStatus = 'Finished';

        this.setState({ToDoList: tasks});
    }

    finishAllTasksHandler = () => {
        const tasks = this.state.ToDoList.map(task => {
            const currentTaskStatus = task.taskStatus;
            let newTaskStatus = '';

            if (currentTaskStatus === 'Pending')
                newTaskStatus = 'Finished';
            else
                newTaskStatus = 'Pending';

            const newTask = {
                taskID: task.taskID,
                taskDescription: task.taskDescription,
                taskStatus: newTaskStatus,
                taskDate: task.taskDate
            };
            return newTask;
        });

        this.setState({ToDoList: tasks});
    }

    

    render() {
        return (
            <Aux>
                <ToDoItem clicked={this.addTaskHandler} all={this.finishAllTasksHandler}></ToDoItem>
                <ToDoList
                    taskList={this.state.ToDoList}
                    deleted={this.deleteTaskHandler}
                    toggleFinish={this.toggleFinishTaskHandler}
                >
                </ToDoList>
            </Aux>
        );
    }
}

export default ToDoContainer;