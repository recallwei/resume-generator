export type SvgPropsType = {
  width?: string;
  height?: string;
  class?: string;
  onClick?: () => void;
};

import Touch from "./TouchIcon.vue";
import Collapse from "./CollapseIcon.vue";
import Expand from "./ExpandIcon.vue";

export const Icon = { Touch, Collapse, Expand };
