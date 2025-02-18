import { JSX } from "react";
import './Typography.scss';
export enum TypographyVariants {
    HERO            = 'hero',
    PAGE_TITLE      = 'page_title',
    SECTION_HEADER  = 'section_header',
    ARTICLE_HEADER  = 'article_header',
    HEADING1        = 'heading1',
    HEADING2        = 'heading2',
    HEADING3        = 'heading3',
    HEADING4        = 'heading4',
    HEADING5        = 'heading5',
    HEADING6        = 'heading6',
    SUB_TITLE1      = 'sub_title1',
    SUB_TITLE2      = 'sub_title2',
    BODY1           = 'body1',
    BODY2           = 'body2',
    CAPTION         = 'caption',
    OVERLINE        = 'overline',
    BUTTON          = 'button'
}
const TypographyVariantTags: Record<TypographyVariants, keyof JSX.IntrinsicElements> = {
    'hero'          : 'h1',
    'page_title'    : 'h1',
    'section_header': 'h2',
    'article_header': 'h3',
    'heading1'      : 'h1',
    'heading2'      : 'h2',
    'heading3'      : 'h3',
    'heading4'      : 'h4',
    'heading5'      : 'h5',
    'heading6'      : 'h6',
    'sub_title1'    : 'h3',
    'sub_title2'    : 'h4',
    'body1'         : 'p',
    'body2'         : 'p',
    'caption'       : 'p',
    'overline'      : 'p',
    'button'        : 'span'
}
type TypographyVariant =
    TypographyVariants.HERO |
    TypographyVariants.PAGE_TITLE |
    TypographyVariants.SECTION_HEADER |
    TypographyVariants.ARTICLE_HEADER |
    TypographyVariants.HEADING1 |
    TypographyVariants.HEADING2 |
    TypographyVariants.HEADING3 |
    TypographyVariants.HEADING4 |
    TypographyVariants.HEADING5 |
    TypographyVariants.HEADING6 |
    TypographyVariants.SUB_TITLE1 |
    TypographyVariants.SUB_TITLE2 |
    TypographyVariants.BODY1 |
    TypographyVariants.BODY2 |
    TypographyVariants.CAPTION |
    TypographyVariants.OVERLINE |
    TypographyVariants.BUTTON;

export interface TypographyProps {
    children: React.ReactNode
    variant: TypographyVariant
}
const Typography = ({ children, variant }: TypographyProps) => {
    const Tag = TypographyVariantTags[variant]
    return (
        <Tag className={`typography typography--variant-${variant} `}>
            {children}
        </Tag>
    )
}
export default Typography