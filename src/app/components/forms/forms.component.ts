import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @Input() question!:Question;
  constructor() { }

  ngOnInit(): void {
  }

}
