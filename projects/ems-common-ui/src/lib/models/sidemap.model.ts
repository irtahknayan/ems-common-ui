import { NavigationItems } from './navitem.model';

export class SideMapMenu {
    public static navigationItems: NavigationItems[] = [
        { id: 1, title: 'Departments', permissionList: '', url: '/departments' },
        { id: 2, title: 'Employees', permissionList: '', url: '/employees' },
    ]
}