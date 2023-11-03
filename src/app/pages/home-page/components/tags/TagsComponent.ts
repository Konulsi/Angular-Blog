import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass'],
})
export class TagsComponent {
  @Input() tags: string[];
  @Output() tagsChanged: EventEmitter<string> = new EventEmitter();

  onChange({ value }: MatChipListboxChange) {
    this.tagsChanged.emit(value);
  }
}
