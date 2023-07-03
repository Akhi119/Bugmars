import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/services/user.service';
import { NgxLoaderSpinnerService } from 'ngx-loader-spinner';
declare var $: any;
var emailIdPattern = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
var phonePattern = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userForm = new FormGroup({
    fullName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    emailId: new FormControl(null, [
      Validators.required,
      Validators.pattern(emailIdPattern),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(phonePattern),
    ]),
    companyTitle: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30),
    ]),
    companyName: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30),
    ]),
  });
  constructor(
    private NgxLoaderSpinnerService: NgxLoaderSpinnerService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  // save profile
  saveUser() {
    try {
      this.NgxLoaderSpinnerService.show();
      this.userService.saveUser(this.userForm.value).subscribe(
        (result: any) => {
          console.log(`Result [saveUser]:  , ${JSON.stringify(result.body)}`);
          this.toastr.success('User saved successful!', 'Success');
          $('#myModal').hide();
          $('.modal-backdrop').remove();
          $('body').removeClass('modal-open');
          this.userForm.reset();
          this.NgxLoaderSpinnerService.hide();
        },
        (err: any) => {
          this.toastr.error(
            `${err.error.body ? err.error.body : 'Internal Server Error!'}`,
            'Error'
          );
          this.NgxLoaderSpinnerService.hide();
        }
      );
    } catch (err) {
      console.error(`Error [saveUser]:  , ${err}`);
      this.toastr.error(`${err ? err : 'Internal Server Error'}`, 'Error');
      this.NgxLoaderSpinnerService.hide();
    }
  }
}
