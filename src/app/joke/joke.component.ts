import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Joke } from '../ts/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {

  @Input('joke') joke: Joke;
  @Output() jokeRemove = new EventEmitter<Joke>();

  deleteJoke(){
    this.jokeRemove.emit(this.joke);
  }

  ngOnInit(): void {
  }

}



