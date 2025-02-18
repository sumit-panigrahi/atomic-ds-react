import type { Meta, StoryObj } from '@storybook/react';

import Button, { BtnSizes, BtnVariants, CornerStyles } from './Button';

type BtnProps = React.ComponentProps<typeof Button>;
const meta: Meta<BtnProps> = {
    title: 'Design System/Atoms/Buttons',
    component: Button,
    argTypes: {
        variant: {
            options: [BtnVariants.PRIMARY,
            BtnVariants.SECONDARY,
            BtnVariants.SUCCESS,
            BtnVariants.WARNING,
            BtnVariants.INFO,
            BtnVariants.DANGER,
            BtnVariants.DARK,
            BtnVariants.LIGHT,
            BtnVariants.LINK],
            control: { type: 'select' }
        },
        size: {
            options: [
                BtnSizes.XS, BtnSizes.SM, BtnSizes.MD, BtnSizes.LG, BtnSizes.XL
            ],
            control: { type: 'select' }
        },
        corner: {
            options: [CornerStyles.SQUARED, CornerStyles.ROUNDED, CornerStyles.PILLED],
            control: { type: 'select' }
        }
    },
    decorators: [
        (Story) => (
            <fieldset>
                <legend>Button</legend>
                <Story />
            </fieldset>)
    ],
};

export default meta;

type Story = StoryObj<BtnProps>;

export const Buttons: Story = {
    args: {
        variant: BtnVariants.PRIMARY,
        size: BtnSizes.LG,
        children: 'SUBMIT'
    },

}

export const AllButtons: Story = {
    render: (args) => {
        return (
            <>
                <div className='flex-row'>
                    <div className='flex-column'>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XS} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.SM} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.MD} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.LG} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XL} {...args}>PRIMARY</Button>
                    </div>
                    <div className='flex-column'>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XS} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.SM} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.MD} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.LG} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XL} corner={CornerStyles.PILLED} {...args}>PRIMARY</Button>
                    </div>
                    <div className='flex-column'>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XS} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.SM} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.MD} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.LG} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>
                        <Button variant={BtnVariants.PRIMARY} size={BtnSizes.XL} corner={CornerStyles.ROUNDED} {...args}>PRIMARY</Button>
                    </div>
                </div>
            </>
        )
    },
    args: {
        variant: BtnVariants.DARK,
       
    },
    argTypes: {
        variant: {
            options: [BtnVariants.PRIMARY,
            BtnVariants.SECONDARY,
            BtnVariants.SUCCESS,
            BtnVariants.WARNING,
            BtnVariants.INFO,
            BtnVariants.DANGER,
            BtnVariants.DARK,
            BtnVariants.LIGHT,
            BtnVariants.LINK],
            control: { type: 'select' }
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
}