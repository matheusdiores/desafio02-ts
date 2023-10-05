import { Button, ButtonProps } from "@chakra-ui/react";

interface MyButtonProps extends ButtonProps{
    titulo: string
}

export function MyButton(props:MyButtonProps){

    return (
        <>
            <Button {...props}>
                {props.titulo}
            </Button>
        </>
    )

}