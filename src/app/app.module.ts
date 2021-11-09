import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { UseCasesComponent } from './use-cases/use-cases.component';

import { DocsModule } from './docs/docs.module';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HomeComponent,
    BlogComponent,
    UseCasesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule,
    MatSidenavModule, MatButtonModule,
    DocsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
