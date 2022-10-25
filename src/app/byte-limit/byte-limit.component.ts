import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-byte-limit',
  templateUrl: './byte-limit.component.html',
  styleUrls: ['./byte-limit.component.scss']
})
export class ByteLimitComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  editForm: FormGroup = this.formBuilder.group({
    title: new FormControl('', Validators.required),  // タイトル
    memo: new FormControl(''), // メモ
  });
  
  inputStr = '';
  inputStr2 = '';
  
  // 入力バイト数が制限を超えた場合
  inputLimitByteTitle(event: any){
    const objmemo = (document.getElementById('test') as HTMLTextAreaElement);
    const a = (encodeURIComponent(objmemo.value).replace(/%../g,"x").length);
    if (a > 10){
      objmemo.value = this.substrb(objmemo.value, 10);
      this.editForm.value.title = this.substrb(objmemo.value, 10); //追加
    }
    else {
      objmemo.value = objmemo.value;
      this.editForm.value.title = objmemo.value; //追加
    }
  }

  check() {
    const objmemo = (document.getElementById('test') as HTMLTextAreaElement);
    this.inputStr = objmemo.value;
    this.inputStr2 = this.editForm.value.title;
  }
  
  // バイト数カウント
  substrb(text: string, len: number) {
    var text_array = text.split('');
    var count = 0;
    var str = '';
    for (var i = 0; i < text_array.length; i++) {
      var n = escape(text_array[i]);
      if (n.length < 4) count++;
      else count += 2;
      if (count > len) {
        return str;
      }
      str += text.charAt(i);
    }
    return text;
  }

}
