import React from 'react';

export function Title(props) {
    return (
        <div className={"row"}>
            <div className={"col-10 mx-auto my-2 text-center text-title"}>
                <h1 className={"text-capitalize font-weight-bold"}>
                    <strong className={"text-dark"}>{props.name} </strong> <strong className={"text-yellow"}>{props.title}</strong>
                </h1>
            </div>
        </div>
    );
}

export default Title; 