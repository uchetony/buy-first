import { ProductService } from './services/product/product.service';
import { AuthServiceService } from './services/auth/auth-service.service';
import { appRoutes } from './routes/app-routes';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ManageProductsComponent } from './dashboard/manage-products/manage-products.component';
import { MyOrdersComponent } from './dashboard/my-orders/my-orders.component';
import { UserActivityComponent } from './dashboard/user-activity/user-activity.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NewProductComponent } from './dashboard/new-product/new-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ManageProductsComponent,
    MyOrdersComponent,
    UserActivityComponent,
    LoginComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ProductService
    // AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
