import React, { useState, Component } from "react";
import ReactDOM from "react-dom";

import {
  ModalOverlay,
  ModalWrapper,
  Modal,
  
  CloseBtn,
} from "./MessageStyle";


import Close from "../../assets/close.svg";

const ItemModal = ({ isShowing, hide, state, func }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <CloseBtn
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <img src={Close} alt="" />
            </CloseBtn>
            <Modal>
            
              <div style={{
                background: '#F6F6F6',
                borderRadius: '22',
                width: 300,
                height: 300,
                marginTop:10,
            }}>
              
                {
                //li com cada imagem/nome
                state.data.map(artist=> (
                 <li key={artist.name} style={{
                    style:'none',
                    marginTop: 20,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',

                 }}>
                   
                 
                        <div style={{  
                          //imagem
                            backgroundImage: `url(${artist.image})`, 
                            backgroundRepeat:"no-repeat",
                            backgroundSize: "contain",
                            borderRadius: '50%',
                            marginLeft: 20,
                            width: 40,
                            height: 40,

                        }}/>
                        
                        <a onClick={()=>{func()}} >
                        <span style={{
                          // nome com link para a funcao de add ao banco
                            marginLeft: 20,
                            fontSize: 13,
                        }}>
                            {artist.name}
                        </span>
                        </a>
                      
                </li>
                ))}
            </div>
        
            </Modal>
            
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default ItemModal;
