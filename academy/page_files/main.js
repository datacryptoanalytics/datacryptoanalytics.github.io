jQuery(document).ready(function(a){function b(b){var c=[];return a.each(b,function(b,d){-1==a.inArray(d,c)&&c.push(d)}),c}function c(b,c){return"undefined"!=typeof Cookies.get("poveglia-read-later")&&(a.each(c,function(b,c){a(".read-later[data-id=\""+c+"\"]").addClass("active")}),d(c)),a(b).find(".read-later").each(function(){a(this).on("click",function(b){b.preventDefault();var e=a(this).attr("data-id");a(this).hasClass("active")?f(c,e):c.push(e),a(".read-later[data-id=\""+e+"\"]").each(function(){a(this).toggleClass("active")}),a("header .counter").addClass("shake"),setTimeout(function(){a("header .counter").removeClass("shake")},300),Cookies.set("poveglia-read-later",c,{expires:365}),d(c)})}),c}function d(b){if(a(".bookmark-container").empty(),b=b.filter(Boolean),b.length){var c=[location.protocol,"//",location.host].join("");a("header .counter").removeClass("hidden").text(b.length);var g=b.toString();g="id:["+g+"]",a.get(ghost.url.api("posts",{filter:g,include:"tags"})).done(function(g){a(".bookmark-container").empty();var h=[];a.each(g.posts,function(b,c){c.tags.length?-1===a.inArray(c.tags[0].name,h)&&h.push(c.tags[0].name):-1===a.inArray("Other",h)&&h.push("Other")}),h.sort(),a.each(h,function(b,c){var d=c;"Other"==c&&(d=a("#results").attr("data-other")),a(".bookmark-container").append("<h3>#"+d+"</h3><ul data-tag=\""+c+"\" class=\"list-box loop row\"></ul>")}),a.each(g.posts,function(b,d){var f="",g="",h=e(d.published_at).split(" "),i=q.indexOf(h[1])+1,j=moment(h[0]+"-"+i+"-"+h[2],"DD-MM-YYYY").format("DD MMM YYYY");d.feature_image?(f="http"==d.feature_image.substring(0,4)?"style=\"background-image: url("+d.feature_image+");\"":"style=\"background-image: url("+c+d.feature_image+");\"",g+="featured-image"):g+="excerpt",d.tags.length?a(".bookmark-container ul[data-tag=\""+d.tags[0].name+"\"]").append("<li class=\"col-md-4 item\"><article class=\"post\"><div class=\"post-inner-content\"><div class=\"img-holder\"> <a href=\"/"+d.slug+"/\" class=\""+g+"\" title=\""+d.title+"\""+f+"></a> </div><div class=\"inner\"><h2><a href=\"/"+d.slug+"/\">"+d.title+"</a></h2><time>"+j+"</time><a href=\"#\" class=\"read-later active\" data-id=\""+d.id+"\"><i class=\"far fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-bookmark-article")+"\"></i><i class=\"fas fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-remove-bookmark")+"\"></i></a></div></div></article></li>"):a(".bookmark-container ul[data-tag=\"Other\"]").append("<li class=\"col-md-4 item\"><article class=\"post\"><div class=\"post-inner-content\"><div class=\"img-holder\"> <a href=\"/"+d.slug+"/\" class=\""+g+"\" title=\""+d.title+"\""+f+"></a> </div><div class=\"inner\"><h2><a href=\"/"+d.slug+"/\">"+d.title+"</a></h2><time>"+j+"</time><a href=\"#\" class=\"read-later active\" data-id=\""+d.id+"\"><i class=\"far fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-bookmark-article")+"\"></i><i class=\"fas fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-remove-bookmark")+"\"></i></a></div></div></article></li>")}),a(".bookmark-container [data-toggle=\"tooltip\"]").tooltip({trigger:"hover"}),a(".bookmark-container").find(".read-later").each(function(){a(this).on("click",function(c){c.preventDefault();var e=a(this).attr("data-id");a(this).hasClass("active")?(f(b,e),a(".tooltip").remove()):b.push(e),a(".read-later[data-id=\""+e+"\"]").each(function(){a(this).toggleClass("active")}),Cookies.set("poveglia-read-later",b,{expires:365}),d(b)})}),g.posts.length?a("header .counter").removeClass("hidden").text(g.posts.length):(a("header .counter").addClass("hidden"),a(".bookmark-container").append("<p class=\"no-bookmarks\"></p>"),a(".no-bookmarks").html(p))})}else a("header .counter").addClass("hidden"),a(".bookmark-container").append("<p class=\"no-bookmarks\"></p>"),a(".no-bookmarks").html(p)}function e(a){var b=new Date(a);return b.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][b.getMonth()]+" "+b.getFullYear()}function f(b){for(var c,d,e=arguments,a=e.length;1<a&&b.length;)for(c=e[--a];-1!==(d=b.indexOf(c));)b.splice(d,1);return b}function g(){var b=a(".editor-content").offset().top,c=a(".editor-content").height();if(a(window).scrollTop()>b&&a(window).scrollTop()<b+c){var d=a(window).scrollTop()-b,e=100*d/c;a(".progress").css({width:e+"%"}),a(".progress").parent().addClass("visible"),a(".progress").attr("data-original-title",parseInt(e)+"% "+a(".progress").attr("data-read")),a(".progress").attr("aria-describedby")&&a("#"+a(".progress").attr("aria-describedby")).find(".tooltip-inner").text(parseInt(e)+"% "+a(".progress").attr("data-read"))}else a(window).scrollTop()<b?(a(".progress").css({width:"0%"}),a(".progress").parent().removeClass("visible")):(a(".progress").css({width:"100%"}),a(".progress").attr("data-original-title","100% "+a(".progress").attr("data-read")),a(".progress").attr("aria-describedby")&&a("#"+a(".progress").attr("aria-describedby")).find(".tooltip-inner").text("100% "+a(".progress").attr("data-read")))}function i(b){var c=a(window).scrollTop(),d=c+a(window).height(),e=a(b).offset().top,f=e+a(b).height();return f<=d&&e>=c}function j(b){992>b?a("header .nav").appendTo("#menu .modal-nav"):(a("#menu .modal-nav .nav").appendTo("header .navigation"),a("#menu").modal("hide"))}function k(){a(".kg-gallery-image img").each(function(){var b=a(this).closest(".kg-gallery-image"),c=a(this)[0].naturalWidth,d=a(this)[0].naturalHeight;b.attr("style","flex: "+c/d+" 1 0%")})}var l={"share-selected-text":!0,"load-more":!0,"infinite-scroll":!1,"infinite-scroll-step":1,"disqus-shortname":"cindicator"},m=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=Math.max(document.documentElement.clientHeight,window.innerHeight||0),h=[],o=a("html").attr("lang"),p=a(".no-bookmarks").html(),q=["January","February","March","April","May","June","July","August","September","October","November","December"];"undefined"!=typeof ghost&&("undefined"!=typeof Cookies.get("poveglia-read-later")&&(h=JSON.parse(Cookies.get("poveglia-read-later"))),h=c(a("#content .loop"),h),h=c(a(".related-posts loop"),h)),a(".search-trigger, .bookmark-trigger").on("click",function(a){a.preventDefault()}),k(),a("body").on("click",".modal-backdrop",function(b){b.preventDefault(),a(".modal.show .close").click()}),a("#content").attr("data-id")&&""!=l["disqus-shortname"]&&a(".comments-trigger").on("click",function(b){b.preventDefault(),a(this).addClass("hidden"),a(".comments").append("<div id=\"disqus_thread\"></div>");var c=[location.protocol,"//",location.host,location.pathname].join("");(function(){var a=document,b=a.createElement("script");b.src="//"+l["disqus-shortname"]+".disqus.com/embed.js",b.setAttribute("data-timestamp",+new Date),(a.head||a.body).appendChild(b)})()});a("#search-field").ghostHunter({results:"#results",onKeyUp:!0,zeroResultsInfo:!0,displaySearchInfo:!1,onComplete:function(d){if(d.length){var e=[location.protocol,"//",location.host].join("");a("#results").empty();var f=[];a.each(d,function(b,c){c.tags.length?-1===a.inArray(c.tags[0].name,f)&&f.push(c.tags[0].name):-1===a.inArray("Other",f)&&f.push("Other")}),f.sort(),f=b(f),a.each(f,function(b,c){var d=c;"Other"==c&&(d=a("#results").attr("data-other")),a("#results").append("<h3>#"+d+"</h3><ul data-tag=\""+c+"\" class=\"list-box loop row\"></ul>")}),a.each(d,function(b,c){var d="",f="",g=c.pubDate.split(" "),h=q.indexOf(g[1])+1,i=moment(g[0]+"-"+h+"-"+g[2],"DD-MM-YYYY").format("DD MMM YYYY");c.feature_image?(d="http"==c.feature_image.substring(0,4)?"style=\"background-image: url("+c.feature_image+");\"":"style=\"background-image: url("+e+c.feature_image+");\"",f+="featured-image"):f+="excerpt",c.tags.length?a("#results ul[data-tag=\""+c.tags[0].name+"\"]").append("<li class=\"col-md-4 item\"><article class=\"post\"><div class=\"post-inner-content\"><div class=\"img-holder\"> <a href=\""+c.link+"\" class=\""+f+"\" title=\""+c.title+"\""+d+"></a> </div><div class=\"inner\"><h2><a href=\""+c.link+"\">"+c.title+"</a></h2><time>"+i+"</time><a href=\"#\" class=\"read-later\" data-id=\""+c.id+"\"><i class=\"far fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-bookmark-article")+"\"></i><i class=\"fas fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-remove-bookmark")+"\"></i></a></div></div></article></li>"):a("#results ul[data-tag=\"Other\"]").append("<li class=\"col-md-4 item\"><article class=\"post\"><div class=\"post-inner-content\"><div class=\"img-holder\"> <a href=\""+c.link+"\" class=\""+f+"\" title=\""+c.title+"\""+d+"></a> </div><div class=\"inner\"><h2><a href=\""+c.link+"\">"+c.title+"</a></h2><time>"+i+"</time><a href=\"#\" class=\"read-later\" data-id=\""+c.id+"\"><i class=\"far fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-bookmark-article")+"\"></i><i class=\"fas fa-bookmark\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-placement=\"right\" title=\""+a("#results").attr("data-remove-bookmark")+"\"></i></a></div></div></article></li>")}),a("#results [data-toggle=\"tooltip\"]").tooltip({trigger:"hover"}),h=c(a("#results"),h)}else a("#search-field").val().length&&!d.length&&a("#results").append("<h3>"+a("#results").attr("data-no-results")+"</h3><ul class=\"list-box loop row\"><li class=\"col-md-12 item\">"+a("#results").attr("data-no-results-description")+"</li></ul>")}});a(document).on("click",function(b){a("[data-toggle=\"popover\"],[data-original-title]").each(function(){a(this).is(b.target)||0!==a(this).has(b.target).length||0!==a(".popover").has(b.target).length||(((a(this).popover("hide").data("bs.popover")||{}).inState||{}).click=!1)})});a(window).on("load",function(){k(),a(".editor-content img, .inner-featured-image").each(function(){a(this).parent().is("a")||(a("<a href='"+a(this).attr("src")+"' class='zoom'></a>").insertAfter(a(this)),a(this).appendTo(a(this).next("a")))}),a(".zoom").fluidbox(),a(window).on("scroll",function(){a(".zoom").fluidbox("close")});var b=1,d=window.location.pathname,e=a(".post"),f=0;if(d=d.replace(/#(.*)$/g,"").replace("///g","/"),a("body").hasClass("paged")&&(b=parseInt(d.replace(/[^0-9]/gi,""))),l["load-more"]&&"undefined"!=typeof maxPages){if(a("#load-posts").addClass("visible").removeClass("hidden"),b==maxPages)return void a("#load-posts").addClass("finish").text(a("#load-posts").attr("data-last"));a("#load-posts").on("click",function(e){e.preventDefault();var g=a(this);b++,a("body").hasClass("paged")&&(d="/");var i=d+"page/"+b+"/";g.hasClass("step")&&setTimeout(function(){g.removeClass("step"),f=0},1e3),a.get(i,function(d){f++;var e=a(d).find(".item");a("#content .loop").append(e),a.each(e,function(){var d=a(this),e=a(this).find(".post").addClass("no-opacity").attr("data-id");a("#content .loop").imagesLoaded(function(){var f={duration:800,easing:[.1,1,.3,1],delay:function(a,b){return 35*b},opacity:{value:[0,1],duration:600,easing:"linear"},translateY:[200,0],translateZ:[300,0],rotateX:[75,0]};if(f.targets=".item:not(.post-featured) .post[data-id=\""+e+"\"]",anime.remove(f.targets),anime(f),a("[data-toggle=\"tooltip\"]").tooltip({trigger:"hover"}),h=c(d,h),b==maxPages)return void a("#load-posts").addClass("finish").text("You've reached the end of the list")})})})})}if(l["infinite-scroll"]&&l["load-more"]){var g="on";0<a("#load-posts").length&&a(window).on("scroll",function(){var b;i("#load-posts")&&"on"==g&&f<l["infinite-scroll-step"]&&(a("#load-posts").click(),g="off",b=setTimeout(function(){g="on",f==l["infinite-scroll-step"]&&a("#load-posts").addClass("step")},1e3))})}}),a("#search").on("shown.bs.modal",function(){a("#search-field").focus()}),a("pre code, pre").each(function(a,b){hljs.highlightBlock(b)});a(".content-inner .share ul").height();if(a(".post-template").length&&g(),a(".go-up").on("click",function(b){b.preventDefault(),a("body,html").animate({scrollTop:0},500)}),a(window).on("scroll",function(){a(".post-template").length&&g()}),a("header .progress").tooltip({title:function(){return a("header .progress").attr("data-original-title")},trigger:"hover",placement:"bottom"}),a("[data-toggle=\"tooltip\"]").tooltip({trigger:"hover"}),a(".gh-signin").each(function(){a(this).validate({rules:{email:{required:!0,email:!0}},submitHandler:function(b){a(b).submit()}})}),a("form[action*='https://formspree.io/']").each(function(){a(this).validate({rules:{email:{required:!0,email:!0},message:{required:!0}}})}),l["share-selected-text"]&&shareSelectedText(".post-template .editor-content",{sanitize:!0,buttons:["twitter"],tooltipTimeout:250}),a(".error-title").length&&a("body").addClass("error"),a(".tweets").length){var r=a(".tweets").attr("data-twitter").substr(1);a(".tweets").append("<a class=\"twitter-timeline\" data-width=\"100%\" data-height=\"800\" data-tweet-limit=\"3\" data-chrome=\"noborders noheader nofooter transparent\" href=\"https://twitter.com/"+r+"?ref_src=twsrc%5Etfw\"></a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>")}j(m),a(window).on("resize",function(){m=Math.max(document.documentElement.clientWidth,window.innerWidth||0),j(m)})});
