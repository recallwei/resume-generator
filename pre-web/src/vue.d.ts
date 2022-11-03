// Fix the error when import the .vue file in .ts file.
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
