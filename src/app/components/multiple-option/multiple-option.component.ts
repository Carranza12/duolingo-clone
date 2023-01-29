import { Component, Input, OnInit } from '@angular/core';
import { answer, Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-multiple-option',
  templateUrl: './multiple-option.component.html',
  styleUrls: ['./multiple-option.component.scss']
})
export class MultipleOptionComponent implements OnInit {
  @Input() question!:Question;

  constructor() { }

  ngOnInit(): void {
    console.log('probando..')
    console.log(this.question)
  }

  public selectAnswer(answer:answer){
    console.log(answer)
    alert('ckick!')
  }
 

}
