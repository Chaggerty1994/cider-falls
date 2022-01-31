import { parkAreas } from "./areas.js";
import { getAreas } from "./database.js";
import { getServices} from "./database.js"




const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>CIDER FALLS</h1>
<article class="details">
    <section class="areas--column list details__areas">
        <h2>areas and services</h2>
        ${parkAreas()}
    </section>

`

mainContainer.innerHTML = applicationHTML

