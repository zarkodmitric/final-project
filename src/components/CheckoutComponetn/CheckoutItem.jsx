import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const CheckoutItem = (props) => {

    return (
        <div className="w-full">
            <h3 className="font-bold text-xl mb-6">Shipping Information</h3>
            <div className="border-1 border-black rounded-lg p-6 py-8 mb-10 flex flex-col gap-4">
                <div className="flex gap-2 w-full">
                    <div className="flex flex-col gap-2 w-[50%]">
                        <label htmlFor="inp-f" className="cursor-pointer text-lg">First Name</label>
                        <Input 
                            id='inp-f' 
                            className='input-b w-full'
                            type='text'    
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-[50%]">
                        <label htmlFor="inp-l" className="cursor-pointer text-lg">Last Name</label>
                        <Input 
                            id='inp-l'
                            className='input-b w-full' 
                            type='text'    
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="inp-a" className="cursor-pointer text-lg">Address</label>
                    <Input 
                        id='inp-a'
                        className='input-b'
                        type='text'
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="inp-ase" className="cursor-pointer text-lg">Apartment, suite, etc.</label>
                    <Input 
                        id='inp-ase'
                        className='input-b'
                    />
                </div>
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2 w-[33%]">
                        <label htmlFor="inp-c" className="cursor-pointer">Country</label>
                        <Input 
                            id='inp-c'
                            className='w-auto input-b'
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-[33%]">
                        <label htmlFor="inp-cy" className="cursor-pointer">City</label>
                        <Input
                            id='inp-cy'
                            className='w-auto input-b'
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-[33%]">
                        <label htmlFor="inp-z" className="cursor-pointer">Zipcode</label>
                        <Input 
                            id='inp-z'
                            className='w-auto input-b'
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <Checkbox 
                        id='inp-ch'
                        className='w-6 h-6'
                    />
                    <label htmlFor="inp-ch" className="cursor-pointer">Save contact informaiton</label>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-xl mb-6">Payment Information</h3>
                <div className="border-1 border-black rounded-lg p-6 py-8 mb-10 flex flex-col gap-4">
                    <div className="flex gap-2">
                        <Button className='white-btn h-10 w-[50%] cursor-pointer'>
                            <img src="/images/checkout/paypal.png" alt="Paypal" className="w-auto h-9 object-contain"/>
                            </Button>
                        <Button className='h-10 w-[50%] cursor-pointer'>Cash</Button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="inp-cn" className="cursor-pointer">Chardholder Name</label>
                        <Input 
                            id='inp-cn'
                            className='input-b'
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="inp-num" className="cursor-pointer">Card Number</label>
                        <Input 
                            id='inp-num'
                            className='input-b'
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-2 w-[33%]">
                            <label htmlFor="inp-m" className="cursor-pointer">Month</label>
                            <Input 
                                id='inp-m'
                                className='input-b'
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-[33%]">
                            <label htmlFor="inp-y" className="cursor-pointer">Year</label>
                            <Input 
                                id='inp-y'
                                className='input-b'
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-[33%]">
                            <label htmlFor="inp-cvc" className="cursor-pointer">CVC</label>
                            <Input 
                                id='inp-cvc'
                                className='input-b'
                            />
                        </div>
                    </div>
                    <Button 
                        className='h-10 cursor-pointer'
                        onClick={() => props.onPay()}        
                    >Pay</Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem