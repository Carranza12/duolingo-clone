import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-correct-message',
  templateUrl: './correct-message.component.html',
  styleUrls: ['./correct-message.component.scss']
})
export class CorrectMessageComponent implements OnInit {
  @Output() continue = new EventEmitter();
  @Input() step!:number;
  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this.step++;
    this.continue.emit(this.step);
  }

}
