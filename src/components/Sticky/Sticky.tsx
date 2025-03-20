'use client'

import React, { useState } from 'react'

interface StickyProps {
  backgroundColor: string;
}

const Sticky: React.FC<StickyProps> = ({
    backgroundColor
}) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 100) {
      setText(e.target.value);
    }
    console.log(e.target.value.length)
  }

  return (
    <div className={`${backgroundColor} bg-yellow-300 p-4 rounded-lg shadow-lg w-48 h-48`}>
        <textarea 
          className={`${backgroundColor} bg-yellow-300 w-full h-full resize-none overflow-hidden p-2 rounded-lg focus:outline-none`}
          value={text}
          onChange={handleChange}
        />
    </div>
  )
}

export default Sticky