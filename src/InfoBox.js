import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  
  const determineStyle=(title)=>{
    if(title==='Cases') return 'infoBox--cases'
    else if(title==='Recovered') return 'infoBox--recovered'
    else return 'infoBox--death'
  }
  const style = determineStyle(title);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${style}`}
    >
      <CardContent className='infoBox--content'>
        <h2>{title}</h2>
        <h3 className={`infoBox__today ${style}`}>
          {cases}
        </h3>

        <Typography className={`infoBox__total ${style}`}>
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
