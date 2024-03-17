import Card1Component from '@/component/Card1Component'
import React from 'react'

export default function course() {
  return (

    <div className="sm:mx-4 md:mx-10 lg:mx-20 xl:mx-28">
      <h1 className="font-bold text-xl my-5">COURSE</h1>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
        <Card1Component/>
      </div>
    </div>

  )
}
