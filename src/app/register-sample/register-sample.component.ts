import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-sample',
  templateUrl: './register-sample.component.html',
  styleUrls: ['./register-sample.component.scss']
})
export class RegisterSampleComponent implements OnInit {
  
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RegisterSampleComponent>,
  ) { }


  editTitle = 'テスト';
  keyNo = 0;
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      key: [this.data.key],
      startDate: [this.data.startDate, Validators.required],
      endDate: [this.data.endDate, Validators.required],
    });
    this.keyNo = this.data.key;
  }


  submit(): void {
    alert('submit!!!!!!!!!!!');
  }
  
  cancel(): void {
    this.dialogRef.close('OK');
  }

}
