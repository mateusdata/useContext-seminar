import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ContextAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: { email: "", password: "", name: "" },
  });

  const { setLoading, setUser, loading } = useContext(ContextAuth);


  const createUser = (data: any) => {
    try {
      setLoading(true)
      const { password, ...save } = data
      localStorage.setItem("user", JSON.stringify(save));
      setUser(save);
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.log("Ocorreu um erro")
    }
  }
  if (loading) {
    return <Spin />
  }

  return (
    <div className='flex h-screen justify-center items-center w-full border-2'>
      <h1>Login</h1>
      {String(loading)}
      <form className='flex flex-col gap-3' onSubmit={handleSubmit(createUser)}>
        <input className='border outline-none' {...register("name", { required: "Nome é obrigatorio" })} placeholder="Nome" />
        <p className='text-red-600'>{errors?.name && errors?.name?.message}</p>
        <input className='border outline-none' {...register("email", { required: "Email é obrigatorio" })} placeholder="Email" />
        <p className='text-red-600'>{errors?.email && errors?.email?.message}</p>
        <input className='border outline-none' {...register("password", { required: "Senha é obrigatorio" })} placeholder="Senha" />
        <p className='text-red-600'>{errors?.password && errors?.password?.message}</p>
        <button className='border shadow-lg rounded-lg bg-blue-800 text-white text-center p-2' type="submit">Entrar</button>
        {JSON.stringify(watch())}
      </form>
    </div>
  )
}

export default Login
