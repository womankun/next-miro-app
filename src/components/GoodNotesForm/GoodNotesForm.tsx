import { submitForm } from '@/actions/notes'
import React from 'react'
import Sticky from '../Sticky/Sticky'

const GoodNotesForm = () => {
  const numberOfStickies = 12;
  const SubmitButton = () => {
    return (
        <button type="submit">ボタン</button>
    )
  }

  return (
    <div>
        <form action={submitForm}>
            <div className='grid grid-cols-4 gap-4 p-4'>
              {Array.from({ length: numberOfStickies}, (_, index) => (
                  <Sticky key={index} />
              ))}
            </div>
            <SubmitButton />
        </form>
    </div>
  )
}

export default GoodNotesForm