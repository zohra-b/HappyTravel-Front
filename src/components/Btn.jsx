import React from 'react'

export default function Btn({text, type, color}) {
  return (
    <button className={`w-28 h-10 ${color} text-lg rounded-full text-primary-yellow font-bold`}>
        {text}
    </button>
  )
}
