import Layout from "../components/Layout.jsx";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabaseClient.js";
import { LogOut, Wrench, Phone, Mail, MapPin, Save } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const navigate = useNavigate();
  const [serviceName, setServiceName] = useState("Auto Service SRL");
  const [servicePhone, setServicePhone] = useState("+373 22 123 456");
  const [serviceEmail, setServiceEmail] = useState("contact@autoservice.md");
  const [serviceAddress, setServiceAddress] = useState(
    "str. Independenței 12, Chișinău",
  );

  async function handleLogout() {
    await supabase.auth.signOut();
    localStorage.removeItem("email");
    navigate("/sign-in");
  }

  return (
    <Layout
      left={<div></div>}
      right={<p className="font-medium text-2xl">Settings</p>}
    >
      <div className="flex flex-col gap-6 p-6 w-full h-[90%] bg-slate-200">
        <div className="bg-gray-100 border-[1px] border-slate-300 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Wrench size={18} className="text-slate-500" />
            <h2 className="font-medium text-lg">Service Info</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">
                Service Name
              </label>
              <input
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">
                Phone
              </label>
              <input
                value={servicePhone}
                onChange={(e) => setServicePhone(e.target.value)}
                className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">
                Email
              </label>
              <input
                value={serviceEmail}
                onChange={(e) => setServiceEmail(e.target.value)}
                className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">
                Address
              </label>
              <input
                value={serviceAddress}
                onChange={(e) => setServiceAddress(e.target.value)}
                className="border-slate-300 bg-slate-50 border-[1px] rounded-lg p-2"
              />
            </div>
          </div>
          <button className="mt-4 flex items-center gap-2 bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
            <Save size={16} />
            <p className="text-white">Save changes</p>
          </button>
        </div>

        <div className="bg-gray-100 border-[1px] border-slate-300 rounded-lg p-6">
          <h2 className="font-medium text-lg mb-4">Account</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 border-[1px] border-red-200 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
          >
            <LogOut size={16} />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </Layout>
  );
}
