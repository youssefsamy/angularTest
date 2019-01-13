
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, Inject } from "@angular/core";

@Component({
    selector: 'item-modal',
    templateUrl: 'itemModal.component.html',
    styleUrls: ['./itemModal.component.scss']
})
export class ItemModalComponent {
    item = null;
    constructor(
        public dialogRef: MatDialogRef<ItemModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        if (data.mode == 'new') {
            this.item = { id: '', color: '', title: '', text: '' };
        } else {
            this.item = Object.assign({}, data.item);
        }

        console.log(this.item);
    }

    close(): void {
        this.dialogRef.close();
    }

    apply() {
        this.dialogRef.close({ type: 'ok', data: this.item });
    }

    cancel() {
        this.dialogRef.close({ type: 'cancel' });
    }
}