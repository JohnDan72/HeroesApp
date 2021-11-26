import { heroes } from "../data/heroes";


export const getHeroesById = (id) => {
    return heroes.find( h => h.id === id )
}