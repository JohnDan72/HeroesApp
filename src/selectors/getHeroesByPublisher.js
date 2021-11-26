import { heroes } from "../data/heroes"

export const getHeroesByPublisher = ( publisher = '' ) => {
    console.log("getHeroesByPublisher");
    const validPublisher = ['Marvel Comics' , 'DC Comics'];

    if(validPublisher.includes(publisher))
        return heroes.filter(h => h.publisher === publisher);

    // return all by default
    return heroes;
}