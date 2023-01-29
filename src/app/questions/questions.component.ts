import { Component, OnInit } from '@angular/core';
import { answer, Question } from '../interfaces/Question';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public step:number = 0;
  public question! : Question;
  public questions:any = [];
  public endQuestion:boolean = false;

  constructor(private _form:FormService) { }

  ngOnInit(): void {
   this.nextQuestion();
  }

  public nextQuestion():void{
      this._form.getForm('questions').subscribe((res) => {
        this.questions = res;
        this.question = this.questions[this.step]; 
        if(!this.question) this.endQuestion = true;
    })
  }

  public next(event:Event):void{
    this.step = Number(event);
    this.nextQuestion();
  }

 
}
