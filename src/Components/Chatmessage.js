import React from 'react'

const Chatmessage = ({name,text}) => {
  return (
    <div className="flex  items-center w-full  px-3 py-1 gap-2 bg-slate-100">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <div>
              <h1 className="font-bold text-gray-800">{name} </h1>
              <p className="font-medium text-gray-600">{text}</p>
            </div>
          </div>
  )
}

export default Chatmessage