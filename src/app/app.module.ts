import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LogoComponent } from 'src/app/logo/logo';
import { RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatFormFieldModule } from '@angular/material/form-field';

const routes=[
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'about-me',component: AboutMeComponent},
  {path:'contact',component: ContactComponent},
  {path:'portfolio',component: PortfolioComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    LogoComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports:[MatFormFieldModule],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: [{appearance: 'outline'}, {floatLabel: 'always'}]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
