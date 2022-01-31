const database = 

    {
        areas: [
            {
           id: 1,
           name: "Chamfort River" , 
        },

        {
            id: 2,
            name: "Lost Wolf hiking Trail" , 
         },

         {
            id: 3,
            name: "Lodge" , 
         },

         {
            id: 4,
            name: "Gander River" , 
         },

         {
            id: 5,
            name: "Campgrounds" , 
         },

         {
            id: 6,
            name: "Pine Bluff trails" , 
         },

        ],

        services: [
            {
                id: 1,
                service: "rafting",
                
            },

            {
                id: 2,
                service: "hiking",
                
            },

            {
                id: 3,
                service: "pickniking",
                
            },

        ],

        guests: [
            {
                id: 1,
                name: "tommy",
                areaId: 1,
            },

            {
                id: 1,
                name: "lex",
                areaId: 3,
            },

            {
                id: 1,
                name: "stacy",
                areaId: 5,
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
        return database.areas.map(area => ({...area}))
    }

    export const getServices = () => {
        return database.services.map(service => ({...service}))
    }

    export const getAreaService = () => {
        return database.areaService.map(areaService => ({...areaService}))
    }