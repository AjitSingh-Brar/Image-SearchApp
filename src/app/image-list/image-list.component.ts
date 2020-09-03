import { ImageService } from './../shared/image.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  query: string;
  // imageForm = new FormGroup({

  //   query: new FormControl('')

  // });

 constructor(private _imageService: ImageService) { }

 handSuccess(data){
   this.imagesFound = true;
   this.images = data.hits;
   console.log(data.hits);
 }

 handleError(error){
   return console.log(error);
 }
 

  searchImages(query){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }
  ngOnInit(): void {
  }

}
