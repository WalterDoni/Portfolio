import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ToggleVisibilityService } from '../global-variable';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {

  //-Variables for Contactform-//
  @ViewChild('myForm') myFrom!: ElementRef;
  @ViewChild('formName') formName!: ElementRef;
  @ViewChild('formEmail') formEmail!: ElementRef | any;
  @ViewChild('formMessage') formMessage!: ElementRef;
  @ViewChild('formButton') formButton!: ElementRef;
  @ViewChild('formNameAlert') formNameAlert!: ElementRef;
  @ViewChild('formEmailAlert') formEmailAlert!: ElementRef;
  @ViewChild('formMessageAlert') formMessageAlert!: ElementRef;
  @ViewChild('emailSuccess', { static: false }) emailSuccess!: ElementRef;
  @Input() required!: boolean | string;


  //-Send button-//
  disabledButton = true;


  //-Bordercolors -> green or red-//
  alertBorderName = false;
  alertBorderEmail = false;
  alertBorderMessage = false;

  greenBorderName = false;
  greenBorderEmail = false;
  greenBorderMessage = false;


  constructor(private renderer: Renderer2, private toggleService: ToggleVisibilityService) { }

  toggleDisabledButton(checked: boolean) {
    this.disabledButton = !checked;
  }

  /**
   * Send an email when every neccessary inputfield is filled. Disable the form, and after the email has been sent, reset it and make it available again.
   */
  async sendMail(): Promise<void> {
    let formName = this.formName.nativeElement;
    let formEmail = this.formEmail.nativeElement;
    let formMessage = this.formMessage.nativeElement;
    let formButton = this.formButton.nativeElement;
    if (!this.checkValidateForm(formName, formEmail, formMessage)) {
      return;
    }
    this.disableForm(formName, formEmail, formMessage, formButton);
    await this.sendViaPHP(formName, formEmail, formMessage);
    this.enableForm(formName, formEmail, formMessage, formButton);
    this.resetForm(formName, formEmail, formMessage, formButton);
  }

  /**
   * Disable the form and allow no changes in the form till the email has been send.
   */
  disableForm(formName: { disabled: boolean; }, formEmail: { disabled: boolean; }, formMessage: { disabled: boolean; }, formButton: { disabled: boolean; }) {
    formName.disabled = true;
    formEmail.disabled = true;
    formMessage.disabled = true;
    formButton.disabled = true;
  }

  /**
   * Send the mail -> send_mail.php
   */
  async sendViaPHP(formName: { value: string | Blob; }, formEmail: { value: string | Blob; }, formMessage: { value: string | Blob; }) {
    let fd = new FormData();
    fd.append('name', formName.value);
    fd.append('email', formEmail.value);
    fd.append('message', formMessage.value);

    await fetch('https://walter-doni.at/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
  }

  /**
    * Enable the form after the email has been send.
    */
  enableForm(formName: { disabled: boolean; }, formEmail: { disabled: boolean; }, formMessage: { disabled: boolean; }, formButton: { disabled: boolean; }) {
    this.renderer.addClass(this.emailSuccess.nativeElement, 'show');
    formName.disabled = false;
    formEmail.disabled = false;
    formMessage.disabled = false;
    formButton.disabled = false;
  }

  /**
   * Reset the whole form and show the success window.
   */
  resetForm(formName: { value: string; }, formEmail: { value: string; }, formMessage: { value: string; }, formButton: { value: string; }) {
    formName.value = '';
    formEmail.value = '';
    formMessage.value = '';
    formButton.value = '';
    this.greenBorderName = false;
    this.greenBorderEmail = false;
    this.greenBorderMessage = false;
    setTimeout(() => {
      this.renderer.removeClass(this.emailSuccess.nativeElement, 'show');
    }, 2000);
  }

  checkValidateForm(formName: { value: string; }, formEmail: { value: string; }, formMessage: { value: string; }): boolean {
    let isValid = true;
    this.alertBorderName = false;
    this.alertBorderEmail = false;
    this.alertBorderMessage = false;

    if (formName.value === '') {
      this.formNameAlert.nativeElement.classList.remove('d-none');
      isValid = false;
      this.alertBorderName = true;
    } else {
      this.formNameAlert.nativeElement.classList.add('d-none');
    }
    if (formEmail.value.trim() === '' || !formEmail.value.includes('@')) {
      this.formEmailAlert.nativeElement.classList.remove('d-none');
      isValid = false;
      this.alertBorderEmail = true;
    } else {
      this.formEmailAlert.nativeElement.classList.add('d-none');
    }
    if (formMessage.value === '') {
      this.formMessageAlert.nativeElement.classList.remove('d-none');
      isValid = false;
      this.alertBorderMessage = true;
    } else {
      this.formMessageAlert.nativeElement.classList.add('d-none');
    }
    return isValid;
  }

  onInputChangeName(value: string) {
    if (value.length > 1) {
      this.greenBorderName = true;
    } else {
      this.greenBorderName = false;
    }

  }

  onInputChangeEmail(value: string) {
    let trimmedValue = value.trim();
    if (value.length > 1 && trimmedValue.includes('@')) {
      this.greenBorderEmail = true;
    } else {
      this.greenBorderEmail = false;
    }

  }

  onInputChangeMessage(value: string) {
    if (value.length > 1) {
      this.greenBorderMessage = true;
    } else {
      this.greenBorderMessage = false;
    }
  }

  showImprint() {
    this.toggleService.toggleVisibility = false;
  }

}
