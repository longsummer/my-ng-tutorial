import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {
    @Input() menuItem: Array<string>;
    @Input() menuButton: string;

    constructor() {};

    ngOnInit() {}
}
