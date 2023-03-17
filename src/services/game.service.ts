import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class GameService {
  private apiUrl = 'https://api.datamuse.com/words?sp=';
  private gridSize = 4;

  constructor() { }

  async generatePuzzle() {
    const puzzle = [];
    for (let i = 0; i < this.gridSize; i++) {
      puzzle[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        puzzle[i].push(letter);
      }
    }
    return puzzle;
  }

  async validateWord(word: string) {
    try {
      const response = await axios.get(`${this.apiUrl}${word}*`);
      return response.data.some((suggestion: any) => suggestion.word === word);
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}