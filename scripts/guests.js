import { getGuests } from "./database.js";


const guests = getGuests()


export const guestsList = () => {

        let guestHTML = "<ul>"

    for (const guest of guests) { 

                guestHTML += `
                
                <section class="guest__name">
                ${guest.name}
                             
                </section>`
            }

            return guestHTML
    }

    


    // console.log(guestsList())