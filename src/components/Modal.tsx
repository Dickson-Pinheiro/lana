import { ReactNode, useLayoutEffect, useRef } from "react"
import { styled } from "styled-components"

interface ModalProps {
    children: ReactNode,
    open: boolean,
    closeModal: () => void
}

export default function Modal({ children, open, closeModal }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    useLayoutEffect(() => {
        if(open && !dialogRef.current?.open){
            dialogRef.current?.showModal()
        } else if(!open && dialogRef.current?.open ){
            dialogRef.current?.close()
        }
    }, [open])

    return (
        <ContainerModal ref={dialogRef} onKeyDown={(e) => {
            if(e.key === "Escape"){
                closeModal()
            }
        }}>
            {children}
        </ContainerModal>
    )
}

const ContainerModal = styled.dialog`
    z-index: 2;
    border: 1px solid ${props => props.theme.colors['black']};
    width: fit-content;
    border-radius: 8px;
    background-color: ${props => props.theme.colors['gray2']};
    &::backdrop {
    background-color: #000000;
    opacity: 0.6;
    }
`