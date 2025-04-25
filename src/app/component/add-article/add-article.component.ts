import { Component } from '@angular/core';

@Component({
  selector: 'app-add-article',
  imports: [],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  contentCounter : number = 0;
  descriptionCounter : number = 0;
  contentLengthController(event : KeyboardEvent){
    if(event.key == "Backspace" && this.contentCounter > 0){
      this.contentCounter --;
    }else{
      this.contentCounter ++;
    }
  }
  descriptionLengthController(event : KeyboardEvent){
    if(event.key == "Backspace" && this.descriptionCounter > 0){
      this.descriptionCounter --;
    }else{
      this.descriptionCounter ++;
    }
  }
}
