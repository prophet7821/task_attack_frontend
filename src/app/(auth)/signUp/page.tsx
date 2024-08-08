import SignUpForm from "@/components/SignUpForm";
import {Metadata} from "next";


export const metadata: Metadata={
    title: "Sign Up | ByteBloom",
}
const SignUpPage = () => {
    return (
        <SignUpForm/>
    );
}

export default SignUpPage;
