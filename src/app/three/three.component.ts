import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyService} from "../myservice.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit, OnDestroy {
   message = '';
  subscription: Subscription;

  constructor(private myService: MyService) { }

  ngOnInit() {
    this.subscription = this.myService.mySubject.subscribe(
      message => this.message = message,
      err => console.log(err)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
