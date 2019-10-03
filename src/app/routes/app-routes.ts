import { AdminAuthGuardService } from './../services/auth/admin-auth-guard.service';
import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { ProductsComponent } from '../products/products.component'
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component'
import { CheckOutComponent } from '../check-out/check-out.component'
import { OrderSuccessComponent } from '../order-success/order-success.component'
import { LoginComponent } from '../login/login.component'
import { AuthGuardService } from '../services/auth/auth-guard.service'
import { MyOrdersComponent } from '../dashboard/my-orders/my-orders.component'
import { ManageProductsComponent } from '../dashboard/manage-products/manage-products.component'
import { UserActivityComponent } from '../dashboard/user-activity/user-activity.component'

export const appRoutes: Routes = [
    // Routes accessible to anonymous users
    { path: '', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'shopping-cart', component: ShoppingCartComponent},
    { path: 'login', component: LoginComponent},
    { path: "", redirectTo: '/home', pathMatch: 'full'},


    // Routes accessible to logged in users
    { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService]},
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
    { path: 'dashboard/myorders', component: MyOrdersComponent, canActivate: [AuthGuardService]},

    
    // Routes accessible to admins only
    { path: 'dashboard/manageproducts', component: ManageProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    { path: 'dashboard/useractivity', component: UserActivityComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    
]