import React from 'react'
import './Tag.css';

function Tag({tag ,active}) {
   return (
    <>
    <div className={active ? 'tag activee' : 'tag'}>
      <span>{tag}</span>
    </div>
    </>
  )
}

export default Tag