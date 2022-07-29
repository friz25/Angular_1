import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // или // params: new HttpParams().append('limit', 5)
      params: new HttpParams({
        // или // fromString: 'limit=5'
        fromObject: {limit: 5}
      })
    })
  }
}
