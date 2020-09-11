import React, {useState} from 'react';
import Input from './input';
import './App.css';





function App() {

    
    const [input, setinput] = useState(
        {txtId: '', txtPw1: '', txtPw2: '', txtName: '',right:'',wrong:''}
    );

    const { txtId, txtPw1, txtPw2, txtName, right, wrong} = input;

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
            } else{
                setinput({
                    ...input,
                    right: '',
                    wrong:'wrong',
                    [name]: value
                })

            }
        }
        
    };

const summit = () => {
    if (txtId =='') {
        alert('Id is blink');
    } else if (right == ''&&wrong==''){
        alert('Password is blink');
    } else if( right ==''){
        alert('Password is wrong');
    } 

}
    return (
        
        <div className="App">

            <div class="inputID">
                <div>ID</div>
                <Input onchange={onchange} name="txtId" value={txtId}/><button class="btn">ID check</button>
            </div>
            <div class="inputPw">
                <div>Password</div>
                <Input type="password" onchange={onchange} name="txtPw1" value={txtPw1}></Input>
                <br></br>
                <Input type="password" onchange={onchange} name="txtPw2" value={txtPw2}></Input>
    <div class='wrong_password'>{wrong}</div>
    <div class='right_password'>{right}</div>
            </div>
            <div class="inputName">
                <div>Name</div>
                <Input onchange={onchange} name="txtName" value={txtName}></Input>
            </div>

            <div class="inputAd">
                <div>Adress</div>
                <Input onchange={onchange} name="txtZip" value="" placeholder="Zip Code" readonly></Input>
                <button class="btn">우편번호 찾기</button>
                <br></br>
                <Input onchange={onchange} name="txtAd1" value="" placeholder="adress1" readonly></Input>
                <br></br>
                <Input onchange={onchange} name="txtAd2" value="" placeholder="adress2" readonly></Input>
                <br></br>
                <div id="findzip"></div>

            </div>
            <div class="inputPn">
                <div>Phone Number</div>
                <Input onchange={onchange} name="txtPn1" value=""></Input>
                <span>-</span>
                <Input onchange={onchange} name="txtPn2" value=""></Input>
                <span>-</span>
                <Input onchange={onchange} name="txtPn3" value=""></Input>
            </div>
            <div class="inputPvn">
                <div>Private Number</div>
                <Input onchange={onchange} name="txtPvn" value=""></Input>
            </div>
            <button onClick={summit} class="btn">summit</button>
            
        </div>
    );
}

export default App;
