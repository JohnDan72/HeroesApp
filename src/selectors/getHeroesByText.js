import { heroes } from '../data/heroes';

export const getHeroesByText = (termino = '') => {
    console.log("getHeroByText called");
    const regExp = new RegExp(`${termino}`, 'gi')
    return heroes.filter(hero =>
        regExp.test(hero.id) ||
        regExp.test(hero.alter_ego) ||
        regExp.test(hero.publisher) ||
        regExp.test(hero.superhero)
    );
}