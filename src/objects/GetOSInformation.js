const os = require("os");

function GetOSInformation () {
    const getUserOs=()=>{
        return os.platform();
    } 

    const getHostUsername=()=>{
        return os.hostname();
    }

    const getOSType=()=>{
        return os.type();
    }

    const getOSVersion=()=> {
        return os.release();
    }

    return (
        <div style={{marginTop: 10}}>
            <h3>OS Information</h3>
            <h5>Platform:</h5>
            {getUserOs()}
            <h5>Hostname:</h5>
            {getHostUsername()}
            <h5>OS Type:</h5>
            {getOSType()}
            <h5>OS Version:</h5>
            {getOSVersion()}
        </div>
    )
}

export default GetOSInformation;