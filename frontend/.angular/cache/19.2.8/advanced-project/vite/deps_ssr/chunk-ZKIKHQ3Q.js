import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MatRipple
} from "./chunk-G43GZHIS.js";
import {
  MatCommonModule
} from "./chunk-F4BZKNVS.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-UI7CJKIZ.js";

// node_modules/@angular/material/fesm2022/index-eRSoE0yr.mjs
var MatRippleModule = class _MatRippleModule {
  static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRippleModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatRippleModule,
    imports: [MatCommonModule, MatRipple],
    exports: [MatRipple, MatCommonModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRipple],
      exports: [MatRipple, MatCommonModule]
    }]
  }], null, null);
})();

export {
  MatRippleModule
};
//# sourceMappingURL=chunk-ZKIKHQ3Q.js.map
