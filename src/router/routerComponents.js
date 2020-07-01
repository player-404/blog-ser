class RouterComponents {
    homeComponent() {
        return import('../views/Home.vue');
    }
}

export const routerComponents = new RouterComponents();