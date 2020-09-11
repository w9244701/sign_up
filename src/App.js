import React, {useState} from 'react';
import Input from './input';
import './App.css';
import DaumPostcode from 'react-daum-postcode';
import Title from './title'

function App() {

    const [input, setinput] = useState({
        txtId: '',
        txtPw1: '',
        txtPw2: '',
        txtName: '',
        right: '',
        wrong: '',
        txtAd2: '',
        txtAd1: '',
        txtZip: '',
        txtPN1: '',
        txtPN2: '',
        txtPN3: ''
    });

    const [displayCheck, setDisplay] = useState({display: 'hide'});
    const {display} = displayCheck;
    const {
        txtId,
        txtPw1,
        txtPw2,
        txtName,
        right,
        wrong,
        txtAd2,
        txtAd1,
        txtZip,
        txtPN1,
        txtPN2,
        txtPN3
    } = input;

    const checkdisplay = () => {
        if (display === 'show') {
            setDisplay({display: 'hide'})
        } else {
            setDisplay({display: 'show'})
        }
    }

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let zonecode = data.zonecode;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (
                    extraAddress !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName
                );
            }
            fullAddress += (
                extraAddress !== ''
                    ? ` (${extraAddress})`
                    : ''
            );
        }
        setinput({
            ...input,
            txtAd1: fullAddress,
            txtZip: zonecode
        });
        checkdisplay();
    }

    const onchange = (e) => {
        const {value, name} = e.target;

        setinput({
            ...input,
            [name]: value
        });

        if (name === 'txtPw2') {
            if (txtPw1 === value) {
                setinput({
                    ...input,
                    right: 'right',
                    wrong: '',
                    [name]: value
                })
            } else {
                setinput({
                    ...input,
                    right: '',
                    wrong: 'wrong',
                    [name]: value
                })

            }
        }

    };

    const summit = () => {
        if (txtId == '') {
            alert('Id is blink');
        } else if (right == '' && wrong == '') {
            alert('Password is blink');
        } else if (right == '') {
            alert('Password is wrong');
        }

    }
    return (

        <div className="App">

            <div class="inputID">
                <Title title="ID"/>
                <Input onchange={onchange} name="txtId" value={txtId}/>
                <button class="btn">ID check</button>
            </div>
            <div class="inputPw">
                <Title title="Password" />
                <Input type="password" onchange={onchange} name="txtPw1" value={txtPw1}></Input>
                <br/>
                <Input type="password" onchange={onchange} name="txtPw2" value={txtPw2}></Input>
                <div class='wrong_password'>{wrong}</div>
                <div class='right_password'>{right}</div>
            </div>
            <div class="inputName">
                <Title title="Name" />
                <Input onchange={onchange} name="txtName" value={txtName}></Input>
            </div>

            <div class="inputAd">
                <Title title="Adress" />
                <button onClick={checkdisplay} class="btn">우편번호 찾기</button>
                <Input
                    onchange={onchange}
                    name="txtZip"
                    value={txtZip}
                    placeholder="Zip Code"
                    readonly="readonly"></Input>
                
                <div className={display + " find_zip"}>
                    <DaumPostcode onComplete={handleComplete}/>
                </div>
                <br/>
                <Input
                    onchange={onchange}
                    name="txtAd1"
                    value={txtAd1}
                    placeholder="adress1"
                    readonly="readonly"></Input>
                <br/>
                <Input onchange={onchange} name="txtAd2" value={txtAd2} placeholder="adress2"></Input>
                <br/>
                <div id="findzip"></div>

            </div>
            <div class="inputPn">
                <Title title="Phone Number" />
                <Input onchange={onchange} name="txtPN1" value={txtPN1}></Input>
                <span>-</span>
                <Input onchange={onchange} name="txtPN2" value={txtPN2}></Input>
                <span>-</span>
                <Input onchange={onchange} name="txtPN3" value={txtPN3}></Input>
            </div>
            <div class="inputPvn">
                <Title title="Private Number" />
                <Input onchange={onchange} name="txtPvn" value=""></Input>
            </div>
            <button onClick={summit} class="btn">summit</button>

        </div>
    );
}

export default App;
