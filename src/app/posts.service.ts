import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// export interface IPosts {
//   userId: number,
//   id: number,
//   title: string,
//   body: string
// }

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get('/api/posts')
      .pipe(catchError(this.errHandler));
  }

  errHandler(err: HttpErrorResponse) {
    return throwError(err.message || 'Server Error');
  }
}
