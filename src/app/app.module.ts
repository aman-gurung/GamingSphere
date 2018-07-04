import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
 import { ParticlesModule } from 'angular-particle';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signup', component: SignupComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    HomepageComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
