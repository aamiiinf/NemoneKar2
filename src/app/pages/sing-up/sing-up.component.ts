import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})

export class SingUpComponent {
  minLength;
  public isTrue;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}
  scroll = (event): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n >= 450){
      this.isTrue = true;
    }else if(n < 500){
      this.isTrue = false;
    }
  }


  addPost(email: string, password: string) {
    this.http.post<{ msg: string, msg2:string }>("http://localhost:3000/api/singup", { email: email, password: password }).subscribe((data) => {
        alert(data.msg);
      });
  }

  onAddPost(form: NgForm) {
    this.addPost(form.value.email, form.value.password);
    form.resetForm();
  }

  Up($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
