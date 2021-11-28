import { mount } from "enzyme"
import { MemoryRouter } from "react-router";
import { GeneralContext } from "../../../GeneralContext";
import LoginScreen from "../../../components/login/LoginScreen";

describe('Pruebas LoginScreen', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            id: 1,
            name: 'JuanDan',
            email: 'juan100@gmail.com'
        })
    );

    const contextValue = {
        dispatch: jest.fn()
    }
    const wrapper = mount(
        <GeneralContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <LoginScreen />
            </MemoryRouter>
        </GeneralContext.Provider>
    );

    test('debe mostrar component correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    // TEST PENDIENTE
    // test('debe realizar el dispatch y la navegación ', () => {
    //     const emailEntry = 'otro@hotmail.com';
    //     console.log(wrapper.find(`input[id='id_email_input']`).prop('value'));
    //     wrapper.find(`input[id='id_email_input']`).simulate('change', { target: { value: emailEntry } });
    //     console.log(wrapper.find(`input[id='id_email_input']`).prop('value'));

    //     wrapper.find('Form').simulate('submit');

    // });


})
