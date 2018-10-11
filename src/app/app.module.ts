import { CardComponent } from './card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'wishlist', component: WishlistComponent },
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WishlistComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
