import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  /**
   * Function to send the user input string of words to backend
   * @param words User input string of words
   */
  addWords(words: string): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, { words });
  }

  /**
   * Function to get the occurence list from server
   */
  getWordList(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
}
