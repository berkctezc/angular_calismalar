import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = 'http://localhost:3000/products';

  getProducts(categoryId): Observable<Product[]> {

    let newPath = this.path;
    if(categoryId){
      newPath+= "?categoryId="+categoryId
    }

   return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
   // <> notasyonu gelen datayı map etmeye yarar
  }

  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    let retVal = this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));


    return retVal
  }



  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error instanceof ErrorEvent) {
      errorMessage = 'Bir Hata Olustu' + error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage);
  }
}
