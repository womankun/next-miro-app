import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Link href="/forms/good">good</Link>
      <Link href="/forms/bad">bad</Link>
      <Link href="/forms/try">try</Link>
    </div>
  )
}

export default HomePage