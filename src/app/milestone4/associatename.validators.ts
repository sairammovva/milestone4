export class AssociatenameValidators {
  interface ValidatorFn {
    (control: AbstractControl): ValidationErrors | null
  }
}
