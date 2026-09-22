import { apiRequest } from "@/apiClient";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function RegisterForm() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setUsername(email);
    }, [email]);

    const isPasswordValid = password.length >= 8 && password.length <= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
    const isFormValid = email && isPasswordValid && checked;


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const data = await apiRequest('/users', {
                method: 'POST',
                body: { username, email, password }
            });
            console.log(data);
            sessionStorage.setItem('id', JSON.stringify(data.id))
        } catch (error) {
            console.error('Registration failed.', error)
        }
    }



    return (
        <div className="background-theme py-20">
            <h1 className="text-3xl font-bold mx-auto my-20 w-100 text-center">Create an Account</h1>
            <form className="border-black border-2 rounded-lg p-8 w-150 mx-auto flex flex-col items-center gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email-el" className="text-lg">Email</label>
                    <Input
                        type='email'
                        id='email-el'
                        className='border-black w-120 h-10'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password-el" className="text-lg">Create a password</label>
                    <Input
                        type='password'
                        id='password-el'
                        className='border-black w-120 h-10'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <p className="text-gray-500">8-12 characters only 1 number 1 uppercase 1 lovercase</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="date-el" className="text-lg">Date of birth</label>
                    <Input
                        type='date'
                        id='date-el'
                        className='border-black w-120 h-10'
                    />
                </div>
                <div className="flex gap-2 items-center justify-start w-120">
                    <Checkbox
                        className='w-5 h-5 border-2 border-black cursor-pointer'
                    />
                    <p className="text-lg">I would like to receive personalized promotions</p>
                </div>
                <div className="flex gap-2 items-center justify-start w-120">
                    <Checkbox
                        className='w-5 h-5 border-2 border-black cursor-pointer'
                        onCheckedChange={(checked) => setChecked(checked)}
                    />
                    <p className="text-lg">I agree and accept the Terms and Conditions</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        className='w-120 h-10 cursor-pointer'
                        type='submit'
                        disabled={!isFormValid}
                    >
                        CREATE AN ACCOUNT
                    </Button>
                    <Link to='/login'><Button className='w-120 h-10 text-black bg-white border-2 border-black cursor-pointer'>BACK TO LOGIN</Button></Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;