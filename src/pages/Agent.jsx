import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/agent.css'; // Import the custom CSS file
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Agent = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabSelect = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <div className='agent-layout'>
      <select
        className='custom-select'
        value={selectedTab}
        onChange={handleTabSelect}
      >
        <option value='tab1'>မိတ်ဆက်ခံရသူ</option>
        <option value='tab2'>စာရင်းအင်းများ</option>
        <option value='tab3'>လစာ</option>
        <option value='tab4'>agentအောက်ကအဖွဲ့ဝင်များ</option>
        <option value='tab5'>ဘောနပ်စ်</option>
      </select>

      <div className='tab-content'>
        <div
          className={`tab-pane ${selectedTab === 'tab1' ? 'active' : ''}`}
          id='tab1'
        >
          <div className='card mx-2 card-bg'>
            <h1 className='text-center py-3'>
              ဖိတ်စာများနှင့် <br /> ဆုလာဘ်များ
            </h1>

            <div className='mx-2'>
              <Form.Label>ပံ့ပိုးပေးထားသော လင့်ခ်များ</Form.Label>
              <InputGroup className='mb-3'>
                <Form.Control className='custom-background' />
                <Button id='copy-btn'>Button</Button>
              </InputGroup>
            </div>
            <div className='mx-2 my-3'>
              <Form.Label>ဖိတ်စာကုဒ်</Form.Label>
              <InputGroup className='mb-3'>
                <Form.Control className='custom-background' />
                <Button id='copy-btn'>Button</Button>
              </InputGroup>
            </div>
          </div>

          <div className='card mx-2 my-2 secondcard-bg'>
            <div className='card-header header-bg'>
              နာရီတိုင်း update လုပ်ပါ။
            </div>
            <div className='card-body text-center body-bg'>
              <div className='row'>
                <div className='col'>
                  <p className='fs-4 fw-bold'>0/0</p>
                  <p>စုစုပေါင်းမိတ်ဆက် လူဉီးရေ</p>
                </div>
                <div className='col'>
                  <p className='fs-4 fw-bold'>Ks 0.00</p>
                  <p>စုစုပေါင်း ဝင်ငွေ</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p className='fs-4 fw-bold'>0/0</p>
                  <p>ယနေ့ မိတ်ဆက်သူလူဉီးရေ</p>
                </div>
                <div className='col'>
                  <p className='fs-4 fw-bold'>Ks 0.00</p>
                  <p>ယနေ့ ဝင်ငွေ</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p className='fs-4 fw-bold'>Ks 0.00</p>
                  <p>လစာ ခန့်မှန်း</p>
                </div>
                <div className='col'>
                  <p className='fs-4 fw-bold'>Ks 0.00</p>
                  <p>ပြီးခဲ့သည့် လ၏လစာ</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p className='fs-4 fw-bold'>Ks 0.00</p>
                  <p>မိတ်ဆက်ဘောနပ်စ်</p>
                </div>
                <div className='col'>
                  <p className='fs-4 fw-bold'>Ks 0.00</p>
                  <p>ကောမရှင်</p>
                </div>
              </div>
            </div>
          </div>

          <div className='card mx-2 card-bg'>
            <div className='d-flex'>
              <div className='card-img my-3 ms-4'></div>
              <div className='d-block align-items-center ms-3 pt-5'>
                <p className='fs-3 fw-bold'>Monthly Target</p>
              </div>
            </div>
            <div className='px-3'>
              <p className='fs-1 fw-bold'>Ks 0.00</p>
              <p className='text-white fw-bold'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                dolorum officiis porro!
              </p>
            </div>
          </div>
          <div className='mx-2 my-3'>
            <h2 className='text-white  py-3 fw-bold text-center'>
              ကော်မရှင်ရယူပါ။
            </h2>

            <div className='d-flex px-2 py-4 box-bg'>
              <img
                src='https://iwbet.com/img/coin_icon.acc4e4e0.png'
                width={60}
                height={36}
                className='mt-2'
              />
              <div className='text-white ps-4'>
                <span className='d-block'>ဖိတ်ကြားရေးကော်မရှင်</span>
                <span className='d-block'>Ks 0.00</span>
                <span className='d-block'>0 လူတွေရကြတယ်။</span>
              </div>
            </div>
            <div className='d-flex px-2 py-4 box-bg'>
              <img
                src='https://iwbet.com/img/rewords.2302926f.png'
                width={60}
                height={60}
                className='mt-2'
              />
              <div className='text-white ps-4'>
                <span className='d-block'>အောင်မြင်မှုဆုကြေးငွေ</span>
                <span className='d-block'>Ks 0.00</span>
                <span className='d-block'>0 လူတွေရကြတယ်။</span>
              </div>
            </div>
            <div className='d-flex px-2 py-4 box-bg'>
              <img
                src='https://iwbet.com/img/bonous.ad20ebc8.png'
                width={60}
                height={36}
                className='mt-2'
              />
              <div className='text-white ps-4'>
                <span className='d-block'>လောင်းကြေးကော်မရှင်</span>
                <span className='d-block'>Ks 0.00</span>
                <span className='d-block'>0 လူတွေရကြတယ်။</span>
              </div>
            </div>
          </div>
          <div className='my-3'>
            <h2 className='text-white pt-5 pb-3 fw-bold text-center'>
              သင်၏ကိုယ်ပိုင်ပွဲစားဖြစ်ပါစေ။
            </h2>
            <div className='card mx-2 px-2 card-bg'>
              <p className='fs-2 fw-bold text-white'>
                လူ 1110 သင့်အတွက် ငွေရှာပါစေ။
              </p>
              <p className='text-white'>
                စာရင်းဇယားများအရ၊ 👥 အသုံးပြုသူများကို အားပြန်သွင်းရန် 10
                ဖိတ်ခေါ်ထားသည်။ သင့်အတွက် အမြဲငွေရှာနေသော အဖွဲ့ဝင် 1,110
                အဖွဲ့တစ်ဖွဲ့ ရှိသည် - 10 Lv. 1 အေးဂျင့် 🥇 100 Lv. 2 အေးဂျင့် 🥈
                1,000 A Lv.3 အေးဂျင့် 🥉
              </p>
              <div className='card-img2 mb-4'></div>
            </div>
          </div>
          <div className='my-2'>
            <h2 className='text-white py-3 fw-bold text-center'>
              လောင်းကြေးကော်မရှင်
            </h2>
            <div className='card mx-2 px-2 card-bg'>
              <div className='third-bg my-4 px-3 py-2 text-white'>
                <p>
                  အပိုဆုစည်းမျဉ်းများ- "ရည်ညွှန်းသူ" မှ ဖိတ်ကြားထားသော
                  ကစားသမားများအားလုံး လောင်းကြေးတင်သည့်အခါတိုင်း ပလပ်ဖောင်း
                  အားသာချက် ဘောနပ်စ်များ၏ ရာခိုင်နှုန်းအချို့ကို ရရှိပါမည်။
                </p>
                <p>အဆင့် 3 ၏ အတိုင်းအတာမှာ အောက်ပါအတိုင်းဖြစ်သည်။</p>
                <p>- အဆင့် 1- ပလပ်ဖောင်းပေါ်တွင် 30.00% အားသာချက်ကို ရယူပါ။</p>
                <p>- အဆင့် 2- ပလပ်ဖောင်းပေါ်တွင် 20.00% အားသာချက်ကို ရယူပါ။</p>
                <p>- အဆင့် 3- ပလက်ဖောင်း အကျိုးခံစားခွင့် 10.00% ကို ရယူပါ။</p>
              </div>
              <p className='text-white'>
                ၎င်းသည် သင်၏ရေရှည်ဝင်ငွေဖြစ်ပြီး ကစားသမားတစ်ဦးကို
                သင်ဖိတ်ကြားသည့်အချိန်တိုင်းတွင်
                မတူညီသောကော်မရှင်ရာခိုင်နှုန်းကို ရရှိမည်ဖြစ်သည်။
              </p>
              <div>
                <img
                  src='https://iwbet.com/img/bet_person.58e2a3c0.png'
                  alt=''
                  className='card-img3'
                />
              </div>
            </div>
          </div>
          <div className='my-2'>
            <h2 className='text-white py-3 fw-bold text-center'>
              ဘောနပ်စ်စာရင်း
            </h2>
            <div className='card mx-3 px-2 secondcard-bg'>
              <div className='d-flex fs-6 px-2 py-3 justify-content-between'>
                <div className='d-flex'>
                  <img
                    src='https://iwbet.com/img/3.184621d5.jpg'
                    alt=''
                    className='people-img'
                  />
                  <p>fqey****248</p>
                </div>
                <p>Ks20.00</p>
              </div>
              <div className='d-flex fs-6 px-2 py-3 justify-content-between'>
                <div className='d-flex'>
                  <img
                    src='https://iwbet.com/img/3.184621d5.jpg'
                    alt=''
                    className='people-img'
                  />
                  <p>fqey****248</p>
                </div>
                <p>Ks20.00</p>
              </div>
              <div className='d-flex fs-6 px-2 py-3 justify-content-between'>
                <div className='d-flex'>
                  <img
                    src='https://iwbet.com/img/3.184621d5.jpg'
                    alt=''
                    className='people-img'
                  />
                  <p>fqey****248</p>
                </div>
                <p>Ks20.00</p>
              </div>
              <div className='d-flex fs-6 px-2 py-3 justify-content-between'>
                <div className='d-flex'>
                  <img
                    src='https://iwbet.com/img/3.184621d5.jpg'
                    alt=''
                    className='people-img'
                  />
                  <p>fqey****248</p>
                </div>
                <p>Ks20.00</p>
              </div>
            </div>
          </div>
          <div className='card mx-2 secondcard-bg'>
            <img src='https://iwbet.com/img/human_post.d7dbffb6.png' alt='' />
            <div className='third-bg mx-2 mb-3 px-3 py-2'>
              <p>
                သင်သည် ပရိတ်သတ်များစွာနှင့် ကြီးမားသောနောက်လိုက်များရှိသော
                သြဇာလွှမ်းမိုးမှုရှိသူလား။
              </p>
              <p>
                ကျွန်ုပ်တို့သည် သင့်အား အထူးရည်ညွှန်းကော်မရှင်များနှင့်အတူ
                တွဲဖက်အစီအစဉ်တစ်ခု ပေးပါသည်။
              </p>
              <p>
                မှတ်ချက်- ပလက်ဖောင်းပြန်လည်သုံးသပ်ခြင်းကို အောင်မြင်ပြီးသော
                သြဇာလွှမ်းမိုးနိုင်သူများသာ အစီအစဉ်တွင် ပါဝင်နိုင်ပါသည်။
              </p>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane ${selectedTab === 'tab2' ? 'active' : ''}`}
          id='tab2'
        >
          <div className='card secondcard-bg mx-2'>
            <div className='mx-auto py-4'>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABSCAMAAACrFizdAAAAsVBMVEUAAAD///////9ERET///////////9AQEBBQUFCQkJCQkJDQ0NAQEBDQ0NCQkJCQkJCQkJAQED///9CQkJCQkJAQEBCQkJERERCQkJDQ0NFRUVCQkJDQ0NDQ0NCQkJDQ0NDQ0NCQkJCQkJCQkJCQkJDQ0NCQkK4uLhAQEBFRUVCQkJDQ0NAQEBQUFBUVFSHh4d9fX2AgIAmJiZDQ0M5OTk8PDwwMDApKSktLS03NzdAQEBYK7FNAAAAMnRSTlMAFBBPDQsHCSDgtfsE99WF4ywF9+ob88vArqWNa0g78tu7fXdcU0MeEdGacxiNezE1NMK0RL0AAAKZSURBVGje7NbNcoIwFIbhb8YF4R+GolIQrVbHqqt8grb3f2G9AWtDTrLoTJ89zAsk5OCvKKM1J1g3JZzap5wo3cOhPmVbY4L6xLiHM6pgjolaFgqOHDeMAkyURNwc4UTwxiywuCzjMoALEUMFC3XIJoFczrmClXLOHGI7VgdYOlTcQWhFCjb0O+MZRA4ptxDYMu0hoF7YQqTli4K1OmSUQCSJGNawFCwc7ORgyUVgeWnE8AKxi/VrPBl8PsOFdLJbwFUPJ/qKW6stvIIjs5jvmGiVsoMz3eSnKVPmcCjnupw4gbzCqVcWSjaByIeKzVEwgcgFGd9Mb9owVHBOhWyMJ5ASAtL5ZMdqBS8OFc/4HX+QdQkMJV0W8zFBABklxqcYKQnQD41fbE0X0deoHxIF6DvjGgYuKe/aR4C+8gwDZ161n4DR7P/ccPQUcOcSBpa8ewq4cQEDH7x5CtCcJwabcO0vYDAZbPYctK+AkYUyOHNGbwF6YLGbPdUVHLS/gNvAXw03ecAT4+f1qc9Ra3mAyH/Ad7vlltowDERR32FGEAz5EIFANhDykaT14NrZ/8Y6hkKpxi1JIyk/Ohs4x9cPuQW0gBbQAlpAC2gBzwaEsgHhbzkTUDYAIIm/2WGUD1hgP4QQUC3AIPmhZwB1Awz+vnqgfsDC1wqEVwWAnN/Y6TQUYtIdXIEgYa/zUIhZ90jgDilnvQ2FuOkZKT7grS91DybVdx/ASDnoOBRh1ANS2D+EOG50/Mivn0fdHIE7XgNct1qE7XXNb4jb4HLqNTP96eKuX9ynuCrsDqOakKwdx9Xg0K0Sa+xAfMdfkaOw3C/BlN8tsXuMYBmUwWzq0D1BsJD/lBCbOHQ5idYiwpazkOgW2Jxi1vjA2J+WviNztlfQPgAAAABJRU5ErkJggg=='
                alt=''
                width={100}
              />
              <p className='ms-2'>ဒေတာမရှိပါ။</p>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane ${selectedTab === 'tab3' ? 'active' : ''}`}
          id='tab3'
        >
          <div className='card secondcard-bg mx-2'>
            <div className='mx-auto py-4'>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABSCAMAAACrFizdAAAAsVBMVEUAAAD///////9ERET///////////9AQEBBQUFCQkJCQkJDQ0NAQEBDQ0NCQkJCQkJCQkJAQED///9CQkJCQkJAQEBCQkJERERCQkJDQ0NFRUVCQkJDQ0NDQ0NCQkJDQ0NDQ0NCQkJCQkJCQkJCQkJDQ0NCQkK4uLhAQEBFRUVCQkJDQ0NAQEBQUFBUVFSHh4d9fX2AgIAmJiZDQ0M5OTk8PDwwMDApKSktLS03NzdAQEBYK7FNAAAAMnRSTlMAFBBPDQsHCSDgtfsE99WF4ywF9+ob88vArqWNa0g78tu7fXdcU0MeEdGacxiNezE1NMK0RL0AAAKZSURBVGje7NbNcoIwFIbhb8YF4R+GolIQrVbHqqt8grb3f2G9AWtDTrLoTJ89zAsk5OCvKKM1J1g3JZzap5wo3cOhPmVbY4L6xLiHM6pgjolaFgqOHDeMAkyURNwc4UTwxiywuCzjMoALEUMFC3XIJoFczrmClXLOHGI7VgdYOlTcQWhFCjb0O+MZRA4ptxDYMu0hoF7YQqTli4K1OmSUQCSJGNawFCwc7ORgyUVgeWnE8AKxi/VrPBl8PsOFdLJbwFUPJ/qKW6stvIIjs5jvmGiVsoMz3eSnKVPmcCjnupw4gbzCqVcWSjaByIeKzVEwgcgFGd9Mb9owVHBOhWyMJ5ASAtL5ZMdqBS8OFc/4HX+QdQkMJV0W8zFBABklxqcYKQnQD41fbE0X0deoHxIF6DvjGgYuKe/aR4C+8gwDZ161n4DR7P/ccPQUcOcSBpa8ewq4cQEDH7x5CtCcJwabcO0vYDAZbPYctK+AkYUyOHNGbwF6YLGbPdUVHLS/gNvAXw03ecAT4+f1qc9Ra3mAyH/Ad7vlltowDERR32FGEAz5EIFANhDykaT14NrZ/8Y6hkKpxi1JIyk/Ohs4x9cPuQW0gBbQAlpAC2gBzwaEsgHhbzkTUDYAIIm/2WGUD1hgP4QQUC3AIPmhZwB1Awz+vnqgfsDC1wqEVwWAnN/Y6TQUYtIdXIEgYa/zUIhZ90jgDilnvQ2FuOkZKT7grS91DybVdx/ASDnoOBRh1ANS2D+EOG50/Mivn0fdHIE7XgNct1qE7XXNb4jb4HLqNTP96eKuX9ynuCrsDqOakKwdx9Xg0K0Sa+xAfMdfkaOw3C/BlN8tsXuMYBmUwWzq0D1BsJD/lBCbOHQ5idYiwpazkOgW2Jxi1vjA2J+WviNztlfQPgAAAABJRU5ErkJggg=='
                alt=''
                width={100}
              />
              <p className='ms-2'>ဒေတာမရှိပါ။</p>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane ${selectedTab === 'tab4' ? 'active' : ''}`}
          id='tab4'
        >
          <div className='card secondcard-bg mx-2'>
            <div className='mx-auto py-4'>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABSCAMAAACrFizdAAAAsVBMVEUAAAD///////9ERET///////////9AQEBBQUFCQkJCQkJDQ0NAQEBDQ0NCQkJCQkJCQkJAQED///9CQkJCQkJAQEBCQkJERERCQkJDQ0NFRUVCQkJDQ0NDQ0NCQkJDQ0NDQ0NCQkJCQkJCQkJCQkJDQ0NCQkK4uLhAQEBFRUVCQkJDQ0NAQEBQUFBUVFSHh4d9fX2AgIAmJiZDQ0M5OTk8PDwwMDApKSktLS03NzdAQEBYK7FNAAAAMnRSTlMAFBBPDQsHCSDgtfsE99WF4ywF9+ob88vArqWNa0g78tu7fXdcU0MeEdGacxiNezE1NMK0RL0AAAKZSURBVGje7NbNcoIwFIbhb8YF4R+GolIQrVbHqqt8grb3f2G9AWtDTrLoTJ89zAsk5OCvKKM1J1g3JZzap5wo3cOhPmVbY4L6xLiHM6pgjolaFgqOHDeMAkyURNwc4UTwxiywuCzjMoALEUMFC3XIJoFczrmClXLOHGI7VgdYOlTcQWhFCjb0O+MZRA4ptxDYMu0hoF7YQqTli4K1OmSUQCSJGNawFCwc7ORgyUVgeWnE8AKxi/VrPBl8PsOFdLJbwFUPJ/qKW6stvIIjs5jvmGiVsoMz3eSnKVPmcCjnupw4gbzCqVcWSjaByIeKzVEwgcgFGd9Mb9owVHBOhWyMJ5ASAtL5ZMdqBS8OFc/4HX+QdQkMJV0W8zFBABklxqcYKQnQD41fbE0X0deoHxIF6DvjGgYuKe/aR4C+8gwDZ161n4DR7P/ccPQUcOcSBpa8ewq4cQEDH7x5CtCcJwabcO0vYDAZbPYctK+AkYUyOHNGbwF6YLGbPdUVHLS/gNvAXw03ecAT4+f1qc9Ra3mAyH/Ad7vlltowDERR32FGEAz5EIFANhDykaT14NrZ/8Y6hkKpxi1JIyk/Ohs4x9cPuQW0gBbQAlpAC2gBzwaEsgHhbzkTUDYAIIm/2WGUD1hgP4QQUC3AIPmhZwB1Awz+vnqgfsDC1wqEVwWAnN/Y6TQUYtIdXIEgYa/zUIhZ90jgDilnvQ2FuOkZKT7grS91DybVdx/ASDnoOBRh1ANS2D+EOG50/Mivn0fdHIE7XgNct1qE7XXNb4jb4HLqNTP96eKuX9ynuCrsDqOakKwdx9Xg0K0Sa+xAfMdfkaOw3C/BlN8tsXuMYBmUwWzq0D1BsJD/lBCbOHQ5idYiwpazkOgW2Jxi1vjA2J+WviNztlfQPgAAAABJRU5ErkJggg=='
                alt=''
                width={100}
              />
              <p className='ms-2'>ဒေတာမရှိပါ။</p>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane ${selectedTab === 'tab5' ? 'active' : ''}`}
          id='tab5'
        >
          <div className='card secondcard-bg mx-2'>
            <div className='mx-auto py-4'>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABSCAMAAACrFizdAAAAsVBMVEUAAAD///////9ERET///////////9AQEBBQUFCQkJCQkJDQ0NAQEBDQ0NCQkJCQkJCQkJAQED///9CQkJCQkJAQEBCQkJERERCQkJDQ0NFRUVCQkJDQ0NDQ0NCQkJDQ0NDQ0NCQkJCQkJCQkJCQkJDQ0NCQkK4uLhAQEBFRUVCQkJDQ0NAQEBQUFBUVFSHh4d9fX2AgIAmJiZDQ0M5OTk8PDwwMDApKSktLS03NzdAQEBYK7FNAAAAMnRSTlMAFBBPDQsHCSDgtfsE99WF4ywF9+ob88vArqWNa0g78tu7fXdcU0MeEdGacxiNezE1NMK0RL0AAAKZSURBVGje7NbNcoIwFIbhb8YF4R+GolIQrVbHqqt8grb3f2G9AWtDTrLoTJ89zAsk5OCvKKM1J1g3JZzap5wo3cOhPmVbY4L6xLiHM6pgjolaFgqOHDeMAkyURNwc4UTwxiywuCzjMoALEUMFC3XIJoFczrmClXLOHGI7VgdYOlTcQWhFCjb0O+MZRA4ptxDYMu0hoF7YQqTli4K1OmSUQCSJGNawFCwc7ORgyUVgeWnE8AKxi/VrPBl8PsOFdLJbwFUPJ/qKW6stvIIjs5jvmGiVsoMz3eSnKVPmcCjnupw4gbzCqVcWSjaByIeKzVEwgcgFGd9Mb9owVHBOhWyMJ5ASAtL5ZMdqBS8OFc/4HX+QdQkMJV0W8zFBABklxqcYKQnQD41fbE0X0deoHxIF6DvjGgYuKe/aR4C+8gwDZ161n4DR7P/ccPQUcOcSBpa8ewq4cQEDH7x5CtCcJwabcO0vYDAZbPYctK+AkYUyOHNGbwF6YLGbPdUVHLS/gNvAXw03ecAT4+f1qc9Ra3mAyH/Ad7vlltowDERR32FGEAz5EIFANhDykaT14NrZ/8Y6hkKpxi1JIyk/Ohs4x9cPuQW0gBbQAlpAC2gBzwaEsgHhbzkTUDYAIIm/2WGUD1hgP4QQUC3AIPmhZwB1Awz+vnqgfsDC1wqEVwWAnN/Y6TQUYtIdXIEgYa/zUIhZ90jgDilnvQ2FuOkZKT7grS91DybVdx/ASDnoOBRh1ANS2D+EOG50/Mivn0fdHIE7XgNct1qE7XXNb4jb4HLqNTP96eKuX9ynuCrsDqOakKwdx9Xg0K0Sa+xAfMdfkaOw3C/BlN8tsXuMYBmUwWzq0D1BsJD/lBCbOHQ5idYiwpazkOgW2Jxi1vjA2J+WviNztlfQPgAAAABJRU5ErkJggg=='
                alt=''
                width={100}
              />
              <p className='ms-2'>ဒေတာမရှိပါ။</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
