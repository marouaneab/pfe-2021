import {Component, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {animate, style, transition, trigger} from '@angular/animations';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';

interface MemberTree {
    title: string;
    children?: MemberTree[];
}

const MemberTreeData: MemberTree[] = [{
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
                {title: 'Proffesseurs Assistants'},
                {title: 'Proffesseurs Mobilité'},
                {title: 'Proffesseurs de l\'Enseignement Supérieur'},
                {title: 'Le Technicien'},
                {title: 'Etudiant **'},
            ]
        }
    ]
}];

interface FlatNodeInterface {
    expandable: boolean;
    title: string;
    level: number;
}

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('showHide', [
            transition(':enter', [
                style({opacity: 0}),
                animate('200ms', style({opacity: 1}))
            ]),
            transition(':leave', [
                animate('100ms', style({opacity: 0}))
            ])
        ])
    ]
})
export class DashboardComponent {
    value = '';
    treeControl = new FlatTreeControl<FlatNodeInterface>(node => node.level, node => node.expandable);
    treeFlattener = new MatTreeFlattener((node: MemberTree, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            title: node.title,
            level,
        };
    }, node => node.level, node => node.expandable, node => node.children);
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches),
        shareReplay()
    );
    private wWidth = '';
    private MemberTreeControl;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.dataSource.data = MemberTreeData;
    }
    hasChild = (_: number, node: FlatNodeInterface) => node.expandable;

    get hasNewNotifications() { return true; }
    get hasNewMails() { return true; }

    width(f) { return this.wWidth === '' ? (this.wWidth = '' + f.offsetWidth + 'px') : this.wWidth; }
}
