import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-rename',
  templateUrl: './file-rename.component.html',
  styleUrls: ['./file-rename.component.scss']
})
export class FileRenameComponent implements OnInit {

  @ViewChild('fileInput')
  fileInput;
  file: File | null = null;

  
  constructor() { }

  ngOnInit(): void {
  }

  fileRename = '';

  obj: Blob;

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  fileDownload() {
    // this.obj = new Blob;
    console.log(this.file);
    
    const link = document.createElement('a');
    // link.setAttribute('href', window.URL.createObjectURL(this.obj));
    link.setAttribute('href', window.URL.createObjectURL(this.file));
    link.setAttribute('download', this.fileRename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
