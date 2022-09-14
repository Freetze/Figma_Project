import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css'],
})
export class DashboardCardsComponent implements OnInit {
  constructor() {}
  @Input() width = '100%';
  @Input() item!: {
    id: number;
    title: string;
    imgPath: string;
    date: string;
  };
  @Output() imageClick = new EventEmitter<string>();
  @Output() bookClick = new EventEmitter<number>();
  ngOnInit(): void {}
  onImageClick() {
    this.imageClick.emit(this.item.title);
  }
  onBookClick() {
    this.bookClick.emit(this.item.id);
  }
}
