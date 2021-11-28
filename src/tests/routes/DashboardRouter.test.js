import React from 'react';
import { mount } from "enzyme"
import DashboardRouter from "../../routes/DashboardRouter"
import { GeneralContext } from '../../GeneralContext';
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en DashboardRouter', () => {
    const contextValue = {
        theme: 'dark',
        user: {
            id: 1,
            name: 'Juan Daniel Garcia'
        }
    }

    test('debe mostrarse correctamente', () => {
        // MemoryRouter se usa para proveer el context dentro del router de DashboardRouter
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRouter />
                </MemoryRouter>
            </GeneralContext.Provider>
        );
        const accountNav = wrapper.find('#id_account_nav');

        expect(wrapper).toMatchSnapshot();
        expect(accountNav.exists()).toBe(true);
        expect(accountNav.at(0).prop('title').trim()).toBe(contextValue.user.name);
    })

    test('debe mostrarse dc route corrctamente', () => {
        // MemoryRouter se usa para proveer el context dentro del router de DashboardRouter
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRouter />
                </MemoryRouter>
            </GeneralContext.Provider>
        );
        const breadcrum = wrapper.find('Breadcrumb');
        // console.log(breadcrum.text());
        expect(breadcrum.text().trim().toLowerCase()).toBe('home/dc');

    });

    test('debe mostrarse marvel route corrctamente', () => {
        // MemoryRouter se usa para proveer el context dentro del router de DashboardRouter
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <DashboardRouter />
                </MemoryRouter>
            </GeneralContext.Provider>
        );
        const breadcrum = wrapper.find('Breadcrumb');
        // console.log(breadcrum.text());
        expect(breadcrum.text().trim().toLowerCase()).toBe('home/marvel');

    });

    test('debe mostrarse search route corrctamente', () => {
        // MemoryRouter se usa para proveer el context dentro del router de DashboardRouter
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search']}>
                    <DashboardRouter />
                </MemoryRouter>
            </GeneralContext.Provider>
        );
        const h4Tag = wrapper.find('h4');
        // console.log(h4Tag.text());
        expect(h4Tag.exists()).toBe(true);
        expect(h4Tag.text().trim().toLowerCase()).toBe('búsqueda');

    });

    test('debe mostrar hero/super route correctamente', () => {
        const hero = {
            id: 'dc-superman',
            superhero: 'superman'
        }
        const wrapper = mount(
            <GeneralContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={[`/hero/${hero.id}`]}>
                    <DashboardRouter />
                </MemoryRouter>
            </GeneralContext.Provider>
        );

        const h2Tags = wrapper.find('h2');

        // console.log(h2Tags.text());
        expect(h2Tags.text().trim().toLowerCase()).toBe(hero.superhero);
    })
    
})
