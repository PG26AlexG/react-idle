"use client"

import PlantsSlots from "./PlantsSlots";

type item = {
    name: string,
    cost: number,
    description: string,
}


const items = 
{
    "items": [
        {
            "name" : "worker",
            "cost" : 100,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.PlantWorkerInNextAvailableSlot(),
        },
        /*
        {
            "name" : "cler",
            "cost" : 400,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.BuySlot(),
        },        {
            "name" : "manager",
            "cost" : 800,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.BuySlot(),
        },*/
        {
            "name" : "plot",
            "cost" : 2000,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.BuySlot(),
        },
    ]
}


let ownedItems: { [key: string]: number } = 
{
    
}


function BuyItemFromStore (newItem:number) 
{
    const queriedItem = items.items[newItem];

    if (queriedItem == undefined)
        return;

    if (ownedItems[queriedItem.name] == undefined) 
    {
        ownedItems[queriedItem.name] = 0;
    }

    ownedItems[queriedItem.name] += 1;

}


export default {
    BuyItemFromStore,
    items
}
