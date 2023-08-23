import React from "react"
import { useState } from "react";
import { Link,Navigate,useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardstyle={
    height:150,
    width:"50%",
    padding:15,
    verticalAlign:"top",
    boxSizing:"content-box" as "content-box",
    border:"2px solid rgb(100,100,100)",
};

const boxstyle={
    margin:"auto",
    marginTop:"20px",
    marginBottom:"20px",
    width:"84%",
    borderWidth:"3px",    
};

const buttonstyle={
    display:"block",
    padding:0,
    margin:"auto",
    marginBottom:10,
    fontSize:18,
    fontWeight:"bold",
};

const linkstyle={
    textDecorationLine:"none",
    color:"#67b9c7",
    padding:"0px 10px",
}

const ul= { 
    borderRadius:"30px 0px 0px 0px",
    borderRight:"1px solid rgb(100,100,100)",
    borderBottom:"1px solid rgb(100,100,100)"
}

const ur={
    borderRadius:"0px 30px 0px 0px",
    borderLeft:"1px solid rgb(100,100,100)",
    borderBottom:"1px solid rgb(100,100,100)"
}

const ll={ 
    borderRadius:"0px 0px 0px 30px",
    borderTop:"1px solid rgb(100,100,100)",
    borderRight:"1px solid rgb(100,100,100)"
}

const lr={
    borderRadius:"0px 0px 30px 0px",
    borderTop:"1px solid rgb(100,100,100)",
    borderLeft:"1px solid rgb(100,100,100)"
}

const hover={
    color:"#999999"
}
export const Introduction = () =>{
    const navigate = useNavigate();
    const introd= document.getElementsByClassName('intro') as  HTMLCollectionOf<HTMLElement>;
    // document.getElementsByClassName('intro').setAttribute("style","background-color:aliceblue")
    
    // for (var i=0; i<introd.length; i++){
    //     introd[i].onmouseover=function(){
    //         introd[i].style.backgroundColor="aliceblue";
    //     };
    //     introd[i].onmouseout=function(){    
    //         introd[i].style.backgroundColor="#ffffff";
    //     }    
    // }
    const [color, set] = useState("#ffffff");
    const change = ()=>{
        set("aliceblue");
    }
    const change2 = ()=>{
        set("#ffffff");
    }
    return (
        <Box sx={boxstyle}>
            <div>Introduction</div>
            <table style={{borderCollapse:"separate" as "separate",borderSpacing:0,width:"100%"}}>
                <tr>
                    <td style={Object.assign({backgroundColor:color},cardstyle,ul)} onMouseOver={change} onMouseOut={change2} className="intro">
                        <Button style={buttonstyle} onClick={()=>navigate("../MaterialAndToolPage")}>
                            <div style={linkstyle}>Disposable Material</div>
                        </Button>
                        <Typography>I'm disposable</Typography>
                    </td>
                    <td style={Object.assign({},cardstyle,ur)} onMouseOver={change} onMouseOut={change2} className="intro">
                        <Button style={buttonstyle} onClick={()=>navigate("../MaterialAndToolPage")}>
                            <div style={linkstyle}>Material</div>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td style={Object.assign({},cardstyle,ll)} onMouseOver={change} onMouseOut={change2} className="intro">
                        <Button style={buttonstyle} onClick={()=>navigate("../MaterialAndToolPage")}>
                            <div style={linkstyle}>Tool</div>
                        </Button>
                    </td>
                    <td style={Object.assign({},cardstyle,lr)} onMouseOver={change} onMouseOut={change2}className="intro">
                        <Button style={buttonstyle} onClick={()=>navigate("../MaterialAndToolPage")}>
                            <div style={linkstyle}>Machine</div>
                        </Button>
                    </td>
                </tr>
            </table>
        </Box>
    )
}