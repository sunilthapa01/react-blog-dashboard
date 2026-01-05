import React from 'react'

const Notfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">
      <div className="text-center">

        <h1 className="text-[10rem] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 max-w-md mx-auto leading-relaxed">
          The page you are trying to reach does not exist, has been removed,
          or the URL is incorrect.
        </p>

        <div className="mt-8 flex justify-center">
          <span className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></span>
        </div>

        <p className="mt-6 text-sm uppercase tracking-widest text-gray-500">
          Error • Not Found • 404
        </p>

      </div>
    </div>
  )
}

export default Notfound
