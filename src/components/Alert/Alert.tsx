import React from "react";

interface Props extends React.PropsWithChildren{
    type: string;
    onDismiss: React.MouseEventHandler;
    show: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, show, children}) => {
    console.log(onDismiss);
    return (
        <div className={`col-5 ms-auto ${show ? 'd-block' : 'd-none'}`}>
            <div className={`alert alert-${type} alert-dismissible fade show`}>
                {children}
                {onDismiss !== undefined ? (
                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onDismiss}></button>
                ): null}

            </div>
        </div>
    );
};

export default Alert;