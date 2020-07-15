function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/help-page/help-page.component */
    "./src/app/pages/help-page/help-page.component.ts");
    /* harmony import */


    var _pages_demo_page_demo_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/demo-page/demo-page.component */
    "./src/app/pages/demo-page/demo-page.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }, {
      path: 'demo',
      component: _pages_demo_page_demo_page_component__WEBPACK_IMPORTED_MODULE_4__["DemoPageComponent"]
    }, {
      path: 'help',
      component: _pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_3__["HelpPageComponent"]
    }, // {
    //   path: 'login',
    //   loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    // },
    {
      path: 'tts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tts-tts-module */
        "tts-tts-module").then(__webpack_require__.bind(null,
        /*! ./tts/tts.module */
        "./src/app/tts/tts.module.ts")).then(function (m) {
          return m.TtsModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        initialNavigation: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            initialNavigation: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/shell/shell.component */
    "./src/app/shared/shell/shell.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _feedback_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback/feedback/feedback.component */
    "./src/app/feedback/feedback/feedback.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-shell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _feedback_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]],
      styles: ["app-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTYWZld2FyZVxcRG9jdW1lbnRzXFx0ZXN0c1xcdHRzLWFpL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1mZWVkYmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbiIsImFwcC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_snack_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/snack.service */
    "./src/app/services/snack.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./feedback/feedback.module */
    "./src/app/feedback/feedback.module.ts");
    /* harmony import */


    var _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/breakpoint.service */
    "./src/app/services/breakpoint.service.ts");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/dialog.service */
    "./src/app/services/dialog.service.ts");
    /* harmony import */


    var _pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/help-page/help-page.component */
    "./src/app/pages/help-page/help-page.component.ts");
    /* harmony import */


    var _pages_demo_page_demo_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/demo-page/demo-page.component */
    "./src/app/pages/demo-page/demo-page.component.ts"); // App Modules


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_snack_service__WEBPACK_IMPORTED_MODULE_11__["SnackService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"], _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_14__["BreakpointService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"], // AngularFireModule.initializeApp(environment.firebase),
      // AngularFirestoreModule,
      // AngularFireAuthModule,
      _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
      }), _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_13__["FeedbackModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"], _pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_16__["HelpPageComponent"], _pages_demo_page_demo_page_component__WEBPACK_IMPORTED_MODULE_17__["DemoPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"], _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_13__["FeedbackModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"], _pages_help_page_help_page_component__WEBPACK_IMPORTED_MODULE_16__["HelpPageComponent"], _pages_demo_page_demo_page_component__WEBPACK_IMPORTED_MODULE_17__["DemoPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"], // AngularFireModule.initializeApp(environment.firebase),
          // AngularFirestoreModule,
          // AngularFireAuthModule,
          _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
          }), _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_13__["FeedbackModule"]],
          providers: [_services_snack_service__WEBPACK_IMPORTED_MODULE_11__["SnackService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"], _services_breakpoint_service__WEBPACK_IMPORTED_MODULE_14__["BreakpointService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feedback/feedback-dialog/feedback-dialog.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/feedback/feedback-dialog/feedback-dialog.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FeedbackDialogComponent */

  /***/
  function srcAppFeedbackFeedbackDialogFeedbackDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackDialogComponent", function () {
      return FeedbackDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var FeedbackDialogComponent =
    /*#__PURE__*/
    function () {
      function FeedbackDialogComponent() {
        _classCallCheck(this, FeedbackDialogComponent);

        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          goal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          features: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          other: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(FeedbackDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "formGroupToFeedback",
        value: function formGroupToFeedback(formGroup) {
          return {
            goal: formGroup.get('goal').value || '',
            features: formGroup.get('features').value || '',
            other: formGroup.get('other').value || ''
          };
        }
      }]);

      return FeedbackDialogComponent;
    }();

    FeedbackDialogComponent.ɵfac = function FeedbackDialogComponent_Factory(t) {
      return new (t || FeedbackDialogComponent)();
    };

    FeedbackDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedbackDialogComponent,
      selectors: [["app-feedback-dialog"]],
      decls: 26,
      vars: 2,
      consts: [[1, "feedback-header"], [1, "close-button", 3, "mat-dialog-close"], ["mat-dialog-content", ""], [1, "survey", 3, "formGroup"], [1, "question-row"], ["for", "goal"], ["id", "goal", "matInput", "", "formControlName", "goal"], ["for", "features"], ["id", "features", "matInput", "", "formControlName", "features"], ["for", "other"], ["id", "other", "matInput", "", "formControlName", "other"], ["for", "mail"], ["id", "mail", "matInput", "", "formControlName", "mail"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 1, "submit-survey", 3, "mat-dialog-close"]],
      template: function FeedbackDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Feedback survey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " What is your main goal using this service ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "What features would you like to see introduced in the future ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Is there anything else you would like to add ? (question, remark, issues...)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "You can leave your mail if you want us to get back to you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.formGroupToFeedback(ctx.formGroup));
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".feedback-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.feedback-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.close-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0 10px 0 10px;\n}\n.survey[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.submit-survey[_ngcontent-%COMP%] {\n  background-color: forestgreen;\n  width: 100%;\n}\n.question-row[_ngcontent-%COMP%] {\n  margin: 0 auto 1rem auto;\n  padding: 0.2rem;\n}\n.question-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 0.4rem;\n}\n.question-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .question-row[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2stZGlhbG9nL0M6XFxVc2Vyc1xcU2FmZXdhcmVcXERvY3VtZW50c1xcdGVzdHNcXHR0cy1haS9zcmNcXGFwcFxcZmVlZGJhY2tcXGZlZWRiYWNrLWRpYWxvZ1xcZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay1kaWFsb2cvZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0ZGO0FESEU7RUFDRSxTQUFBO0FDS0o7QURFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtBQ0NGO0FERUE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEQUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2stZGlhbG9nL2ZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkYmFjay1oZWFkZXIge1xyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxufVxyXG5cclxuLnN1cnZleSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnN1Ym1pdC1zdXJ2ZXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tcm93IHtcclxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gIH1cclxuICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLmZlZWRiYWNrLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mZWVkYmFjay1oZWFkZXIgKiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbn1cblxuLnN1cnZleSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdWJtaXQtc3VydmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucXVlc3Rpb24tcm93IHtcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG4ucXVlc3Rpb24tcm93IGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufVxuLnF1ZXN0aW9uLXJvdyBpbnB1dCwgLnF1ZXN0aW9uLXJvdyB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feedback-dialog',
          templateUrl: './feedback-dialog.component.html',
          styleUrls: ['./feedback-dialog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feedback/feedback.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/feedback/feedback.module.ts ***!
    \*********************************************/

  /*! exports provided: FeedbackModule */

  /***/
  function srcAppFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackModule", function () {
      return FeedbackModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./feedback/feedback.component */
    "./src/app/feedback/feedback/feedback.component.ts");
    /* harmony import */


    var _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback-dialog/feedback-dialog.component */
    "./src/app/feedback/feedback-dialog/feedback-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FeedbackModule = function FeedbackModule() {
      _classCallCheck(this, FeedbackModule);
    };

    FeedbackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeedbackModule
    });
    FeedbackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeedbackModule_Factory(t) {
        return new (t || FeedbackModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeedbackModule, {
        declarations: [_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"], _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
        exports: [_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"], _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackDialogComponent"]],
          exports: [_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feedback/feedback.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/feedback/feedback.service.ts ***!
    \**********************************************/

  /*! exports provided: FeedbackService */

  /***/
  function srcAppFeedbackFeedbackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackService", function () {
      return FeedbackService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FeedbackService =
    /*#__PURE__*/
    function () {
      function FeedbackService(httpClient) {
        _classCallCheck(this, FeedbackService);

        this.httpClient = httpClient;
      }

      _createClass(FeedbackService, [{
        key: "sendFeedback",
        value: function sendFeedback(result) {
          var data = {
            files: {
              'goal.txt': {
                content: result.goal
              },
              'features.txt': {
                content: result.features
              },
              'other.txt': {
                content: result.other
              },
              'mail.txt': {
                content: result.mail
              }
            },
            description: 'feedback'
          };
          return this.httpClient.post('https://api.github.com/gists?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].feedbackToken, data);
        }
      }]);

      return FeedbackService;
    }();

    FeedbackService.ɵfac = function FeedbackService_Factory(t) {
      return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FeedbackService,
      factory: FeedbackService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feedback/feedback/feedback.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/feedback/feedback/feedback.component.ts ***!
    \*********************************************************/

  /*! exports provided: FeedbackComponent */

  /***/
  function srcAppFeedbackFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../feedback-dialog/feedback-dialog.component */
    "./src/app/feedback/feedback-dialog/feedback-dialog.component.ts");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/dialog.service */
    "./src/app/services/dialog.service.ts");
    /* harmony import */


    var _feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../feedback.service */
    "./src/app/feedback/feedback.service.ts");
    /* harmony import */


    var _services_snack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/snack.service */
    "./src/app/services/snack.service.ts");

    var FeedbackComponent =
    /*#__PURE__*/
    function () {
      function FeedbackComponent(dialogService, feedbackService, snackService) {
        _classCallCheck(this, FeedbackComponent);

        this.dialogService = dialogService;
        this.feedbackService = feedbackService;
        this.snackService = snackService;
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "feedbackClicked",
        value: function feedbackClicked() {
          var _this = this;

          this.dialogService.openDialog(_feedback_dialog_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackDialogComponent"], {}).subscribe(function (result) {
            if (result) {
              _this.feedbackService.sendFeedback(result).subscribe(function () {
                _this.snackService.displayMessage('Thank you for your feedback !');
              }, function (error) {
                console.log(error);

                _this.snackService.displayMessage('Sorry, something went wrong sending your feedback.');
              });
            }
          });
        }
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) {
      return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_snack_service__WEBPACK_IMPORTED_MODULE_4__["SnackService"]));
    };

    FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedbackComponent,
      selectors: [["app-feedback"]],
      decls: 2,
      vars: 0,
      consts: [[3, "click"]],
      template: function FeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_0_listener($event) {
            return ctx.feedbackClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["button[_ngcontent-%COMP%] {\n  height: 30px;\n  border: solid 2px #CCCCCC;\n  background: #333;\n  width: 100px;\n  color: white;\n  text-align: center;\n  position: fixed;\n  right: 40px;\n  bottom: -5px;\n  font-family: \"Roboto\", helvetica, arial, sans-serif;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2svQzpcXFVzZXJzXFxTYWZld2FyZVxcRG9jdW1lbnRzXFx0ZXN0c1xcdHRzLWFpL3NyY1xcYXBwXFxmZWVkYmFja1xcZmVlZGJhY2tcXGZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDRCx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUlBLFlBQUE7RUFLQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0EsWUFBQTtBQ05EIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGhlaWdodDozMHB4O1xyXG4gYm9yZGVyOnNvbGlkIDJweCAjQ0NDQ0NDO1xyXG4gYmFja2dyb3VuZDojMzMzO1xyXG4gd2lkdGg6MTAwcHg7XHJcbiAvL2xpbmUtaGVpZ2h0OjMycHg7XHJcbiAvL2ZvbnQtd2VpZ2h0OjYwMDtcclxuIC8vZm9udC1zaXplOjE0cHg7XHJcbiBjb2xvcjp3aGl0ZTtcclxuIC8vLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7XHJcbiAvL3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtcclxuIC8vIC1tcy10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7XHJcbiAvLyAtbW96LXRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtcclxuIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gcG9zaXRpb246Zml4ZWQ7XHJcbiByaWdodDo0MHB4O1xyXG4gYm90dG9tOi01cHg7XHJcbiBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuIHotaW5kZXg6OTk5O1xyXG59XHJcbiIsImJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI0NDQ0NDQztcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogNDBweDtcbiAgYm90dG9tOiAtNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgei1pbmRleDogOTk5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feedback',
          templateUrl: './feedback.component.html',
          styleUrls: ['./feedback.component.scss']
        }]
      }], function () {
        return [{
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
        }, {
          type: _feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"]
        }, {
          type: _services_snack_service__WEBPACK_IMPORTED_MODULE_4__["SnackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/demo-page/demo-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/demo-page/demo-page.component.ts ***!
    \********************************************************/

  /*! exports provided: DemoPageComponent */

  /***/
  function srcAppPagesDemoPageDemoPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoPageComponent", function () {
      return DemoPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DemoPageComponent =
    /*#__PURE__*/
    function () {
      function DemoPageComponent() {
        _classCallCheck(this, DemoPageComponent);
      }

      _createClass(DemoPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DemoPageComponent;
    }();

    DemoPageComponent.ɵfac = function DemoPageComponent_Factory(t) {
      return new (t || DemoPageComponent)();
    };

    DemoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemoPageComponent,
      selectors: [["app-demo-page"]],
      decls: 3,
      vars: 0,
      consts: [[1, "simple-article"], [1, "simple-section"]],
      template: function DemoPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Coming soon ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW8tcGFnZS9kZW1vLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-demo-page',
          templateUrl: './demo-page.component.html',
          styleUrls: ['./demo-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/help-page/help-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/help-page/help-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HelpPageComponent */

  /***/
  function srcAppPagesHelpPageHelpPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPageComponent", function () {
      return HelpPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HelpPageComponent =
    /*#__PURE__*/
    function () {
      function HelpPageComponent() {
        _classCallCheck(this, HelpPageComponent);
      }

      _createClass(HelpPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpPageComponent;
    }();

    HelpPageComponent.ɵfac = function HelpPageComponent_Factory(t) {
      return new (t || HelpPageComponent)();
    };

    HelpPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpPageComponent,
      selectors: [["app-help-page"]],
      decls: 50,
      vars: 1,
      consts: [[1, "simple-article"], [1, "simple-section"], ["href", "https://console.cloud.google.com/cloud-resource-manager"], ["href", "https://console.cloud.google.com/billing/linkedaccount"], ["href", "https://cloud.google.com/text-to-speech/pricing"], ["href", "https://console.cloud.google.com/flows/enableapi?apiid=texttospeech.googleapis.com"], ["href", "https://console.cloud.google.com/apis/credentials"], [3, "routerLink"]],
      template: function HelpPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How to get an API key ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create or select a Google Cloud project from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enable billing for the project from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". (Note: even with billing enabled, you won't be charged unless you go over the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "free monthly quota");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enable Text-to-Speech ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Go to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Credentials page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", click on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create credentials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ", then ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "API key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Copy and paste the API Key into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Text-to-Speech Interface");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " and click save.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " (Note: the API key is saved in your browser, we do not save it on our end) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Pricing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This website is currently free. You won't be charged by Google Cloud's Text-to-Speech as long as you don't go over the free quota. Google's service offers 1 million characters per month free of charge (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "see details here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ") After that, the pricing is $16.00USD per 1 million characters for WaveNet TTS, and $4.00US for non-WaveNet TTS. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Privacy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Nothing is stored on our end, except for the feedback you might send us. Everything else (API key, generated sounds, text) is stored within your device's browser. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/tts");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAtcGFnZS9oZWxwLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help-page',
          templateUrl: './help-page.component.html',
          styleUrls: ['./help-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-page/home-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePageComponent = function HomePageComponent() {
      _classCallCheck(this, HomePageComponent);
    };

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)();
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 5,
      vars: 0,
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Text2Speech AI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Access state-of-the-art Text-To-Speech synthesis through an easy-to-use interface ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcU2FmZXdhcmVcXERvY3VtZW50c1xcdGVzdHNcXHR0cy1haS9zcmNcXGFwcFxccGFnZXNcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsImhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(af) {
        var _this2 = this;

        _classCallCheck(this, AuthService);

        this.af = af;
        this._loaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); // Initial load

        this.af.user.subscribe(function (user) {
          if (user) {
            _this2.setUser(user);
          }

          _this2._loaded.next(true);
        });
      }

      _createClass(AuthService, [{
        key: "waitForLoad",
        value: function waitForLoad() {
          return this._loaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (val) {
            return val;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise();
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          this.user = user;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/breakpoint.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/breakpoint.service.ts ***!
    \************************************************/

  /*! exports provided: BreakpointService */

  /***/
  function srcAppServicesBreakpointServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakpointService", function () {
      return BreakpointService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");

    var BreakpointService =
    /*#__PURE__*/
    function () {
      function BreakpointService(breakpointObserver) {
        _classCallCheck(this, BreakpointService);

        this.breakpointObserver = breakpointObserver;
        this.isExtraSmall = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall);
      }

      _createClass(BreakpointService, [{
        key: "isMobile",
        get: function get() {
          return this.breakpointObserver.isMatched('(max-width: 767px)');
        }
      }]);

      return BreakpointService;
    }();

    BreakpointService.ɵfac = function BreakpointService_Factory(t) {
      return new (t || BreakpointService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
    };

    BreakpointService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BreakpointService,
      factory: BreakpointService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/dialog.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/dialog.service.ts ***!
    \********************************************/

  /*! exports provided: DialogService */

  /***/
  function srcAppServicesDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _breakpoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./breakpoint.service */
    "./src/app/services/breakpoint.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var DialogService =
    /*#__PURE__*/
    function () {
      function DialogService(breakpointService, dialog) {
        _classCallCheck(this, DialogService);

        this.breakpointService = breakpointService;
        this.dialog = dialog;
        this.isOpened = false;
      }

      _createClass(DialogService, [{
        key: "openDialog",
        value: function openDialog(component, config) {
          var _this3 = this;

          if (this.isOpened) {
            return;
          }

          this.isOpened = true;
          var dialogConfig = {
            width: 'calc(100% - 50px)',
            maxWidth: '100vw',
            panelClass: 'no-border-radius'
          };

          if (config) {
            dialogConfig = Object.assign(Object.assign({}, dialogConfig), config);
          }

          var d = this.dialog.open(component, dialogConfig);
          var smallDialogSubscription = this.breakpointService.isExtraSmall.subscribe(function (size) {
            if (size.matches) {
              d.updateSize('100vw', '100vh');
            } else {
              d.updateSize('calc(100% - 50px)', '');
            }
          });
          var afterClosed = d.afterClosed();
          afterClosed.subscribe(function () {
            _this3.isOpened = false;
            smallDialogSubscription.unsubscribe();
          });
          return afterClosed;
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_breakpoint_service__WEBPACK_IMPORTED_MODULE_1__["BreakpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _breakpoint_service__WEBPACK_IMPORTED_MODULE_1__["BreakpointService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/snack.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/snack.service.ts ***!
    \*******************************************/

  /*! exports provided: SnackService */

  /***/
  function srcAppServicesSnackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackService", function () {
      return SnackService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SnackService =
    /*#__PURE__*/
    function () {
      function SnackService(snackBar, router) {
        _classCallCheck(this, SnackService);

        this.snackBar = snackBar;
        this.router = router;
      }

      _createClass(SnackService, [{
        key: "authError",
        value: function authError() {
          var _this4 = this;

          this.snackBar.open('You must be logged in!', 'OK', {
            duration: 5000
          });
          return this.snackBar._openedSnackBarRef.onAction().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_) {
            return _this4.router.navigate(['/login']);
          })).subscribe();
        }
      }, {
        key: "displayError",
        value: function displayError(message) {
          this.snackBar.open(message, 'OK', {
            panelClass: 'error-bar',
            duration: 5000
          });
        }
      }, {
        key: "displayMessage",
        value: function displayMessage(message, options) {
          this.snackBar.open(message, 'OK', {
            duration: options && options.duration || 5000
          });
        }
      }]);

      return SnackService;
    }();

    SnackService.ɵfac = function SnackService_Factory(t) {
      return new (t || SnackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SnackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SnackService,
      factory: SnackService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/delete-button/delete-button.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/delete-button/delete-button.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DeleteButtonComponent */

  /***/
  function srcAppSharedDeleteButtonDeleteButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteButtonComponent", function () {
      return DeleteButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DeleteButtonComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DeleteButtonComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteButtonComponent_button_4_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DeleteButtonComponent =
    /*#__PURE__*/
    function () {
      function DeleteButtonComponent() {
        _classCallCheck(this, DeleteButtonComponent);

        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DeleteButtonComponent, [{
        key: "cancel",
        value: function cancel() {
          this.canDelete = false;
        }
      }, {
        key: "prepareForDelete",
        value: function prepareForDelete() {
          this.canDelete = true;
        }
      }, {
        key: "deleteBoard",
        value: function deleteBoard() {
          this.delete.emit(true);
          this.canDelete = false;
        }
      }]);

      return DeleteButtonComponent;
    }();

    DeleteButtonComponent.ɵfac = function DeleteButtonComponent_Factory(t) {
      return new (t || DeleteButtonComponent)();
    };

    DeleteButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteButtonComponent,
      selectors: [["app-delete-button"]],
      outputs: {
        delete: "delete"
      },
      decls: 5,
      vars: 2,
      consts: [["mat-button", "", "color", "warn", 3, "click"], [4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]],
      template: function DeleteButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteButtonComponent_Template_button_click_0_listener($event) {
            return ctx.canDelete ? ctx.deleteBoard() : ctx.prepareForDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteButtonComponent_span_3_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeleteButtonComponent_button_4_Template, 2, 0, "button", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".confirm[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RlbGV0ZS1idXR0b24vQzpcXFVzZXJzXFxTYWZld2FyZVxcRG9jdW1lbnRzXFx0ZXN0c1xcdHRzLWFpL3NyY1xcYXBwXFxzaGFyZWRcXGRlbGV0ZS1idXR0b25cXGRlbGV0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9kZWxldGUtYnV0dG9uL2RlbGV0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxnQkFBQTtBQ0VYIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RlbGV0ZS1idXR0b24vZGVsZXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtIHsgbWluLXdpZHRoOiAyMDBweDsgfSIsIi5jb25maXJtIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delete-button',
          templateUrl: './delete-button.component.html',
          styleUrls: ['./delete-button.component.scss']
        }]
      }], null, {
        delete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shell_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shell/shell.component */
    "./src/app/shared/shell/shell.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./delete-button/delete-button.component */
    "./src/app/shared/delete-button/delete-button.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var components = [_shell_shell_component__WEBPACK_IMPORTED_MODULE_4__["ShellComponent"], _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__["DeleteButtonComponent"]];
    var modules = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[].concat(modules), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_4__["ShellComponent"], _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__["DeleteButtonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]],
        exports: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_4__["ShellComponent"], _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__["DeleteButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [].concat(components),
          imports: [].concat(modules),
          exports: [].concat(components, modules)
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shell/shell.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/shell/shell.component.ts ***!
    \*************************************************/

  /*! exports provided: ShellComponent */

  /***/
  function srcAppSharedShellShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellComponent", function () {
      return ShellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ShellComponent_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellComponent_button_18_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShellComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDD0A Demo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDCC3 Text-to-Speech Interface");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2754 Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*"];

    var ShellComponent = function ShellComponent(breakpointObserver) {
      _classCallCheck(this, ShellComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    };

    ShellComponent.ɵfac = function ShellComponent_Factory(t) {
      return new (t || ShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
    };

    ShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShellComponent,
      selectors: [["app-shell"]],
      ngContentSelectors: _c0,
      decls: 26,
      vars: 13,
      consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "routerLink", "/", 3, "click"], ["mat-list-item", "", "routerLink", "/demo", 3, "click"], ["mat-list-item", "", "routerLink", "/help", 3, "click"], ["mat-list-item", "", "routerLink", "/tts", 3, "click"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/", 1, "logo"], [1, "fill-space"], [4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["mat-button", "", "routerLink", "/demo"], ["mat-button", "", "routerLink", "/tts"], ["mat-button", "", "routerLink", "/help"]],
      template: function ShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellComponent_Template_a_click_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellComponent_Template_a_click_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellComponent_Template_a_click_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellComponent_Template_a_click_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TTS interface");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ShellComponent_button_18_Template, 3, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\uD83D\uDCAC Text2Speech AI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ShellComponent_div_23_Template, 7, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.isHandset$) ? "over" : "side")("opened", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.isHandset$) ? "dialog" : "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, ctx.isHandset$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 11, ctx.isHandset$));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.logo[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  cursor: pointer;\n  outline: none;\n}\n\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  font-family: sofia-pro;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.fill-space[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\ni[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 1.25em;\n  margin-right: 16px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 1.75em;\n  border-radius: 50%;\n  margin: 0 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoZWxsL0M6XFxVc2Vyc1xcU2FmZXdhcmVcXERvY3VtZW50c1xcdGVzdHNcXHR0cy1haS9zcmNcXGFwcFxcc2hhcmVkXFxzaGVsbFxcc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGVsbC9zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSwrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGVsbC9zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItc2lkZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzb2ZpYS1wcm87XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZmlsbC1zcGFjZSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdpZHRoOiAxLjc1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMCAxMHB4IDVweDtcclxufSIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1mYW1pbHk6IHNvZmlhLXBybztcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZmlsbC1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5pIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDEuNzVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgMTBweCA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shell',
          templateUrl: './shell.component.html',
          styleUrls: ['./shell.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/email-login/email-login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/user/email-login/email-login.component.ts ***!
    \***********************************************************/

  /*! exports provided: EmailLoginComponent */

  /***/
  function srcAppUserEmailLoginEmailLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailLoginComponent", function () {
      return EmailLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function EmailLoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailLoginComponent_div_1_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r34.changeType("login");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Returning user? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EmailLoginComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailLoginComponent_div_2_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r36.changeType("signup");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " New user? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EmailLoginComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reset Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailLoginComponent_div_3_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r38.changeType("login");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EmailLoginComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You must enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EmailLoginComponent_mat_form_field_8_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EmailLoginComponent_mat_form_field_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmailLoginComponent_mat_form_field_8_mat_error_2_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r29.email.valid && "accent");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.password.invalid && ctx_r29.password.dirty);
      }
    }

    function EmailLoginComponent_mat_form_field_9_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password does not match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EmailLoginComponent_mat_form_field_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmailLoginComponent_mat_form_field_9_mat_error_2_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r30.passwordDoesMatch ? "accent" : "warn");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.passwordConfirm.dirty && !ctx_r30.passwordDoesMatch);
      }
    }

    function EmailLoginComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Send Reset Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r31.loading);
      }
    }

    function EmailLoginComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r32.form.invalid || !ctx_r32.passwordDoesMatch || ctx_r32.loading);
      }
    }

    function EmailLoginComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmailLoginComponent_button_14_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r42.changeType("reset");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Forgot password? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var EmailLoginComponent =
    /*#__PURE__*/
    function () {
      function EmailLoginComponent(afAuth, fb) {
        _classCallCheck(this, EmailLoginComponent);

        this.afAuth = afAuth;
        this.fb = fb;
        this.type = 'signup';
        this.loading = false;
      }

      _createClass(EmailLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passwordConfirm: ['', []]
          });
        }
      }, {
        key: "changeType",
        value: function changeType(val) {
          this.type = val;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var email, password;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loading = true;
                    email = this.email.value;
                    password = this.password.value;
                    _context.prev = 3;

                    if (!this.isLogin) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 7;
                    return this.afAuth.auth.signInWithEmailAndPassword(email, password);

                  case 7:
                    if (!this.isSignup) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 10;
                    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

                  case 10:
                    if (!this.isPasswordReset) {
                      _context.next = 14;
                      break;
                    }

                    _context.next = 13;
                    return this.afAuth.auth.sendPasswordResetEmail(email);

                  case 13:
                    this.serverMessage = 'Check your email';

                  case 14:
                    _context.next = 19;
                    break;

                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context["catch"](3);
                    this.serverMessage = _context.t0;

                  case 19:
                    this.loading = false;

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[3, 16]]);
          }));
        }
      }, {
        key: "isLogin",
        get: function get() {
          return this.type === 'login';
        }
      }, {
        key: "isSignup",
        get: function get() {
          return this.type === 'signup';
        }
      }, {
        key: "isPasswordReset",
        get: function get() {
          return this.type === 'reset';
        }
      }, {
        key: "email",
        get: function get() {
          return this.form.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.form.get('password');
        }
      }, {
        key: "passwordConfirm",
        get: function get() {
          return this.form.get('passwordConfirm');
        }
      }, {
        key: "passwordDoesMatch",
        get: function get() {
          if (this.type !== 'signup') {
            return true;
          } else {
            return this.password.value === this.passwordConfirm.value;
          }
        }
      }]);

      return EmailLoginComponent;
    }();

    EmailLoginComponent.ɵfac = function EmailLoginComponent_Factory(t) {
      return new (t || EmailLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    EmailLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailLoginComponent,
      selectors: [["app-email-login"]],
      decls: 15,
      vars: 12,
      consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [3, "color"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "Email", "autocomplete", "off"], [3, "color", 4, "ngIf"], [1, "server-error"], ["mat-stroked-button", "", "type", "submit", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 3, "click"], ["size", "small", "mat-stroked-button", "", 3, "click"], ["size", "small", "mat-button", "", 3, "click"], ["matInput", "", "formControlName", "password", "type", "password", "placeholder", "Password", "autocomplete", "off"], ["matInput", "", "formControlName", "passwordConfirm", "type", "password", "placeholder", "Confirm password", "autocomplete", "off"], ["mat-stroked-button", "", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"], ["mat-button", "", 3, "click"]],
      template: function EmailLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmailLoginComponent_div_1_Template, 5, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmailLoginComponent_div_2_Template, 5, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmailLoginComponent_div_3_Template, 5, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmailLoginComponent_Template_form_ngSubmit_4_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EmailLoginComponent_mat_error_7_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EmailLoginComponent_mat_form_field_8_Template, 3, 2, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EmailLoginComponent_mat_form_field_9_Template, 3, 2, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EmailLoginComponent_button_12_Template, 2, 1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EmailLoginComponent_button_13_Template, 2, 1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EmailLoginComponent_button_14_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSignup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPasswordReset);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.email.valid && "accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPasswordReset);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSignup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.serverMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPasswordReset);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPasswordReset);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin && !ctx.isPasswordReset);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: 0 auto;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.server-error[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 2em;\n}\n\ninput[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.3em 0;\n}\n\ninput[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]   input.mat-input-element[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ndiv.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lbWFpbC1sb2dpbi9DOlxcVXNlcnNcXFNhZmV3YXJlXFxEb2N1bWVudHNcXHRlc3RzXFx0dHMtYWkvc3JjXFxhcHBcXHVzZXJcXGVtYWlsLWxvZ2luXFxlbWFpbC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9lbWFpbC1sb2dpbi9lbWFpbC1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ00sV0FBQTtFQUNBLG1CQUFBO0FDQ047O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FEQ0k7RUFDRSxnQkFBQTtBQ0NOOztBREFNO0VBQ0UsbUJBQUE7QUNFUjs7QURFRTtFQUNFLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VtYWlsLWxvZ2luL2VtYWlsLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnNlcnZlci1lcnJvciB7XHJcbiAgICBtYXJnaW46IDhweCAwOztcclxufVxyXG5cclxuXHJcbmlucHV0IHsgICAgXHJcbiAgICBoZWlnaHQ6IDJlbTsgICAgICAgICAgICAgIFxyXG4gICAgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgcGFkZGluZzogLjNlbSAwO1xyXG4gICAgICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjE1ZW07XHJcbiAgfSIsIm1hdC1jYXJkIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uc2VydmVyLWVycm9yIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDJlbTtcbn1cbmlucHV0IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG59XG5pbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXggaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5kaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjE1ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-email-login',
          templateUrl: './email-login.component.html',
          styleUrls: ['./email-login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/google-signin.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/google-signin.directive.ts ***!
    \*************************************************/

  /*! exports provided: GoogleSigninDirective */

  /***/
  function srcAppUserGoogleSigninDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleSigninDirective", function () {
      return GoogleSigninDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");

    var GoogleSigninDirective =
    /*#__PURE__*/
    function () {
      function GoogleSigninDirective(afAuth) {
        _classCallCheck(this, GoogleSigninDirective);

        this.afAuth = afAuth;
      }

      _createClass(GoogleSigninDirective, [{
        key: "onclick",
        value: function onclick() {
          this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
        }
      }]);

      return GoogleSigninDirective;
    }();

    GoogleSigninDirective.ɵfac = function GoogleSigninDirective_Factory(t) {
      return new (t || GoogleSigninDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
    };

    GoogleSigninDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GoogleSigninDirective,
      selectors: [["", "appGoogleSignin", ""]],
      hostBindings: function GoogleSigninDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoogleSigninDirective_click_HostBindingHandler($event) {
            return ctx.onclick();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleSigninDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appGoogleSignin]'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }];
      }, {
        onclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/login-page/login-page.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/login-page/login-page.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppUserLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _google_signin_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../google-signin.directive */
    "./src/app/user/google-signin.directive.ts");
    /* harmony import */


    var _email_login_email_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../email-login/email-login.component */
    "./src/app/user/email-login/email-login.component.ts");

    function LoginPageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login with Google ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "OR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-email-login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginPageComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logged in as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_div_3_Template_button_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.afAuth.auth.signOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r22 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r22.email);
      }
    }

    var LoginPageComponent = function LoginPageComponent(afAuth) {
      _classCallCheck(this, LoginPageComponent);

      this.afAuth = afAuth;
    };

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 5,
      vars: 6,
      consts: [[4, "ngIf"], ["class", "logout", 4, "ngIf"], ["mat-raised-button", "", "appGoogleSignin", ""], ["src", "/assets/google-logo.svg"], [1, "logout"], ["mat-stroked-button", "", 3, "click"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_div_1_Template, 9, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginPageComponent_div_3_Template, 7, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.afAuth.authState));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.afAuth.authState));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _google_signin_directive__WEBPACK_IMPORTED_MODULE_4__["GoogleSigninDirective"], _email_login_email_login_component__WEBPACK_IMPORTED_MODULE_5__["EmailLoginComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.25em;\n}\n\n[_nghost-%COMP%] {\n  text-align: center;\n}\n\n.logout[_ngcontent-%COMP%] {\n  padding-top: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi1wYWdlL0M6XFxVc2Vyc1xcU2FmZXdhcmVcXERvY3VtZW50c1xcdGVzdHNcXHR0cy1haS9zcmNcXGFwcFxcdXNlclxcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FDQVI7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEuMjVlbTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbjpob3N0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ291dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xyXG59IiwiYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAxLjI1ZW07XG59XG5cbjpob3N0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nb3V0IHtcbiAgcGFkZGluZy10b3A6IDVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user/login-page/login-page.component */
    "./src/app/user/login-page/login-page.component.ts");

    var routes = [{
      path: '',
      component: _user_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
    UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserRoutingModule_Factory(t) {
        return new (t || UserRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _google_signin_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./google-signin.directive */
    "./src/app/user/google-signin.directive.ts");
    /* harmony import */


    var _email_login_email_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./email-login/email-login.component */
    "./src/app/user/email-login/email-login.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/user/login-page/login-page.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_google_signin_directive__WEBPACK_IMPORTED_MODULE_3__["GoogleSigninDirective"], _email_login_email_login_component__WEBPACK_IMPORTED_MODULE_4__["EmailLoginComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
        exports: [_google_signin_directive__WEBPACK_IMPORTED_MODULE_3__["GoogleSigninDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_google_signin_directive__WEBPACK_IMPORTED_MODULE_3__["GoogleSigninDirective"], _email_login_email_login_component__WEBPACK_IMPORTED_MODULE_4__["EmailLoginComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]],
          exports: [_google_signin_directive__WEBPACK_IMPORTED_MODULE_3__["GoogleSigninDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      feedbackToken: '123456',
      firebase: {}
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Safeware\Documents\tests\tts-ai\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map