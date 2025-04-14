import React, { Children, ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  titulo:string;
};

export default function Modal({ isOpen, onClose, titulo, children}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="Modal">
      <div className="modal-Content">
        <h2 className="modal-title">{titulo}</h2>
        {children}
        
          <div className="miniBt">
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
      </div>
    </div>
  );
}
