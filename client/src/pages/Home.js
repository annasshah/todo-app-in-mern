import { TextField, Stack, Button, Typography, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_todo_async, get_todo_async } from '../services/todo_service'
import { Render_Todos } from '../components/common.js/Render_Todos'

export const Home = () => {
  const [todo_input, setTodo_input] = useState('')

  const { get_all_todos_status, add_todo_status, edit_todo_status, delete_todo_status, todos_data, get_all_todos_status_error, add_todo_error, edit_todo_error, delete_todo_error } = useSelector(state => state.todos_slice)

  const dispatch = useDispatch()

  const add_todo_handle = () => {

    if (todo_input === '') {
      alert('Input field is required')
    }
    else {
      const post_obj = {
        title: todo_input,
        description: 'test Description'
      }
      dispatch(add_todo_async(post_obj))
    }
  }



  useEffect(() => {
    dispatch(get_todo_async())
  }, [])


  return (
    <Stack>
      <Stack direction='row' spacing={1} mt={2}>
        <Stack flex={1}>
          <TextField onChange={(e) => setTodo_input(e.target.value)} variant='outlined' type='text' placeholder="Enter today's task" />
        </Stack>
        <Button onClick={add_todo_handle} variant='outlined'>
          Add Task</Button>
      </Stack>

      <Stack my={2} >
        <Typography variant='h6'>Todos</Typography>
        <Divider />
      </Stack>


      <Render_Todos />


    </Stack>
  )
}
