import { getGuests } from "./database.js";


const guests = getGuests()


// export const guestsList = () => {

//         let guestHTML = "<ol>"

//     for (const guest of guests) { 

//                 guestHTML += `
                
//                 <section class="guest__name">
//                 ${guest.name}
                             
//                 </section>`
//             }

//             return guestHTML
//     }

    


 export const listOfGuests = () => {
     let guestHTML = "<ol>"

     for (const guest of guests) {
         guestHTML += ` <section class="guest__name">
                        ${guest.name}
                        </section>`
     }
     return guestHTML
 }  


 console.log(listOfGuests())