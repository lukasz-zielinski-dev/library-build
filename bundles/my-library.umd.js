(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-library', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-library'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var MyLibraryService = /** @class */ (function () {
        function MyLibraryService() {
        }
        return MyLibraryService;
    }());
    MyLibraryService.ɵfac = function MyLibraryService_Factory(t) { return new (t || MyLibraryService)(); };
    MyLibraryService.ɵprov = i0.ɵɵdefineInjectable({ token: MyLibraryService, factory: MyLibraryService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibraryService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var MyLibraryComponent = /** @class */ (function () {
        function MyLibraryComponent() {
        }
        MyLibraryComponent.prototype.ngOnInit = function () {
            this.welcomeMessage = "Hello " + (this.name || 'Stranger') + "!";
        };
        return MyLibraryComponent;
    }());
    MyLibraryComponent.ɵfac = function MyLibraryComponent_Factory(t) { return new (t || MyLibraryComponent)(); };
    MyLibraryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MyLibraryComponent, selectors: [["lib-my-library"]], inputs: { name: "name" }, decls: 3, vars: 1, consts: [[1, "container"], [1, "welcome-card"]], template: function MyLibraryComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.welcomeMessage);
            }
        }, styles: [".welcome-card[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n      .welcome-card[_ngcontent-%COMP%] {\n        background-color: #ccffcc;\n        padding: 10px;\n        margin: 10px;\n        border-radius: 10px;\n        font-size: 24px;\n      }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibraryComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-library',
                        template: "\n    <div class=\"container\">\n      <div class=\"welcome-card\">{{ welcomeMessage }}</div>\n    </div>\n  ",
                        styles: [
                            "\n      .welcome-card {\n        display: flex;\n        justify-content: center;\n      }\n      .welcome-card {\n        background-color: #ccffcc;\n        padding: 10px;\n        margin: 10px;\n        border-radius: 10px;\n        font-size: 24px;\n      }\n    ",
                        ],
                    }]
            }], function () { return []; }, { name: [{
                    type: i0.Input
                }] });
    })();

    var MyLibraryModule = /** @class */ (function () {
        function MyLibraryModule() {
        }
        return MyLibraryModule;
    }());
    MyLibraryModule.ɵfac = function MyLibraryModule_Factory(t) { return new (t || MyLibraryModule)(); };
    MyLibraryModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyLibraryModule });
    MyLibraryModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyLibraryModule, { declarations: [MyLibraryComponent], exports: [MyLibraryComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibraryModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MyLibraryComponent
                        ],
                        imports: [],
                        exports: [
                            MyLibraryComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of my-library
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibraryComponent = MyLibraryComponent;
    exports.MyLibraryModule = MyLibraryModule;
    exports.MyLibraryService = MyLibraryService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-library.umd.js.map
