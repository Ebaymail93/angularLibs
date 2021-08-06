import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Option } from './models/option';
import { Path } from './models/path';
import { Submenu } from './models/submenu';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() options!: Option
  @Input() paths!: Path[]
  @Input() searchOutput!: Submenu[]
  @Output() search = new EventEmitter()
  inputText: string = ''
  showSidebar = false;
  constructor() { }
  sidebarMouseEnter() {
    if (!this.showSidebar) {
      this.showSidebar = true;
    }
  }

  sidebarMouseLeave() {
    if (this.showSidebar) {
      this.showSidebar = false;
    }
  }

  searchClick() {
    if (!this.showSidebar) {
      this.showSidebar = true;
    }
  }

  sidebarClick() {
    if (this.showSidebar) {
      this.showSidebar = !this.showSidebar;
      this.inputText = ''
      this.searchOutput = []
    }
  }

  toggleClick() {
    if (!this.options.autoExpand) {
      this.showSidebar = !this.showSidebar;
      if(!this.showSidebar) {
        this.inputText = ''
        this.searchOutput = []
      }
    }
  }

  sendText() {
    this.search.emit(this.inputText);
  }


  ngOnInit(): void {

  }

  searchFunction() {
    var value = this.inputText;
    this.searchOutput = []
    if (value) {
      this.paths?.forEach((path: Path) => {
        if (path.link_name?.toLowerCase().includes(value.toLowerCase())) {
          this.searchOutput.push({ label: path.link_name, path: path.path })
        }
        if (path.tooltip?.includes(value.toLowerCase())) {
          this.searchOutput.push({ label: path.tooltip, path: path.path })
        }
        path.submenu?.forEach((submenu: Submenu) => {
          if (submenu.label?.toLowerCase().includes(value.toLowerCase())) {
            this.searchOutput.push({ label: submenu.label, path: submenu.path })
          }
        })
      })
    }
  }

}
