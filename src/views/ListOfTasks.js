import React from "react"
import { connect } from "react-redux"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import Task from "./Task"
import { ListItem } from 'material-ui/List'
import {addTaskAction, handleChangeAction} from '../state/MyTasks'


const listOfTasks = (props) => (
  <div>
    <div>
      <TextField 
      onChange={(value) => props._handleChangeAction(value)}
      placeholder={'Enter new task here'}
      type='text'
      value = {props._task}
      fullWidth={true}
      />
      <RaisedButton 
            onClick={props._addTaskAction} 
            label="Add task" 
            primary={true}
            fullWidth={true} 
            />
    </div>
    <div>
      {
        props._isTasksAreLoading ?
        'Loading...'
        :
        props._tasks.map(task => (
          <div
          task={task.task}
          key={task.id}
          id={task.is}
          />
        ))
    }
    </div>
  </div>
)

const mapStateToProps = state => ({
  _tasks: state.tasks.tasks,
  _isTasksAreLoading: state.tasks.isTasksAreLoading
})

const mapDispatchToProps = dispatch => ({
  _addTasksAction: () => dispatch(addTaskAction()),
  _handleChangeAction: (value) => dispatch(handleChangeAction(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listOfTasks)
