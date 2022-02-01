import { parkAreas } from "./areas.js";
import { getAreas } from "./database.js";
import { getServices} from "./database.js"
import { listOfGuests} from "./guests.js";
import { parkServices } from "./services.js";


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="page-header">  
    <img src="ciderfallslogo.png" alt="cider falls logo" class="logo"> 
    
</article>

<article class="details">
    <section id="areas">
       <header class="areahead"> <h2>areas</h2> </header>
       <section class="area">
        ${parkAreas()}
        </section>
    </section>

    <section id="services">
        <h2>services</h2>
       ${parkServices()}
    </section>



    <section id="guests">
        <h2>Guests</h2>
        ${listOfGuests()}
    </section>
`

mainContainer.innerHTML = applicationHTML

