'use client'
import { useQuery } from "@tanstack/react-query";
import { fetchFlights } from "./api/aviationApi";

 
export default function Home() {
   const { data, error, isLoading } = useQuery({
     queryKey: ["flights"],
     queryFn: () => fetchFlights({ flight_status: "active" }),
   });

   console.log(data)
  return (
    <></>
  );
}
