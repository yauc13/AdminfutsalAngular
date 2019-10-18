import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Championship } from '../models/championship';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  listChampionship() {   
    return this.http.get(`${this.API_URI}/championship`);
  }

   getChampionship(id: string) {
    return this.http.get(`${this.API_URI}/championship/${id}`);
  }

  deleteChampionship(id: string) {
    return this.http.delete(`${this.API_URI}/championship/${id}`);
  }

  insertChampionship(championship: Championship) {
    return this.http.post(`${this.API_URI}/championship`, championship);
  }

  updateChampionship(id: string|number, championship: Championship): Observable<Championship> {
    return this.http.put(`${this.API_URI}/championship/${id}`, championship);
  }
}
