import {Component, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {animate, style, transition, trigger} from '@angular/animations';

interface Menu {
    title: string;
    children?: Menu[];
}

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('showHide', [
            transition(':enter', [style({opacity: 0}), animate('200ms', style({opacity: 1}))]),
            transition(':leave', [animate('100ms', style({opacity: 0}))])
        ])
    ]
})
export class DashboardComponent {
    value = '';
    MenuData: Menu[] = [
        {
            title: 'Membres',
            children: [
                {
                    title: 'Par la loi',
                    children: [
                        {title: 'Le directeur'},
                        {title: 'Les adjoints'},
                        {title: 'Chefs du departements'}
                    ]
                },
                {title: 'Designés'},
                {
                    title: 'Elus',
                    children: [
                        {title: 'Administrateur'},
                        {title: 'P'},
                        {title: 'PM'},
                        {title: 'PES'},
                        {title: 'Le Technicien'},
                        {title: 'Etudiant **'},
                    ]
                }
            ]
        },
        {title: 'Calendrier'},
        {
            title: 'Boite de messagerie',
            children: [
                {title: 'Envoyé(s)'},
                {title: 'Reçu(s)'}
            ]
        }
    ];

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches),
        shareReplay()
    );
    private wWidth = '';
    private MemberTreeControl;
    user;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.user = {
            name: 'Mounir'
        };
    }

    get hasNewNotifications() {
        return true;
    }

    get hasNewMails() {
        return true;
    }

    width(f) {
        return this.wWidth === '' ? (this.wWidth = '' + f.offsetWidth + 'px') : this.wWidth;
    }
}
