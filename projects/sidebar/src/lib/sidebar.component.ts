import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() options: any
  @Input() paths: any
  isShowing = false;
  constructor() { }
  mouseenter() {
    if (!this.isShowing) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (this.isShowing) {
      this.isShowing = false;
    }
  }

  sidebarClick() {
    if(!this.options.autoExpand) {
      this.isShowing = !this.isShowing;
    }
  }

  ngOnInit(): void {

  }

}
