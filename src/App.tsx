import React, { useEffect, useState } from 'react'
import { dbService } from 'config/firebase'

const App: React.FC = () => {

    const [input, setInput] = useState({
        name: '',
        address: '',
        desc: ''
    })

    useEffect(() => {
        dbService.collection('users')
            .doc('places')
            .get()
            .then(doc => {
                console.log(doc.data())
            })
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onClick = (e: React.ChangeEventbr
    ) => {
        if (!input.name || !input.address || !input.desc) {
            alert("전부 입력해 주세요.")
            return
        }

        dbService.collection('users')
            .add({
                name: input.name,
                address: input.address,
                desc: input.desc
            }).then((docRef) => {
                console.log('Document written with ID : ', docRef.id)
            }).catch((error) => {
                console.log('Error adding document : ', error)
            })

        console.log(input)


        setInput({
            name: '',
            address: '',
            desc: ''
        })

    }


    return (
        <div className="text-red-600">
            <p>반갑습니다.</p>

            <input
                type="text"
                placeholder="이름"
                id="name"
                name='name'
                value={input.name}
                onChange={onChange}
            />

            <input
                type="text"
                placeholder="주소"
                id="address"
                name='address'
                value={input.address}
                onChange={onChange}
            />

            <input
                type="text"
                placeholder="설명"
                id="desc"
                name='desc'
                value={input.desc}
                onChange={onChange}
            />

            <button onClick={onClick}>입력</button>

        </div>
    )
}

export default App