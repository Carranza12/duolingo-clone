import { Component, OnInit } from '@angular/core';
import { Question } from '../interfaces/Question';
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
  constructor(private _form:FormService) { }

  ngOnInit(): void {
    this._form.getForm('questions').subscribe((res) => {
        this.questions = res;
        this.question = this.questions[this.step];
       
    })

  }

 
}
