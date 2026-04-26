import Layout from "../components/Layout.jsx";
import AreaChart from "../components/AreaChart.jsx";
import BarChart from "../components/BarChart.jsx";
import LineChart from "../components/LineChart.jsx";
import CarDetailsCard from "../components/CarDetailsCard.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../libs/supabaseClient.js";

export default function Dashboard() {
  const [latest, setLatest] = useState([]);
  const [inProgress, setInProgress] = useState();
  const [waiting, setWaiting] = useState();
  const [completedThisMonth, setCompletedThisMonth] = useState([]);
  const [completedToday, setCompletedToday] = useState();

  const nowOld = new Date();
  const now = nowOld.toISOString();
  const now30Days = new Date();
  now30Days.setDate(now30Days.getDate() - 30);
  const startDate = now30Days.toISOString();

  async function getLatest() {
    const { data: latestData, error: latestError } = await supabase
      .from("latest_cars")
      .select("*");

    const { count: inProgressCount, error: inProgressError } = await supabase
      .from("cars")
      .select("*", { count: "exact" })
      .eq("status", "In progress");

    const { count: waitingCount, error: waitingError } = await supabase
      .from("cars")
      .select("*", { count: "exact" })
      .eq("status", "Waiting");

    const { data: completedThisMonthData, error: completedThisMonthError } =
      await supabase.from("cars_count_by_date").select("*");

    const { count: completedTodayCount, error: completedTodayError } =
      await supabase
        .from("cars")
        .select("*", { count: "exact" })
        .eq("date", now)
        .eq("status", "Completed");

    if (
      latestError ||
      inProgressError ||
      waitingError ||
      completedThisMonthError ||
      completedTodayError
    ) {
      alert("Eroare");
    } else {
      setLatest(latestData);
      setInProgress(inProgressCount);
      setWaiting(waitingCount);
      setCompletedToday(completedTodayCount);
      setCompletedThisMonth(
        completedThisMonthData.map((car) => {
          return {
            ...car,
            date: car.date.split("-")[2].concat(".", car.date.split("-")[1]),
          };
        }),
      );
    }
  }

  useEffect(() => {
    getLatest();
  }, []);

  if (!latest || !inProgress || !waiting) {
    return (
      <Layout
        left={<div></div>}
        right={
          <div>
            <h1 className="font-medium text-2xl">Hi, User_name</h1>
          </div>
        }
      >
        <div className="flex items-center justify-center h-[90%] bg-slate-200">
          <div className="h-12 w-12 animate-spin rounded-full border-8 border-gray-200 border-t-slate-600"></div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout
        left={<div></div>}
        right={<p className="font-medium text-2xl">Hi, User_name</p>}
      >
        <div className="flex flex-col gap-4 p-6 w-full h-[90%] bg-slate-200 ">
          <div className="flex flex-col gap-4 p-6 h-[33.3%] rounded-lg bg-gray-100 border-[1px] border-slate-300">
            <div className="flex justify-between">
              <h1 className="inline-block wrap">Current orders</h1>
              <span>
                <Link
                  to="/cars"
                  state={{ filter: "In progress" }}
                  className="text-blue-600 underline "
                >
                  view all
                </Link>
              </span>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 gap-6 h-full">
              <CarDetailsCard cars={latest} />
            </div>
          </div>

          <div className="flex gap-6 h-[30%]">
            <div className="p-6  rounded-lg bg-gray-100 border-[1px] border-slate-300  w-1/3 ">
              <div className="flex justify-between">
                <h1 className="inline-block wrap">Cars in progress</h1>
                <span>
                  <Link
                    to="/cars"
                    state={{ filter: "In progress" }}
                    className="text-blue-600 underline "
                  >
                    view all
                  </Link>
                </span>
              </div>
              <div className="flex h-5/6 justify-center items-center">
                <p className="font-bold text-7xl">{inProgress}</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gray-100 border-[1px] border-slate-300  w-1/3 ">
              <div className="flex justify-between">
                <h1 className="inline-block wrap">Cars waiting</h1>
                <span>
                  <Link
                    to="/cars"
                    state={{ filter: "Waiting" }}
                    className="text-blue-600 underline "
                  >
                    view all
                  </Link>
                </span>
              </div>
              <div className="flex h-5/6 justify-center items-center">
                <p className="font-bold text-7xl">{waiting}</p>
              </div>
            </div>

            <div className="p-6  rounded-lg bg-gray-100 border-[1px] border-slate-300 w-1/3 ">
              <div className="flex justify-between">
                <h1 className="inline-block wrap">Cars completed today</h1>
                <span>
                  <Link
                    to="/cars"
                    state={{ filter: "Completed" }}
                    className="text-blue-600 underline "
                  >
                    view all
                  </Link>
                </span>
              </div>
              <div className="flex h-5/6 justify-center items-center">
                <p className="font-bold text-7xl">{completedToday}</p>
              </div>
            </div>
          </div>

          <div className="pr-8 pt-8 pb-10 rounded-lg bg-gray-100 border-[1px] border-slate-300 h-[36.6%]">
            <div className="flex justify-between">
              <h1 className="pl-8 inline-block pb-2 wrap">
                Total cars this month
              </h1>
            </div>
            <BarChart data={completedThisMonth} />
          </div>
        </div>
      </Layout>
    </>
  );
}
