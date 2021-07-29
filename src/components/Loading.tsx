import React from 'react'

interface Props{
    load: boolean;
    text?: string;
}

export const Loading = ({ load, text = "loading..." } : Props) => {
    return (
        load ? <div> {text} </div> : null
    )
}
