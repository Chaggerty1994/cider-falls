// import the Areas array from database to be used in areas module

import { getAreas } from "./database.js";

// import the services array from database

import { getServices } from "./database.js";


// declaring a variable whos value is the get areas copy of areas array

const areas = getAreas()

// declaring a variable whos value is the get services copy of service array

const services = getServices()

// declaring a variable whos value is 
// the class of container in my index.html

// const contentTarget = document.querySelector("#container")

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
                <h2 class="area__name">${area.name}</h2>`

        for (const service of services) {
       
            if (area.id === service.areaId) {
                    areaHTML += `
                    <div class="area__service">
                    ${service.name}
                                 
                    </div>
                    </section>`
                     }
        }
                  
        }

        
        return areaHTML
}



