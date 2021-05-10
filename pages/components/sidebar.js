import React from 'react';
import DonutlargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';
import LockIcon from '@material-ui/icons/Lock';
import EcoIcon from '@material-ui/icons/Eco';

const Sidebar = () => {
    return (
        <div className="md:w-1/3 w-6/12 shadow-2xl">
            <div className="border-b py-3 mt-1 flex justify-around">
                <p className="text-xl font-semibold">elrond</p>
                <p className="text-gray-300">|</p>
                <p className="text-gray-400 text-lg">wallet</p>
            </div>
            <div className="p-4 space-y-12">
                <div className="space-y-5">
                    <h1 className="text-gray-400">Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <DonutlargeIcon className="text-gray-300  hover:text-blue-600 " />
                            <p className="text-gray-600">Dashboard</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <ClearAllIcon className="text-gray-300  hover:text-blue-600" />
                            <p className="text-gray-600">Transaction</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <ArrowUpwardIcon className="text-gray-300  hover:text-blue-600" />
                            <p className="text-gray-600">Send</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <ArrowDownwardIcon className="text-gray-300  hover:text-blue-600" />
                            <p className="text-gray-600">Receive</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <SyncAltIcon className="text-gray-300  hover:text-blue-600" />
                            <p className="text-gray-600">Buy</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-gray-400">Delegation</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <LockIcon className="text-gray-300  hover:text-blue-600" />
                            <p className="text-gray-600">Delegate</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <EcoIcon className="text-gray-300  hover:text-blue-600" />
                            <p className="text-gray-600">Claim Rewards</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-gray-400">Staking</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                            <LayersIcon className="text-gray-300  hover:text-blue-600" />
                            <p className="text-gray-600">Validate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
