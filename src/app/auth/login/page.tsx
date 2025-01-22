'use client'

import { LoginForm } from '@/app/components/auth/form-login'
import Image from 'next/image'
import React, { useState } from 'react'
import Fb from '../../../../public/Logo-fb.png'
import Google from '../../../../public/Logo-go.png'
import Link from 'next/link';
import LayoutAuth from '@/app/components/auth/Layout';
import { Modal } from '@/app/components/auth/dialog';
import { signIn, useSession } from "next-auth/react";

const PageLogin = () => {

    const { data: session } = useSession();

    const [modal, setmodal] = useState({
        isModal: false,
        title: '',
        title_sub: '',
    })

    const doSocialLogin = (provider: string) => {
        // signIn(provider);
        signIn(provider, { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` });
    };

    return (
        <LayoutAuth>
            <Modal
                isDialogOpen={modal?.isModal}
                setIsDialogOpen={setmodal}
                title={modal?.title}
                titleSub={modal?.title_sub}
            />
            <div className="w-full flex items-center flex-col max-w-lg">
                <div className='mb-8 flex justify-center'>
                    logo
                </div>

                <LoginForm setmodal={setmodal} />

                <div className='flex flex-col gap-4 mt-8 mb-8'>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-[#90A3BF] text-center text-[16px] font-normal leading-[24px]">Atau masuk menggunakan</span>
                    </div>

                    <form>
                        <div className="flex gap-5 justify-center">
                            {/* <Image onClick={() => doSocialLogin('facebook')} className='cursor-pointer' alt="Logo-fb" src={Fb} width={32} /> */}
                            <Image onClick={() => doSocialLogin('google')} className='cursor-pointer' alt="Logo-google" src={Google} width={32} />
                        </div>
                    </form>
                </div>

                <div className="text-center">
                    <p className="text-[16px] leading-[20px] font-normal text-[#080C19]">
                        Belum punya akun?{" "}
                        <Link href={'/auth/register'}>
                            <span className="font-semibold">
                                Daftar
                            </span>
                        </Link>
                    </p>
                </div>

            </div>
        </LayoutAuth>
    )
}

export default PageLogin