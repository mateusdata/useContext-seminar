import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ContextAuth, FormatUser } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit,  formState: { errors } } = useForm<FormatUser>({
  });

  const {setUser, loading } = useContext(ContextAuth);


  const SignIn = (data:object | any) => {
    try {
      const { password, ...user } = data;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/")
    } catch (error) {
      console.log("Ocorreu um erro")
    }
  }
  if (loading) {
    return <Spin />
  }

  return (
    <div className='flex flex-col p-5 h-screen justify-center items-center w-full border-2'>
      <h1 className='pb-5'>Login com useContext</h1>
 
      <form className='flex flex-col w-50 h-62 p-11 gap-3 border  ' onSubmit={handleSubmit(SignIn)}>
        <input className='border outline-none' {...register("name", { required: "Nome é obrigatorio" })}  type='text' placeholder="Nome" />
        <p className='text-red-600 text-sm'>{errors?.name && errors?.name?.message}</p>
        <input className='border outline-none' {...register("email", { required: "Email é obrigatorio" })} type='email' placeholder="Email" />
        <p className='text-red-600 text-sm'>{errors?.email && errors?.email?.message}</p>
        <input className='border outline-none' {...register("password", { required: "Senha é obrigatorio" })} type='password' placeholder="Senha" />
        <p className='text-red-600 text-sm'>{errors?.password && errors?.password?.message}</p>
        <button className='border shadow-lg rounded-lg bg-blue-800 text-white text-center p-2' type="submit">Entrar</button>
     
      </form>
    </div>
  )
}

export default Login
