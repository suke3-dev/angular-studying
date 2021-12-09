import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RegisterSampleComponent } from './register-sample.component';

@Injectable({
    providedIn: 'root'
})
export class RegisterSampleDialogService {

    constructor(
        private dialog: MatDialog,

    ) { }

    open$(
        isSmSizePlatform: boolean,
        key: number,
        startDate: Date,
        endDate: Date
    ): Observable<{ selectUsers: string[] }> {
        let heightValue = '100%';
        let widthValue = '100%';
        const maxWidthValue = '100%';
        let panelClassValue = 'usertree-dialog';
        let isAutoFocus = false;

        if (!isSmSizePlatform) {

            heightValue = 'auto';

            widthValue = '600px';
            panelClassValue = '';
            isAutoFocus = true;
        }

        // const mode = this.serviceService.getModePattern();

        const dialog = this.dialog.open(RegisterSampleComponent, {
            maxWidth: maxWidthValue,
            height: heightValue,
            width: widthValue,
            panelClass: panelClassValue,
            data: {
                isSmSizePlatform,
                key,
                startDate,
                endDate
            },
            autoFocus: isAutoFocus,
        });
        return dialog.afterClosed();
    }
}
