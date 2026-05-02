import { supabase } from "../libs/supabaseClient.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSumbit(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(error);
    if (error) {
      alert(error);
    } else {
      localStorage.setItem("email", email);
      navigate("/dashboard");
    }
  }

  return (
    <>
      <div className="bg-slate-200 h-screen flex justify-center items-center">
        <div className="bg-gray-100 p-8 rounded-2xl flex flex-col gap-5 items-center w-96 shadow-xl">
          <LogIn
            color="#334155"
            size={72}
            className="bg-slate-100 rounded-3xl p-3 border-2 border-white"
          ></LogIn>

          <h1 className="font-semibold text-2xl self-center">
            Sign in with email
          </h1>

          <form
            className="flex flex-col gap-1 pt-2 w-full text-lg"
            onSubmit={handleSumbit}
            action=""
          >
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <div className="flex items-center relative">
              <Mail
                color="#A9A9AC"
                size={22}
                strokeWidth={2.5}
                className="ml-3 absolute"
              ></Mail>
              <input
                className="bg-gray-200 pl-10 pr-4 py-2.5 w-full rounded-lg outline-none focus:ring-2 focus:ring-slate-300 "
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                defaultValue={"Service_Owner@gmail.com"}
                required
              />
            </div>

            <label className="mt-3 font-medium" htmlFor="password">
              Password
            </label>
            <div className="flex items-center relative">
              <Lock
                color="#A9A9AC"
                size={22}
                strokeWidth={2.5}
                className="ml-3 absolute"
              ></Lock>
              <input
                className="bg-gray-200 pl-10 pr-4 py-2.5 w-full rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                defaultValue={"admin123"}
                required
              />
            </div>

            <input
              className="mt-6 p-2.5 bg-slate-200 border-2 w-2/3 self-center border-slate-300 rounded-xl flex justify-center items-center gap-2 hover:shadow-[inset_0_0px_5px_rgba(0,0,0,0.1)] transition-colors cursor-pointer font-medium"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
