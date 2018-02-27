import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyService} from "../myservice.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Input() data;
  @Output() alertFather = new EventEmitter();

  constructor(private myService: MyService) { }

  ngOnInit() {
  }
  alert() {
    this.alertFather.emit(' hi father this is son click occurred');
  }
  sendData() {
    this.myService.mySubject.next('data from subject sent from two ' + Math.random());
    ///this.myService.mySubject.error('error dude');
  }

}
