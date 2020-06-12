import React, { useState, Component, useCallback } from "react";
import ReactDOM from "react-dom";
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import api from '../../services/api';


import {
  ModalOverlay,
  ModalWrapper,
  Modal,

  CloseBtn,
} from "./MessageStyle";


import Close from "../../assets/close.svg";





const ItemModal = ({ isShowing, hide, handleSearch, add }) => {

  const [name, setName] = React.useState('')

  const [stateData, setData] = React.useState({
    data: [],
  });


  return (<>
    {isShowing
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
                marginTop: 10,
              }}>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  handleSearch(name, setData)
                }} noValidate autoComplete="off">
                  <Input
                    placeholder='Search'
                    onChange={(event) => { setName(event.target.value) }}

                  />
                  <Button variant='contained' type="submit" >Search</Button>
                </form>
                {
                  //li com cada imagem/nome
                  stateData.data.map(result => (
                    <li key={result.name} style={{
                      style: 'none',
                      marginTop: 20,
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '100%',

                    }}>


                      <div style={{
                        //imagem
                        backgroundImage: `url(${result.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        borderRadius: '50%',
                        marginLeft: 20,
                        width: 40,
                        height: 40,

                      }} />

                      <a onClick={() => { add(result); hide();}} >
                        <span style={{
                          marginLeft: 20,
                          fontSize: 13,
                        }}>
                          {result.name}
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
      : null}
  </>)
}

export default ItemModal;
