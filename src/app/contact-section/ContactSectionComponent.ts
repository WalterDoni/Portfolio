import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ToggleVisibilityService } from '../global-variable';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
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
  disabledButton = true;

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

  async sendMail(): Promise<void> {

    let formName = this.formName.nativeElement;
    let formEmail = this.formEmail.nativeElement;
    let formMessage = this.formMessage.nativeElement;
    let formButton = this.formButton.nativeElement;

    if (!this.checkValidateForm(formName, formEmail, formMessage)) {
      return;
    }

    formName.disabled = true;
    formEmail.disabled = true;
    formMessage.disabled = true;
    formButton.disabled = true;

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

    this.renderer.addClass(this.emailSuccess.nativeElement, 'show');
    formName.disabled = false;
    formEmail.disabled = false;
    formMessage.disabled = false;
    formButton.disabled = false;

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



  onInputChangeN(value: string) {

    if (value.length > 1) {
      this.greenBorderName = true;
    } else {
      this.greenBorderName = false;
    }

  }

  onInputChangeE(value: string) {

    let trimmedValue = value.trim();
    if (value.length > 1 && trimmedValue.includes('@')) {
      this.greenBorderEmail = true;
    } else {
      this.greenBorderEmail = false;
    }

  }


  onInputChangeM(value: string) {

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
