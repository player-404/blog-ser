class RouterComponents {
    homeComponent() {
        return import('../views/Login.vue');
    }
}

export const routerComponents = new RouterComponents();