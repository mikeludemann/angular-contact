import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() containerclass: string;
  @Input() headlineclass: string;
  @Input() headline: string;
  @Input() elementclass: string;
  @Input() firstname: string;
  @Input() secondname: string;
  @Input() lastname: string;
  @Input() email: string;

  @ViewChild('profile') el: ElementRef;
  @ViewChild('secondname') sname: ElementRef;

  constructor() { }

  ngOnInit() {
    if (this.secondname == "" || this.secondname == null) {

      this.sname.nativeElement.style.display = "none";

    }
  }

  secondName(){
    if (this.secondname != "" || this.secondname != null) {

      this.sname.nativeElement.innerHTML = '<span class="secondName">' + this.secondname + '</span>';

    } 
  }

}
