import CardComponent from '@/component/CardComponent'
import React from 'react'

export default function jobopportunity() {
  return (
    <div>
      <h1 className="font-bold text-xl mx-28 my-5">USERFUL CONTENTS</h1>
      <div className="flex grid grid-cols-4 gap-4 mb-5">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </div>
    </div>
  )
}
