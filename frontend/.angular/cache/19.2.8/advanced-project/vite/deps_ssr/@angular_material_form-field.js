import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError
<<<<<<< Updated upstream
<<<<<<< Updated upstream
} from "./chunk-PNKG5GGJ.js";
import "./chunk-TX47TSAR.js";
import "./chunk-F5EUNRCZ.js";
=======
} from "./chunk-NRIVCJWK.js";
import "./chunk-IIHM4C3E.js";
>>>>>>> Stashed changes
import "./chunk-K4SCQFZE.js";
import "./chunk-FHS2A35M.js";
import "./chunk-Z7XGOMFB.js";
<<<<<<< Updated upstream
import "./chunk-RFGGZI5V.js";
import "./chunk-WUZ3QNCR.js";
import "./chunk-6MP6FYKQ.js";
import "./chunk-KUDK3IEG.js";
import "./chunk-KXIDSWWM.js";
import "./chunk-YRPTRWJS.js";
import "./chunk-4UBR7WAK.js";
import {
  require_cjs
} from "./chunk-ZUJ64LXG.js";
=======
=======
} from "./chunk-NRIVCJWK.js";
import "./chunk-IIHM4C3E.js";
import "./chunk-K4SCQFZE.js";
import "./chunk-FHS2A35M.js";
import "./chunk-Z7XGOMFB.js";
>>>>>>> Stashed changes
import "./chunk-W7VLRG6X.js";
import "./chunk-FGGTBHIW.js";
import "./chunk-7VJJUKTJ.js";
import "./chunk-Q47UYPFP.js";
import "./chunk-HQKTRAST.js";
import "./chunk-TK5VCKB2.js";
import "./chunk-UI7CJKIZ.js";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import {
  require_operators
} from "./chunk-XCIYP5SE.js";
import {
  require_cjs
} from "./chunk-ZUJ64LXG.js";
import "./chunk-OYTRG5F6.js";
import {
  __toESM
} from "./chunk-YHCV7DAQ.js";

// node_modules/@angular/material/fesm2022/form-field.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var matFormFieldAnimations = {
  // Represents:
  // trigger('transitionMessages', [
  //   // TODO(mmalerba): Use angular animations for label animation as well.
  //   state('enter', style({opacity: 1, transform: 'translateY(0%)'})),
  //   transition('void => enter', [
  //     style({opacity: 0, transform: 'translateY(-5px)'}),
  //     animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: {
    type: 7,
    name: "transitionMessages",
    definitions: [{
      type: 0,
      name: "enter",
      styles: {
        type: 6,
        styles: {
          opacity: 1,
          transform: "translateY(0%)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => enter",
      animation: [{
        type: 6,
        styles: {
          opacity: 0,
          transform: "translateY(-5px)"
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)"
      }],
      options: null
    }],
    options: {}
  }
};
export {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError,
  matFormFieldAnimations
};
//# sourceMappingURL=@angular_material_form-field.js.map
