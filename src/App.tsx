import React, {useState} from "react";
import './App.css'
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

const App = () => {
    const btnConfig = [
        {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
        {type: 'danger', label: 'Close', onClick: () => setIsOpen(false)}
    ];
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Modal title={'Hello World'} show={isOpen} onClose={() => setIsOpen(false)}>
                <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, eius!</div>
                <div className="modal-footer">
                    {btnConfig.map((item) => (
                        <button className={'btn bg-' + item.type} onClick={item.onClick}>{item.label}</button>
                    ))}
                </div>
            </Modal>
                <Alert type={'danger'} show={open} onDismiss={() => setOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur
                </Alert>
                <Alert type={'success'} show={true}>
                    Lorem ipsum dolor sit amet, consectetur
                </Alert>
            <div className="col-2">
                <button className="btn bg-primary" onClick={() => setIsOpen(true)}>Modal</button>
                <button className="btn bg-primary" onClick={() => setOpen(true)}>Alert</button>
            </div>
        </>
    );
};

export default App
