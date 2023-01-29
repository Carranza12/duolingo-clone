import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incorrect-mesage',
  templateUrl: './incorrect-mesage.component.html',
  styleUrls: ['./incorrect-mesage.component.scss']
})
export class IncorrectMesageComponent implements OnInit {
  @Output() continue = new EventEmitter();
  @Input() step!:number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.step)
  }

  next(){
    this.step++;
    this.continue.emit(this.step);
  }

}
