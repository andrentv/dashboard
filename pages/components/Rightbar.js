import React from 'react'
import { Doughnut } from 'react-chartjs-2';


const data = {
    labels: ['Prod-A', 'Prod-B', 'Prod-C', 'Prod-D'],
    datasets: [
        {                     
            backgroundColor: ['blue', 'red', 'green', 'yellow'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,5)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81]
        }
    ]
};


const Rightbar = () => {
    return (
        <div className="bg-white w-4/12 rounded-xl border border-gray-100 ">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold">Delegation</p>
            </div>
            <div className="flex flex-col p-3 ">
                <p className="font-semibold text-lg text-gray-800">21 h 47 m 51s</p>
                <p className="text-gray-600 text-sm">until next rewards batch is distributed</p>
            </div>
            <div className="p-4">
                <Doughnut  data={data} />
            </div>
            <div className="flex flex-col items-center p-3">
                <p className="text-gray-600 text-sm text-center">These are rewards available to claimed right now</p>
            </div>

            
        </div>
    )
}

export default Rightbar;
