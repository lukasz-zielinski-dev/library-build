import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class MyLibraryComponent {
    constructor() { }
    ngOnInit() {
        this.welcomeMessage = `Hello ${this.name || 'Stranger'}!`;
    }
}
MyLibraryComponent.ɵfac = function MyLibraryComponent_Factory(t) { return new (t || MyLibraryComponent)(); };
MyLibraryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MyLibraryComponent, selectors: [["lib-my-library"]], inputs: { name: "name" }, decls: 3, vars: 1, consts: [[1, "container"], [1, "welcome-card"]], template: function MyLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.welcomeMessage);
    } }, styles: [".container[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n      .welcome-card[_ngcontent-%COMP%] {\n        background-color: #ccffcc;\n        padding: 10px;\n        margin: 10px;\n        border-radius: 10px;\n        font-size: 24px;\n      }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibraryComponent, [{
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
      .container {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWJyYXJ5L3NyYy9saWIvbXktbGlicmFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBeUJ6RCxNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLGdCQUFlLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsR0FBRyxDQUFDO0lBQzVELENBQUM7O29GQVJVLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FBcEIzQiw4QkFBdUI7UUFDckIsOEJBQTBCO1FBQUEsWUFBb0I7UUFBQSxpQkFBTTtRQUN0RCxpQkFBTTs7UUFEc0IsZUFBb0I7UUFBcEIsd0NBQW9COzt1RkFtQnZDLGtCQUFrQjtjQXZCOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRTtvQkFDTjs7Ozs7Ozs7Ozs7O0tBWUM7aUJBQ0Y7YUFDRjtzQ0FFVSxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW15LWxpYnJhcnknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLWNhcmRcIj57eyB3ZWxjb21lTWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAud2VsY29tZS1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZjYztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICB3ZWxjb21lTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndlbGNvbWVNZXNzYWdlID0gYEhlbGxvICR7dGhpcy5uYW1lIHx8ICdTdHJhbmdlcid9IWA7XG4gIH1cbn1cbiJdfQ==