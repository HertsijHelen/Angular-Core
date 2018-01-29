import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { Product } from './product';
import { SearchPipe } from './search.pipe';
      
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers:[DataService]
})
export class AppComponent implements OnInit{ 
    product: Product = new Product();   // изменяемый товар
    products: Product[];                // массив товаров
    tableMode: boolean = true;          // табличный режим

    curPage: number;
    pageSize: number;

    constructor(private dataService: DataService) {
        this.curPage = 1;
        this.pageSize = 3; // any page size you want 

    }

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

    numberOfPages() {
        return Math.ceil(this.products.length / this.pageSize);
    };


}