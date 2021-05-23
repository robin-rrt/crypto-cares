import React, { useGlobal } from 'reactn'
import DonateForm from '../components/DonateForm'

export default function Donate (){

    const [account] = useGlobal('account')
    
        return (
            <div>
                {!!account?<DonateForm  />:<h1>Account Not Connected</h1>}
            </div>
        )
    
}
