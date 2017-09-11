import { NgModule } from '@angular/core';
import { ProductListComponent } from 'app/products/product-list.component';
import { ProductDetailComponent } from 'app/products/product-detail.component';
import { ConvertToSpacesPipe } from 'app/shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from 'app/products/product-guard.service';
import { ProductService } from 'app/products/product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',canActivate:[ProductGuardService] ,component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers:[
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
