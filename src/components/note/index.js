import React from 'react'
import { useHistory } from 'react-router-dom'

export function Note ({note, handleClick}) {
    const history = useHistory()
    const getNote = (id) => {
        history.push(`./posts/${id}`)
    }

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div onClick={() => getNote(note.note.id)}>{note.title}</div>
      <div>
        <button
          className='btn btn-sm btn-outline-danger'
          onClick={() => handleClick(note.id)}
        >
          x
        </button>
      </div>
    </li>
  )
}
