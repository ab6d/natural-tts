function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tts-tts-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
    \**********************************************************************************/

  /*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ProgressSpinnerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
      return MatProgressSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
      return MatProgressSpinnerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
      return MatSpinner;
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


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/progress-spinner.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base reference size of the spinner.
     * \@docs-private
     * @type {?}
     */


    function MatProgressSpinner__svg_circle_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r86.diameter)("stroke-dashoffset", ctx_r86._strokeDashOffset, "px")("stroke-dasharray", ctx_r86._strokeCircumference, "px")("stroke-width", ctx_r86._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r86._circleRadius);
      }
    }

    function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r87._strokeDashOffset, "px")("stroke-dasharray", ctx_r87._strokeCircumference, "px")("stroke-width", ctx_r87._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r87._circleRadius);
      }
    }

    function MatSpinner__svg_circle_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r88.diameter)("stroke-dashoffset", ctx_r88._strokeDashOffset, "px")("stroke-dasharray", ctx_r88._strokeCircumference, "px")("stroke-width", ctx_r88._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r88._circleRadius);
      }
    }

    function MatSpinner__svg_circle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r89._strokeDashOffset, "px")("stroke-dasharray", ctx_r89._strokeCircumference, "px")("stroke-width", ctx_r89._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r89._circleRadius);
      }
    }

    var BASE_SIZE = 100;
    /**
     * Base reference stroke width of the spinner.
     * \@docs-private
     * @type {?}
     */

    var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

    /**
     * \@docs-private
     */

    var MatProgressSpinnerBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressSpinnerBase(_elementRef) {
      _classCallCheck(this, MatProgressSpinnerBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
    /**
     * Default `mat-progress-spinner` options that can be overridden.
     * @record
     */


    function MatProgressSpinnerDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-progress-spinner`.
     * @type {?}
     */


    var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
      providedIn: 'root',
      factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
      return {
        diameter: BASE_SIZE
      };
    } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
    // for example because the animation duration is 4 seconds, .1% accounts to 4ms
    // which are enough to see the flicker described in
    // https://github.com/angular/components/issues/8984

    /** @type {?} */


    var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
    /**
     * `<mat-progress-spinner>` component.
     */

    var MatProgressSpinner =
    /*#__PURE__*/
    function (_MatProgressSpinnerMi) {
      _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

      /**
       * @param {?} _elementRef
       * @param {?} platform
       * @param {?} _document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
        var _this;

        _classCallCheck(this, MatProgressSpinner);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MatProgressSpinner).call(this, _elementRef));
        _this._elementRef = _elementRef;
        _this._document = _document;
        _this._diameter = BASE_SIZE;
        _this._value = 0;
        _this._fallbackAnimation = false;
        /**
         * Mode of the progress circle
         */

        _this.mode = 'determinate';
        /** @type {?} */

        var trackedDiameters = MatProgressSpinner._diameters; // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.

        if (!trackedDiameters.has(_document.head)) {
          trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }

        _this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        _this._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

        if (defaults) {
          if (defaults.diameter) {
            _this.diameter = defaults.diameter;
          }

          if (defaults.strokeWidth) {
            _this.strokeWidth = defaults.strokeWidth;
          }
        }

        return _this;
      }
      /**
       * The diameter of the progress spinner (will set width and height of svg).
       * @return {?}
       */


      _createClass(MatProgressSpinner, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
          // Angular seems to create the element outside the shadow root and then moves it inside, if the
          // node is inside an `ngIf` and a ShadowDom-encapsulated component.

          this._styleRoot = _getShadowRoot(element, this._document) || this._document.head;

          this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
          // reliably so we fall back to a non-spec animation.

          /** @type {?} */


          var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
          element.classList.add(animationClass);
        }
        /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */

      }, {
        key: "_attachStyleNode",

        /**
         * Dynamically generates a style tag containing the correct animation for this diameter.
         * @private
         * @return {?}
         */
        value: function _attachStyleNode() {
          /** @type {?} */
          var styleRoot = this._styleRoot;
          /** @type {?} */

          var currentDiameter = this._diameter;
          /** @type {?} */

          var diameters = MatProgressSpinner._diameters;
          /** @type {?} */

          var diametersForElement = diameters.get(styleRoot);

          if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
            /** @type {?} */
            var styleTag = this._document.createElement('style');

            styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
            styleTag.textContent = this._getAnimationText();
            styleRoot.appendChild(styleTag);

            if (!diametersForElement) {
              diametersForElement = new Set();
              diameters.set(styleRoot, diametersForElement);
            }

            diametersForElement.add(currentDiameter);
          }
        }
        /**
         * Generates animation styles adjusted for the spinner's diameter.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAnimationText",
        value: function _getAnimationText() {
          return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
          .replace(/START_VALUE/g, "".concat(0.95 * this._strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * this._strokeCircumference)).replace(/DIAMETER/g, "".concat(this.diameter));
        }
      }, {
        key: "diameter",
        get: function get() {
          return this._diameter;
        }
        /**
         * @param {?} size
         * @return {?}
         */
        ,
        set: function set(size) {
          this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

          if (!this._fallbackAnimation && this._styleRoot) {
            this._attachStyleNode();
          }
        }
        /**
         * Stroke width of the progress spinner.
         * @return {?}
         */

      }, {
        key: "strokeWidth",
        get: function get() {
          return this._strokeWidth || this.diameter / 10;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
        }
        /**
         * Value of the progress circle.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.mode === 'determinate' ? this._value : 0;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
        }
      }, {
        key: "_circleRadius",
        get: function get() {
          return (this.diameter - BASE_STROKE_WIDTH) / 2;
        }
        /**
         * The view box of the spinner's svg element.
         * @return {?}
         */

      }, {
        key: "_viewBox",
        get: function get() {
          /** @type {?} */
          var viewBox = this._circleRadius * 2 + this.strokeWidth;
          return "0 0 ".concat(viewBox, " ").concat(viewBox);
        }
        /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeCircumference",
        get: function get() {
          return 2 * Math.PI * this._circleRadius;
        }
        /**
         * The dash offset of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeDashOffset",
        get: function get() {
          if (this.mode === 'determinate') {
            return this._strokeCircumference * (100 - this._value) / 100;
          } // In fallback mode set the circle to 80% and rotate it with CSS.


          if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._strokeCircumference * 0.2;
          }

          return null;
        }
        /**
         * Stroke width of the circle in percent.
         * @return {?}
         */

      }, {
        key: "_circleStrokeWidth",
        get: function get() {
          return this.strokeWidth / this.diameter * 100;
        }
      }]);

      return MatProgressSpinner;
    }(_MatProgressSpinnerMixinBase);

    MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
      return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
    };

    MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatProgressSpinner,
      selectors: [["mat-progress-spinner"]],
      hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"],
      hostVars: 10,
      hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        color: "color",
        mode: "mode",
        diameter: "diameter",
        strokeWidth: "strokeWidth",
        value: "value"
      },
      exportAs: ["matProgressSpinner"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 8,
      consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
      template: function MatProgressSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
     * We need to keep track of which elements the diameters were attached to, because for
     * elements in the Shadow DOM the style tags are attached to the shadow root, rather
     * than the document head.
     */

    MatProgressSpinner._diameters = new WeakMap();
    /** @nocollapse */

    MatProgressSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatProgressSpinner.propDecorators = {
      diameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      strokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-progress-spinner',
          exportAs: 'matProgressSpinner',
          host: {
            'role': 'progressbar',
            'class': 'mat-progress-spinner',
            '[class._mat-animation-noopable]': "_noopAnimations",
            '[style.width.px]': 'diameter',
            '[style.height.px]': 'diameter',
            '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
            '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
            '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
            '[attr.mode]': 'mode'
          },
          inputs: ['color'],
          template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * `<mat-spinner>` component.
     *
     * This is a component definition to be used as a convenience reference to create an
     * indeterminate `<mat-progress-spinner>` instance.
     */


    var MatSpinner =
    /*#__PURE__*/
    function (_MatProgressSpinner) {
      _inherits(MatSpinner, _MatProgressSpinner);

      /**
       * @param {?} elementRef
       * @param {?} platform
       * @param {?} document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatSpinner(elementRef, platform, document, animationMode, defaults) {
        var _this2;

        _classCallCheck(this, MatSpinner);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MatSpinner).call(this, elementRef, platform, document, animationMode, defaults));
        _this2.mode = 'indeterminate';
        return _this2;
      }

      return MatSpinner;
    }(MatProgressSpinner);

    MatSpinner.ɵfac = function MatSpinner_Factory(t) {
      return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
    };

    MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatSpinner,
      selectors: [["mat-spinner"]],
      hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"],
      hostVars: 6,
      hostBindings: function MatSpinner_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        color: "color"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 8,
      consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
      template: function MatSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-spinner',
          host: {
            'role': 'progressbar',
            'mode': 'indeterminate',
            'class': 'mat-spinner mat-progress-spinner',
            '[class._mat-animation-noopable]': "_noopAnimations",
            '[style.width.px]': 'diameter',
            '[style.height.px]': 'diameter'
          },
          inputs: ['color'],
          template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /**
     * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
     * @param {?} element
     * @param {?} _document
     * @return {?}
     */


    function _getShadowRoot(element, _document) {
      // TODO(crisbeto): see whether we should move this into the CDK
      // feature detection utilities once #15616 gets merged in.
      if (typeof window !== 'undefined') {
        /** @type {?} */
        var head = _document.head; // Check whether the browser supports Shadow DOM.

        if (head && (
        /** @type {?} */
        head.createShadowRoot || head.attachShadow)) {
          /** @type {?} */
          var rootNode = element.getRootNode ? element.getRootNode() : null; // We need to take the `ShadowRoot` off of `window`, because the built-in types are
          // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.

          if (rootNode instanceof
          /** @type {?} */
          window.ShadowRoot) {
            return rootNode;
          }
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/progress-spinner-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
      _classCallCheck(this, MatProgressSpinnerModule);
    };

    MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatProgressSpinnerModule
    });
    MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatProgressSpinnerModule_Factory(t) {
        return new (t || MatProgressSpinnerModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, {
        declarations: function declarations() {
          return [MatProgressSpinner, MatSpinner];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatProgressSpinner, MatSpinner]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=progress-spinner.js.map

    /***/

  },

  /***/
  "./src/app/shared/models/loading-state.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/loading-state.ts ***!
    \************************************************/

  /*! exports provided: LoadingStatus, LoadingState */

  /***/
  function srcAppSharedModelsLoadingStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingStatus", function () {
      return LoadingStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingState", function () {
      return LoadingState;
    });

    var LoadingStatus;

    (function (LoadingStatus) {
      LoadingStatus["LOADING"] = "LOADING";
      LoadingStatus["ERROR"] = "ERROR";
      LoadingStatus["OK"] = "OK";
    })(LoadingStatus || (LoadingStatus = {}));

    var LoadingState = function LoadingState(status, message) {
      _classCallCheck(this, LoadingState);

      this.status = status;
      this.message = message;
    };
    /***/

  },

  /***/
  "./src/app/tts/api-key/api-key.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/tts/api-key/api-key.component.ts ***!
    \**************************************************/

  /*! exports provided: ApiKeyComponent */

  /***/
  function srcAppTtsApiKeyApiKeyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiKeyComponent", function () {
      return ApiKeyComponent;
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


    var _api_key_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api-key.service */
    "./src/app/tts/api-key/api-key.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ApiKeyComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20);
      }
    }

    function ApiKeyComponent_ng_template_11_mat_icon_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApiKeyComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon");
      }
    }

    function ApiKeyComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApiKeyComponent_ng_template_11_mat_icon_0_Template, 2, 0, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApiKeyComponent_ng_template_11_ng_template_1_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.apiKeyIsValid)("ngIfElse", _r14);
      }
    }

    var ApiKeyComponent =
    /*#__PURE__*/
    function () {
      function ApiKeyComponent(apiKeyService) {
        var _this3 = this;

        _classCallCheck(this, ApiKeyComponent);

        this.apiKeyService = apiKeyService;
        this.apiKeyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.editing = false;
        this.apiKeyService.apiKey$.subscribe(function (apiKey) {
          _this3.apiKeyForm.setValue(apiKey);
        });
      }

      _createClass(ApiKeyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveApiKey",
        value: function saveApiKey() {
          this.apiKeyService.verifyAndSetApiKey(this.apiKeyForm.value);
        }
      }, {
        key: "apiKeyIsValid",
        get: function get() {
          return this.apiKeyForm.value && this.apiKeyForm.value === this.apiKeyService.apiKey;
        }
      }]);

      return ApiKeyComponent;
    }();

    ApiKeyComponent.ɵfac = function ApiKeyComponent_Factory(t) {
      return new (t || ApiKeyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_key_service__WEBPACK_IMPORTED_MODULE_2__["ApiKeyService"]));
    };

    ApiKeyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApiKeyComponent,
      selectors: [["app-api-key"]],
      decls: 13,
      vars: 7,
      consts: [[3, "routerLink"], [1, "key-input-container"], ["type", "text", "placeholder", "API Key", 3, "type", "formControl", "click"], [3, "click"], [4, "ngIf", "ngIfElse"], ["check", ""], ["strokeWidth", "4", 3, "diameter"], ["style", "color: lightgreen", 4, "ngIf", "ngIfElse"], ["notValid", ""], [2, "color", "lightgreen"]],
      template: function ApiKeyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WaveNet API Key ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "sup", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What is this ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApiKeyComponent_Template_input_click_6_listener($event) {
            return ctx.editing = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApiKeyComponent_Template_button_click_7_listener($event) {
            return ctx.saveApiKey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApiKeyComponent_ng_container_9_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ApiKeyComponent_ng_template_11_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", !ctx.editing && ctx.apiKeyIsValid ? "password" : "text")("formControl", ctx.apiKeyForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.apiKeyService.apiKeyState$).status === "LOADING")("ngIfElse", _r11);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".key-input-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nsup[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-size: 0.6rem;\n  color: #71deff;\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHRzL2FwaS1rZXkvQzpcXFVzZXJzXFxTYWZld2FyZVxcRG9jdW1lbnRzXFx0ZXN0c1xcdHRzLWFpL3NyY1xcYXBwXFx0dHNcXGFwaS1rZXlcXGFwaS1rZXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3R0cy9hcGkta2V5L2FwaS1rZXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3R0cy9hcGkta2V5L0M6XFxVc2Vyc1xcU2FmZXdhcmVcXERvY3VtZW50c1xcdGVzdHNcXHR0cy1haS9zcmNcXHN0eWxlXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRVpXO0VGYVgsMEJBQUE7RUFDQSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC90dHMvYXBpLWtleS9hcGkta2V5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGUvdmFyaWFibGVzJztcclxuXHJcbi5rZXktaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuc3VwIHtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxuICBjb2xvcjogJGxpbmstY29sb3I7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5rZXktaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnN1cCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgY29sb3I6ICM3MWRlZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiJGxpbmstY29sb3I6ICM3MWRlZmY7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiKeyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-api-key',
          templateUrl: './api-key.component.html',
          styleUrls: ['./api-key.component.scss']
        }]
      }], function () {
        return [{
          type: _api_key_service__WEBPACK_IMPORTED_MODULE_2__["ApiKeyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tts/api-key/api-key.service.ts":
  /*!************************************************!*\
    !*** ./src/app/tts/api-key/api-key.service.ts ***!
    \************************************************/

  /*! exports provided: ApiKeyService */

  /***/
  function srcAppTtsApiKeyApiKeyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiKeyService", function () {
      return ApiKeyService;
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


    var _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/models/loading-state */
    "./src/app/shared/models/loading-state.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_snack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/snack.service */
    "./src/app/services/snack.service.ts");

    var ApiKeyService =
    /*#__PURE__*/
    function () {
      function ApiKeyService(httpClient, snackService) {
        _classCallCheck(this, ApiKeyService);

        this.httpClient = httpClient;
        this.snackService = snackService; // Only set if 100% sure we've got a right api Key !

        this._apiKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.apiKey$ = this._apiKey.asObservable();
        this._apiKeyState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"](_shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingStatus"].OK));
        this.apiKeyState$ = this._apiKeyState.asObservable();
        var apiKey = localStorage.getItem('apiKey');
        this.verifyAndSetApiKey(apiKey);
      }

      _createClass(ApiKeyService, [{
        key: "verifyAndSetApiKey",
        value: function verifyAndSetApiKey(apiKey) {
          var _this4 = this;

          if (apiKey === 'fake') {
            this.apiKeyState = new _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"](_shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingStatus"].LOADING);
            setTimeout(function () {
              localStorage.setItem('apiKey', apiKey);
              _this4.apiKeyState = new _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"](_shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingStatus"].OK);

              _this4._apiKey.next(apiKey);
            }, 1000);
          }

          if (!apiKey) {
            return;
          }

          if (this.apiKeyState.status === _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingStatus"].LOADING) {
            return;
          }

          this.apiKeyState = new _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"](_shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingStatus"].LOADING);
          this.httpClient.get('https://texttospeech.googleapis.com/v1beta1/voices?key=' + apiKey).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('apiKey', apiKey);

            _this4._apiKey.next(apiKey);

            _this4.apiKeyState = new _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"](_shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingStatus"].OK); // for (const voice of data.voices) {
            //   const languageCode = voice.languageCodes[0].split('-')[0]
            //   if (!voice.name.includes('Wavenet')) continue
            //
            //   try {
            //     const language: string = BCP47Languages[languageCode].displayName
            //     if(!(language in this.languages)) {
            //       this.languages[language] = []
            //     }
            //     this.languages[language].push(voice.name)
            //   } catch (e) {
            //     console.error(`Language with code ${languageCode} is unsuported.`, e)
            //   }
            // }
          }, function (error) {
            console.log(error);

            _this4.snackService.displayError('API Key is invalid.');

            _this4.apiKeyState = new _shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"](_shared_models_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingStatus"].ERROR, JSON.stringify(error));
          });
        }
      }, {
        key: "apiKey",
        get: function get() {
          return this._apiKey.getValue();
        }
      }, {
        key: "apiKeyState",
        get: function get() {
          return this._apiKeyState.getValue();
        },
        set: function set(state) {
          this._apiKeyState.next(state);
        }
      }]);

      return ApiKeyService;
    }();

    ApiKeyService.ɵfac = function ApiKeyService_Factory(t) {
      return new (t || ApiKeyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_snack_service__WEBPACK_IMPORTED_MODULE_4__["SnackService"]));
    };

    ApiKeyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiKeyService,
      factory: ApiKeyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiKeyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_snack_service__WEBPACK_IMPORTED_MODULE_4__["SnackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tts/models/bcp47-languages.ts":
  /*!***********************************************!*\
    !*** ./src/app/tts/models/bcp47-languages.ts ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTtsModelsBcp47LanguagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var BCP47Languages = {
      aa: {
        name: 'Afar',
        displayName: 'Afaraf'
      },
      ab: {
        name: 'Abkhaz',
        displayName: 'аҧсуа бызшәа'
      },
      ae: {
        name: 'Avestan',
        displayName: 'avesta'
      },
      af: {
        name: 'Afrikaans',
        displayName: 'Afrikaans'
      },
      ak: {
        name: 'Akan',
        displayName: 'Akan'
      },
      am: {
        name: 'Amharic',
        displayName: 'አማርኛ'
      },
      an: {
        name: 'Aragonese',
        displayName: 'aragonés'
      },
      ar: {
        name: 'Arabic',
        displayName: 'Arabic'
      },
      as: {
        name: 'Assamese',
        displayName: 'অসমীয়া'
      },
      av: {
        name: 'Avaric',
        displayName: 'авар мацӀ'
      },
      ay: {
        name: 'Aymara',
        displayName: 'aymar aru'
      },
      az: {
        name: 'Azerbaijani',
        displayName: 'azərbaycan dili'
      },
      ba: {
        name: 'Bashkir',
        displayName: 'башҡорт теле'
      },
      be: {
        name: 'Belarusian',
        displayName: 'беларуская мова'
      },
      bg: {
        name: 'Bulgarian',
        displayName: 'български език'
      },
      bh: {
        name: 'Bihari',
        displayName: 'भोजपुरी'
      },
      bi: {
        name: 'Bislama',
        displayName: 'Bislama'
      },
      bm: {
        name: 'Bambara',
        displayName: 'bamanankan'
      },
      bn: {
        name: 'Bengali',
        displayName: 'বাংলা'
      },
      bo: {
        name: 'Tibetan Standard',
        displayName: 'བོད་ཡིག'
      },
      br: {
        name: 'Breton',
        displayName: 'brezhoneg'
      },
      bs: {
        name: 'Bosnian',
        displayName: 'bosanski jezik'
      },
      ca: {
        name: 'Catalan',
        displayName: 'català'
      },
      ce: {
        name: 'Chechen',
        displayName: 'нохчийн мотт'
      },
      ch: {
        name: 'Chamorro',
        displayName: 'Chamoru'
      },
      co: {
        name: 'Corsican',
        displayName: 'corsu'
      },
      cr: {
        name: 'Cree',
        displayName: 'ᓀᐦᐃᔭᐍᐏᐣ'
      },
      cs: {
        name: 'Czech',
        displayName: 'čeština'
      },
      cu: {
        name: 'Old Church Slavonic',
        displayName: 'ѩзыкъ словѣньскъ'
      },
      cv: {
        name: 'Chuvash',
        displayName: 'чӑваш чӗлхи'
      },
      cy: {
        name: 'Welsh',
        displayName: 'Cymraeg'
      },
      da: {
        name: 'Danish',
        displayName: 'dansk'
      },
      de: {
        name: 'German',
        displayName: 'Deutsch'
      },
      dv: {
        name: 'Divehi',
        displayName: 'Dhivehi'
      },
      dz: {
        name: 'Dzongkha',
        displayName: 'རྫོང་ཁ'
      },
      ee: {
        name: 'Ewe',
        displayName: 'Eʋegbe'
      },
      el: {
        name: 'Greek',
        displayName: 'Ελληνικά'
      },
      en: {
        name: 'English',
        displayName: 'English'
      },
      eo: {
        name: 'Esperanto',
        displayName: 'Esperanto'
      },
      es: {
        name: 'Spanish',
        displayName: 'Español'
      },
      et: {
        name: 'Estonian',
        displayName: 'eesti'
      },
      eu: {
        name: 'Basque',
        displayName: 'euskara'
      },
      fa: {
        name: 'Persian',
        displayName: 'فارسی'
      },
      ff: {
        name: 'Fula',
        displayName: 'Fulfulde'
      },
      fi: {
        name: 'Finnish',
        displayName: 'suomi'
      },
      fil: {
        name: 'Filipino',
        displayName: 'Pilipino'
      },
      fj: {
        name: 'Fijian',
        displayName: 'Vakaviti'
      },
      fo: {
        name: 'Faroese',
        displayName: 'føroyskt'
      },
      fr: {
        name: 'French',
        displayName: 'Français'
      },
      fy: {
        name: 'Western Frisian',
        displayName: 'Frysk'
      },
      ga: {
        name: 'Irish',
        displayName: 'Gaeilge'
      },
      gd: {
        name: 'Scottish Gaelic',
        displayName: 'Gàidhlig'
      },
      gl: {
        name: 'Galician',
        displayName: 'galego'
      },
      gn: {
        name: 'Guaraní',
        displayName: "Avañe'ẽ"
      },
      gu: {
        name: 'Gujarati',
        displayName: 'ગુજરાતી'
      },
      gv: {
        name: 'Manx',
        displayName: 'Gaelg'
      },
      ha: {
        name: 'Hausa',
        displayName: 'هَوُسَ'
      },
      he: {
        name: 'Hebrew',
        displayName: 'עברית'
      },
      hi: {
        name: 'Hindi',
        displayName: 'हिन्दी'
      },
      ho: {
        name: 'Hiri Motu',
        displayName: 'Hiri Motu'
      },
      hr: {
        name: 'Croatian',
        displayName: 'hrvatski jezik'
      },
      ht: {
        name: 'Haitian',
        displayName: 'Kreyòl ayisyen'
      },
      hu: {
        name: 'Hungarian',
        displayName: 'magyar'
      },
      hy: {
        name: 'Armenian',
        displayName: 'Հայերեն'
      },
      hz: {
        name: 'Herero',
        displayName: 'Otjiherero'
      },
      ia: {
        name: 'Interlingua',
        displayName: 'Interlingua'
      },
      id: {
        name: 'Indonesian',
        displayName: 'Indonesian'
      },
      ie: {
        name: 'Interlingue',
        displayName: 'Interlingue'
      },
      ig: {
        name: 'Igbo',
        displayName: 'Asụsụ Igbo'
      },
      ii: {
        name: 'Nuosu',
        displayName: 'ꆈꌠ꒿ Nuosuhxop'
      },
      ik: {
        name: 'Inupiaq',
        displayName: 'Iñupiaq'
      },
      io: {
        name: 'Ido',
        displayName: 'Ido'
      },
      is: {
        name: 'Icelandic',
        displayName: 'Íslenska'
      },
      it: {
        name: 'Italian',
        displayName: 'Italiano'
      },
      iu: {
        name: 'Inuktitut',
        displayName: 'ᐃᓄᒃᑎᑐᑦ'
      },
      ja: {
        name: 'Japanese',
        displayName: '日本語'
      },
      jv: {
        name: 'Javanese',
        displayName: 'basa Jawa'
      },
      ka: {
        name: 'Georgian',
        displayName: 'ქართული'
      },
      kg: {
        name: 'Kongo',
        displayName: 'Kikongo'
      },
      ki: {
        name: 'Kikuyu',
        displayName: 'Gĩkũyũ'
      },
      kj: {
        name: 'Kwanyama',
        displayName: 'Kuanyama'
      },
      kk: {
        name: 'Kazakh',
        displayName: 'қазақ тілі'
      },
      kl: {
        name: 'Kalaallisut',
        displayName: 'kalaallisut'
      },
      km: {
        name: 'Khmer',
        displayName: 'ខេមរភាសា'
      },
      kn: {
        name: 'Kannada',
        displayName: 'ಕನ್ನಡ'
      },
      ko: {
        name: 'Korean',
        displayName: '한국어'
      },
      kr: {
        name: 'Kanuri',
        displayName: 'Kanuri'
      },
      ks: {
        name: 'Kashmiri',
        displayName: 'कश्मीरी'
      },
      ku: {
        name: 'Kurdish',
        displayName: 'Kurdî'
      },
      kv: {
        name: 'Komi',
        displayName: 'коми кыв'
      },
      kw: {
        name: 'Cornish',
        displayName: 'Kernewek'
      },
      ky: {
        name: 'Kyrgyz',
        displayName: 'Кыргызча'
      },
      la: {
        name: 'Latin',
        displayName: 'latine'
      },
      lb: {
        name: 'Luxembourgish',
        displayName: 'Lëtzebuergesch'
      },
      lg: {
        name: 'Ganda',
        displayName: 'Luganda'
      },
      li: {
        name: 'Limburgish',
        displayName: 'Limburgs'
      },
      ln: {
        name: 'Lingala',
        displayName: 'Lingála'
      },
      lo: {
        name: 'Lao',
        displayName: 'ພາສາ'
      },
      lt: {
        name: 'Lithuanian',
        displayName: 'lietuvių kalba'
      },
      lu: {
        name: 'Luba-Katanga',
        displayName: 'Tshiluba'
      },
      lv: {
        name: 'Latvian',
        displayName: 'latviešu valoda'
      },
      mg: {
        name: 'Malagasy',
        displayName: 'fiteny malagasy'
      },
      mh: {
        name: 'Marshallese',
        displayName: 'Kajin M̧ajeļ'
      },
      mi: {
        name: 'Māori',
        displayName: 'te reo Māori'
      },
      mk: {
        name: 'Macedonian',
        displayName: 'македонски јазик'
      },
      ml: {
        name: 'Malayalam',
        displayName: 'മലയാളം'
      },
      mn: {
        name: 'Mongolian',
        displayName: 'Монгол хэл'
      },
      mr: {
        name: 'Marathi',
        displayName: 'मराठी'
      },
      ms: {
        name: 'Malay',
        displayName: 'هاس ملايو‎'
      },
      mt: {
        name: 'Maltese',
        displayName: 'Malti'
      },
      my: {
        name: 'Burmese',
        displayName: 'ဗမာစာ'
      },
      na: {
        name: 'Nauru',
        displayName: 'Ekakairũ Naoero'
      },
      nb: {
        name: 'Norwegian Bokmål',
        displayName: 'Norsk bokmål'
      },
      nd: {
        name: 'Northern Ndebele',
        displayName: 'isiNdebele'
      },
      ne: {
        name: 'Nepali',
        displayName: 'नेपाली'
      },
      ng: {
        name: 'Ndonga',
        displayName: 'Owambo'
      },
      nl: {
        name: 'Dutch',
        displayName: 'Nederlands'
      },
      nn: {
        name: 'Norwegian Nynorsk',
        displayName: 'Norsk nynorsk'
      },
      no: {
        name: 'Norwegian',
        displayName: 'Norsk'
      },
      nr: {
        name: 'Southern Ndebele',
        displayName: 'isiNdebele'
      },
      nv: {
        name: 'Navajo',
        displayName: 'Diné bizaad'
      },
      ny: {
        name: 'Chichewa',
        displayName: 'chiCheŵa'
      },
      oc: {
        name: 'Occitan',
        displayName: 'occitan'
      },
      oj: {
        name: 'Ojibwe',
        displayName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
      },
      om: {
        name: 'Oromo',
        displayName: 'Afaan Oromoo'
      },
      or: {
        name: 'Oriya',
        displayName: 'ଓଡ଼ିଆ'
      },
      os: {
        name: 'Ossetian',
        displayName: 'ирон æвзаг'
      },
      pa: {
        name: 'Panjabi',
        displayName: 'ਪੰਜਾਬੀ'
      },
      pi: {
        name: 'Pāli',
        displayName: 'पाऴि'
      },
      pl: {
        name: 'Polish',
        displayName: 'język polski'
      },
      ps: {
        name: 'Pashto',
        displayName: 'پښتو'
      },
      pt: {
        name: 'Portuguese',
        displayName: 'Português'
      },
      qu: {
        name: 'Quechua',
        displayName: 'Runa Simi'
      },
      rm: {
        name: 'Romansh',
        displayName: 'rumantsch grischun'
      },
      rn: {
        name: 'Kirundi',
        displayName: 'Ikirundi'
      },
      ro: {
        name: 'Romanian',
        displayName: 'Română'
      },
      ru: {
        name: 'Russian',
        displayName: 'Русский'
      },
      rw: {
        name: 'Kinyarwanda',
        displayName: 'Ikinyarwanda'
      },
      sa: {
        name: 'Sanskrit',
        displayName: 'संस्कृतम्'
      },
      sc: {
        name: 'Sardinian',
        displayName: 'sardu'
      },
      sd: {
        name: 'Sindhi',
        displayName: 'सिन्धी'
      },
      se: {
        name: 'Northern Sami',
        displayName: 'Davvisámegiella'
      },
      sg: {
        name: 'Sango',
        displayName: 'yângâ tî sängö'
      },
      si: {
        name: 'Sinhala',
        displayName: 'සිංහල'
      },
      sk: {
        name: 'Slovak',
        displayName: 'slovenčina'
      },
      sl: {
        name: 'Slovene',
        displayName: 'slovenski jezik'
      },
      sm: {
        name: 'Samoan',
        displayName: "gagana fa'a Samoa"
      },
      sn: {
        name: 'Shona',
        displayName: 'chiShona'
      },
      so: {
        name: 'Somali',
        displayName: 'Soomaaliga'
      },
      sq: {
        name: 'Albanian',
        displayName: 'Shqip'
      },
      sr: {
        name: 'Serbian',
        displayName: 'српски језик'
      },
      ss: {
        name: 'Swati',
        displayName: 'SiSwati'
      },
      st: {
        name: 'Southern Sotho',
        displayName: 'Sesotho'
      },
      su: {
        name: 'Sundanese',
        displayName: 'Basa Sunda'
      },
      sv: {
        name: 'Swedish',
        displayName: 'svenska'
      },
      sw: {
        name: 'Swahili',
        displayName: 'Kiswahili'
      },
      ta: {
        name: 'Tamil',
        displayName: 'தமிழ்'
      },
      te: {
        name: 'Telugu',
        displayName: 'తెలుగు'
      },
      tg: {
        name: 'Tajik',
        displayName: 'тоҷикӣ'
      },
      th: {
        name: 'Thai',
        displayName: 'ไทย'
      },
      ti: {
        name: 'Tigrinya',
        displayName: 'ትግርኛ'
      },
      tk: {
        name: 'Turkmen',
        displayName: 'Türkmen'
      },
      tl: {
        name: 'Tagalog',
        displayName: 'Wikang Tagalog'
      },
      tn: {
        name: 'Tswana',
        displayName: 'Setswana'
      },
      to: {
        name: 'Tonga',
        displayName: 'faka Tonga'
      },
      tr: {
        name: 'Turkish',
        displayName: 'Türkçe'
      },
      ts: {
        name: 'Tsonga',
        displayName: 'Xitsonga'
      },
      tt: {
        name: 'Tatar',
        displayName: 'татар теле'
      },
      tw: {
        name: 'Twi',
        displayName: 'Twi'
      },
      ty: {
        name: 'Tahitian',
        displayName: 'Reo Tahiti'
      },
      ug: {
        name: 'Uyghur',
        displayName: 'ئۇيغۇرچە‎'
      },
      uk: {
        name: 'Ukrainian',
        displayName: 'Українська'
      },
      ur: {
        name: 'Urdu',
        displayName: 'اردو'
      },
      uz: {
        name: 'Uzbek',
        displayName: 'Ўзбек'
      },
      ve: {
        name: 'Venda',
        displayName: 'Tshivenḓa'
      },
      vi: {
        name: 'Vietnamese',
        displayName: 'Tiếng Việt'
      },
      vo: {
        name: 'Volapük',
        displayName: 'Volapük'
      },
      wa: {
        name: 'Walloon',
        displayName: 'walon'
      },
      wo: {
        name: 'Wolof',
        displayName: 'Wollof'
      },
      xh: {
        name: 'Xhosa',
        displayName: 'isiXhosa'
      },
      yi: {
        name: 'Yiddish',
        displayName: 'ייִדיש'
      },
      yo: {
        name: 'Yoruba',
        displayName: 'Yorùbá'
      },
      za: {
        name: 'Zhuang',
        displayName: 'Saɯ cueŋƅ'
      },
      zh: {
        name: 'Chinese',
        displayName: '中文'
      },
      cmn: {
        name: 'Chinese Mandarin',
        displayName: '中文'
      },
      zu: {
        name: 'Zulu',
        displayName: 'isiZulu'
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = BCP47Languages;
    /***/
  },

  /***/
  "./src/app/tts/text-input/text-input.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/tts/text-input/text-input.component.ts ***!
    \********************************************************/

  /*! exports provided: TextInputComponent */

  /***/
  function srcAppTtsTextInputTextInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
      return TextInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_snack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/snack.service */
    "./src/app/services/snack.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var TextInputComponent =
    /*#__PURE__*/
    function () {
      function TextInputComponent(snackService) {
        _classCallCheck(this, TextInputComponent);

        this.snackService = snackService;
      }

      _createClass(TextInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startTts",
        value: function startTts() {
          this.snackService.displayMessage('Starting conversion...');
        }
      }]);

      return TextInputComponent;
    }();

    TextInputComponent.ɵfac = function TextInputComponent_Factory(t) {
      return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_snack_service__WEBPACK_IMPORTED_MODULE_1__["SnackService"]));
    };

    TextInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextInputComponent,
      selectors: [["app-text-input"]],
      decls: 8,
      vars: 0,
      consts: [["for", "text"], ["id", "text", "placeholder", "Copy/Paste your text here !"], [3, "click"]],
      template: function TextInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Text to convert ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextInputComponent_Template_button_click_6_listener($event) {
            return ctx.startTts();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start Text-to-speech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]],
      styles: ["textarea[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 120px;\n}\n\n@media screen and (max-width: 700px) {\n  textarea[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHRzL3RleHQtaW5wdXQvQzpcXFVzZXJzXFxTYWZld2FyZVxcRG9jdW1lbnRzXFx0ZXN0c1xcdHRzLWFpL3NyY1xcYXBwXFx0dHNcXHRleHQtaW5wdXRcXHRleHQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3R0cy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3R0cy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJ0ZXh0YXJlYSB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-text-input',
          templateUrl: './text-input.component.html',
          styleUrls: ['./text-input.component.scss']
        }]
      }], function () {
        return [{
          type: _services_snack_service__WEBPACK_IMPORTED_MODULE_1__["SnackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tts/tts-page/tts-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tts/tts-page/tts-page.component.ts ***!
    \****************************************************/

  /*! exports provided: TtsPageComponent */

  /***/
  function srcAppTtsTtsPageTtsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TtsPageComponent", function () {
      return TtsPageComponent;
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


    var _wave_net_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../wave-net.service */
    "./src/app/tts/wave-net.service.ts");
    /* harmony import */


    var _api_key_api_key_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api-key/api-key.component */
    "./src/app/tts/api-key/api-key.component.ts");
    /* harmony import */


    var _voice_settings_voice_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../voice-settings/voice-settings.component */
    "./src/app/tts/voice-settings/voice-settings.component.ts");
    /* harmony import */


    var _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../text-input/text-input.component */
    "./src/app/tts/text-input/text-input.component.ts");

    var TtsPageComponent =
    /*#__PURE__*/
    function () {
      function TtsPageComponent(waveNetService) {
        _classCallCheck(this, TtsPageComponent);

        this.waveNetService = waveNetService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
      }

      _createClass(TtsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TtsPageComponent;
    }();

    TtsPageComponent.ɵfac = function TtsPageComponent_Factory(t) {
      return new (t || TtsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wave_net_service__WEBPACK_IMPORTED_MODULE_2__["WaveNetService"]));
    };

    TtsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TtsPageComponent,
      selectors: [["app-tts-page"]],
      decls: 6,
      vars: 1,
      consts: [[1, "form-section"], [1, "separator"], [3, "formGroup"]],
      template: function TtsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-api-key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-voice-settings", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        }
      },
      directives: [_api_key_api_key_component__WEBPACK_IMPORTED_MODULE_3__["ApiKeyComponent"], _voice_settings_voice_settings_component__WEBPACK_IMPORTED_MODULE_4__["VoiceSettingsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__["TextInputComponent"]],
      styles: [".form-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.separator[_ngcontent-%COMP%] {\n  height: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHRzL3R0cy1wYWdlL0M6XFxVc2Vyc1xcU2FmZXdhcmVcXERvY3VtZW50c1xcdGVzdHNcXHR0cy1haS9zcmNcXGFwcFxcdHRzXFx0dHMtcGFnZVxcdHRzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3R0cy90dHMtcGFnZS90dHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90dHMvdHRzLXBhZ2UvdHRzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIGhlaWdodDogNHB4O1xyXG59XHJcbiIsIi5mb3JtLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TtsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tts-page',
          templateUrl: './tts-page.component.html',
          styleUrls: ['./tts-page.component.scss']
        }]
      }], function () {
        return [{
          type: _wave_net_service__WEBPACK_IMPORTED_MODULE_2__["WaveNetService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tts/tts-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/tts/tts-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: TtsRoutingModule */

  /***/
  function srcAppTtsTtsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TtsRoutingModule", function () {
      return TtsRoutingModule;
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


    var _tts_page_tts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tts-page/tts-page.component */
    "./src/app/tts/tts-page/tts-page.component.ts");

    var routes = [{
      path: '',
      component: _tts_page_tts_page_component__WEBPACK_IMPORTED_MODULE_2__["TtsPageComponent"]
    }];

    var TtsRoutingModule = function TtsRoutingModule() {
      _classCallCheck(this, TtsRoutingModule);
    };

    TtsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TtsRoutingModule
    });
    TtsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TtsRoutingModule_Factory(t) {
        return new (t || TtsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TtsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TtsRoutingModule, [{
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
  "./src/app/tts/tts.module.ts":
  /*!***********************************!*\
    !*** ./src/app/tts/tts.module.ts ***!
    \***********************************/

  /*! exports provided: TtsModule */

  /***/
  function srcAppTtsTtsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TtsModule", function () {
      return TtsModule;
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


    var _tts_page_tts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tts-page/tts-page.component */
    "./src/app/tts/tts-page/tts-page.component.ts");
    /* harmony import */


    var _tts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tts-routing.module */
    "./src/app/tts/tts-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_key_api_key_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./api-key/api-key.component */
    "./src/app/tts/api-key/api-key.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _voice_settings_voice_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./voice-settings/voice-settings.component */
    "./src/app/tts/voice-settings/voice-settings.component.ts");
    /* harmony import */


    var _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./text-input/text-input.component */
    "./src/app/tts/text-input/text-input.component.ts");
    /* harmony import */


    var _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../feedback/feedback.module */
    "./src/app/feedback/feedback.module.ts");

    var TtsModule = function TtsModule() {
      _classCallCheck(this, TtsModule);
    };

    TtsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TtsModule
    });
    TtsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TtsModule_Factory(t) {
        return new (t || TtsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _tts_routing_module__WEBPACK_IMPORTED_MODULE_3__["TtsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_11__["FeedbackModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TtsModule, {
        declarations: [_tts_page_tts_page_component__WEBPACK_IMPORTED_MODULE_2__["TtsPageComponent"], _api_key_api_key_component__WEBPACK_IMPORTED_MODULE_7__["ApiKeyComponent"], _voice_settings_voice_settings_component__WEBPACK_IMPORTED_MODULE_9__["VoiceSettingsComponent"], _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _tts_routing_module__WEBPACK_IMPORTED_MODULE_3__["TtsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_11__["FeedbackModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TtsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_tts_page_tts_page_component__WEBPACK_IMPORTED_MODULE_2__["TtsPageComponent"], _api_key_api_key_component__WEBPACK_IMPORTED_MODULE_7__["ApiKeyComponent"], _voice_settings_voice_settings_component__WEBPACK_IMPORTED_MODULE_9__["VoiceSettingsComponent"], _text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _tts_routing_module__WEBPACK_IMPORTED_MODULE_3__["TtsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_11__["FeedbackModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tts/voice-settings/voice-settings.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/tts/voice-settings/voice-settings.component.ts ***!
    \****************************************************************/

  /*! exports provided: VoiceSettingsComponent */

  /***/
  function srcAppTtsVoiceSettingsVoiceSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoiceSettingsComponent", function () {
      return VoiceSettingsComponent;
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


    var _models_bcp47_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/bcp47-languages */
    "./src/app/tts/models/bcp47-languages.ts");
    /* harmony import */


    var _api_key_api_key_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api-key/api-key.service */
    "./src/app/tts/api-key/api-key.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VoiceSettingsComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var option_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r18.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r18.displayName);
      }
    }

    function VoiceSettingsComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var option_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r19.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r19.displayName);
      }
    }

    var VoiceSettingsComponent =
    /*#__PURE__*/
    function () {
      function VoiceSettingsComponent(apiKeyService) {
        _classCallCheck(this, VoiceSettingsComponent);

        this.apiKeyService = apiKeyService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.languages = _models_bcp47_languages__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

      _createClass(VoiceSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initFormGroup();
          this.initSubs();
        }
      }, {
        key: "initFormGroup",
        value: function initFormGroup() {
          this.formGroup.setControl('language', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
          this.formGroup.setControl('locale', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
          this.formGroup.setControl('speed', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
          this.formGroup.setControl('pitch', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
        }
      }, {
        key: "initSubs",
        value: function initSubs() {
          var _this5 = this;

          this.apiKeyService.apiKey$.subscribe(function (data) {
            if (data) {
              // valid key
              _this5.formGroup.enable();
            } else {
              _this5.formGroup.disable();
            }
          });
        }
      }, {
        key: "languageOptionList",
        get: function get() {
          var _this6 = this;

          return Object.keys(this.languages).map(function (k) {
            return Object.assign(Object.assign({}, _this6.languages[k]), {
              key: k
            });
          });
        }
      }, {
        key: "locales",
        get: function get() {
          return [];
        }
      }]);

      return VoiceSettingsComponent;
    }();

    VoiceSettingsComponent.ɵfac = function VoiceSettingsComponent_Factory(t) {
      return new (t || VoiceSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_key_api_key_service__WEBPACK_IMPORTED_MODULE_3__["ApiKeyService"]));
    };

    VoiceSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoiceSettingsComponent,
      selectors: [["app-voice-settings"]],
      inputs: {
        formGroup: "formGroup"
      },
      decls: 21,
      vars: 3,
      consts: [[1, "settings", 3, "formGroup"], ["formControlName", "language", "name", "language"], ["value", "", "disabled", "", "selected", ""], [4, "ngFor", "ngForOf"], ["formControlName", "locale", "name", "locale"], ["for", ""], ["formControlName", "speed", "type", "range", "value", "1", "min", "0.25", "max", "3", "id", "speed", "step", "0.01"], ["formControlName", "pitch", "type", "range", "value", "0", "min", "-15", "max", "15", "id", "pitch", "step", "0.1"], ["disabled", "", "selected", "", 3, "value"]],
      template: function VoiceSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Voice settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoiceSettingsComponent_ng_container_8_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Locale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoiceSettingsComponent_ng_container_12_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pitch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languageOptionList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locales);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R0cy92b2ljZS1zZXR0aW5ncy92b2ljZS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoiceSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-voice-settings',
          templateUrl: './voice-settings.component.html',
          styleUrls: ['./voice-settings.component.scss']
        }]
      }], function () {
        return [{
          type: _api_key_api_key_service__WEBPACK_IMPORTED_MODULE_3__["ApiKeyService"]
        }];
      }, {
        formGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tts/wave-net.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/tts/wave-net.service.ts ***!
    \*****************************************/

  /*! exports provided: WaveNetService */

  /***/
  function srcAppTtsWaveNetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaveNetService", function () {
      return WaveNetService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WaveNetService =
    /*#__PURE__*/
    function () {
      function WaveNetService(httpClient) {
        _classCallCheck(this, WaveNetService);

        this.httpClient = httpClient;
        this.languages = {};
      }

      _createClass(WaveNetService, [{
        key: "getAudioContent",
        value: function getAudioContent(settings, input, audioEncoding) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var request, response, json;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    request = {
                      audioConfig: {
                        audioEncoding: audioEncoding,
                        pitch: settings.pitch,
                        speakingRate: settings.speed
                      },
                      input: {
                        text: input,
                        ssml: undefined
                      },
                      voice: {
                        languageCode: settings.locale.split('-').slice(0, 2).join('-'),
                        name: settings.locale
                      }
                    };

                    if (WaveNetService.isSSML(input)) {
                      request.input.ssml = request.input.text;
                      delete request.input.text;
                    }

                    _context.next = 4;
                    return fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=".concat(settings.apiKey), {
                      method: 'POST',
                      body: JSON.stringify(request)
                    });

                  case 4:
                    response = _context.sent;
                    _context.next = 7;
                    return response.json();

                  case 7:
                    json = _context.sent;

                    if (response.ok) {
                      _context.next = 11;
                      break;
                    }

                    alert(json.error.message); // TODO: Better error handling

                    return _context.abrupt("return");

                  case 11:
                    return _context.abrupt("return", json.audioContent);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }], [{
        key: "isSSML",
        value: function isSSML(str) {
          return str.startsWith('<speak>') && str.endsWith('</speak>');
        }
      }, {
        key: "validateSettings",
        value: function validateSettings(settings) {
          if (!settings.apiKey || !settings.locale) {
            alert("You must add your Google Cloud's text-to-speech API Key in the extension's popup.");
            return false;
          }

          return true;
        }
      }]);

      return WaveNetService;
    }();

    WaveNetService.ɵfac = function WaveNetService_Factory(t) {
      return new (t || WaveNetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    WaveNetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: WaveNetService,
      factory: WaveNetService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WaveNetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
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

  }
}]);
//# sourceMappingURL=tts-tts-module-es5.js.map