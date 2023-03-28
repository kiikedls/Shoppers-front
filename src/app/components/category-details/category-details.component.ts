import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{
  @Input() viewMode=false;

  @Input() currentCategory:Category={
    name:'',
  };

  message='';

  constructor(
    private categoryService:CategoryService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message='';
      this.getCategory(this.route.snapshot.params["id"]);
    }
  }
  getCategory(id: string):void {
    this.categoryService.get(id)
    .subscribe({
      next:(data)=>{
        this.currentCategory=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
  }

  /*updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }*/
  updateCategory():void{
    this.message='';

    this.categoryService.update(this.currentCategory.id,this.currentCategory)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.message=res.message? res.message:'Esta categoria fue actualizada exitosamente!';
      },
      error:(e)=>console.error(e)
    });
  }

  deleteCategory():void{
    this.categoryService.delete(this.currentCategory.id)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigate(['/categories']);
      },
      error:(e)=>console.error(e)
    });
  }

}
