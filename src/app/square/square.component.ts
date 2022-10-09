import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button pButton type="button" class="p-button-success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button pButton type="button" class="p-button-info" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; padding-left:50px; }',
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
