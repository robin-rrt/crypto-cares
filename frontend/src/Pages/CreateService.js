import React,{getGlobal,useGlobal} from 'reactn'

const CreateService = () => {
    const [account,setAccount] = useGlobal('account')
    return (
        <div style=
        {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
        >   
          {!!account?<h1>CreateService</h1>:<h1>Account not Connected</h1>} 
        </div>

    )
}

export default CreateService;