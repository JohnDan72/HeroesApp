import { mount } from "enzyme"
import { MemoryRouter, Routes, Route } from "react-router-dom";
import HeroScreen from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Pruebas HeroScreen', () => {

    test('debe mostrar un héroes si existe el id', () => {
        const noHero = 'No hero page';
        const params = `/dc-superman`;
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/hero${params}`]}>
                <Routes>
                    <Route path="/hero/:id_hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>{noHero}</h1>} />
                </Routes>
            </MemoryRouter>
        );
        
        expect(wrapper.find('h2').text().trim().toLowerCase()).toBe('superman');
    });

    test('debe mostrar no page hero', () => {
        const noHero = 'No hero page';
        const params = ``;
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/hero${params}`]}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>{noHero}</h1>} />
                </Routes>
            </MemoryRouter>
        );
        
        expect(wrapper.find('h1').exists()).toBe(true);
        expect(wrapper.find('h1').text().trim()).toBe(noHero);
    });

    test('debe llamarse navigate(-1)', () => {
        const params = `/dc-superman`;
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/hero${params}`]}>
                <Routes>
                    <Route path="/hero/:id_hero" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        );
        wrapper.find('Button').prop('onClick')();
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

})
