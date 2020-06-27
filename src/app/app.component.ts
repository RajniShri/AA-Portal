import {  Compiler, Component, Injector, ViewChild, 
         ViewContainerRef, 
         ɵCodegenComponentFactoryResolver} from '@angular/core';
import { DriverComponent } from './PersonalAuto/driver/driver.component';


declare const SystemJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @ViewChild('content', { read: ViewContainerRef, static: false}) content: ViewContainerRef;

  constructor() { }

   

}
