import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-multiple-picture',
  templateUrl: './multiple-picture.component.html',
  styleUrls: ['./multiple-picture.component.scss']
})
export class MultiplePictureComponent implements OnInit {
  @Input() question!:Question;
  constructor() { }

  ngOnInit(): void {
  }

  test(){
    alert('test!')
  }
}
