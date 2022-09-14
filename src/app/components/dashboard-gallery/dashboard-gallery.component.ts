import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard-gallery',
  templateUrl: './dashboard-gallery.component.html',
  styleUrls: ['./dashboard-gallery.component.css']
})
export class DashboardGalleryComponent implements OnInit {

  @Input() images!: string[];
  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {}
  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
