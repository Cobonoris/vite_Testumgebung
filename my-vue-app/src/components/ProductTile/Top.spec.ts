import { mount } from "@vue/test-utils";
import ProductTileTop from "src/components/ProductTile/ProductTileTop.vue";
import ProductTileBottom from "src/components/ProductTile/ProductTileBottom.vue";
import ProductTileButtons from "src/components/ProductTile/ProductTileButtons.vue";
import { describe, it, expect } from "vitest";
import { Product } from '../../index';
import { createStore } from 'vuex';
import productlistStore from "../../Stores/products";
import wishlistStore from "../../Stores/wishlist";

const store = createStore({
    state: Object,
    modules: {
        produclistStore: productlistStore,
        wishlistStore: wishlistStore
    }
})

const props = { 
    item: {
        code: '001',
        title: 'Zementsack',
        price: '19,50€',
        imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fzementsack-50051459.jpg&f=1&nofb=1&ipt=7fb7eb8603f566480252baf162467eb26b98bcb4599791b462e5a61644b49509&ipo=images",
        availability: "in_stock",
        ribbon: "Angebot"
    } as Product
}

test("ProductTileTop.vue", async () => {
    expect(ProductTileTop).toBeTruthy()

    const wrapper = mount(ProductTileTop, {
        props: props
    })

    expect(wrapper.get('.item-top-ribbon').element.textContent).toBe('Angebot')
    expect(wrapper.get('.item-top-img').get('img').attributes('alt')).toBe('kein Bild verfügbar')
    expect(wrapper.get('.item-top-title').element.textContent).toBe('Zementsack')

});

test("ProductTileBottom.vue", async () => {
    expect(ProductTileBottom).toBeTruthy()

    const wrapper = mount(ProductTileBottom, {
        props: props
    })
    
    expect(wrapper.get('.item-bottom-price').element.textContent).toBe('19,50€ / Stück ')

});

test("ProductTileButtons.vue", async () => {
    expect(ProductTileButtons).toBeTruthy()

    const wrapper = mount(ProductTileButtons, {
        props: props,
        global: {
            plugins: [store],
          },
    })
    
    expect(wrapper.get('.item-bottom-buttons-save').attributes('data-inwish')).toBe('')

    await wrapper.get('.item-bottom-buttons-save').trigger('click')

    expect(store.state.wishlistStore.articles[0].code).toBe('001')
    expect(wrapper.get('.item-bottom-buttons-save').attributes('data-inwish')).toBe('1')

});