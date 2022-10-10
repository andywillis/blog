import{c as _}from"./vendor.c780f2ce.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const $="_icon_pyxs2_1",m="_active_pyxs2_10",c={icon:$,active:m};function f(t){return`
    <button
      class="${_(c.icon,t.active&&c.active)}"
      data-type="${t.name}"
      type="button"
    ></button>
  `}const y="_iconStrip_1mqre_1",g={iconStrip:y};function p(t){return`
    <div class="${g.iconStrip}">
      ${t.map(f).join("")}
    </div>
  `}const h=[{name:"tagcloud",active:!0},{name:"email",active:!0},{name:"flickr",active:!0},{name:"rss",active:!1}],v="_header_11y77_3",b="_nav_11y77_13",i={header:v,nav:b};function j(){return`
    <header class="${i.header}">
      <nav class="${i.nav}">
        ${f({name:"home",active:!0})}
        ${p(h)}
        </nav>
    </header>
  `}const I="_date_1fzen_3",q={date:I};function k(t){return`<p class=${q.date}>${t}</p>`}const x="_blockquote_bct3v_5",S={blockquote:x};function w(t){return`
    <p class=${S.blockquote}>
      ${t}
    </p>
  `}const z="_h1_1gmff_3",L="_h2_1gmff_10",C={h1:z,h2:L};function d({level:t,text:n}){return`
    <div class="${C[t]}">
      ${n}
    </div>
  `}const T="_imageContainer_12gzo_1",O="_image_12gzo_1",D="_fadeIn_12gzo_1",l={imageContainer:T,image:O,fadeIn:D};function E({src:t,alt:n}){return`
    <div class="${l.imageContainer}">
      <img
        class="${l.image}"
        src="${t}"
        alt="${n}"
      >
    </div>
  `}const F="_paragraph_12jjm_5",H={paragraph:F};function N(t){return`
    <p class="${H.paragraph}">
      ${t}
    </p>
  `}const P="_table_xrx28_7",A={table:P};function B(t){return`
    <table class="${A.table}">
      ${t}
    </table>
  `}function M(t){switch(t.type){case"blockquote":return w(t.html);case"heading":return d({level:t.level,text:t.text});case"image":return E({src:t.src,alt:t.alt});case"table":return B(t.html);default:return N(t.html)}}function J(t){return`${M(t)}`}const K="_body_1l82z_1",W={body:K};function Y(t){return`
    <div class="${W.body}">
      ${t.map(J).join("")}
    </div>
  `}const G="_tag_yzv5t_3",Q={tag:G};function R(t){return`
    <li class="${Q.tag}">
      ${t.text}
    </li>
  `}const U="_tags_48fcp_1",V={tags:U};function X(t){return`
    <ul class=${V.tags}>
      ${t.map(R).join("")}
    </ul> 
  `}function Z(t){return d({level:"h1",text:t})}const tt="_entry_2e3fn_1",et={entry:tt};function nt(t){const{date:n,title:r,body:a,tags:e}=t;return`
    <div class="${et.entry}">
      ${Z(r)}
      ${k(n)}
      ${Y(a)}
      ${X(e)}
    </div>
  `}const ot="_entries_5jri3_1",at={entries:ot};function rt(t){return`
    <main class="${at.entries}">
      ${t.map(nt).join("")}
    </main>
  `}const st="_footer_1l705_3",u={footer:st};function ct(t){return`
    <footer class="${u.footer}">
      <h2 class="${u.heading}">${t}</h2>
    </footer>
  `}const it="_journal_1phc2_1",lt="_fadeIn_1phc2_1",ut={journal:it,fadeIn:lt};function ft(t){return`
    <div class="${ut.journal}">
      ${j()}
      ${rt(t.entries)}
      ${ct(`\xA9 Andy Willis ${new Date().getFullYear()}`)}
    </div>
  `}async function dt(t){try{return(await fetch(t)).json()}catch(n){console.log(n)}}async function _t(){const t=await dt("/journal");return ft(t)}const $t=await _t();document.body.innerHTML=$t;
//# sourceMappingURL=index.23fc381a.js.map
