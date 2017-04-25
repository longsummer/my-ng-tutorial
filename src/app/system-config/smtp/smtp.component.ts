import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SmtpService } from './smtp.service';

@Component({
  selector: 'app-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.css'],
  providers: [SmtpService]
})
export class SmtpComponent implements OnChanges {
  smtpForm: FormGroup;
  formErrors = {
    serviceAddr: {message: '', show: false},
    senderAddr: {message: '', show: false},
    senderName: {message: '', show: false},
    senderPasswd: {message: '', show: false}
  };
  validateMessage = {
    serviceAddr: {
      required: '请填写SMTP服务器地址',
      email: '请填写正确的邮件地址'
    },
    senderAddr: {
      email: '请填写正确的邮件地址'
    },
    senderName: {
      required: '请填写发送方名称',
      pattern: '请以123开头'
    },
    senderPasswd: {
      required: '请填写密码',
      minlength: '密码长度至少6位'
    }
  };
  constructor(
    private fb: FormBuilder,
    private smtpService: SmtpService
  ) {
    this.createForm();
    this.revert();
  }

  createForm() {
    this.smtpForm = this.fb.group({
      serviceAddr: ['', [Validators.required, Validators.email]],
      senderAddr: ['', Validators.email],
      senderName: ['', [Validators.required, Validators.pattern(/^123/)]],
      senderPasswd: ['', [Validators.minLength(6), Validators.required]]
    });
    this.smtpForm.valueChanges.subscribe(
      data => { this.onValueChanged(data); },
      err => { console.log(err) }
    );
  }

  revert() {
    this.smtpService.getSmtpInfo().subscribe(data => {
      this.smtpForm.reset({
        serviceAddr: data.email,
        senderAddr: data.smtp_addr,
        senderName: data.smtp_user,
        senderPasswd: data.smtp_passwd
      });
    });
  }

  onSubmit() {
    const newData = this.smtpForm.value;
    this.smtpService.updateSmtpInfo(newData);
  }

  onValueChanged(data?: any) {
    if (!this.formErrors) { return; }
    const form = this.smtpForm;

    for (const field in this.formErrors) {
      this.formErrors[field].message = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validateMessage[field];
        for (const key in control.errors) {
          this.formErrors[field].message += messages[key] + ';';
        }
      }
    }
  }
  
  validate(field: string) {
    this.formErrors[field].show = false;
    const control = this.smtpForm.controls[field];
    if (control.dirty && !control.valid) {
      this.formErrors[field].show = true;
    }
  }

  ngOnChanges(){
    debugger;
  }
}
