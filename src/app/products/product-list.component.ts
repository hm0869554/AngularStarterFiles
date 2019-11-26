
import {Component} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component ({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
    pageTitle = "My Kool Products";
    imageWidth : number = 50;
    imageMargin : number = 4;
    showImage: boolean = true;
    _listFilter : string;
    filteredProduct: IProduct[];
    products: IProduct[] = [];

      constructor(private productService: ProductService)
      {
          
          console.log("in the constructor")
          
          
      }

      ngOnInit(): void {
        console.log("in the onInit Lifecycle")
        //this.products = productService.getProduct();
        this.productService.getProduct().subscribe({
            next: prodObserved =>{ this.products = prodObserved;
              this.filteredProduct = this.products;
            }
        })
        ;
      }

      toggleImage() : void
      {
          this.showImage = !this.showImage;
      }

      get listFilter() : string{
          return this._listFilter
      }
      set listFilter(value:string){
          this._listFilter = value;
          this.filteredProduct = this.listFilter ? this.performFilter(this._listFilter) : this.products;
      }
      performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }
      
    onRatingClicked(message: string): void{
      this.pageTitle = message
    }
}


