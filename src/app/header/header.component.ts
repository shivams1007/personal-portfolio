import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedIndex = 1;
  constructor() {
  }
  mobileMenu: boolean = false;

  openMenu() {
    this.mobileMenu = !this.mobileMenu;
  }
  ngOnInit(): void {
    window.onscroll = () => {
      if (window.pageYOffset >= 0 && window.pageYOffset <= 700) {
        this.selectedIndex = 1;
      }
      else if (window.pageYOffset >= 800 && window.pageYOffset <= 5174) {
        this.selectedIndex = 2;
      }
      else if (window.pageYOffset >= 5174 && window.pageYOffset <= 6931) {
        this.selectedIndex = 3;
      }
      else if (window.pageYOffset >= 6931 && window.pageYOffset <= 7855) {
        this.selectedIndex = 4;
      }
      else if (window.pageYOffset >= 7823 && window.pageYOffset <= 8825) {
        this.selectedIndex = 5;
      }
      else if (window.pageYOffset >= 8825 && window.pageYOffset <= 9261) {
        this.selectedIndex = 6;
      }
    }
  }




  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }

}
