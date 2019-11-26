import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component: ProductListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: "**", redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
