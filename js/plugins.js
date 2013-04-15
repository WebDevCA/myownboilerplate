// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here:

/**
 * jQuery cssParentSelector 1.0.9
 * https://github.com/Idered/cssParentSelector
 *
 * Copyright 2011-2012, Kasper Mikiewicz
 * Released under the MIT and GPL Licenses.
 * Date 2012-02-08
 */
 (function(a){a.fn.cssParentSelector=function(){var u=0,m,j,v={checked:"click",focus:"focus blur",active:"mousedown mouseup",selected:"change",changed:"change"},p={mousedown:"mouseout"},q={mouseup:"mouseout"},k={after:"appendTo",before:"prependTo"},b,n,o,d,r,g,s,l,e,h,i,w=/[\w\s\"\'\.\[\]\(\)\=\*\-\:#]*(?=!)[\w\s\.\,\[\]\(\)\=\*\-\:#>!]+[\w\s\"\'\.\,\[\]\=\:\-#>]*\{{1}[\.\*\/\?\:\^\+\\\=\|\w\s\'-;#%]+\}{1}/gi,t=function(f){f=f.replace(/(\/\*([\s\S]*?)\*\/)/gm,"");if(n=f.match(w)){b="";for(m=-1;n[++m],style=n[m];)if(o=style.split("{")[0].split(","),e="{"+style.split(/\{|\}/)[1].replace(/^\s+|\s+$[\t\n\r]*/g,"")+"}","{}"!==e){e=e.replace(/;/g," !important;");for(j=-1;o[++j],d=a.trim(o[j]);)j&&(b+=","),/!/.test(d)?(r=a.trim(d.split("!")[0].split(":")[0]),g=a.trim(d.split("!")[1].split(">")[0].split(":")[0])||[]._,h=a.trim(d.split(">")[0].split("!")[0].split(":")[1])||[]._,i=g?a.trim(d.split(">")[0].split("!")[1].split(":")[1])||[]._:[]._,s=a(a.trim(d.split(">")[1]).split(":")[0]),l=(d.split(">")[1].split(/:+/)[1]||"").split(" ")[0]||[]._,s.each(function(d){var c=a(this).parent(r);h&&(c=k[h]?a("<div></div>")[k[h]](c):c.filter(":"+h));g&&(c=c.find(g));g&&i&&(c=k[i]?a("<div></div>")[k[i]](c):c.filter(":"+i));var e="CPS"+u++,f=function(b){b&&p[b.type]&&a(c).one(p[b.type],function(){a(c).toggleClass(e)});b&&q[b.type]&&a(c).off(q[b.type]);a(c).toggleClass(e)};d&&(b+=",");b+="."+e;!l?f():a(this).on(v[l]||l,f)})):b+=d;b+=e}a('<style type="text/css">'+b+"</style>").appendTo("head")}};a("link[rel=stylesheet], style").each(function(){a(this).is("link")?a.get(this.href).success(function(a){t(a)}):t(a(this).text())})};a().cssParentSelector()})(jQuery);


// The following responsive table plugin comes from http://www.zurb.com/playground/playground/responsive-tables/index.html (uncomment if needed):

/* $(document).ready(function() {
  var switched = false;
  var updateTables = function() {
    if (($(window).width() < 767) && !switched ){
      switched = true;
      $("TABLE.responsive").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    }
    else if (switched && ($(window).width() > 767)) {
      switched = false;
      $("TABLE.responsive").each(function(i, element) {
        unsplitTable($(element));
      });
    }
  };
   
  $(window).load(updateTables);
  $(window).bind("resize", updateTables);
   
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");
		
		var copy = original.clone();
		copy.find("TD:not(:first-child), TH:not(:first-child)").css("display", "none");
		copy.removeClass("responsive");
		
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");
	}
	
	function unsplitTable(original) {
    original.closest(".table-wrapper").find(".pinned").remove();
    original.unwrap();
    original.unwrap();
	}

}); */

// "By attaching a class of .responsive to the table, our JS/CSS will kick in."