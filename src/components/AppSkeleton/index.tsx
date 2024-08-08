"use client"
import Navbar from "@/components/NavBar";
import React, {useEffect} from "react";
import AppShellContainer from "@/components/AppShellContainer";
import {removeAuthHeader, setAuthHeader} from "@/services/API";
import {getProfile} from "@/services/user.service";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "@/atoms/user.atom";
import {authState} from "@/atoms/auth.atom";
import {loadToken} from "@/atoms/loadToken.atom";
import SearchModal from "@/components/SearchModal";
import Box from "@mui/material/Box";


const AppSkeleton = ({children}: {
    children: React.ReactNode,
}) => {

    const setUser = useSetRecoilState(userState)
    const setLoadToken = useSetRecoilState(loadToken)
    const auth = useRecoilValue(authState)

    useEffect(() => {
        setUser((prev) => ({...prev, isLoading: true}))
        if (auth.isAuthenticated) {
            setAuthHeader(auth.token)
            getProfile().then((res) => {
                setUser((prev) => ({...prev, data: res, isLoading: false}))
                setLoadToken(true)
            }).catch((e) => {
                setLoadToken(false)
                removeAuthHeader()
                setUser((prev) => ({...prev, isLoading: false, data: null}))
            })
        } else {
            setLoadToken(false)
            removeAuthHeader()
            setUser((prev) => ({...prev, isLoading: false, data: null}))
        }
    }, [auth])

    return (
        <>
            <Navbar/>
            <SearchModal/>
            <AppShellContainer>
                <Box sx={{
                    marginTop: {
                        xs: '8vh',
                        md: '10vh'
                    },
                    width: '100%',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                {children}
                </Box>
            </AppShellContainer>
        </>

    )

}

export default AppSkeleton