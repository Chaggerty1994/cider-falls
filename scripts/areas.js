// import the Areas array from database to be used in areas module

import { getAreas } from "./database.js";

// import the services array from database

import { getServices } from "./database.js";

// import the guests array from the database

import { getGuests } from "./database.js";

// declaring a variable whos value is the guests array

const guestArray = getGuests()

// declaring a variable whos value is the get areas copy of areas array

const areas = getAreas()

// declaring a variable whos value is the get services copy of service array

const services = getServices()

// making an event listener so that when an area is clicked
// a window appears telling you how many guests are in that area

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [, areaId] = itemClicked.id.split("__")

            for (const area of areas) {

                if (parseInt(areaId) === area.id) {

                let guestString = ""

                for (const guest of guestArray)

                if ( parseInt(areaId) === guest.areaId) {
                    
                    guestString += `${guest.name} `
                }
            
                window.alert(`${guestString}  are in this area`)
            }
            }
        }
    }
)

// defining and exporting a function whos purpose is to iterate
// the areas array and services arrray. find matching services and areas
// and make html strings based on the results

export const parkAreas = () => {

// declaring a variable whos value is an unordered List
    let areaHTML = "<ol>"
// iterating the areas array
        for (const area of areas) { 
            areaHTML += `
                <section class="area">
                <h2 id="area__${area.id}">${area.name}</h2>
                </section>`
                
        
        }
                  
        

        
        return areaHTML

}



