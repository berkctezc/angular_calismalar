import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = 'http://localhost:3000/categories';

  getCategories(): Observable<Category[]> {
   return this.http
    .get<Category[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
   // <> notasyonu gelen datayı map etmeye yarar
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
