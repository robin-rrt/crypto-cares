import React, {useState} from 'react'
import Modal from './Modal'

export default function ServicesContainer() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <>
                <div>
                    <button onClick={() => setIsOpen(true)}>Open Modal</button>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                        Fancy Modal
                 </Modal>
                 </div>
            
            </>
        </div>
    )
}
