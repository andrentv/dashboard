import React from 'react';
import { Line } from 'react-chartjs-2';


const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {                     
            backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(229, 231, 235)',],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};


const Middle = () => {
    return (
        <div className="bg-white ml-2 border shadow-sm w-2/3 h-96 rounded-xl border-gray-100 ">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold">Elrond eGold</p>
            </div>
             <div className="p-4">
                <Line  data={data} />
            </div>
            
        </div>
    )
}

export default Middle
