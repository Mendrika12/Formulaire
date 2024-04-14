import React from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton, List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import docimage from "./images/google-docs--v1.png"
import excelsheetimage from "./images/google-sheets.png"
import slidesimage from "./images/google-slides.png"
import formimage from "./images/google_forms.png"
import driveimage from "./images/google-drive--v1.png"

const useStyles = makeStyles ({
    listItem:{
        marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"
    },
    slideImages:{
        height:"20px", width:"20px"
    }
});

function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const renderList = (anchor) => {
        return (
            <div style={{ width: "250px" }} role="presentation">
                <List>
                    <ListItem>
                        <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
                            <span style={{ color: "blue", fontWeight: "700", fontSize: "22px", fontFamily: "'Product sans', Arial, sans-serif" }}>G</span>
                            <span style={{ color: "red", fontWeight: "500", fontSize: "22px", fontFamily: "'Product sans', Arial, sans-serif" }}>o</span>
                            <span style={{ color: "yellow", fontWeight: "500", fontSize: "22px", fontFamily: "'Product sans', Arial, sans-serif" }}>o</span>
                            <span style={{ color: "blue", fontWeight: "500", fontSize: "22px", fontFamily: "'Product sans', Arial, sans-serif" }}>g</span>
                            <span style={{ color: "green", fontWeight: "500", fontSize: "22px", fontFamily: "'Product sans', Arial, sans-serif" }}>l</span>
                            <span style={{ color: "red", fontWeight: "500", fontSize: "22px", marginRight: "10px", fontFamily: "'Product sans', Arial, sans-serif" }}>e</span>
                            <span style={{ color: "#5f6368", fontWeight: "500", fontSize: "22px", fontFamily: "'Product sans', Arial, sans-serif" }}>Docs</span>
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}>
                    <ListItem className="list_item">
                        <img src={docimage} className={classes.slideImages}/>
                        <div className= {classes.listItem}> Docs </div> 
                    </ListItem>

                    <ListItem className="list_item">
                        <img src={excelsheetimage} className={classes.slideImages}/>
                        <div className= {classes.listItem}> Sheets </div> 
                    </ListItem>

                    <ListItem className="list_item">
                        <img src={slidesimage} className={classes.slideImages}/>
                        <div className= {classes.listItem}> Slides </div> 
                    </ListItem>

                    <ListItem className="list_item">
                        <img src={formimage} className={classes.slideImages}/>
                        <div className= {classes.listItem}> Forms </div> 
                    </ListItem>

                    <ListItem className="list_item">
                        <img src={driveimage} className={classes.slideImages}/>
                        <div className= {classes.listItem}> Drive </div> 
                    </ListItem>
                    </List>
            </div>
        );
    }

    return (
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer("left", true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={'left'}>
                    {renderList('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default TemporaryDrawer;