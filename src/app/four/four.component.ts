import { Component, OnInit } from '@angular/core';
import {HttpService} from "../httpService.service";

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  teams = [];

  constructor(private httpService: HttpService) { }

  getTeams() {
    this.httpService.getTeams().subscribe(
      teams => {this.teams = teams; },
      err => { console.log(err); }

    );
  }
  ngOnInit() {
  }

}
