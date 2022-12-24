// Fix the error when import the .vue file in .ts file.
declare module "*" {
  import Vue from "vue"
  export default Vue
}
// declare module "*.vue" {
//   import { type DefineComponent } from "vue"
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
