"use client"
import MoneyStore from "@/DataStores/MoneyStore";
type slot = {
    hasPlant: boolean,
    hasWorker: boolean,
    growthProgress: number,
}

//const slotCost = items.items["plot"].cost; // plot cost
let slots:slot[] = [];

const slotsUpdated = new Event("slotsUpdated")

function BuySlot () 
{
    slots = [...slots, { hasPlant: false, hasWorker: false, growthProgress: 0 }];
    console.log("Buying slot " + slots.length);
    document.dispatchEvent(slotsUpdated);
}


function GetSlots ()
{
    return slots;
}


function PlantWorkerInNextAvailableSlot ()
{
    for (let i = 0; i < slots.length; i++) 
    {
        if (!slots[i].hasWorker) 
        {
            slots[i].hasWorker = true;
            break;
        }
    }

    MoneyStore.AddIncome(10);
    document.dispatchEvent(slotsUpdated);
}


function GrowPlantAtIndex (index: number) 
{
    if (slots[index].hasPlant) 
    {
        slots[index].growthProgress += 5;
    }

    document.dispatchEvent(slotsUpdated);
}


export default {
    BuySlot,
    PlantWorkerInNextAvailableSlot,
    GrowPlantAtIndex,
    GetSlots,
}