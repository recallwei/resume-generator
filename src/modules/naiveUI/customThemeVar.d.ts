import { CustomThemeCommonVars } from "naive-ui"

declare module "naive-ui" {
  export interface CustomThemeCommonVars {
    customEditorHeaderColor: string
    customPreviewWrapperBackgroundColor: string
    customPreviewContentBackgroundColor: string
    customToolbarBackgroundColor: string
    customToolbarBorderColor: string
    customSplitpanesBackgroundColor: string
    customSplitpanesBorderColor: string
  }
}
