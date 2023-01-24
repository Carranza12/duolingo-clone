import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  constructor(private _form:FormService) { }

  ngOnInit(): void {
    this._form.getForm('questions').subscribe((res) => {
      console.log(res);
    })

  }

}
