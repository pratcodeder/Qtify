import * as React from "react";
import {Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQAccordion.css"


export default () => {
    return (
      <div className="mainbody">
        <div className="FAQSection">
           <h5 className="heading">FAQs</h5>
           <div>
           <Accordion className="Accordion">
        <AccordionSummary  expandIcon={<ExpandMoreIcon className="icon"/>} id="panel1a-header" className="summary">
          <Typography className="typographySummary">Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typographyDetails">
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordion">
        <AccordionSummary  expandIcon={<ExpandMoreIcon className="icon"/>} id="panel2a-header" className="summary">
          <Typography className="typographySummary">Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typographyDetails">
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
           </div>

        </div>
        </div>
    )
}