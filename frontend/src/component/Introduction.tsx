import React from "react"
import { Link,Navigate,useNavigate } from "react-router-dom"
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardstyle={
    height:100,
    width:250,
    padding:15,
    // paddingTop:10,
    display:"block"
};

const boxstyle={
    margin:"auto",
    width:560
};

const divstyle={
    textAlign:'center' as 'center', //weird syntax plz tell me why
    display:"block",
    padding:0,
    margin:"auto",
    marginBottom:10,
    fontSize:18
};
export const Introduction = () =>{
    const navigate = useNavigate()
    return (
        <Box sx={boxstyle}>
            
            <Card sx={{float:"left"}} style={cardstyle}>
                <Button style={divstyle} onClick={()=>navigate("../MaterialAndToolPage.tsx")}><Link to="MaterialAndToolPage" style={{color:"red", textDecoration:"None"}}>Disposable Material</Link></Button>
                <Typography>I'm disposable</Typography>
            </Card>
            <Card style={cardstyle}>
                <div style={divstyle}>Material</div>
            </Card>
            <Card sx={{float:"left"}} style={cardstyle}>
                <div style={divstyle}>Tool</div>
            </Card>
            <Card style={cardstyle}>
                <div style={divstyle}>Machine</div>
            </Card>
        </Box>
    )
}
// export default Introduction