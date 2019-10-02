import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { ProductsComponent } from '../products/products.component'
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component'
import { CheckOutComponent } from '../check-out/check-out.component'
import { OrderSuccessComponent } from '../order-success/order-success.component'
import { LoginComponent } from '../login/login.component'

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'shopping-cart', component: ShoppingCartComponent},
    { path: 'checkout', component: CheckOutComponent},
    { path: 'order-success', component: OrderSuccessComponent},
    { path: 'login', component: LoginComponent},
    { path: "", redirectTo: '/home', pathMatch: 'full'}
]