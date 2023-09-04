export interface ButtonTypes {
    size: "small" | "medium" | "large",
    handleClick?: () => void,
    isLoading?: boolean,
    variant: "text" | "outlined" | "contained",
    isDisabled?: boolean
    type: "button" | "reset" | "submit",
    name: string
}

