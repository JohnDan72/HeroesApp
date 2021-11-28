const { mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");
const { default: SearchScreen } = require("../../components/search/SearchScreen");

// mock antes de la variable es importante para que salga bien la tarea
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en SearchScreen', () => {


    test('debe mostrar component correctamente', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']} >
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h4').text().trim().toLowerCase()).toBe('búsqueda');

    });

    test('debe mostrar result por queryParameters correctamente', () => {
        const busqueda = 'batman';
        const queryParams = `?query=${busqueda}`;
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search${queryParams}`]} >
                <SearchScreen />
            </MemoryRouter>
        );
        const searchInput = wrapper.find('TextFieldButton');
        const resultTag = wrapper.find('h5');

        expect(wrapper).toMatchSnapshot();
        expect(resultTag.text().trim().toLowerCase()).toBe('resultados (1)');
        expect(searchInput.prop('value')).toBe(busqueda);

    });

    test('debe mostrar sin resultados por búsqueda sin data', () => {
        const busqueda = 'batman123';
        const queryParams = `?query=${busqueda}`;
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search${queryParams}`]} >
                <SearchScreen />
            </MemoryRouter>
        );
        const resultTag = wrapper.find('h5');

        expect(wrapper).toMatchSnapshot();
        expect(resultTag.text().trim().toLowerCase()).toBe('sin resultados');

    });

    test('debe cambiar correctamente después de un enter/submit del searchForm', async () => {
        const busqueda = '';
        const queryParams = `?query=${busqueda}`;

        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search`]} >
                <SearchScreen />
            </MemoryRouter>
        );

        const nuevaBusqueda = 'superman';

        // esto no sirve por el mount: wrapper.find(`FormControl`).simulate('change',nuevaBusqueda);

        // con "mount()" se debe manipular directamente el input generado de la compilación
        // console.log(wrapper.find(`input[id='id_search_input']`).props());
        wrapper.find(`input[id='id_search_input']`).simulate('change',{ target:{ value: nuevaBusqueda}});
        // console.log(wrapper.find(`FormControl`).props());

        wrapper.find('Form').simulate('submit');
        
        expect( mockNavigate ).toHaveBeenCalledTimes(1);
        expect( mockNavigate ).toHaveBeenCalledWith(`?query=${nuevaBusqueda}`);
    });

})
