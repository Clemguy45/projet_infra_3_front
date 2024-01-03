export class User {
    public id : any;
    public firstName: string;
    public lastName: string;
    public username: string;
    public email: string;
    public lastLoginDateDisplay: any;
    public joinDate: any;
    public profileImageUrl: any;
    public active: boolean;
    public notLocked: boolean;
    public role: string;
    public authorities: [];

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.active = false;
        this.notLocked = false;
        this.role = '';
        this.authorities = [];
      }

}