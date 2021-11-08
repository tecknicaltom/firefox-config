// ctrl-tab brings up the preview dialog and switches to most recently used tab
pref('browser.ctrlTab.previews', true);

// ctrl-tab switches to tabs by most recently used
pref('browser.ctrlTab.sortByRecentlyUsed', true);

// start Firefox with the tabs from last time
pref('browser.startup.page', 3);

// restore the behavior of middle clicking anywhere will paste a URL to go to
pref('middlemouse.contentLoadURL', true);

// disable the Pocket extension
pref('extensions.pocket.enabled', false);

// don't let Firefox store passwords
pref('signon.rememberSignons', false);

// always prompt for download directory
pref('browser.download.useDownloadDir', false);

// show history before search suggestions in the url bar
pref("browser.urlbar.matchBuckets", "general:5,suggestion:Infinity");

// don't show sponsored stories on the new tab page
pref("browser.newtabpage.activity-stream.showSponsored", false);

// show 2 rows instead of 1 of "top sites" on the new tab page
pref("browser.newtabpage.activity-stream.topSitesRows", 2);

Components.utils.import("resource://gre/modules/Services.jsm");
var XULStore = Services.xulStore;
var browser_uri = "chrome://browser/content/browser.xhtml";

function describe(o)
{
  msg = (typeof o) + " ";
  for (name in o) {
    msg += "[" + name + "]=" + o[name] + ", ";
  }
  return msg;
}
//displayError("Services", describe(Services));
//displayError("sidebar-title", XULStore.getValue(browser_uri, "toolbar-menubar", "autohide"));

// never auto-hide the menubar
XULStore.setValue(browser_uri, "toolbar-menubar", "autohide", "false");
