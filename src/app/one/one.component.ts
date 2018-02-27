import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  parentData = 'don\'t trust strangers';

  constructor() { }

  ngOnInit() {
  }
  sonAlert(event) {
    document.getElementById('sonAlert').innerHTML = event;
  }

}
