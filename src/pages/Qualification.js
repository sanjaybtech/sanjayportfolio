import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EngineeringIcon from '@mui/icons-material/Engineering';
import "../styles/Qualification.css"

function qualification() {
  return (
    <div className='qualification'>
      <VerticalTimeline lineColor='#012209'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2014-2017'
          iconStyle={{ background: "#012209", color: "#fff" }}
          icon={<EngineeringIcon />}>
          <h3 className='vertical-element-timeline-title'>PSET, Rourkela, Odisha</h3>
          <p>Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>


      <VerticalTimeline lineColor='#012209'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2017-2018'
          iconStyle={{ background: "#012209", color: "#fff" }}
          icon={<EngineeringIcon />}>
          <h3 className='vertical-element-timeline-title'>CTTC, Bhubaneswar, Odisha</h3>
          <p>Post Diploma in Tool and Die Manufatruring</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
      <VerticalTimeline lineColor='#012209'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2021'
          iconStyle={{ background: "#012209", color: "#fff" }}
          icon={<EngineeringIcon />}>
          <h3 className='vertical-element-timeline-title'>VIT, Bhubaneswar, Odisha</h3>
          <p>Bachelor</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default qualification;