
import './List.scss'
export enum ListVariantTypes {
    Ordered = 'ordered',
    Unordered = 'unordered',
    Default='default'
}
export enum Directions {
    Row = 'row',
    Column = 'column',
    RowReverse = 'row-reverse',
    ColumnReverse = 'column-reverse'
}
type ListVariants = ListVariantTypes.Ordered | ListVariantTypes.Unordered | ListVariantTypes.Default
type ListDirections = Directions.Row | Directions.RowReverse | Directions.Column | Directions.ColumnReverse
interface ListProps {
    children: React.ReactNode,
    variant?: ListVariants,
    direction?: ListDirections
}
const List = ({ children, variant = ListVariantTypes.Default, direction = Directions.Row }: ListProps) => {
    const clazz = `list list--variant-${variant} list--direction-${direction}`
    return (
        <>
            {
                variant === 'ordered' ?
                    <ol className={clazz}>{children}</ol> :
                    <ul className={clazz}>{children}</ul>
            }
        </>
    )
}
export default List;