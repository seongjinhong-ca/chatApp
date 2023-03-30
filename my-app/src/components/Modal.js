import { useState } from "react";
import styled from 'styled-components';

// components for css
const ModalBackground = styled.div`
    position = fixed;
    z-index:1;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:auto;
    background-color:rgba(0,0,0,0.5);
`;

const ModalBody = styled.div`
    background-color:white;
    margin:10% auto;
    padding:20px;
    width:50%;
`;

export const Modal = ({children}) => {
    // state of showing the modal
    const [shouldshow, setShouldshow] = useState(false);
    return(
        <>
            <button onClick={()=> setShouldshow(true)}>create(show Modal)</button>
            {shouldshow && (
                <ModalBackground onClick={()=>setShouldshow(false)}>
                    <ModalBody onClick={(e)=> e.stopPropagation()}>
                        <button onClick={()=> setShouldshow(false)}> X hide modal X </button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )

}
