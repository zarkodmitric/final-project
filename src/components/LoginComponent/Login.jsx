import { apiRequest } from "@/apiClient";
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Link } from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = useState(() => {
        const saved = sessionStorage.getItem('login');
        return saved ? JSON.parse(saved) : {};
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isFormValid = username && password;

    useEffect(() => {
        setFormData({
            username: username,
            password: password
        })
    }, [isFormValid]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const data = await apiRequest('/auth/login', {
                method: 'POST',
                body: { username, password }
            });
            
            console.log(data);

            sessionStorage.setItem('logged', JSON.stringify(true));
            sessionStorage.setItem('token', JSON.stringify(data.token));
            sessionStorage.setItem('expiresAt', JSON.stringify(data.expiresAt));
        } catch (error) {
            console.error('Login failed:', error);
        }

    }

    return (
        <div className="background-theme py-30">
            <h1 className="text-3xl font-bold mx-auto mb-10 w-100 text-center">Login</h1>
            <form className="border-black border-2 rounded-lg p-8 w-150 h-110 mx-auto flex flex-col items-center gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email-el" className="text-lg">Email</label>
                    <Input
                        type='email'
                        id='email-el'
                        className='border-black w-120 h-10'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password-el" className="text-lg">Password</label>
                    <Input
                        type='password'
                        id='password-el'
                        className='border-black w-120 h-10'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="flex gap-2 items-center justify-between w-120">
                    <div className="flex items-center gap-3">
                        <Checkbox
                            className='w-5 h-5 border-2 border-black cursor-pointer'
                        />
                        <p className="text-lg">Remember me</p>
                    </div>
                    <p className="text-gray-500 text-lg">Forgot password?</p>
                </div>
                <Button
                    className='w-120 h-10 cursor-pointer'
                    type='submit'
                    disabled={!isFormValid}
                >
                    CREATE AN ACCOUNT
                </Button>
                <Link to='/registerForm'>Or Create an Account</Link>
            </form>
        </div>
    )
}

export default Login;