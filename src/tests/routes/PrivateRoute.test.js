import { mount } from "enzyme"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { GeneralContext } from "../../GeneralContext";
import { PrivateRoute } from "../../routes/PrivateRoute";

const saliendo = 'Saliento de aquí';
jest.mock('react-router-dom' , () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => (<span>{saliendo}</span>)
}));

describe('Pruebas PrivateRoute', () => {
    const contextValue = {
        user: {
            logged: true,
            name: 'Juan Daniel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe renderizar children si esta authenticated', () => {
        const privateComponent = 'Private Component';
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={[`/marvel`]}>
                    <PrivateRoute>
                        <h1>{privateComponent}</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </GeneralContext.Provider>
        );

        expect(wrapper.text().trim()).toBe(privateComponent);
        expect( localStorage.setItem ).toBeCalledWith('lastPath' , "/marvel");
    });

    test('debe renderizar el login', () => {
        const privateComponent = 'Private Component';
        const wrapper = mount(
            <GeneralContext.Provider value={{ user: { logged: false } } }>
                <MemoryRouter initialEntries={[`/marvel`]}>
                    <PrivateRoute>
                        <h1>{privateComponent}</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </GeneralContext.Provider>
        );
        
        console.log(wrapper.html());
        expect(wrapper.text().trim()).toBe(saliendo);
    });
    
    
})
