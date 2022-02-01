const database =

{
    areas: [
        {
            id: 1,
            name: "Chamfort River",
        },

        {
            id: 2,
            name: "Lost Wolf hiking Trail",
        },

        {
            id: 3,
            name: "Lodge",
        },

        {
            id: 4,
            name: "Gander River",
        },

        {
            id: 5,
            name: "Campgrounds",
        },

        {
            id: 6,
            name: "Pine Bluff trails",
        },

    ],

    services: [
        {
            id: 1,
            name: "rafting",
            areaId: 1,

        },

        {
            id: 2,
            name: "hiking",
            areaId: 2,

        },

         

        {
            id: 3,
            name: "pickniking",
            areaId: 2,

        },

         

        {
            id: 4,
            name: "conoeing",
            areaId: 1,

        },

        {
            id: 5,
            name: "fishing",
            areaId: 1,

        },

        

        {
            id: 6,
            name: "rock climbing",
            areaId: 2,

        },

        {
            id: 7,
            name: "food vendor",
            areaId: 6,

        },

        {
            id: 8,
            name: "zip lines",
            areaId: 6,

        },

        {
            id: 9,
            name: "restaraunt",
            areaId: 3,

        },

        {
            id: 10,
            name: "lodging",
            areaId: 3,

        },

         

        {
            id: 11,
            name: "hotel",
            areaId: 3,

        },

        {
            id: 12,
            name: "parking",
            areaId: 3,

        },

         
        {
            id: 13,
            name: "information",
            areaId: 3,

        },

         

        {
            id: 14,
            name: "office park",
            areaId: 5,

        },


        {
            id: 15,
            name: "playground",
            areaId: 5,

        },

    ],

    guests: [
        {
            id: 1,
            name: "tommy",

        },

        {
            id: 2,
            name: "lex",

        },

        {
            id: 3,
            name: "tina",

        },

        {
            id: 4,
            name: "larry",

        },

        {
            id: 5,
            name: "spike",

        },

    ],

    areaService: [
        {
            id: 1,
            areaId: 1,
            serviceId: 1,
        },

        {
            id: 2,
            areaId: 1,
            serviceId: 4,
        },

        {
            id: 3,
            areaId: 1,
            serviceId: 5,
        },

        {
            id: 4,
            areaId: 2,
            serviceId: 2,
        },

        {
            id: 5,
            areaId: 2,
            serviceId: 3,
        },

        {
            id: 6,
            areaId: 2,
            serviceId: 6,
        },

        {
            id: 7,
            areaId: 3,
            serviceId: 11,
        },

        {
            id: 8,
            areaId: 3,
            serviceId: 9,
        },

        {
            id: 9,
            areaId: 3,
            serviceId: 10,
        },

        {
            id: 10,
            areaId: 3,
            serviceId: 12,
        },

        {
            id: 11,
            areaId: 3,
            serviceId: 13,
        },

        {
            id: 12,
            areaId: 3,
            serviceId: 3,
        },

        {
            id: 13,
            areaId: 4,
            serviceId: 5,
        },

        {
            id: 14,
            areaId: 4,
            serviceId: 2,
        },

        {
            id: 15,
            areaId: 5,
            serviceId: 14,
        },

        {
            id: 16,
            areaId: 5,
            serviceId: 15,
        },

        {
            id: 17,
            areaId: 5,
            serviceId: 10,
        },

        {
            id: 18,
            areaId: 5,
            serviceId: 12,
        },

        {
            id: 19,
            areaId: 5,
            serviceId: 13,
        },

        {
            id: 20,
            areaId: 6,
            serviceId: 2,
        },

        {
            id: 21,
            areaId: 7,
            serviceId: 7,
        },

        {
            id: 22,
            areaId: 8,
            serviceId: 3,
        },

        {
            id: 23,
            areaId: 9,
            serviceId: 8,
        },
    ]
}


export const getAreas = () => {
    return database.areas.map(area => ({ ...area }))
}

export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}

export const getAreaService = () => {
    return database.areaService.map(areaService => ({ ...areaService }))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}