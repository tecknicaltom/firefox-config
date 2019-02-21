// ctrl-tab brings up the preview dialog and switches to most recently used tab
pref('browser.ctrlTab.previews', true);

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

