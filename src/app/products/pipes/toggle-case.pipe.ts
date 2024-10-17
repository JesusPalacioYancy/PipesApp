import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

    transform(value: string, toupper?: boolean ): string {
        return (toupper)
        ? value.toUpperCase()
        : value.toLowerCase()
    };
};