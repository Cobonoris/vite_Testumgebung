import { Product } from "../index"
import * as listJSON from '../quellen/products.json';

const productlistStore = {
    state() {
        return {
            products: listJSON.products as Product[]
        }
    }
}

export default productlistStore