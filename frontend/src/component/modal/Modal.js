import React, { useState, Component } from "react";
import ReactDOM from "react-dom";

import {
  ModalOverlay,
  ModalWrapper,
  Modal,
  Form,
  CloseBtn,
} from "./ModalStyle";

import Button from "../../buttons/Button";
import Cropper from "../../cropper/Cropper";
import Edit from "../../../assets/icons/edit.svg";
import Close from "../../../assets/icons/close.svg";

const ItemModal = ({ isShowing, hide, isEdit, edit, setInput }) =>
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
              <div id="col1">
                <Form>
                  <div id="row1">
                    <div>
                      <h4>Produto</h4>
                      <input type="text" />
                    </div>
                    <div>
                      <h4>Unidade de medida</h4>
                      <input type="text" />
                    </div>
                  </div>
                  <div id="row2">
                    <div>
                      <h4>Quantidade em estoque</h4>
                      <input type="text" />
                    </div>
                    <div>
                      <h4>Código</h4>
                      <input type="text" />
                    </div>
                  </div>
                  <div id="row3">
                    <div>
                      <h4>Preços</h4>
                      <input type="text" />
                    </div>
                    <div>
                      <h4>Categoria</h4>
                      <select name="" id="">
                        <option value="" disabled selected>
                          Categoria
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div id="row4">
                    <div>
                      <h4>Descrição</h4>
                      <textarea name="" id="" cols="50" rows="3"></textarea>
                    </div>
                  </div>
                </Form>
                <button>Show/Hide</button>
              </div>
              <div id="col2">
                <div>
                  <div id="cropper">
                    <Cropper />
                  </div>
                </div>
              </div>
            </Modal>
            {/* <Button option img={Edit} value="Editar"></Button> */}
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default ItemModal;
