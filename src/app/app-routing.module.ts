import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OneComponent} from "./one/one.component";
import {TwoComponent} from "./two/two.component";
import {FourComponent} from "./four/four.component";
import {ThreeComponent} from "./three/three.component";

const appRoutes: Routes = [
  // path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'one', component: OneComponent },
  {path: 'three', component: ThreeComponent },
  {path: 'four', component: FourComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
