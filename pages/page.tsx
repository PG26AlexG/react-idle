"use client"

import Plant from "@/Components/Plant"
import "@/Components/Sidebar"
import "./_app"
import Sidebar from "@/Components/Sidebar"
import MoneyStore from "@/DataStores/MoneyStore";
import plantsSlots from "@/DataStores/PlantsSlots";
import { useState } from "react";

type slot = {
  hasPlant: boolean,
  hasWorker: boolean,
  growthProgress: number,
}

export default function Home() {
  
  const [slots, SetSlots] = useState<slot[]>( plantsSlots.GetSlots);

  if (typeof window !== 'undefined') {
      document?.addEventListener("slotsUpdated", () => {
        SetSlots(plantsSlots.GetSlots());
      });
    }

  return (
  
    <div className = "flex">
      <Sidebar />
      <div className="grid grid-cols-6 gap-4">
        {
          slots.map((slot, index) => {
            MoneyStore.MoneyProcess();
            let slotStyles:string = "";
            if (slot.hasPlant) 
            {
              slotStyles += " bg-green-400";
            }
            if (slot.hasWorker) 
            {
              console.log("Worker in slot " + index);
              slotStyles += " border-8 border-blue-400";
            }
            return (
              <Plant key={index}  className={slotStyles}/>
            )
          })
        }
      </div>

    </div>
  )
  
  }