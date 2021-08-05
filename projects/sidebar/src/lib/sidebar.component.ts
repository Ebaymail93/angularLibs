import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isShowing = false;
  constructor(private router: Router) { }
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

  ngOnInit(): void {
    
  }

  logout(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('')
  }

  sidebarClick() {
    this.isShowing = !this.isShowing;
  }

}
