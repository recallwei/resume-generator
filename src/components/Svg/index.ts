export type SvgPropsType = {
  width?: string;
  height?: string;
  class?: string;
  onClick?: () => void;
};

import Touch from "./TouchIcon.vue";
import Collapse from "./CollapseIcon.vue";
import Expand from "./ExpandIcon.vue";
import GitHub from "./GitHubIcon.vue";
import FontSize from "./FontSizeIcon.vue";
import WordWrap from "./WordWrapIcon.vue";

export const Icon = { Touch, Collapse, Expand, GitHub, FontSize, WordWrap };
