import React from "react"
import './Button.scss'
export enum BtnVariants {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info',
    LIGHT = 'light',
    DARK = 'dark',
    LINK = 'link',
}
export enum BtnSizes {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl'
}
export enum CornerStyles {
    SQUARED = 'squared',
    ROUNDED = 'rounded',
    PILLED = 'pill'
}
type BtnVariant = BtnVariants.PRIMARY |
    BtnVariants.SECONDARY |
    BtnVariants.SUCCESS |
    BtnVariants.DANGER |
    BtnVariants.WARNING |
    BtnVariants.INFO |
    BtnVariants.LIGHT |
    BtnVariants.DARK |
    BtnVariants.LINK;
type BtnSize = BtnSizes.XS | BtnSizes.SM | BtnSizes.MD | BtnSizes.LG | BtnSizes.XL;
type BtnCorner = CornerStyles.SQUARED | CornerStyles.ROUNDED | CornerStyles.PILLED

interface ButtonProps {
    children: React.ReactNode,
    variant?: BtnVariant,
    size?: BtnSize,
    corner?: BtnCorner,
    outlined?: boolean
}
const Button = ({ children, variant = BtnVariants.PRIMARY, size = BtnSizes.XS, corner = CornerStyles.SQUARED, outlined = false }: ButtonProps) => {
    return (
        <button className={`btn btn--variant-${variant} btn--size-${size} btn--corner-${corner} btn--${outlined ? 'outlined' : ''}`}>
            {children}
        </button>
    )
}
export default Button