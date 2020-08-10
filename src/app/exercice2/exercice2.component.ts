import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked, OnChanges, DoCheck } from '@angular/core';


@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('i') private value: ElementRef; 

  constructor() { }

  ngOnInit() {
 
  }

  InputChange()
  {
    this.valeur = this.value.nativeElement.value;
  }

}
