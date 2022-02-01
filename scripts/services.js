
import { getServices } from "./database.js"

import { getAreaService } from "./database.js"

const services = getServices()

const areaServices = getAreaService()



export const parkServices = () => {

    let serviceHTML = "<ul>"

for (const service of services) {
    
    serviceHTML += `
    <div id="area__service">
    ${service.name}
                 
    </div>
    </section>`


}
 return serviceHTML
}






            