import{j as t}from"./jsx-runtime-D_zvdyIk.js";var e=(n=>(n.PRIMARY="primary",n.SECONDARY="secondary",n.SUCCESS="success",n.DANGER="danger",n.WARNING="warning",n.INFO="info",n.LIGHT="light",n.DARK="dark",n.LINK="link",n))(e||{}),r=(n=>(n.XS="xs",n.SM="sm",n.MD="md",n.LG="lg",n.XL="xl",n))(r||{}),s=(n=>(n.SQUARED="squared",n.ROUNDED="rounded",n.PILLED="pill",n))(s||{});const a=({children:n,variant:u="primary",size:S="xs",corner:M="squared",outlined:d=!1})=>t.jsx("button",{className:`btn btn--variant-${u} btn--size-${S} btn--corner-${M} btn--${d?"outlined":""}`,children:n});a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`BtnVariants.PRIMARY |\r
BtnVariants.SECONDARY |\r
BtnVariants.SUCCESS |\r
BtnVariants.DANGER |\r
BtnVariants.WARNING |\r
BtnVariants.INFO |\r
BtnVariants.LIGHT |\r
BtnVariants.DARK |\r
BtnVariants.LINK`,elements:[{name:"BtnVariants.PRIMARY"},{name:"BtnVariants.SECONDARY"},{name:"BtnVariants.SUCCESS"},{name:"BtnVariants.DANGER"},{name:"BtnVariants.WARNING"},{name:"BtnVariants.INFO"},{name:"BtnVariants.LIGHT"},{name:"BtnVariants.DARK"},{name:"BtnVariants.LINK"}]},description:"",defaultValue:{value:"BtnVariants.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"BtnSizes.XS | BtnSizes.SM | BtnSizes.MD | BtnSizes.LG | BtnSizes.XL",elements:[{name:"BtnSizes.XS"},{name:"BtnSizes.SM"},{name:"BtnSizes.MD"},{name:"BtnSizes.LG"},{name:"BtnSizes.XL"}]},description:"",defaultValue:{value:"BtnSizes.XS",computed:!0}},corner:{required:!1,tsType:{name:"union",raw:"CornerStyles.SQUARED | CornerStyles.ROUNDED | CornerStyles.PILLED",elements:[{name:"CornerStyles.SQUARED"},{name:"CornerStyles.ROUNDED"},{name:"CornerStyles.PILLED"}]},description:"",defaultValue:{value:"CornerStyles.SQUARED",computed:!0}},outlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const D={title:"Design System/Atoms/Buttons",component:a,argTypes:{variant:{options:[e.PRIMARY,e.SECONDARY,e.SUCCESS,e.WARNING,e.INFO,e.DANGER,e.DARK,e.LIGHT,e.LINK],control:{type:"select"}},size:{options:[r.XS,r.SM,r.MD,r.LG,r.XL],control:{type:"select"}},corner:{options:[s.SQUARED,s.ROUNDED,s.PILLED],control:{type:"select"}}},decorators:[n=>t.jsxs("fieldset",{children:[t.jsx("legend",{children:"Button"}),t.jsx(n,{})]})]},i={args:{variant:e.PRIMARY,size:r.LG,children:"SUBMIT"}},R={render:n=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex-row",children:[t.jsxs("div",{className:"flex-column",children:[t.jsx(a,{variant:e.PRIMARY,size:r.XS,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.SM,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.MD,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.LG,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.XL,...n,children:"PRIMARY"})]}),t.jsxs("div",{className:"flex-column",children:[t.jsx(a,{variant:e.PRIMARY,size:r.XS,corner:s.PILLED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.SM,corner:s.PILLED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.MD,corner:s.PILLED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.LG,corner:s.PILLED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.XL,corner:s.PILLED,...n,children:"PRIMARY"})]}),t.jsxs("div",{className:"flex-column",children:[t.jsx(a,{variant:e.PRIMARY,size:r.XS,corner:s.ROUNDED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.SM,corner:s.ROUNDED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.MD,corner:s.ROUNDED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.LG,corner:s.ROUNDED,...n,children:"PRIMARY"}),t.jsx(a,{variant:e.PRIMARY,size:r.XL,corner:s.ROUNDED,...n,children:"PRIMARY"})]})]})}),args:{variant:e.DARK},argTypes:{variant:{options:[e.PRIMARY,e.SECONDARY,e.SUCCESS,e.WARNING,e.INFO,e.DANGER,e.DARK,e.LIGHT,e.LINK],control:{type:"select"}},size:{table:{disable:!0}},corner:{table:{disable:!0}}}};var o,l,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: BtnVariants.PRIMARY,
    size: BtnSizes.LG,
    children: 'SUBMIT'
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var I,A,B;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    return <>\r
                <div className='flex-row'>\r
                    <div className='flex-column'>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XS} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.SM} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.MD} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.LG} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XL} {...args}>PRIMARY</Button>\r
                    </div>\r
                    <div className='flex-column'>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XS} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.SM} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.MD} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.LG} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XL} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>\r
                    </div>\r
                    <div className='flex-column'>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XS} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.SM} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.MD} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.LG} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>\r
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XL} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>\r
                    </div>\r
                </div>\r
            </>;
  },
  args: {
    variant: BtnVariants.DARK
  },
  argTypes: {
    variant: {
      options: [BtnVariants.PRIMARY, BtnVariants.SECONDARY, BtnVariants.SUCCESS, BtnVariants.WARNING, BtnVariants.INFO, BtnVariants.DANGER, BtnVariants.DARK, BtnVariants.LIGHT, BtnVariants.LINK],
      control: {
        type: 'select'
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    corner: {
      table: {
        disable: true
      }
    }
  }
}`,...(B=(A=R.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Y=["Buttons","AllButtons"];export{R as AllButtons,i as Buttons,Y as __namedExportsOrder,D as default};
