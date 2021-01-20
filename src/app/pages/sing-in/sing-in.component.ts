import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

import { Users } from "../users"

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  public massage = "";
  public isTrue;
  constructor( private http:HttpClient ) { }

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

  addPost(
    name: string,
    family: string,
    password: string,
    password2: string,
    email: string,
    tell: number,
    title: string
  ) {
    const users: Users = {
      id: null,
      name: name,
      family: family,
      password: password,
      password2: password2,
      email: email,
      tell: tell,
      title: title
    }
    this.http.post<{ msg: string, msg2:string }>("http://localhost:3000/api/singin", users)
    .subscribe((data) => {
      if(data.msg2){
        alert(data.msg2)
      }
        this.massage = data.msg
      });
  }

  onAddPost(form: NgForm) {
    this.addPost(
      form.value.name,
      form.value.family,
      form.value.password,
      form.value.password2,
      form.value.email,
      form.value.tell,
      form.value.title
      );
    form.resetForm();
  }

  Up($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
