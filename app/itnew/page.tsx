import React from 'react'
import CardComponent from '@/component/CardComponent'

export default function () {
  return (
    <div className="sm:mx-4 md:mx-10 lg:mx-20 xl:mx-28">
      <h1 className="font-bold text-xl my-5">USERFUL CONTENTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </div>
    </div>
  )
}
