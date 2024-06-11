import React from "react";

interface Props extends React.PropsWithChildren{
    show: boolean;
    onClose: React.MouseEventHandler;
    title: string;
}

const Modal: React.FC<Props> = ({show, onClose, title, children}) => {
    return (
        <>
            <div className="modal-backdrop show" style={{ display: show ? 'block' : 'none' }} onClick={() => console.log('hi')}/>
            <div className="modal show" style={{display: show ? 'block' : 'none'}}  onClick={onClose}>
                <div className="modal-dialog" onClick={(event) => event.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button className="ms-auto btn-close" onClick={onClose}></button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;