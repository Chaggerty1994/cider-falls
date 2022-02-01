import { parkAreas } from "./areas.js";
import { getAreas } from "./database.js";
import { getServices} from "./database.js"
import { listOfGuests} from "./guests.js";
import { parkServices } from "./services.js";


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="page-header">   
    <header class="header"> <h1>CIDER FALLS</h1> </header>
</article>

<article class="details">
    <section id="areas--column list details__areas">
        <h2>areas</h2>
        ${parkAreas()}
    </section>

    <section id="services--column list details__services">
        <h2>services</h2>
       ${parkServices()}
    </section>



    <section id="guests--column list details__guests">
        <h2>Guests</h2>
        ${listOfGuests()}
    </section>
`

mainContainer.innerHTML = applicationHTML

