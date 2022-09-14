import { Component, OnInit, Input, HostListener, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() svgIcon: string = '../../../assets/Icon.svg';
  @Input() label: string = 'label';
  @Input() type: string = 'text';
  @Input() width: string = '100%';
  @Input() height: string = 'auto';
  @Input() name?: string;
  @Input() control!: FormControl;
  constructor() {}

  ngOnInit(): void {
    console.log(this.control);
  }
}
