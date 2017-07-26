import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product, ProductComment, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: ProductComment[];

  constructor(private routeInfo: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    const productId = +this.routeInfo.snapshot.params.id;
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsByProductId(productId);

  }

}
