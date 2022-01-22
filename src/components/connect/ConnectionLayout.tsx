import React from 'react'
import Logo from '../../img/svg/sota-logo.svg'
import BgSignUp from '../../img/png/bg-signin.png'

export const ConnectionLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="sign-up w-full h-screen flex">
            <div className="left pt-8 pl-10 w-96 relative">
                <a href="">
                    <img className="cursor-pointer" src={Logo} alt="" />
                </a>
                <div className="desc mt-10 leading-10 ">
                    <span>
                        Discover the world’s top NFT digital collectibles
                    </span>
                </div>
                <img
                    className="absolute bottom-0 left-0 max-w-none"
                    src={BgSignUp}
                    alt=""
                />
            </div>
            <div className="flex flex-1 flex-col h-screen right items-center justify-center rounded-l-3xl">
                {children}
            </div>
        </div>
    )
}
