import { Component, OnInit } from '@angular/core';
import {CodebreakerService} from '../Services/codebreaker.service'


@Component({
  selector: 'app-codebreaker',
  templateUrl: './codebreaker.component.html',
  styleUrls: ['./codebreaker.component.css']
})
export class CodebreakerComponent implements OnInit {

  codebreakerMessage={};

  constructor(private cbService:CodebreakerService) { }

  ngOnInit() {
  }

  setSecret(secret:String){
    this.cbService.setSecret(secret).subscribe( message =>{
      this.codebreakerMessage = message;
    })
  }

  guess(number:string){
    this.cbService.guess(number).subscribe(message=>{
      this.codebreakerMessage = message;
    })
  }
}
