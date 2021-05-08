import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class MyLibraryService {
    constructor() { }
}
MyLibraryService.ɵfac = function MyLibraryService_Factory(t) { return new (t || MyLibraryService)(); };
MyLibraryService.ɵprov = ɵɵdefineInjectable({ token: MyLibraryService, factory: MyLibraryService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyLibraryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MyLibraryComponent {
    constructor() { }
    ngOnInit() {
        this.welcomeMessage = `Hello ${this.name || 'Stranger'}!`;
    }
}
MyLibraryComponent.ɵfac = function MyLibraryComponent_Factory(t) { return new (t || MyLibraryComponent)(); };
MyLibraryComponent.ɵcmp = ɵɵdefineComponent({ type: MyLibraryComponent, selectors: [["lib-my-library"]], inputs: { name: "name" }, decls: 3, vars: 1, consts: [[1, "container"], [1, "welcome-card"]], template: function MyLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.welcomeMessage);
    } }, styles: [".welcome-card[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n      .welcome-card[_ngcontent-%COMP%] {\n        background-color: #ccffcc;\n        padding: 10px;\n        margin: 10px;\n        border-radius: 10px;\n        font-size: 24px;\n      }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyLibraryComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-library',
                template: `
    <div class="container">
      <div class="welcome-card">{{ welcomeMessage }}</div>
    </div>
  `,
                styles: [
                    `
      .welcome-card {
        display: flex;
        justify-content: center;
      }
      .welcome-card {
        background-color: #ccffcc;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        font-size: 24px;
      }
    `,
                ],
            }]
    }], function () { return []; }, { name: [{
            type: Input
        }] }); })();

class MyLibraryModule {
}
MyLibraryModule.ɵfac = function MyLibraryModule_Factory(t) { return new (t || MyLibraryModule)(); };
MyLibraryModule.ɵmod = ɵɵdefineNgModule({ type: MyLibraryModule });
MyLibraryModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MyLibraryModule, { declarations: [MyLibraryComponent], exports: [MyLibraryComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MyLibraryComponent
                ],
                imports: [],
                exports: [
                    MyLibraryComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibraryComponent, MyLibraryModule, MyLibraryService };
//# sourceMappingURL=my-library.js.map
