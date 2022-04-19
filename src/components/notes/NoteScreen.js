import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>


        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete = 'off'
        />

        <textarea
          placeholder='What happened today'
          className='notes__textarea'
        >

        </textarea>

        <div className='notes__image'>
          <img
          src='https://i0.wp.com/www3.gobiernodecanarias.org/medusa/ecoblog/crodalf/files/2020/10/universo-1.jpg?fit=522%2C522'
          alt='planetas'
          ></img>
        </div>

      </div>
    </div>
  )
}
