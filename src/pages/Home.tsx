import React, { useContext } from 'react'
import { ContextAuth } from '../context/AuthProvider'

const Home = () => {
  const {user} = useContext(ContextAuth);
  return (
    <div>       
       {`Bem vindo ${user?.name}, vc está logado. seu email é ${user?.email}`}
    </div>
  )
}

export default Home
