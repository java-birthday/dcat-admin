!function(e){var i={};function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,i,t){a.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,i){if(1&i&&(e=a(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)a.d(t,n,function(i){return e[i]}.bind(null,n));return t},a.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(i,"a",i),i},a.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},a.p="/",a(a.s=11)}({11:function(e,i,a){e.exports=a(12)},12:function(e,i){!function(e,i){function a(a){a=i.extend({wrapper:".web-uploader",addFileButton:".add-file-button",isImage:!1,preview:[],server:"",updateServer:"",deleteUrl:"",deleteData:{},thumbHeight:160,disabled:!1,autoUpdateColumn:!1,disableRemove:!1,dimensions:{},lang:{exceed_size:"文件大小超出",interrupt:"上传暂停",upload_failed:"上传失败，请重试",selected_files:"选中:num个文件，共:size。",selected_has_failed:'已成功上传:success个文件，:fail个文件上传失败，<a class="retry"  href="javascript:"";">重新上传</a>失败文件或<a class="ignore" href="javascript:"";">忽略</a>',selected_success:"共:num个(:size)，已上传:success个。",dot:"，",failed_num:"失败:fail个。",pause_upload:"暂停上传",go_on_upload:"继续上传",start_upload:"开始上传",upload_success_message:"已成功上传:success个文件",go_on_add:"继续添加",Q_TYPE_DENIED:"对不起，不允许上传此类型文件",Q_EXCEED_NUM_LIMIT:"对不起，已超出文件上传数量限制，最多只能上传:num个文件",F_EXCEED_SIZE:"对不起，当前选择的文件过大",Q_EXCEED_SIZE_LIMIT:"对不起，已超出文件大小限制",F_DUPLICATE:"文件重复",confirm_delete_file:"您确定要删除这个文件吗？"},upload:{formData:{_id:null},thumb:{width:160,height:160,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"}}},a);var t=i(a.selector),n=a.upload.formData.upload_column||"webup"+Math.floor(1e4*Math.random()),r=a.elementName;void 0!==a.upload.formData._id&&a.upload.formData._id||(a.upload.formData._id=n+Math.floor(1e4*Math.random()));var s,l,o,d,c,u,f,p,m,h,v=e.Dcat,b=a.isImage,_=v.helpers.len(a.preview),g=t.find('input[name="'+r+'"]'),w=function(e){return r.replace(/[\[\]]*/g,"_")+"-"+e},y=function(e){return i("#"+w(e))},k=a.addFileButton,E={},x={},I=0,F=0,N="pedding",C={},D=(m=new Image,h=!0,m.onload=m.onerror=function(){1==this.width&&1==this.height||(h=!1)},m.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",h),U=function(){var e;try{e=(e=navigator.plugins["Shockwave Flash"]).description}catch(i){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(i){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1],10)}(),A=function(e){return e.type.match(/^image/)},S=v.Translator(a.lang),T=S.trans.bind(S);function L(e){var t,r,s=WebUploader.formatSize(e.size);b?(t=i('<li id="'.concat(w(e.id),'" title="').concat(e.name,'" >\n                    <p class="file-type">').concat(e.ext.toUpperCase()||"FILE",'</p>\n                    <p class="imgWrap "></p>\n                    <p class="title" style="">').concat(e.name,'</p>\n                    <p class="title" style="margin-bottom:20px;">(<b>').concat(s,"</b>)</p>\n                    </li>")),r=i('<div class="file-panel">\n                    <a class="btn btn-sm btn-white" data-file-act="cancel"><i class="feather icon-x red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="delete" style="display: none">\n                    <i class="feather icon-trash red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="preview" ><i class="feather icon-zoom-in"></i></a>\n                    </div>').appendTo(t)):(t=i('\n                    <li id="'.concat(w(e.id),'" title="').concat(e.nam,'">\n                    <p class="title" style="display:block">\n                        <i class="feather icon-check green _success icon-success"></i>\n                        ').concat(e.name," (").concat(s,")\n                    </p>\n                    </li>\n                ")),r=i('\n<span data-file-act="cancel" class="file-action" style="font-size:13px">\n    <i class="feather icon-x red-dark"></i>\n</span>\n<span data-file-act="delete" class="file-action" style="display:none">\n    <i class="feather icon-trash red-dark"></i>\n</span>\n').appendTo(t));var o=t.find("p.imgWrap"),d=i('<p class="error"></p>'),c=function(e,i){var a="";switch(e){case"exceed_size":a=T("exceed_size");break;case"interrupt":a=T("interrupt");break;default:a=T("upload_failed")}E[i.id]=i,d.text(a).appendTo(t)};if(t.appendTo(l),setTimeout((function(){t.css({margin:"5px"})}),50),"invalid"===e.getStatus())c(e.statusText,e);else{if(b){var u=p.makeThumb(e,(function(e,a){var n;if(o.empty(),e)return t.find(".title").show(),void t.find(".file-type").show();D?(n=i('<img src="'+a+'">'),o.append(n)):t.find(".file-type").show()}));try{u.once("load",(function(){e._info=e._info||u.info(),e._meta=e._meta||u.meta();var i=e._info.width,t=e._info.height;if(!function(e){if(!b||!A(e)||!v.helpers.len(a.dimensions))return!0;var i=a.dimensions,t=e._info.width,n=e._info.height,r=v.helpers.isset;if(r(i,"width")&&i.width!=t||r(i,"min_width")&&i.min_width>t||r(i,"max_width")&&i.max_width<t||r(i,"height")&&i.height!=n||r(i,"min_height")&&i.min_height>n||r(i,"max_height")&&i.max_height<n||r(i,"ratio")&&i.ratio!=t/n)return!1;return!0}(e))return v.error("The image dimensions is invalid."),p.removeFile(e),!1;u.resize(i,t)}))}catch(i){return setTimeout((function(){p.removeFile(e)}),10)}}C[e.id]=[e.size,0],e.rotation=0}e.on("statuschange",(function(i,a){"progress"===a||"queued"===a&&(r.find('[data-file-act="cancel"]').hide(),r.find('[data-file-act="delete"]').show()),"error"===i||"invalid"===i?(c(e.statusText,e),C[e.id][1]=1):"interrupt"===i?c("interrupt",e):"queued"===i?C[e.id][1]=0:"progress"===i?d.remove():"complete"===i&&(b?t.append('<span class="success"><em></em><i class="feather icon-check"></i></span>'):t.find("._success").show()),t.removeClass("state-"+a).addClass("state-"+i)})),(b?r.find("a"):r).on("click",(function(){switch(i(this).data("file-act")){case"cancel":return void p.removeFile(e);case"deleteurl":case"delete":if(a.disableRemove)return p.removeFile(e);v.confirm(T("confirm_delete_file"),e.serverId,(function(){var t=a.deleteData;if(t.key=e.serverId,!t.key)return p.removeFile(e);t._column=n,v.loading(),i.post(a.deleteUrl,t,(function(i){if(v.loading(!1),i.status)return q(e.serverId),void p.removeFile(e);v.error(i.message||"Remove file failed.")}))}));break;case"preview":v.helpers.previewImage(o.find("img").attr("src"),null,e.name)}}))}function z(e){var i=y(e.id);delete C[e.id],M(),i.off().find(".file-panel").off().end().remove()}function M(){var e,a=0,t=0,n=f.find(".progress-bar");i.each(C,(function(e,i){t+=i[0],a+=i[0]*i[1]})),e=t?a/t:0,e=Math.round(100*e)+"%",n.text(e),n.css("width",e),j()}function j(){var e,i="";function a(){(e=p.getStats()).successNum&&(i=T("selected_success",{num:I,size:WebUploader.formatSize(F),success:e.successNum})),e.uploadFailNum&&(i+=(i?T("dot"):"")+T("failed_num",{fail:e.uploadFailNum}))}p&&("ready"===N?(e=p.getStats(),I?i=T("selected_files",{num:I,size:WebUploader.formatSize(F)}):a()):"confirm"===N?(e=p.getStats()).uploadFailNum&&(i=T("selected_has_failed",{success:e.successNum,fail:e.uploadFailNum})):a(),d.html(i))}function O(e,i){var n;if(i=i||{},e!==N){switch(c&&(c.removeClass("state-"+N),c.addClass("state-"+e)),N=e){case"pedding":if(a.disabled)return;u.removeClass("element-invisible"),l.hide(),o.addClass("element-invisible"),b&&(s.removeAttr("style"),s.find(".queueList").removeAttr("style")),B();break;case"ready":u.addClass("element-invisible"),t.find(k).removeClass("element-invisible"),l.show(),a.disabled||o.removeClass("element-invisible"),B(),b&&s.find(".queueList").css({border:"1px solid #d3dde5",padding:"5px"});break;case"uploading":t.find(k).addClass("element-invisible"),f.show(),c.text(T("pause_upload"));break;case"paused":f.show(),c.text(T("go_on_upload"));break;case"confirm":if(p&&(f.hide(),t.find(k).removeClass("element-invisible"),c.text(T("start_upload")),(n=p.getStats()).successNum&&!n.uploadFailNum))return void O("finish");break;case"finish":p&&((n=p.getStats()).successNum?(v.success(T("upload_success_message",{success:n.successNum})),setTimeout((function(){1==a.upload.fileNumLimit&&(p.request("get-stats").numOfSuccess=0)}),10)):(N="done",location.reload()));break;case"decrOriginalFileNum":_>0&&_--;break;case"incrOriginalFileNum":_++;break;case"decrFileNumLimit":if(!p)return;"-1"==(r=p.option("fileNumLimit"))&&(r=0),0==(d=r>=(d=i.num||1)?r-d:0)&&(d="-1"),p.option("fileNumLimit",d);break;case"incrFileNumLimit":if(!p)return;var r,d;"-1"==(r=p.option("fileNumLimit"))&&(r=0),d=r+(d=i.num||1),p.option("fileNumLimit",d);break;case"init":c.addClass("state-"+N),M(),_||a.disabled?(u.addClass("element-invisible"),a.disabled?s.addClass("disabled"):o.show(),O("ready")):b&&(s.removeAttr("style"),s.find(".queueList").css("margin","0")),B()}j()}}function P(e){if(e){var i=x[e];q(e),delete x[e],p&&!i.fake&&p.removeFile(i),O("decrOriginalFileNum"),O("incrFileNumLimit"),v.helpers.len(x)||v.helpers.len(C)||O("pedding")}}function Q(){var e=g.val();return e?e.split(","):[]}function W(e){var i=Q();i.push(e),X(i)}function X(e){e=e.filter((function(e,i,a){return a.indexOf(e)===i})).filter((function(e){return!!e})),g.val(e.join(","))}function q(e){if(!e)return g.val("");X(Q().filter((function(i){return i!=e})))}function B(){p.refresh()}function R(e){var t="";t+="<li title='"+e.serverPath+"'>",b?t+="<p class='imgWrap'><img src='".concat(e.serverUrl,"'></p>"):a.disabled||(t+='<p class="file-action" data-file-act="delete" data-id="'.concat(e.serverId,'"><i class="feather icon-trash red-dark"></i></p>')),t+="<p class='title' style=''><i class='feather icon-check text-white icon-success text-white'></i>",t+=e.serverPath,t+="</p>",b&&(t+="<p class='title' style='margin-bottom:20px;'>&nbsp;</p>",t+="<div class='file-panel' >",a.disabled||(t+="<a class='btn btn-sm btn-white' data-file-act='deleteurl' data-id='".concat(e.serverId,"'><i class='feather icon-trash red-dark' style='font-size:13px'></i></a>")),t+="<a class='btn btn-sm btn-white' data-file-act='preview' data-url='".concat(e.serverUrl,"' ><i class='feather icon-zoom-in'></i></a>"),t+="</div>"),t=i(t+="</li>"),b||(t.find(".file-type").show(),t.find(".title").show(),s.css("background","transparent"));var r=function(){var r=i(this).data("id"),s=a.deleteData;if(a.disableRemove)return t.remove(),P(r);v.confirm(T("confirm_delete_file"),e.serverId,(function(){s.key=r,s._column=n,v.loading(),i.post(a.deleteUrl,s,(function(e){if(v.loading(!1),e.status)return t.remove(),void P(r);v.error(e.message||"Remove file failed.")}))}))};t.find('[data-file-act="deleteurl"]').click(r),t.find('[data-file-act="delete"]').click(r),t.find('[data-file-act="preview"]').click((function(){var e=i(this).data("url");v.helpers.previewImage(e)})),O("incrOriginalFileNum"),O("decrFileNumLimit"),x[e.serverId]=e,W(e.serverId),l.append(t),b&&setTimeout((function(){t.css("margin","5px")}),400)}return this.uploader=p,this.options=a,this.build=function(){s=t.find(a.wrapper),l=i('<ul class="filelist"></ul>').appendTo(s.find(".queueList")),o=s.find(".statusBar"),d=o.find(".info"),c=s.find(".upload-btn"),u=s.find(".placeholder"),f=o.find(".upload-progress").hide(),function(){if(!WebUploader.Uploader.support("flash")&&WebUploader.browser.ie)return void(U?function(e){window.expressinstallcallback=function(e){switch(e){case"Download.Cancelled":break;case"Download.Failed":v.error("Install failed!");break;default:v.success("Install Success！")}delete window.expressinstallcallback};var i="./expressInstall.swf",a='<object type="application/x-shockwave-flash" data="'.concat(i,'" ');WebUploader.browser.ie&&(a+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),a+='width="100%" height="100%" style="outline:0">\n                            <param name="movie" value="'.concat(i,'" />\n                            <param name="wmode" value="transparent" />\n                            <param name="allowscriptaccess" value="always" />\n                            </object>'),e.html(a)}(s):s.html('<a href="http://www.adobe.com/go/getflashplayer" target="_blank" border="0"><img alt="get flash player" src="http://www.adobe.com/macromedia/style_guide/images/160x41_Get_Flash_Player.jpg" /></a>'));if(!WebUploader.Uploader.support())v.error("您的浏览器不支持Web Uploader！")}(),this.uploader=p=WebUploader.create(a.upload),p.on("dndAccept",(function(e){for(var i=!1,a=e.length,t=0;t<a;t++)if(~"text/plain;application/javascript ".indexOf(e[t].type)){i=!0;break}return!i})),a.upload.fileNumLimit>1&&!a.disabled&&p.addButton({id:k,label:'<i class="feather icon-folder"></i> &nbsp;'+T("go_on_add")}),p.onUploadProgress=function(e,i){C[e.id][1]=i,M()},p.onBeforeFileQueued=function(e){},p.onFileQueued=function(e){I++,F+=e.size,1===I&&(u.addClass("element-invisible"),o.show()),L(e),O("ready"),M()},p.onFileDequeued=function(e){I--,F-=e.size,I||v.helpers.len(x)||O("pedding"),z(e)},p.on("all",(function(e,t,r){switch(e){case"uploadFinished":O("confirm"),l=Q(),o=p.getStats().successNum,d=i.extend({},a.formData),o&&l&&a.autoUpdateColumn&&(d[n]=l.join(","),delete d.upload_column,i.post(a.updateServer,d));break;case"startUpload":O("uploading");break;case"stopUpload":O("paused");break;case"uploadAccept":if(r&&r.error)return v.error(r.error.message),E[t.file.id]=t.file,!1;if(r.merge)return;if(t.file.serverId=r.id,t.file.serverName=r.name,t.file.serverPath=r.path,t.file.serverUrl=r.url||null,W(r.id),!b){var s=y(t.file.id);s.find(".file-action").hide(),s.find('[data-file-act="delete"]').show()}}var l,o,d})),p.onError=function(e){switch(e){case"Q_TYPE_DENIED":v.error(T("Q_TYPE_DENIED"));break;case"Q_EXCEED_NUM_LIMIT":v.error(T("Q_EXCEED_NUM_LIMIT",{num:a.upload.fileNumLimit}));break;case"F_EXCEED_SIZE":v.error(T("F_EXCEED_SIZE"));break;case"Q_EXCEED_SIZE_LIMIT":v.error(T("Q_EXCEED_SIZE_LIMIT"));break;case"F_DUPLICATE":v.warning(T("F_DUPLICATE"));break;default:v.error("Error: "+e)}},c.on("click",(function(){if(i(this).hasClass("disabled"))return!1;"ready"===N||"paused"===N?p.upload():"uploading"===N&&p.stop()})),d.on("click",".retry",(function(){p.retry()})),d.on("click",".ignore",(function(){for(var e in E)p.removeFile(e,!0),delete E[e]})),O("init")},this.preview=function(){for(var e in a.preview){var i,t=a.preview[e].path;t.indexOf(".")&&(i=t.split(".").pop()),R({serverId:a.preview[e].id,serverUrl:a.preview[e].url,serverPath:t,ext:i,fake:1})}},this.setState=O,this.refreshButton=B,this.getFileView=y,this.getFileViewSelector=w,this.addFileView=L,this.removeUploadFileView=z,this.isImage=A,this.getColumn=function(){return n},this}Dcat.Uploader=function(e){return new a(e)}}(window,jQuery)}});
//# sourceMappingURL=upload.js.map