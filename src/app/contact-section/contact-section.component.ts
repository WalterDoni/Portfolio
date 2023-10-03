import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  @ViewChild('myForm') myFrom!: ElementRef;
  @ViewChild('formName') formName!: ElementRef;
  @ViewChild('formEmail') formEmail!: ElementRef;
  @ViewChild('formMessage') formMessage!: ElementRef;
  @ViewChild('formButton') formButton!: ElementRef;



  async sendMail() {

    let formName = this.formName.nativeElement;
    let formEmail = this.formEmail.nativeElement;
    let formMessage = this.formMessage.nativeElement;
    let formButton = this.formButton.nativeElement;

    formName.disabled = true;
    formEmail.disabled = true;
    formMessage.disabled = true;
    formButton.disabled = true;

    let fd = new FormData();
    fd.append('name', formName.value);
    fd.append('email', formEmail.value);
    fd.append('message', formMessage.value);

    await fetch('https://w01e6044.kasserver.com/send_mail/send_mail.php',

      {
        method: 'POST',
        body: fd
      }
    )

    formName.disabled = false;
    formEmail.disabled = false;
    formMessage.disabled = false;
    formButton.disabled = false;

  }

}
