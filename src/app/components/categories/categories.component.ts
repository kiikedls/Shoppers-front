import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories?:Category[];
  currentCategory: Category={};
  currentIndex=-1;
  //title='';

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
      this.retrieveCategories();
  }

  retrieveCategories():void {
    this.categoryService.getAll()
    .subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
  }

  refreshList():void{
    this.retrieveCategories();
    this.currentCategory={};
    this.currentIndex=-1;
  }

  setActiveCategory(category:Category, index:number):void{
    this.currentCategory=category;
    this.currentIndex=index;
  }

  removeAllCategories():void{
    this.categoryService.deleteAll()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.refreshList();
      },
      error:(e)=>console.error(e)
    });
  }

  /*searchTitle():void{
    this.currentCategory={};
    this.currentIndex=-1;

    this.categoryService.findByTitle(this.title)
    .subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
  }*/

}
