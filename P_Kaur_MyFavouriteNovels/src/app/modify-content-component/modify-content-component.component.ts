import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../message.service';
import { NovelService } from '../novel-service.service';
@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponentComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private novelService: NovelService
  ) {}

  ngOnInit(): void {}

  @Output() public childEvent = new EventEmitter();
  @Input() public btnLabel: String = '';

  onSubmit(form: NgForm) {
    console.log({ valid: form.valid, value: form.value });
    if (!form.valid) {
      this.messageService.clear();
      this.messageService.add('Please Fill Required Fields');
      return;
    }

    // this.novelService.addContent(form.value);
    this.childEvent.emit(form.value);
    form.reset();
  }
}
