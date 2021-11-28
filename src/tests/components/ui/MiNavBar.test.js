import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import MiNavBar from "../../../components/ui/MiNavBar";
import { GeneralContext } from "../../../GeneralContext";
import { types } from "../../../types/types";

// mock antes de la variable es importante para que salga bien la tarea
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe('Pruebas en MiNavBar', () => {
    const contextValue = {
        user: {
            name: 'Juancho'
        },
        active: 'search',
        setActive: jest.fn(),
        theme: 'dark',
        setTheme: jest.fn(),
        dispatch: jest.fn()
    }

    test('debe mostrar el component correctamente', () => {
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <MiNavBar />
                </MemoryRouter>
            </GeneralContext.Provider>
        );
        const nav_account = wrapper.find('#id_account_nav');
        expect(wrapper).toMatchSnapshot();
        expect(nav_account.at(0).prop('title').trim()).toBe(contextValue.user.name);
    });

    test('debe llamar logout, llamar navigate y dispatch con argumentos', () => {
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <MiNavBar />
                </MemoryRouter>
            </GeneralContext.Provider>
        );
        const logout = wrapper.find('#id_logout');

        // console.log(logout.length);
        // console.log(logout.at(logout.length - 1).props());

        logout.at(logout.length - 1).simulate('click');

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/login');
        expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
        expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout});
        
    });


})
