import React from 'react'

interface TaskInputProps {
    onEnterPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

function TaskInput({onEnterPress}: TaskInputProps) {
  return (
    <div className="add-task">
        <input className="block" onKeyDown={onEnterPress} placeholder='Type smth here...' />
        {/* почему onEnterPress без колбэка */}
    </div>
  )
}

export default TaskInput