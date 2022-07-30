import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  products: IProduct[] = []

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // или // params: new HttpParams().append('limit', 5)
      params: new HttpParams({
        // или // fromString: 'limit=5'
        fromObject: {limit: 5}
      })
    }).pipe(
      delay(200),
      retry(2),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }
  //Создаёт новый продукт (по названию - введённому в модальном окне)
  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => {
            this.products.push(prod)
            // console.log(this.products)
          })
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
