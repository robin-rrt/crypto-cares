import React,{useGlobal} from 'reactn'

const Redeem = () => {
    const [account] = useGlobal('account')
    return (
        <div style=
        {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
        >
           {!!account? <h1>Redeem</h1>:<h1>Account Not Connected</h1>}
        </div>

    )
}

export default Redeem;