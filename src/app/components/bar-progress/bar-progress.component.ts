import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-bar-progress',
  templateUrl: './bar-progress.component.html',
  styleUrls: ['./bar-progress.component.scss']
})
export class BarProgressComponent implements OnInit {
  public lifes!:Subscription;
  @Input() actualLife!:number;
  constructor(private _router:Router, private _form:FormService) { }

  ngOnInit(): void {
    

  }

  close(){
    this._router.navigateByUrl('')
  }
}
