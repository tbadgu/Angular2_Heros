"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n  <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
            styles: ["\n    h1 {\n      font-size: 1.2em;\n      color: #999;\n      margin-bottom: 0;\n    }\n    h2 {\n      font-size: 2em;\n      margin-top: 0;\n      padding-top: 0;\n    }\n    nav a {\n      padding: 5px 10px;\n      text-decoration: none;\n      margin-top: 10px;\n      display: inline-block;\n      background-color: #eee;\n      border-radius: 4px;\n    }\n    nav a:visited, a:link {\n      color: #607D8B;\n    }\n    nav a:hover {\n      color: #039be5;\n      background-color: #CFD8DC;\n    }\n    nav a.active {\n      color: #039be5;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map