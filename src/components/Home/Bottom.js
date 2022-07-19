import React from 'react'
import BottomCard from './BottomCard'

export default function Bottom() {
  return (
    <div className='mt-40 fixed flex justify-center w-screen'>
        <div className='mt-96 flex'>
            <BottomCard place="Bengaluru"/>
            <BottomCard place="Kolar"/>
            <BottomCard place="Mysore"/>
        </div>
    </div>
  )
}
