import { FormControl } from "@angular/forms";

export interface PreproductForm {
    name: FormControl<string>;
    price: FormControl<string>;
    container: FormControl<string>;
    brand: FormControl<string>;
}