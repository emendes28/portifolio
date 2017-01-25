(function(){tinymce.PluginManager.requireLangPack("mediaservice");tinymce.create("tinymce.plugins.MediaService",{init:function(a,d){a.addCommand("mceMediaService",function(){a.windowManager.open({file:d+"/mediaservice.html",width:486+parseInt(a.getLang("mediaservice.delta_width",0),10),height:540+parseInt(a.getLang("mediaservice.delta_height",0),10),inline:1},{plugin_url:d,some_custom_arg:"custom arg"})});a.addButton("mediaservice",{title:"mediaservice.desc",cmd:"mceMediaService",image:d+"/img/mediaservice.gif"});
a.onInit.add(function(){a.settings.content_css!==false&&a.dom.loadCSS(d+"/css/content.css")});a.onBeforeSetContent.add(function(g,f){f.content=f.content.replace(/<!-- mceItemMediaService_(.*?):(.*?) --\>[\s\S]*?<!-- \/mceItemMediaService --\>/g,function(e,c,h){e=tinymce.plugins.MediaService.services[c];e.unserializeData($.htmlDecode(h));return e.getPlaceholderHtml(d)})});a.onPostProcess.add(function(g,f){if(f.get)f.content=f.content.replace(/<img.*?title="mceItemMediaService_([^:]+):([^"]+)".*?\/>/g,
function(e,c,h){e=tinymce.plugins.MediaService.services[c];e.unserializeData($.htmlDecode(h));if(f.source_view)return e.getEmbedHtml(false);return e.getEmbedHtml()})});a.onNodeChange.add(function(g,f,e){e!==null&&/^mceItemMediaService_(.*?):(.*?)$/.test(e.title)?f.setActive("mediaservice",true):f.setActive("mediaservice",false)})},createControl:function(){return null},getInfo:function(){return{longname:"Hosted Media Service Embedder",author:"Interspire",authorurl:"http://www.cliquemania.com",infourl:"http://www.cliquemania.com",
version:"7.2"}}});tinymce.PluginManager.add("mediaservice",tinymce.plugins.MediaService);tinymce.plugins.MediaService.services={};tinymce.plugins.MediaService.ServiceModel=function(){var a=this,d,g,f,e,c,h,k,j;e=[];a.setUrl=function(b){k=b;j=null;for(var i=e.length;i--;)if(b=e[i].exec(k))j=b[1]};a.getUrl=function(){return k};a.setServiceName=function(b){d=b};a.getServiceName=function(){return d};a.setDescription=function(b){f=b};a.getDescription=function(){return f};a.setLogo=function(b){g=b};a.getLogo=
function(){return g};a.addUrlRegExp=function(b){e.push(b)};a.getUrlRegExp=function(){return e};a.setWidth=function(b){c=b};a.getWidth=function(){return c};a.getCssWidth=function(){if(typeof c=="string"&&(c.indexOf("%")!==-1||c.indexOf("px")))return c;return c+"px"};a.setHeight=function(b){h=b};a.getHeight=function(){return h};a.getCssHeight=function(){if(typeof h=="string"&&(h.indexOf("%")!==-1||h.indexOf("px")))return h;return h+"px"};a.testUrl=function(b){for(var i=e.length;i--;)if(e[i].test(b))return true;
return false};a.setVideoId=function(b){j=b};a.getVideoId=function(){return j};a.serializeData=function(){return tinymce.util.JSON.serialize(a.getSerializableData())};a.unserializeData=function(b){a.setUnserializedData(tinymce.util.JSON.parse(b))};a.getSerializableData=function(){var b={};b.id=a.getVideoId();b.width=a.getWidth();b.height=a.getHeight();return b};a.setUnserializedData=function(b){a.setVideoId(b.id);a.setWidth(b.width);a.setHeight(b.height)};a.getPlaceholderHtml=function(b){return'<img src="'+
$.htmlEncode(b)+'/img/trans.gif" mce_src="'+$.htmlEncode(b)+'/img/trans.gif" class="mceItemMediaService mceItemMediaService_'+$.htmlEncode(a.getServiceName())+' mceItemNoResize" title="mceItemMediaService_'+$.htmlEncode(a.getServiceName())+":"+$.htmlEncode(a.serializeData())+'" width="'+$.htmlEncode(a.getWidth())+'" height="'+$.htmlEncode(a.getHeight())+'" />'};a.updatePlaceholderNode=function(b){b.className="mceItemMediaService mceItemMediaService_"+a.getServiceName();b.title="mceItemMediaService_"+
a.getServiceName()+":"+a.serializeData();b.width=a.getWidth();b.height=a.getHeight();b.style.width=a.getCssWidth();b.style.height=a.getCssHeight()};a.getEmbedHtml=function(b){if(typeof b=="undefined")b=true;b=b?a._getEmbedHtml():"";return"<!-- mceItemMediaService_"+a.getServiceName()+":"+$.htmlEncode(a.serializeData())+" --\><!-- do not directly edit this HTML, it will be overwritten by the mediaservice plugin --\>"+b+"<!-- /mceItemMediaService --\>"};a.setWidth(440);a.setHeight(330)};tinymce.plugins.MediaService.YouTubeServiceModel=
function(){var a=this;tinymce.plugins.MediaService.ServiceModel.call(this);var d,g,f;a.getColor1=function(){return g};a.getColor2=function(){return d};a.getDelayedCookies=function(){return f};a.getTimeCode=function(){return""};a.getAllowFullScreen=function(){return true};a.getVideoUrl=function(){return"http://youtube.com/watch?v="+encodeURIComponent(a.getVideoId())};a.getEmbeddedUrl=function(){var c="http://www.";c+=a.getDelayedCookies()?"youtube-nocookie":"youtube";c+=".com/v/"+encodeURIComponent(a.getVideoId());
params=[];a.getAllowFullScreen()&&params.push("fs=1");if(params.length)c+="?"+params.join("&");var h=a.getTimeCode();if(h)c+="#t="+h;return c};a._getEmbedHtml=function(){var c=[];c.push('<object width="'+$.htmlEncode(a.getWidth())+'" height="'+$.htmlEncode(a.getHeight())+'">');c.push('<param name="movie" value="'+$.htmlEncode(a.getEmbeddedUrl())+'"></param>');a.getAllowFullScreen()&&c.push('<param name="allowFullScreen" value="true"></param>');c.push('<param name="allowscriptaccess" value="always"></param>');
c.push('<embed src="'+$.htmlEncode(a.getEmbeddedUrl())+'"');c.push(' type="application/x-shockwave-flash"');c.push(' allowscriptaccess="always"');a.getAllowFullScreen()&&c.push(' allowfullscreen="true"');c.push(' width="'+$.htmlEncode(a.getWidth())+'"');c.push(' height="'+$.htmlEncode(a.getHeight())+'"');c.push("></embed></object>");return c.join("")};a.setServiceName("youtube");a.setDescription("YouTube");a.setLogo("youtube.gif");var e=new RegExp;e.compile("youtube\\..*?v=([^&]+)&?","i");a.addUrlRegExp(e)};
tinymce.plugins.MediaService.VimeoServiceModel=function(){var a=this;tinymce.plugins.MediaService.ServiceModel.call(this);a.getVideoUrl=function(){return"http://vimeo.com/"+encodeURIComponent(a.getVideoId())};a.getEmbeddedUrl=function(){var g="http://vimeo.com/moogaloop.swf";params={};params.clip_id=a.getVideoId();params.server="vimeo.com";params.show_title=1;params.show_byline=1;params.show_portrait=0;params.color="";params.fullscreen=1;var f,e,c=true;for(f in params){if(c){g+="?";c=false}else g+=
"&";e=params[f];g+=f+"="+encodeURIComponent(e)}return g};a._getEmbedHtml=function(){return'<object width="'+$.htmlEncode(a.getWidth())+'" height="'+$.htmlEncode(a.getHeight())+'"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="'+$.htmlEncode(a.getEmbeddedUrl())+'" /><embed src="'+$.htmlEncode(a.getEmbeddedUrl())+'" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="'+$.htmlEncode(a.getWidth())+
'" height="'+$.htmlEncode(a.getHeight())+'"></embed></object>'};a.setServiceName("vimeo");a.setDescription("Vimeo");a.setLogo("vimeo.gif");var d=new RegExp;d.compile("vimeo\\.com/([0-9]+)","i");a.addUrlRegExp(d)};tinymce.plugins.MediaService.MegavideoServiceModel=function(){var a=this;tinymce.plugins.MediaService.ServiceModel.call(this);a.getVideoUrl=function(){return"http://www.megavideo.com/?v="+encodeURIComponent(a.getVideoId())};a.getEmbeddedUrl=function(){return"http://www.megavideo.com/v/"+
encodeURIComponent(a.getVideoId())};a._getEmbedHtml=function(){return'<object width="'+a.getWidth()+'" height="'+a.getHeight()+'"><param name="movie" value="'+$.htmlEncode(a.getEmbeddedUrl())+'"></param><param name="allowFullScreen" value="true"></param><embed src="'+$.htmlEncode(a.getEmbeddedUrl())+'" type="application/x-shockwave-flash" allowfullscreen="true" width="'+a.getWidth()+'" height="'+a.getHeight()+'"></embed></object>'};a.setServiceName("megavideo");a.setDescription("Megavideo");a.setLogo("megavideo.gif");
var d=new RegExp;d.compile("megavideo\\.com/\\?v=([A-Z0-9]+)","i");a.addUrlRegExp(d)};tinymce.plugins.MediaService.MetacafeServiceModel=function(){var a=this;tinymce.plugins.MediaService.ServiceModel.call(this);a.getVideoUrl=function(){return"http://www.metacafe.com/watch/"+encodeURIComponent(a.getVideoId())};a.getEmbeddedUrl=function(){return"http://www.metacafe.com/fplayer/"+encodeURIComponent(a.getVideoId())+"/"+encodeURIComponent(a.getVideoId())+".swf"};a._getEmbedHtml=function(){return'<embed src="'+
$.htmlEncode(a.getEmbeddedUrl())+'" width="'+a.getWidth()+'" height="'+a.getHeight()+'" wmode="transparent" allowFullScreen="true" allowScriptAccess="always" name="Metacafe_'+$.htmlEncode(a.getVideoId())+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>'};a.setServiceName("metacafe");a.setDescription("Metacafe");a.setLogo("metacafe.gif");var d=new RegExp;d.compile("metacafe\\.com/watch/([0-9]+)","i");a.addUrlRegExp(d)};tinymce.plugins.MediaService.services.youtube=
new tinymce.plugins.MediaService.YouTubeServiceModel;tinymce.plugins.MediaService.services.vimeo=new tinymce.plugins.MediaService.VimeoServiceModel;tinymce.plugins.MediaService.services.metacafe=new tinymce.plugins.MediaService.MetacafeServiceModel;tinymce.plugins.MediaService.services.megavideo=new tinymce.plugins.MediaService.MegavideoServiceModel;tinymce.plugins.MediaService.getServiceByUrl=function(a){if(!a)return false;var d,g;for(d in tinymce.plugins.MediaService.services){g=tinymce.plugins.MediaService.services[d];
if(g.testUrl(a))return g}return false};tinymce.plugins.MediaService.getServiceList=function(){var a=[],d;for(d in tinymce.plugins.MediaService.services)a.push(tinymce.plugins.MediaService.services[d]);return a}})();