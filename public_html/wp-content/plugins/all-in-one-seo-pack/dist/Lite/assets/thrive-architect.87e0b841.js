import{o as b,c as g,a as n,t as S,C as c,u as a,l as C,G as y,Y as f,h}from"./js/runtime-dom.esm-bundler.5c3c7d72.js";import{c as P,b as x}from"./js/vue-router.2f910c93.js";import{l as v}from"./js/index.7c01c5f2.js";import{l as E}from"./js/index.1f3cb1fa.js";import{e as T,y as w,J as k,c as $}from"./js/index.a87126ce.js";import{d as m}from"./js/Caret.d9cc70ba.js";import{e as A,m as B}from"./js/helpers.fa367b69.js";import{i as R}from"./js/isEqual.96d3394c.js";import"./js/translations.d159963e.js";import{i as D,_ as V,s as L}from"./js/default-i18n.20001971.js";import{_ as j}from"./js/App.91fc1a84.js";import{_ as N}from"./js/ScoreButton.78818232.js";import{S as O}from"./js/LogoGear.cb664d3b.js";import"./js/_plugin-vue_export-helper.eefbdd86.js";import"./js/helpers.53868b98.js";import"./js/metabox.3ecdfc83.js";import"./js/cleanForSlug.97664b33.js";import"./js/toString.f0787db8.js";import"./js/_baseTrim.11b89ad9.js";import"./js/_stringToArray.f9ddb970.js";import"./js/_baseSet.9f9da1bd.js";import"./js/regex.8a6101c0.js";import"./js/_baseIsEqual.aba7ca44.js";import"./js/_getTag.1e50d0c4.js";/* empty css                */import"./js/LicenseKeyBar.669e450f.js";import"./js/ScrollTo.81bea8a7.js";import"./js/params.af7ed354.js";import"./js/allowed.ab723907.js";import"./js/constants.1ec71a84.js";import"./js/SettingsRow.9f92e269.js";import"./js/Row.df38a5f6.js";import"./js/Checkbox.6db0b9ed.js";import"./js/Checkmark.e40641dd.js";import"./js/Url.e5c2ac01.js";import"./js/Tabs.7c14121d.js";import"./js/ProBadge.751e0b85.js";import"./js/Information.13e8cece.js";import"./js/Slide.39c07c03.js";import"./js/Index.f71e22d2.js";import"./js/MaxCounts.7c38e980.js";import"./js/Tags.ac521d15.js";import"./js/Tooltip.73441134.js";import"./js/Ellipse.e3ae0692.js";import"./js/Eye.8dc261a7.js";import"./js/debounce.f7a8b998.js";import"./js/toNumber.90507ad4.js";import"./js/toFinite.b0a886e7.js";import"./js/TruSeoScore.fe90f575.js";import"./js/Statistics.2cff8c0a.js";import"./js/Plus.426117bd.js";import"./js/RadioToggle.333e7750.js";import"./js/GoogleSearchPreview.dee77d02.js";import"./js/HtmlTagsEditor.e7779e12.js";import"./js/Editor.29413d15.js";import"./js/_baseClone.2009409f.js";import"./js/_arrayEach.6af5abac.js";import"./js/UnfilteredHtml.ffcab8e3.js";import"./js/popup.cd963607.js";import"./js/SetupWizardStore.efc7053d.js";import"./js/datetime.f197aeae.js";import"./js/license.d747bfcd.js";import"./js/upperFirst.2cd99bdd.js";import"./js/Mobile.ada2591a.js";import"./js/Settings.db203e07.js";import"./js/TableOfContentsStore.3dbc74df.js";import"./js/vue3-apexcharts.57b6886c.js";import"./js/GoogleSearchConsole.8734f3e0.js";import"./js/ConnectCta.1288a346.js";import"./js/Index.ac5cec7c.js";import"./js/Blur.edde4939.js";import"./js/Graph.53bec904.js";import"./js/numbers.9fc174f3.js";import"./js/WpTable.5920faf2.js";import"./js/Table.705ec1c3.js";import"./js/Download.17eb5e1f.js";import"./js/RequiredPlans.1d9170ab.js";import"./js/addons.dc226733.js";import"./js/PostTypes.dafa8837.js";import"./js/External.3b8c2917.js";import"./js/InternalOutbound.8d129cbf.js";import"./js/Image.ba059181.js";import"./js/FacebookPreview.9bed838b.js";import"./js/Img.90c4fd14.js";import"./js/Profile.ad607616.js";import"./js/ImageUploader.d24da2c6.js";import"./js/TwitterPreview.e4f6f7f5.js";import"./js/Book.74a13fcd.js";import"./js/Build.b598c742.js";import"./js/Redirects.3473047f.js";import"./js/Index.942d349d.js";import"./js/JsonValues.3fcfec97.js";import"./js/External.c9d4f255.js";import"./js/escapeRegExp.9b141b1a.js";import"./js/Exclamation.22e53a8b.js";import"./js/Gear.bd4e1565.js";import"./js/date.6089ddf7.js";import"./js/DatePicker.cad24eb3.js";import"./js/Calendar.b69b61c4.js";import"./js/pick.67675203.js";import"./js/Card.eb2e90c7.js";import"./js/Upsell.043993be.js";let d={};const l=()=>{const t={...d},o=A();R(t,o)||(d=o,B())},M=()=>{const t=T();t.saveCurrentPost(t.currentPost).then(()=>{w().fetch()})},U=()=>{TVE.add_action("tcb-ready",l),["tcb.after-insert","tcb.element.remove","tcb.element.duplicate","tcb.froala.focus","tcb.froala.blur","tcb.image.change","after_undo_redo"].forEach(t=>{TVE.add_action(t,()=>{m(l,200)})}),TVE.add_action("tve.save_post.success",()=>{m(M,100)})};let r=!1;const q=()=>{TVE.$("#sidebar-top, #aioseo-score-btn-settings").on("click",".aioseo-score-button",()=>{const t=document.querySelector(".tcb-sidebar-icon-aioseo"),o=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t==null||t.dispatchEvent(o)}),TVE.$("#settings-action-btn").on("click",()=>{r=!r,TVE.$(".tcb-aioseo #settings-action-btn").toggleClass("active",r),TVE.$body.toggleClass("aioseo-settings-enabled",r),TVE.ajax("update_option","post",{option_name:"is_aioseo_settings_enabled",option_value:r}).done(()=>{})})},G=()=>{TVE.add_action("tcb.drawer.toggle",t=>{t==="settings"&&setTimeout(()=>{const o=TVE.$("#aioseo-panel"),e=TVE.$(".tcb-sidebar-icon-aioseo").hasClass("active");e?o.show():o.hide(),u(e)},100)}),TVE.add_action("tcb.drawer.hide",()=>{setTimeout(()=>{const t=TVE.$(".tcb-sidebar-icon-aioseo").hasClass("active");u(t)},110)})},u=t=>{TVE.$("#aioseo-score-btn-header .aioseo-score-button").toggleClass("aioseo-score-button--active",t),TVE.$body.toggleClass("aioseo-settings-active",t)},H=()=>{if(TVE.$("#aioseo-panel").length)return;const t=TVE.$(".settings"),o=TVE.$("<div>",{id:"aioseo-panel"}).hide();t.append(o)},W=()=>{if(TVE.$("#aioseo-score-btn-header").length)return;const t=TVE.$("#tcb-sidebar-top-right .button-group"),o=TVE.$("<div>",{id:"aioseo-score-btn-header"});t.append(o)},z=()=>{r=TVE.CONST.is_aioseo_settings_enabled==="true"||TVE.CONST.is_aioseo_settings_enabled==="1",r&&(TVE.$(".tcb-aioseo #settings-action-btn").addClass("active"),TVE.$body.addClass("aioseo-settings-enabled")),TVE.$("html").attr("dir",D()?"rtl":"ltr"),TVE.$("body").addClass("wp-core-ui"),TVE.$("html").removeClass("no-js").addClass("js"),H(),W(),G(),q()},s={id:"aioseo-limit-modified-date-thrive",param:"aioseo_limit_modified_date",title:V("Save (Don't Modify Date)","all-in-one-seo-pack"),flag:!1},J=()=>{TVE.$("#tve-save-dash-return").after(`
		<a
			href="javascript:void(0)"
			id="${s.id}"
			title="${s.title}"
		>
			${s.title}
		</a>
	`)},Y=()=>{TVE.add_filter("tcb_save_post_data_before",t=>(t[s.param]=s.flag,t)),TVE.add_action("tve.save_post.success",()=>{s.flag=!1}),TVE.$body.on("click",`#${s.id}`,()=>{s.flag=!0,TVE.main.editor_settings.save()})},F=()=>{J(),Y()},I={class:"edit-post-sidebar editor-sidebar aioseo-thrive-sidebar"},K={class:"aioseo-thrive-sidebar__header"},Q={class:"aioseo-thrive-sidebar__header-title"},X={class:"aioseo-thrive-sidebar__content"},_={__name:"Sidebar",setup(t){const e={headerTitle:L(V("%1$s Settings","all-in-one-seo-pack"),"AIOSEO")};return(i,p)=>(b(),g("div",I,[n("div",K,[n("div",Q,S(e.headerTitle),1)]),n("div",X,[c(a(j))])]))}},Z={class:"aioseo-thrive-score-button"},tt={__name:"Button",props:{buttonContext:{type:String}},setup(t){const{currentPost:o}=k(T());return(e,i)=>(b(),g("div",Z,[c(a(N),{score:a(o).seo_score,class:y([t.buttonContext==="Settings"?"aioseo-score-button--active":""])},{icon:C(()=>[c(a(O))]),_:1},8,["score","class"])]))}},ot=()=>{const t=P({history:x(),routes:[{path:"/",component:_}]});let o=f({name:"Standalone/ThriveArchitect",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>h(_)});o=v(o),o=E(o),o.use(t),t.app=o,$(o,t),o.mount("#aioseo-panel")},et=()=>{["aioseo-score-btn-settings","aioseo-score-btn-header"].forEach(o=>{const e=o.replace("aioseo-score-btn-","").replace(/^\w/,p=>p.toUpperCase());let i=f({name:`Standalone/ThriveArchitect/Score${e}`,render:()=>h(tt)},{buttonContext:e});i=v(i),i=E(i),$(i),i.mount(`#${o}`)})},it=()=>{z(),ot(),et(),F(),U()};it();
