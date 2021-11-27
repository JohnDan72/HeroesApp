import { mount, shallow } from "enzyme"
import { GeneralContext } from "../../GeneralContext";
import AppRouter from "../../routes/AppRouter"



describe('Pruebas al AppRouter', () => {
    

    test('debe renderizar el componente correctamente', () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe renderizar login si no esta authtenticado', () => {
        const expected = 'Bienvenido a Heroes App';
        const contextValue = {
            user: {
                logged: false
            }
        }
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue} >
                <AppRouter />
            </GeneralContext.Provider>
        );

        const bienvenida = wrapper.find('#id_bienvenida');

        expect(bienvenida.exists()).toBe(true);
        expect(bienvenida.text().trim()).toBe(expected);
    });

    test('debe renderizar cualquier private page si esta authtenticado', () => {
        const contextValue = {
            user: {
                logged: true,
                id: 23,
                name: 'Juan Daniel',
                email: 'juan1@gmail.com'
            }
        }
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue} >
                <AppRouter />
            </GeneralContext.Provider>
        );

        const bienvenida = wrapper.find('#id_bienvenida');

        expect(bienvenida.exists()).toBe(false);
    });
    
})
