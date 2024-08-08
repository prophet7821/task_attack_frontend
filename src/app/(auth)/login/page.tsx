import SignInForm from "@/components/SignInForm";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Sign In | ByteBloom',
}
const SignInPage = () => {

    return (
        <SignInForm/>
    )
}

export default SignInPage;