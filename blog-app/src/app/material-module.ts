import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule, MatDialogModule, MatIconModule, MatTableModule, MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule
    ]
})

export class MaterialModule { }