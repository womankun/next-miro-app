import { submitForm } from '@/actions/notes'
import React from 'react'
import Sticky from '../Sticky/Sticky'
import SubmitButton from '../Button/SubmitButton';

interface notesProps {
  backgroundColor: string;
}

const NotesForm: React.FC<notesProps> = ({
  backgroundColor
}) => {
  const numberOfStickies = 12;

  return (
    <div>
        <form action={submitForm}>
            <div className='grid grid-cols-4 gap-4 p-4'>
              {Array.from({ length: numberOfStickies}, (_, index) => (
                  <Sticky key={index} backgroundColor={backgroundColor}/>
              ))}
            </div>
            <SubmitButton />
        </form>
    </div>
  )
}

export default NotesForm