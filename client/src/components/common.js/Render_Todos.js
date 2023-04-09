import React from 'react'
import { async_status } from '../../utils/contants'
import { Button, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const Render_Todos = () => {
    const { get_all_todos_status, add_todo_status, edit_todo_status, delete_todo_status, todos_data, get_all_todos_status_error, add_todo_error, edit_todo_error, delete_todo_error } = useSelector(state => state.todos_slice)


    if (get_all_todos_status === async_status.LOADING || get_all_todos_status === async_status.IDLE) {
        return <Stack>
            <Typography color='gray'>
                Loading...
            </Typography>
        </Stack>
    }

    if (get_all_todos_status === async_status.ERROR) {
        return <Stack>
            <Typography color='red'>
                Error
            </Typography>
        </Stack>
    }

    if (get_all_todos_status === async_status.SUCCEEDED) {
        return (
            <Stack spacing={2}>
                {
                    todos_data.map((todo, index) => {
                        const { title,
                            description,
                            createdAt } = todo
                        return <Stack direction='row' alignItems='center'>
                            <Stack flex={1}>
                                <Typography fontWeight='bold'>
                                    {title}
                                </Typography  >
                                <Typography fontSize='12px' color='gray'>
                                    {description}
                                </Typography>
                            </Stack>

                            <Stack direction='row' spacing={1}>
                                <Button variant='outlined' color='success'>
                                    Edit
                                </Button>
                                <Button variant='outlined' color='error'>
                                    Delete
                                </Button>
                            </Stack>
                        </Stack>
                    })}
            </Stack>
        )
    }
}
