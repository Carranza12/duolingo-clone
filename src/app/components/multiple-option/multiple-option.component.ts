import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { answer, Question } from 'src/app/interfaces/Question';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-multiple-option',
  templateUrl: './multiple-option.component.html',
  styleUrls: ['./multiple-option.component.scss']
})
export class MultipleOptionComponent implements OnInit {
  @Input() question!:Question;
  @Input() step!:number;
  @Output() continue = new EventEmitter();


  public answered:boolean = false;
  public answerSelected!:answer;

  constructor(private _form:FormService) { }

  ngOnInit(): void {
  }

  public selectAnswer(answer:answer){
    this.answered = true;
    this.answerSelected = answer;
   
  }

  next(event:Event){
    this.continue.emit(event)
  }


 

}
