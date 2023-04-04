import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CourseValidator {
    static hasTwoWord(control:AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') === -1)
            return { validateTwoWord: true }

        return null
    }
}