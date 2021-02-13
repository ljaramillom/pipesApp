import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayus'
})
export class MayusculasPipe implements PipeTransform {
    transform(value: string, enMayus: boolean = true): string {
        return (enMayus) ? value.toUpperCase() : value.toLowerCase();
    }

}