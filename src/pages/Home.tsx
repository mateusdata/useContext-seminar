import React, { useContext } from 'react'

const Home = () => {
  const signOut = () => {
    
  }
  return (
    <div className='flex justify-center items-center h-screen w-full flex-col gap-3 text-center'>
      <h1>Home</h1>
      <button onClick={signOut}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full 
         border border-transparent bg-blue-600 text-white hover:bg-blue-700
          disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none
           dark:focus:ring-1 dark:focus:ring-gray-600">
        Sair da conta
      </button>
    </div>
  )
}

export default Home
