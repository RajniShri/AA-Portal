import { COMPILER_OPTIONS, Compiler, CompilerFactory, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { DriverComponent } from './PersonalAuto/driver/driver.component';
import { VehicleComponent } from './PersonalAuto/vehicle/vehicle.component';
export function createCompiler(fn: CompilerFactory): Compiler {
  return fn.createCompiler();
}

const routes: Routes = [
  { path: 'auto-driver', component: DriverComponent},
   { path: 'auto-vehicle', component: VehicleComponent}
 ];

// const routes: Routes = [
//   { path :'', component: DriverComponent,  children : [
//     { path: 'auto', component: DriverComponent, 
//     children :[{ path: 'driver', component: DriverComponent}]},
//      { path: 'vehicle', component: VehicleComponent}
//    ]}
// ];

// const routes: Routes = [ { path: '', component: ParentComponent, children: 
// [ { path: 'red-pill', component: ChildComponent }, 
// { path: 'blue-pill', component: AnotherChildComponent } 
// ]
//  } ]; 



@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    VehicleComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes , { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: COMPILER_OPTIONS,
    useValue: {},
    multi: true
  },
  {
    provide: CompilerFactory,
    useClass: JitCompilerFactory,
    deps: [COMPILER_OPTIONS]
  }, { provide: APP_BASE_HREF, useValue: '/' },
  {
    provide: Compiler,
    useFactory: createCompiler,
    deps: [CompilerFactory]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
