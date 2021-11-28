import { heroes } from "../data/heroes";


export const getHeroesById = (id) => {
    // console.log("getHeroById");
    return heroes.find( h => h.id === id )
}