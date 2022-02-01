
import { getServices } from "./database.js"

import { getAreaService } from "./database.js"

import { getAreas } from "./database.js"

const services = getServices()

const areaslist = getAreas()

const areaServices = getAreaService()

// inserting a click event on the services list
//  that will create a window alert to say what areas
// each service is available in.

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [, serviceId] = itemClicked.id.split("__")

            for (const service of services) {
                for (const area of areaslist)
                if (area.id === parseInt(serviceId)) {

                let areaString = ""
                        {
                    
                    areaString += `${service.name} is available in the ${area.name} trails` 
                }
            
                window.alert(`${areaString} `)
            }
            }
        }
    }
)


export const parkServices = () => {

    let serviceHTML = "<ul>"

for (const service of services) {
    
    serviceHTML += `
    <div id="service">
    ${service.name}
                 
    </div>
    `


}

serviceHTML += "</ul>"

 return serviceHTML
}






            