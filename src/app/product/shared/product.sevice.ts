import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {

    }

    getProduct(): Observable<any> {
        return this.http.get('/api/v1/product');
    }

    getProductById(productId: string): Observable<any> {
        return this.http.get('/api/v1/product/' + productId)
    }
}