import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../message.service';
import { NovelService } from '../novel-service.service';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponentComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private novelService: NovelService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.updateNovelData) {
    }
  }

  @Output() public childEvent = new EventEmitter();
  @Input() public btnLabel: String = '';
  @Input() public updateNovelData?: Content;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  openDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, {
      data: this.onSubmit,
      panelClass: 'fullscreen-dialog',
      height: '100vh',
      width: '100%',
    });
    myTempDialog.afterClosed().subscribe((res) => {
      console.log({ res });
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

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
    this.closeDialog();
  }
}

// @Component({
//   selector: 'add-novel-dialog',
//   templateUrl: 'add-novel-dialog.html',
// })
// export class AddNovelDialog {
//   constructor() {}
// }

// export interface DialogData {}
