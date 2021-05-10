import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const Header = () => {
    return (
        <div className="flex shadow-sm bg-gray-50 p-4 justify-between">
            <div className="flex space-x-3" >
                <p className="text-gray-300">Address</p>
                <p className="text-gray-500">asdlfkjasdçflkjasdçlfkjasdlçfkjasdlçfkjasdf</p>
                <CropLandscapeIcon  className="text-gray-300 hover:bg-gray-50 hover:text-blue-600"/>
                <DashboardIcon  className="text-gray-300 hover:bg-gray-50 hover:text-blue-600"/>            
            </div>
            <div className="flex space-x-2">
                <ExitToAppIcon className="text-gray-400 hover:bg-gray-50 hover:text-blue-600"/>
                <AppsIcon className="text-gray-400 hover:bg-gray-50 hover:text-blue-600"/>
                <p className="text-gray-400 font-semibold hover:bg-gray-50 hover:text-blue-600">Close</p>
                
            </div>
        </div>
    )
}

export default Header;
