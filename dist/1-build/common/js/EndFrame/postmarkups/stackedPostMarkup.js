import { Styles, Markup, Align, Effects } from "ad-view";
import { ImageManager } from "ad-control";
import { Animation } from "@common/js/Animation.js";
import { Control } from "@common/js/Control.js";
import CanvasIris from "@common/js/CanvasIris.js";
import {
  UIComponent,
  UIBorder,
  UIButton,
  UIImage,
  TextFormat,
  UITextField,
  UISvg
} from "ad-ui";
import { ObjectUtils } from "ad-utils";
import { titleTreatmentLayout, stackedBrandingLockup } from "./shared.js";

export default function stackedPostMarkup() {
  let T = View.endFrame;

  // title treatment
  titleTreatmentLayout(T);

  Align.set(T.pedigree, {
    x: {
      type: Align.CENTER,
      against: T.tt
    },
    y: {
      type: Align.CENTER,
      against: 65
    }
  });

  stackedBrandingLockup(T, {
    brandingLockupOffset: 8,
    brandingLockupElemXAlign: Align.CENTER,
    brandingLockupAlign: {
      y: Align.CENTER,
      x: {
        type: Align.RIGHT,
        offset: -12
      }
    },
    tuneInFontSize: 12
  });

  // ratings bug
  if (adData.hasRatings) {
    Align.set(T.ratingsBug, {
      x: {
        type: Align.RIGHT,
        offset: -5
      },
      y: {
        type: Align.BOTTOM,
        offset: -5
      }
    });
  } else {
    T.removeChild(T.ratingsBug);
  }
}
