import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  category:Category={
    user_id:'',
    name:''
  };
  submitted=false;

  constructor(private categoryService:CategoryService){}

  saveCategory():void{
    const data={
      user_id:this.category.user_id,
      name:this.category.name
    }

    this.categoryService.create(data)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.submitted=true;
      },
      error:(e)=>console.error(e)
    });
  }

  newCategory():void{
    this.submitted=false;
    this.category={
      user_id:'',
      name:''
    };
  }

}
