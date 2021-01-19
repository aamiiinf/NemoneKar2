import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informating-page',
  templateUrl: './informating-page.component.html',
  styleUrls: ['./informating-page.component.scss']
})
export class InformatingPageComponent implements OnInit {

  public isTrue;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}
  scroll = (event): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n >= 700){
      this.isTrue = true;
    }else if(n < 800){
      this.isTrue = false;
    }
  }
}
