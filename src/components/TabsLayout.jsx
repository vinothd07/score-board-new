export function TabPaneWrapper({
    children,
    ...props
}) {

    return (
        <div {...props}>
            {children}
        </div>
    );
}
