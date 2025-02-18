import{j as r}from"./jsx-runtime-D_zvdyIk.js";var p=(a=>(a.HERO="hero",a.PAGE_TITLE="page_title",a.SECTION_HEADER="section_header",a.ARTICLE_HEADER="article_header",a.HEADING1="heading1",a.HEADING2="heading2",a.HEADING3="heading3",a.HEADING4="heading4",a.HEADING5="heading5",a.HEADING6="heading6",a.SUB_TITLE1="sub_title1",a.SUB_TITLE2="sub_title2",a.BODY1="body1",a.BODY2="body2",a.CAPTION="caption",a.OVERLINE="overline",a.BUTTON="button",a))(p||{});const d={hero:"h1",page_title:"h1",section_header:"h2",article_header:"h3",heading1:"h1",heading2:"h2",heading3:"h3",heading4:"h4",heading5:"h5",heading6:"h6",sub_title1:"h3",sub_title2:"h4",body1:"p",body2:"p",caption:"p",overline:"p",button:"span"},t=({children:a,variant:o})=>{const g=d[o];return r.jsx(g,{className:`typography typography--variant-${o} `,children:a})};t.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!0,tsType:{name:"union",raw:`TypographyVariants.HERO |\r
TypographyVariants.PAGE_TITLE |\r
TypographyVariants.SECTION_HEADER |\r
TypographyVariants.ARTICLE_HEADER |\r
TypographyVariants.HEADING1 |\r
TypographyVariants.HEADING2 |\r
TypographyVariants.HEADING3 |\r
TypographyVariants.HEADING4 |\r
TypographyVariants.HEADING5 |\r
TypographyVariants.HEADING6 |\r
TypographyVariants.SUB_TITLE1 |\r
TypographyVariants.SUB_TITLE2 |\r
TypographyVariants.BODY1 |\r
TypographyVariants.BODY2 |\r
TypographyVariants.CAPTION |\r
TypographyVariants.OVERLINE |\r
TypographyVariants.BUTTON`,elements:[{name:"TypographyVariants.HERO"},{name:"TypographyVariants.PAGE_TITLE"},{name:"TypographyVariants.SECTION_HEADER"},{name:"TypographyVariants.ARTICLE_HEADER"},{name:"TypographyVariants.HEADING1"},{name:"TypographyVariants.HEADING2"},{name:"TypographyVariants.HEADING3"},{name:"TypographyVariants.HEADING4"},{name:"TypographyVariants.HEADING5"},{name:"TypographyVariants.HEADING6"},{name:"TypographyVariants.SUB_TITLE1"},{name:"TypographyVariants.SUB_TITLE2"},{name:"TypographyVariants.BODY1"},{name:"TypographyVariants.BODY2"},{name:"TypographyVariants.CAPTION"},{name:"TypographyVariants.OVERLINE"},{name:"TypographyVariants.BUTTON"}]},description:""}}};const m={title:"Design System/Atoms/Typography",component:t,argTypes:{variant:{control:"select",options:Object.values(p)}},decorators:[a=>r.jsxs("fieldset",{children:[r.jsx("legend",{children:"Typography"}),r.jsx(a,{})]})]},e={args:{variant:p.HEADING1,children:"Lorem ipsum"}},n={render:()=>r.jsx(r.Fragment,{children:Object.values(p).map(a=>r.jsx(t,{variant:a,children:a}))})};var s,i,y;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: TypographyVariants.HEADING1,
    children: 'Lorem ipsum'
  }
}`,...(y=(i=e.parameters)==null?void 0:i.docs)==null?void 0:y.source}}};var h,T,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <>\r
            {Object.values(TypographyVariants).map(x => <Typography variant={x}>{x}</Typography>)}\r
        </>
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const I=["TypographyX","TypographyAll"];export{n as TypographyAll,e as TypographyX,I as __namedExportsOrder,m as default};
