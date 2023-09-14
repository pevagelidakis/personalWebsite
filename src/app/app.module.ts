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
import { NgxExtendedPdfViewerModule,NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';

const routes=[
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'about-me',component: AboutMeComponent},
  {path:'contact',component: ContactComponent},
  {path:'portfolio',component: PortfolioComponent},
  {path:'data-science-certification-UOA.pdf',component: NgxExtendedPdfViewerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    PortfolioComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgxExtendedPdfViewerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
