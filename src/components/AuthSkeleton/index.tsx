"use client"
import React from 'react';
import AuthContainer from "@/components/AuthContainer";


const AuthSkeleton = ({children}: { children: React.ReactNode }) => {

    return (
        <AuthContainer sx={{
            width: '100%',
        }}>
            {children}
        </AuthContainer>
    )
}

export default AuthSkeleton