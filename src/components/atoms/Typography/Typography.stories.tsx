import type { Meta, StoryObj } from '@storybook/react';
import Typography, { TypographyVariants } from './Typography';
import React from 'react';
type TypographyProps = React.ComponentProps<typeof Typography>
const meta: Meta<TypographyProps> = {
    title: 'Design System/Atoms/Typography',
    component: Typography,
    argTypes: {
        variant: {
            control: 'select',
            options: Object.values(TypographyVariants)
        }
    },
    decorators: [
        (Story) => (
            <fieldset>
                <legend>Typography</legend>
                <Story />
            </fieldset>)
    ],
};

export default meta;

type Story = StoryObj<TypographyProps>;



export const TypographyX: Story = {
    args: {
        variant: TypographyVariants.HEADING1,
        children: 'Lorem ipsum'
    }
}
export const TypographyAll: Story = {
    render: () => (
        <>
            {Object.values(TypographyVariants).map(x => <Typography variant={x}>{x}</Typography>)}
        </>
    )
}



