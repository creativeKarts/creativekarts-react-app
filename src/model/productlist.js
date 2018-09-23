import ProductItem from "./productitem";

function Product(categorie, itemCounts, items) {
  (this.categorie = categorie),
    (this.items = []),
    (this.itemCounts = itemCounts);
}

let ProductList = [];
