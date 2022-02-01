
import { getServices } from "./database.js"

const services = getServices()


export const parkServices = () => {

    let serviceHTML = "<ul>"

for (const service of services) {
    
    serviceHTML += `
    <div class="area__service">
    ${service.name}
                 
    </div>
    </section>`


}
 return serviceHTML
}






            