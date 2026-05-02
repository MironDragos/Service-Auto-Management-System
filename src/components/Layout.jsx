import Sidebar from "./Sidebar.jsx";
import { supabase } from "../libs/supabaseClient.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout({ left, right, children }) {
  const email = localStorage.getItem("email");
  const name = email.split("@")[0];

  const navigate = useNavigate();

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setEmail(user.email);
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/sign-in");
    });
  }, []);

  return (
    <div className="flex min-h-screen ">
      <Sidebar email={email} name={name} />
      <div className="w-4/5">
        <header className="flex justify-between items-center content-center bg-gray-100 px-6 h-20 border-b-[1px] border-slate-300">
          {right}
          {left}
        </header>
        {children}
      </div>
    </div>
  );
}
