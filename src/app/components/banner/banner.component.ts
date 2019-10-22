import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  sliders: any[] = [
    'https://cdn.grabon.in/gograbon/images/category/1546252575451.png',
    'https://asset22.ckassets.com/resources/image/staticpage_images/Faasos-Desktop-24Aug2019-1566712822.jpg',
    'https://thepromox.com/wp-content/uploads/2018/04/faasos-50-off-coupon.png'
  ];

  ngOnInit() {
  }

}
