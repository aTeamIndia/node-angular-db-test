import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  wordList: any;
  userInput: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getWordList();
  }

  /**
   * Function to get the occurence list
   */
  getWordList(): void {
    this.apiService.getWordList().subscribe(
      response => {
        this.wordList = response;
      },
      error => console.error('Error getting word list ', error)
    );
  }

  /**
   * Function to handle the user input and send it to server
   */
  addWords(): void {
    this.apiService.addWords(this.userInput).subscribe(
      () => {
        this.userInput = null;
        this.getWordList();
      },
      error => console.error('Error updating word count ', error)
    );
  }
}
