import React from 'react'

export default function Button({name, type}) {
  return (
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type = {type}>
        {name}
    </button>
  )
}
