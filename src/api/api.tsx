import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api',
});

const getResourse = (url: string) => instance.get(url)
    .then(res => res.data.results)
    .catch(() => console.error(`Could not fetch url ${URL}`))

export const dataAPI = {
    getAllFilms: (inputValue: string) => getResourse(`/films/?search=${inputValue}`),
    getAllPeople: (inputValue: string) => getResourse(`/people/?search=${inputValue}`),
    getAllPlanets: (inputValue: string) => getResourse(`/planets/?search=${inputValue}`),
    getAllSpecies: (inputValue: string) => getResourse(`/species/?search=${inputValue}`),
    getAllStarShips: (inputValue: string) => getResourse(`/starships/?search=${inputValue}`),
    getAllVehicles: (inputValue: string) => getResourse(`/vehicles/?search=${inputValue}`)
}