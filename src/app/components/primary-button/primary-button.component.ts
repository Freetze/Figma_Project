import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() width: string = '100%';
  @Input() height: string = 'auto';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Input() padding: string = '0px 16px';
  @Input() label: string = 'primary';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.onClick.emit();
  }
}
