import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  currentProduct: IProduct = null;
  message = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getProductById(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  getProductById(id: number) {
    this.productService.readAll()
      .subscribe(
        product => {
          this.currentProduct = product[id -1];
        }
      )
  }

  getProduct(id: number): void {
    this.productService.read(id).subscribe(
      (product) => {
        this.currentProduct = product;
        console.log(product);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setAvailableStatus(status: boolean): void {
    this.currentProduct.available = status;

    console.log(this.currentProduct.available);

    // const data = {
    //   name: this.currentProduct.name,
    //   description: this.currentProduct.description,
    //   available: status,
    // };
    // this.productService.update(this.currentProduct.id, data).subscribe(
    //   (response) => {
    //     this.currentProduct.available = status;
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  updateProduct(): void {
    this.message = 'The product was updated!';
    // this.productService
    //   .update(this.currentProduct.id, this.currentProduct)
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //       this.message = 'The product was updated!';
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  }

  deleteProduct(): void {
    this.router.navigate(['/products']);
    // this.productService.delete(this.currentProduct.id).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.router.navigate(['/products']);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
