import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas con auth reducer', () => {

    test('debe retornar default state', () => {
        const initState = { logged: false };
        const state = authReducer(initState, { type: 'default' });
        expect(state).toEqual(initState);
    });

    test('debe regresar login state', () => {
        const initState = { logged: false };
        const action = {
            type: types.login,
            payload: {
                id: 45,
                name: 'Juan Daniel',
                email: 'juan1@gmail.com'
            }
        }
        const state = authReducer(initState, action);

        expect(state).toEqual({ ...action.payload, logged: true });
    });


    test('debe regresar logout state', () => {
        const initState = {
            logged: true,
            id: 45,
            name: 'Juan Daniel',
            email: 'juan1@gmail.com'
        }
        const action = {
            type: types.logout,
        }
        const state = authReducer(initState, action);

        expect(state).toEqual({ logged: false });
    })

})
