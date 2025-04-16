import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [MatToolbarModule,CommonModule]
})
export class HeaderComponent implements OnInit {
    @Input() collapsed = false;
    @Input() screenWidth = 0;

    myDate = new Date();
    currentTime: string | undefined;

    ngOnInit() {
        setInterval(() => {
            this.currentTime = new Date().toLocaleTimeString();
        }, 1000);
    }

    getHeaderClass(): string {
        let styleClass = '';
        if (this.collapsed && this.screenWidth > 768) {
            styleClass = 'header-trimmed';
        } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
            styleClass = 'header-md-screen'
        }
        return styleClass;
    }
}