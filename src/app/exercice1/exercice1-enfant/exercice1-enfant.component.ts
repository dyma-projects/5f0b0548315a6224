import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input('result') public resultCompteur: number;
  @Output() IncrementE: EventEmitter<number> = new EventEmitter();
  @Output() DecrementE: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  IncrementEvent(): void {
    this.IncrementE.emit(1);
  }

  DecrementEvent(): void {
    this.DecrementE.emit(1);
  }

}
