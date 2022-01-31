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
            id: 2,
            name: "hiking",
            areaId: 4,

        },

        {
            id: 2,
            name: "hiking",
            areaId: 6,

        },

        {
            id: 3,
            name: "pickniking",
            areaId: 2,

        },

        {
            id: 3,
            name: "pickniking",
            areaId: 6,

        },

        {
            id: 3,
            name: "pickniking",
            areaId: 3,

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
            id: 5,
            name: "fishing",
            areaId: 4,

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
            id: 10,
            name: "lodging",
            areaId: 5,

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
            id: 12,
            name: "parking",
            areaId: 5,

        },

        {
            id: 13,
            name: "information",
            areaId: 3,

        },

        {
            id: 13,
            name: "information",
            areaId: 5,

        },

        {
            id: 14,
            name: "office park",
            areaId: 5,

        },


        {
            id: 14,
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
            id: 1,
            name: "lex",

        },

        {
            id: 1,
            name: "stacy",

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
            areaId: 2,
            serviceId: 2,
        },

        {
            id: 3,
            areaId: 2,
            serviceId: 3,
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