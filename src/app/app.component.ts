import { Component } from '@angular/core';
import { SidenavItem } from './core/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from './core/sidenav/sidenav.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(sidenavService: SidenavService) {
    const menu: SidenavItem[] = [];

    menu.push({
      name: 'Dashboard',
      routeOrFunction: '/',
      icon: 'dashboard',
      position: 1,
      pathMatchExact: true
    });

    menu.push({
      name: 'Inbox',
      routeOrFunction: '/apps/inbox',
      icon: 'mail',
      position: 2,
      badge: '22',
      badgeColor: '#7986CC'
    });

    menu.push({
      name: 'Chat',
      routeOrFunction: '/apps/chat',
      icon: 'chat',
      position: 3,
      badge: '14',
      badgeColor: '#E15C74'
    });

    menu.push({
      name: 'Calendar',
      routeOrFunction: '/apps/calendar',
      icon: 'date_range',
      position: 4
    });

    menu.push({
      name: 'Components',
      routeOrFunction: '/components',
      icon: 'layers',
      position: 5
    });

    const formElements = {
      name: 'Form Elements',
      routeOrFunction: '/forms/form-elements',
      position: 1
    };

    const formWizard = {
      name: 'Form Wizard',
      routeOrFunction: '/forms/form-wizard',
      position: 2
    };

    menu.push({
      name: 'Forms',
      icon: 'insert_comment',
      position: 6,
      subItems: [
        formElements,
        formWizard
      ]
    });

    const simpleTable = {
      name: 'Simple Table',
      routeOrFunction: '/tables/simple-table',
      position: 1
    };

    const allInOneTable = {
      name: 'All-In-One Table',
      routeOrFunction: '/tables/all-in-one-table',
      position: 2
    };

    menu.push({
      name: 'Tables',
      icon: 'format_line_spacing',
      position: 7,
      subItems: [
        simpleTable,
        allInOneTable
      ]
    });

    const googleMaps = {
      name: 'Google Maps',
      routeOrFunction: '/maps/google-maps'
    };

    menu.push({
      name: 'Maps',
      icon: 'map',
      position: 8,
      subItems: [
        googleMaps
      ],
      badge: '3',
      badgeColor: '#4CAF50'
    });

    menu.push({
      name: 'Material Icons',
      routeOrFunction: '/icons',
      icon: 'grade',
      position: 9
    });

    const login = {
      name: 'Login Page',
      routeOrFunction: '/login',
      position: 1
    };

    const register = {
      name: 'Register Page',
      routeOrFunction: '/register',
      position: 2
    };

    const forgotPassword = {
      name: 'Forgot Password',
      routeOrFunction: '/forgot-password',
      position: 3
    };

    menu.push({
      name: 'Custom Pages',
      icon: 'web',
      position: 10,
      subItems: [
        login,
        register,
        forgotPassword
      ]
    });

    menu.push({
      name: 'Drag & Drop',
      routeOrFunction: '/drag-and-drop',
      icon: 'mouse',
      position: 11
    });

    menu.push({
      name: 'WYSIWYG Editor',
      routeOrFunction: '/editor',
      icon: 'format_shapes',
      position: 12
    });

    const level5 = {
      name: 'Level 5',
      routeOrFunction: '/level1/level2/level3/level4/level5'
    };

    const level4 = {
      name: 'Level 4',
      subItems: [level5]
    };

    const level3 = {
      name: 'Level 3',
      subItems: [level4]
    };

    const level2 = {
      name: 'Level 2',
      subItems: [level3]
    };

    const level1 = {
      name: 'Level 1',
      subItems: [level2]
    };

    menu.push({
      name: 'Multi-Level Menu',
      icon: 'menu',
      position: 13,
      subItems: [level1]
    });

    // Send all created Items to SidenavService
    menu.forEach(item => sidenavService.addItem(item));
  }
}
