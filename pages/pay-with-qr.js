import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import QRCode from 'qrcode.react';

function App() {
  const [cost, setCost] = useState(0);
  const [qrCodeData, setQRCodeData] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQRCodeData(`user@gmail.com|${cost}|${new Date().getTime()}`);
    }, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  const renewQR = () => {
    setQRCodeData(`user@gmail.com|${cost}|${new Date().getTime()}`);
  }

  useEffect(renewQR, [cost]);

  return (
    <div className='flex items-center justify-between h-screen'>
      <Navbar/>
      <div className='flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/3 space-y-10'>
        <QRCode value={qrCodeData}  />
        <div className='flex items-center justify-center'>
          <span className='text-[8rem]'>&#8377;</span>
          <input type='number' className='h-32 text-[8rem] w-64 focus:outline-none border-b-2' autoFocus defaultValue={1} min={1} maxLength={3} onChange={(e) => setCost(e.target.value)}/></div>
          <button onClick={renewQR} className="button bg-[#9587f2] my-2 [box-shadow:0_5px_0_0_#8371f0,0_10px_0_0_#3319d122] border-[#9587f2]/80 flex justify-center space-x-3 items-center origin-left transition-all duration-300">
            <h4>Regenerate QR</h4>
        </button>
      </div>
    </div>
  );
}

export default App;
