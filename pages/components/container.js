import React from 'react'
import Card from './Card'
import Middle from './Middle'
import RightBar from './Rightbar'

const Container = () => {
    return (
        <div className="bg gradient-to-r from-gray-200 to-gray-50">
            <div className="px-8 py-1">
                <p className="text-gray-500 text-lg">
                    Elrond
                </p>
                <p className="font-bold text-2xl transform -translate-y-2">
                    Hei!
                </p>
            </div>
            <div  className="flex p-4 space-x-3">
                <Card title="TOTAL" balance={100.000} icon={0}/>
                <Card title="AVAILABLE" balance={100.000} icon={1}/>
                <Card title="CLAIMABLE REWARD" balance={100.000} icon={2}/>
                <Card title="DELEGATED" balance={100.000} icon={3}/>
            </div>
            <div className="flex ml-2 mt-6 space-x-8">
                <Middle />
                <RightBar />

            </div>
          
        </div>
    )
}

export default Container;
