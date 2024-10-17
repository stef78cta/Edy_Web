//Integrarea React Hook Form//
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormData) => {
    // Aici ar trebui să faceți o cerere către backend pentru autentificare
    // Pentru acest exemplu, vom simula o autentificare reușită
    dispatch(login({ name: "Utilizator", email: data.email }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Emailul este obligatoriu" })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">
          Parolă
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Parola este obligatorie" })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Autentificare
      </button>
    </form>
  );
};

export default LoginForm;
