import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from './interface';

const baseURL = 'http://localhost:8080/api/products';

const jsonURL = 'assets/json/product.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(jsonURL);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: IData): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id: number, data: IData): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }

}
