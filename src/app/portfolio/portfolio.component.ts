import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  socialList = [{
    url: environment.LINKEDIN,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg',
    style: 'filter: invert(35%) sepia(14%) saturate(6468%) hue-rotate(173deg) brightness(93%) contrast(102%);'
  }, {
    url: environment.GITHUB,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg',
    style: ''
  }, {
    url: environment.DEV,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/dev-dot-to.svg',
    style: ''
  }, {
    url: environment.UPWORK,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/upwork.svg',
    style: 'filter: invert(69%) sepia(100%) saturate(322%) hue-rotate(50deg) brightness(91%) contrast(95%);'
  }, {
    url: environment.EMAIL,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/gmail.svg',
    style: 'filter: invert(32%) sepia(77%) saturate(1154%) hue-rotate(334deg) brightness(94%) contrast(91%);'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
