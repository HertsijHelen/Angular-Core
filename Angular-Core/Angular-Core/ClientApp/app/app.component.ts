import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { Product } from './product';
      
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers:[DataService]
})
export class AppComponent implements OnInit{ 
    product: Product = new Product();   // изменяемый товар
    products: Product[];                // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: Product[]) => this.products = data);
    }

    cancel() {
        this.product = new Product();
        this.tableMode = true;
    }

    save() {
        if (this.product.id == null) {
            this.dataService.createProduct(this.product)
                .subscribe((data: Product) => this.products.push(data));
        } else {
            this.dataService.updateProduct(this.product)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }

    editProduct(p: Product) {
        this.product = p;
    }

    delete(p: Product) {
        this.dataService.deleteProduct(p.id)
            .subscribe(data => this.loadProducts());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}