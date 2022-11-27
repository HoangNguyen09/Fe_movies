import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import bgr from "./bgr2.jpg";

import "./Login.css"

function Login(props) {

    const [state, setstate] = useState(false);

    const toggleBtn = () => {
        setstate(prevState => !prevState);
    }
    return (
    <div className="bgr">
        <div><img src={bgr} alt=""/></div>
        <div className='border' style={{ marginTop: '4em' }}>
            <Tabs>
                <TabList style={{ display: 'grid', gridTemplateColumns: '50% 50%', border: 'none' }}>
                    <Tab style={{ borderColor: '#fff' }}>Đăng nhập</Tab>
                    <Tab style={{ borderColor: '#fff' }}>Đăng ký</Tab>
                </TabList>

                <TabPanel>
                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <input placeholder='Tài khoản' size="40" 
                                style={{
                                    height: '4em',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '4em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                }}
                            />
                        </div>
                        <div></div>
                    </div>
                    
                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <input placeholder='Mật khẩu' size="40" type={state ? "text" : "password"}
                                style={{
                                    height: '4em',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '4em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                    position: 'relative',
                                }}
                            />
                            <button onClick={toggleBtn}
                                style={{
                                    height: '3em',
                                    position: 'fixed',
                                    marginTop: '4.5em',
                                    right: '41%',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    border: 'none'
                                }}>
                                {state ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
                            </button>
                        </div>
                        <div></div>
                    </div>

                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <button 
                                style={{
                                    width: '40%',
                                    height: '60%',
                                    marginTop: '6em',
                                    borderRadius: '10px',
                                }}>
                                Đăng nhập
                            </button>
                        </div>
                        <div></div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <input placeholder='Họ' size="5" 
                                style={{
                                    height: '4em',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '4em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                }}
                            />
                            <input placeholder='Tên' size="18" 
                                style={{
                                    height: '4em',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '2em',
                                    marginLeft: '1em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                }}
                            />
                        </div>
                        <div></div>
                    </div>
                    
                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <input placeholder='Tài khoản' size="40" 
                                style={{
                                    height: '4em',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '2em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                }}
                            />
                        </div>
                        <div></div>
                    </div>
                    
                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <input placeholder='Mật khẩu' size="40" type={state ? "text" : "password"}
                                style={{
                                    height: '4em',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '2em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                    position: 'relative',
                                }}
                            />
                            <button onClick={toggleBtn}
                                style={{
                                    height: '3em',
                                    position: 'fixed',
                                    marginTop: '2.5em',
                                    right: '41%',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    border: 'none'
                                }}>
                                {state ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
                            </button>
                        </div>
                        <div></div>
                    </div>

                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <select style={{ 
                                height: '4em',
                                width: '15%',
                                backgroundColor: 'rgb(207, 207, 207)',
                                border: 'none',
                                borderRadius: '10px',
                                marginTop: '2em',
                                paddingLeft: '1em',
                            }}>
                                <option value="nam">Nam</option>
                                <option value="nu">Nữ</option>
                                <option value="khac">Khác</option>
                            </select>
                           
                            <input type="date" placeholder='ngayf sinh'
                                style={{
                                    height: '4em',
                                    width: '60%',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '2em',
                                    marginLeft: '1em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                }}
                            />
                        </div>
                        <div></div>
                    </div>

                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <input placeholder='Số điện thoại' size="40" 
                                style={{
                                    height: '4em',
                                    border: 'none',
                                    backgroundColor: 'rgb(207, 207, 207)',
                                    borderRadius: '10px',
                                    marginTop: '2em',
                                    paddingLeft: '3em',
                                    paddingRight: '3em',
                                }}
                            />
                        </div>
                        <div></div>
                    </div>

                    <div className='border-dangnhap'>
                        <div></div>
                        <div>
                            <button 
                                style={{
                                    width: '40%',
                                    height: '60%',
                                    marginTop: '4em',
                                    borderRadius: '10px',
                                }}>
                                Đăng ký
                            </button>
                        </div>
                        <div></div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        <div></div>
    </div>
  );
}

export default Login;