using System.Web;
using System.Web.Optimization;

namespace PairProgramming2
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/js/lib").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-messages.js",
                "~/Scripts/angular-sanitize.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                "~/Scripts/moment.js",
                "~/Scripts/lodash.js",
                "~/Scripts/dateValidationHelpers.js",
                "~/Scripts/angular-ui/ui-utils.js",
                "~/Scripts/drag-n-drop/angular-drag-and-drop-lists.js",
                "~/Scripts/lodash.js"));

            bundles.Add(new ScriptBundle("~/js/app").IncludeDirectory(
                "~/client/", "*.js", true));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/drag.css"));
        }
    }
}
