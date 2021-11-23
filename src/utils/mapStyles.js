const MAP_STYLES = [
    {
        name: "streets",
        link: "mapbox://styles/mapbox/streets-v11",
        prev: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-121.7886,37.9827,9.39,0/90x110?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN
    },
    {
        name: "outdoors",
        link: "mapbox://styles/mapbox/outdoors-v11",
        prev: "https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/-121.7886,37.9827,9.39,0/90x110?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN
    },
    {
        name: "light",
        link: "mapbox://styles/mapbox/light-v10",
        prev: "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-121.7886,37.9827,9.39,0/90x110?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN
    },
    {
        name: "dark",
        link: "mapbox://styles/mapbox/dark-v10",
        prev: "https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-121.7886,37.9827,9.39,0/90x110?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN
    },
    {
        name: "satellite",
        link: "mapbox://styles/mapbox/satellite-v9",
        prev: "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-121.7886,37.9827,9.39,0/90x110?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN
    },
    {
        name: "satellite_streets",
        link: "mapbox://styles/mapbox/satellite-streets-v11",
        prev: "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/-121.7886,37.9827,9.39,0/90x110?access_token=" + process.env.REACT_APP_MAPBOX_TOKEN
    }
]


export default MAP_STYLES