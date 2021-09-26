import React from 'react'
import { UserContext, ChannelContext } from '../App'

const Child = () => {
    return (
        <>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <>
                                        <h1>Child Component value - {user}</h1>
                                        <h2>Channel is - {channel}</h2>
                                    </>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </>
    )
}

export default Child
