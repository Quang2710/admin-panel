import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}



@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
    imports: [RouterModule, CommonModule],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('350ms',
                    style({ opacity: 1 })
                )
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('350ms',
                    style({ opacity: 0 })
                )
            ])
        ]),
        trigger('rotate', [
            transition(':enter', [
                animate('1000ms',
                    keyframes([
                        style({ transform: 'rotate(0deg)', offset: '0' }),
                        style({ transform: 'rotate(2turn)', offset: '1' })
                    ])
                )
            ])
        ])
    ]
})

export class SideBarComponent implements OnInit {

    @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
    collapsed = false;
    screenWidth = 0;
    navData = navbarData;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = false;
            this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
        }
    }

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
    }

    toggleCollapse(): void {
        this.collapsed = !this.collapsed;
        this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }

    closeSidenav(): void {
        this.collapsed = false;
        this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
}