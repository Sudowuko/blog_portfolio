"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[336],{9535:function(e,t,a){var l=a(7294),n=a(5444),i=a(6125);t.Z=function(){var e,t,r=(0,n.useStaticQuery)("1882146087"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.JPG",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(2068)}),(null==c?void 0:c.name)&&l.createElement("p",null,(null==c?void 0:c.summary)||null,"Feel free to follow me on ",l.createElement("a",{href:"https://www.linkedin.com/in/"+(null==o?void 0:o.linkedin)},"Linkedin")," and ",l.createElement("a",{href:"https://www.github.com/"+o.github},"Github")," "," or reach out through "," ",l.createElement("a",{href:"mailto: j2nicola@uwaterloo.ca"},"email.")))}},2487:function(e,t,a){var l=a(7294),n=a(5444),i=a(9535),r=a(7198),c=a(3751),o=a(6241);t.Z=function(e){var t,a=e.data,s=e.location,m=e.posts,u=e.category,d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return 0===m.length?l.createElement(r.Z,{location:s,title:d},l.createElement(i.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:s,title:d},l.createElement(c.Z,{title:u}),l.createElement(o.Z,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),l.createElement("br",null))))})),l.createElement("hr",null)),l.createElement(i.Z,null))}},6241:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(5444),i="navbar-module--nav-link-item--p4meV",r=function(e){var t=e.pageTitle,a=e.children;return l.createElement("div",null,l.createElement("h1",null,"Blog and Portfolio"),l.createElement("title",null,t),l.createElement("nav",null,l.createElement("ul",{className:"navbar-module--nav-links--+CChw"},l.createElement("li",{className:i},l.createElement(n.Link,{to:"/"},"Home")),l.createElement("li",{className:i},l.createElement(n.Link,{to:"/productivity"},"Productivity")),l.createElement("li",{className:i},l.createElement(n.Link,{to:"/resources"},"Resources")),l.createElement("li",{className:i},l.createElement(n.Link,{to:"/gratitude"},"Gratitude")))),l.createElement("main",null,l.createElement("h1",null,t),a))}},8173:function(e,t,a){a.r(t);var l=a(7294),n=a(2487);t.default=function(e){var t=e.data,a=e.location,i=t.allMarkdownRemark.nodes.filter((function(e){return"Productivity"===e.frontmatter.category}));return l.createElement("main",null,l.createElement(n.Z,{location:a,data:t,posts:i,category:"Productivity"}))}},2068:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#584838","images":{"fallback":{"src":"/static/b3a3da5fec988e8d75d6cb31bc115671/d24ee/profile-pic.jpg","srcSet":"/static/b3a3da5fec988e8d75d6cb31bc115671/d24ee/profile-pic.jpg 50w,\\n/static/b3a3da5fec988e8d75d6cb31bc115671/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/b3a3da5fec988e8d75d6cb31bc115671/d4bf4/profile-pic.avif 50w,\\n/static/b3a3da5fec988e8d75d6cb31bc115671/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/b3a3da5fec988e8d75d6cb31bc115671/3faea/profile-pic.webp 50w,\\n/static/b3a3da5fec988e8d75d6cb31bc115671/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-productivity-js-69f6829b4d81580bdfbe.js.map