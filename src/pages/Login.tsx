import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className='flex h-screen justify-center items-center w-full border-2'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email" />
        <input {...register("password")} placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
