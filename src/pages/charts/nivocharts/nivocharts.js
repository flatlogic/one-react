import React, { Component } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveStream } from '@nivo/stream';
import { ResponsiveSwarmPlot } from '@nivo/swarmplot';
import { ResponsiveChord } from '@nivo/chord';
import { ResponsiveWaffle } from '@nivo/waffle';
import { ResponsiveCalendar } from '@nivo/calendar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveSunburst } from '@nivo/sunburst';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import s from './nivocharts.module.scss';
import Widget from '../../../components/Widget';
import chartsData from './mock';
//import classnames from "classnames";


class NivoCharts extends Component {

  state = {
    cd: chartsData
  }

  render() {

    const { cd } = this.state;

    return (
    <div className={s.root}>
      <div>
        <Row>
           <Col xs={12}>
           <Widget
              title={<p className={"fw-bold"}>Nivo Bar Chart</p>}
              customDropDown
            >
            <div style={{height: "40vh", margin: "0 auto"}}>
              <ResponsiveBar
                  data={cd.data}
                  keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                  indexBy="country"
                  margin={{ top: 40, right: 130, bottom: 40, left: 30 }}
                  padding={0.3}
                  style={{transform: "rotate('-45deg', 58.9922, 44.6016)"}}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={["#1A86D0", "#21AE8C", "#FDA700", "#FD5F00", "#005792", "#3abf94"]}
                  borderColor={{ from: 'color', modifiers: [ [ 'darker', '2.1' ] ] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                  }}
                  labelSkipWidth={22}
                  labelSkipHeight={16}
                  labelTextColor={{ theme: 'labels.text.fill' }}
                  legends={[
                  {
                      dataFrom: 'keys',
                      anchor: 'right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 10,
                      itemWidth: 90,
                      itemHeight: 14,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemOpacity: 1
                          }
                        }
                      ]
                    }
                  ]}
                  theme={{
                      markers: { textColor: "#000", fontSize: "16" },
                      axis: { legend: { text: { fontSize: "16" } } },
                      legends: { text: { fontSize: "16" } }
                  }}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
              />
            </div>
       </Widget>
      </Col>
               <Col xs={12} lg={6}>
                   <Widget
                       title={<p className={"fw-bold"}>Nivo Pie Chart</p>}
                       customDropDown
                   >
                       <div style={{height: "40vh"}}>
                           <ResponsivePie
                               data={cd.pie}
                               margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                               innerRadius={0.5}
                               padAngle={0.7}
                               cornerRadius={3}
                               activeOuterRadiusOffset={8}
                               colors={{ scheme: 'yellow_orange_red' }}
                               borderWidth={1}
                               borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                               arcLinkLabelsSkipAngle={10}
                               arcLinkLabelsTextColor="#333333"
                               arcLinkLabelsThickness={1}
                               arcLinkLabelsColor={{ from: 'color' }}
                               arcLabelsSkipAngle={10}
                               arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                               legends={[
                                   {
                                       anchor: 'bottom',
                                       direction: 'row',
                                       justify: false,
                                       translateX: 10,
                                       translateY: 56,
                                       itemsSpacing: 0,
                                       itemWidth: 50,
                                       itemHeight: 15,
                                       itemTextColor: '#999',
                                       itemDirection: 'bottom-to-top',
                                       itemOpacity: 1,
                                       symbolSize: 10,
                                       symbolShape: 'circle',
                                       effects: [
                                           {
                                               on: 'hover',
                                               style: {
                                                   itemTextColor: '#000'
                                               }
                                           }
                                       ]
                                   }
                               ]}
                           />
                       </div>
                   </Widget>
               </Col>
               <Col xs={12} lg={6}>
                   <Widget
                       title={<p className={"fw-bold"}>Nivo Chord Chart</p>}
                       customDropDown
                   >
                       <div style={{height: "40vh", width: "100%"}}>
                           <ResponsiveChord
                               data={cd.matrix}
                               keys={[ 'John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim' ]}
                               margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                               valueFormat=".2f"
                               padAngle={0.02}
                               innerRadiusRatio={0.96}
                               innerRadiusOffset={0.02}
                               arcOpacity={1}
                               arcBorderWidth={1}
                               arcBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
                               ribbonOpacity={0.5}
                               ribbonBorderWidth={1}
                               ribbonBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
                               enableLabel={true}
                               label="id"
                               labelOffset={12}
                               labelRotation={-90}
                               labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
                               colors={{ scheme: 'nivo' }}
                               isInteractive={true}
                               arcHoverOpacity={1}
                               arcHoverOthersOpacity={0.25}
                               ribbonHoverOpacity={0.75}
                               ribbonHoverOthersOpacity={0.25}
                               animate={true}
                               motionStiffness={90}
                               motionDamping={7}
                               legends={[
                                   {
                                       anchor: 'bottom',
                                       direction: 'row',
                                       textAlign: 'center',
                                       justify: false,
                                       translateX: 0,
                                       translateY: 60,
                                       itemWidth: 60,
                                       itemHeight: 14,
                                       itemsSpacing: 0,
                                       itemTextColor: '#999',
                                       itemDirection: 'left-to-right',
                                       symbolSize: 12,
                                       symbolShape: 'circle',
                                       effects: [
                                           {
                                               on: 'hover',
                                               style: {
                                                   itemTextColor: '#000'
                                               }
                                           }
                                       ]
                                   }
                               ]}
                           />
                       </div>
                   </Widget>
               </Col>
      <Col xs={12}>
       <Widget
           title={<p className={"fw-bold"}>Nivo Stream Chart</p>}
           customDropDown
           >
              <div style={{width: "100%", height: "40vh"}}>
                  <ResponsiveStream
                      data={cd.chrart2}
                      keys={[ 'Raoul', 'Josiane', 'Marcel', 'Rene', 'Paul', 'Jacques' ]}
                      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                          orient: 'bottom',
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: '',
                          legendOffset: 36
                      }}
                      axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40 }}
                      offsetType="expand"
                      colors={{ scheme: 'nivo' }}
                      fillOpacity={0.85}
                      borderColor={{ from: 'color', modifiers: [] }}
                      dotSize={10}
                      dotColor="black"
                      dotBorderWidth={2}
                      dotBorderColor={{ from: 'color', modifiers: [ [ 'darker', '0.9' ] ] }}
                      legends={[
                          {
                              anchor: 'bottom-right',
                              direction: 'column',
                              translateX: 100,
                              itemWidth: 80,
                              itemHeight: 20,
                              itemTextColor: '#999999',
                              symbolSize: 12,
                              symbolShape: 'circle',
                              effects: [
                                  {
                                      on: 'hover',
                                      style: {
                                          itemTextColor: '#000000'
                                      }
                                  }
                              ]
                          }
                      ]}
                      theme={{
                          markers: { textColor: "#000", fontSize: "16" },
                          axis: { legend: { text: { fontSize: "16" } } },
                          legends: { text: { fontSize: "16" } }
                      }}
                  />
              </div>
            </Widget>
          </Col>
            <Col xs={12} lg={6}>
                <Widget
                    title={<p className={"fw-bold"}>Nivo Waffle Chart</p>}
                    customDropDown
                >
                    <div style={{width: "100%", height: "30vh"}}>
                        <ResponsiveWaffle
                            data={cd.waffle}
                            total={100}
                            rows={10}
                            columns={15}
                            padding={2}
                            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                            colors={{ scheme: 'nivo' }}
                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={11}
                            legends={[
                                {
                                    anchor: 'top',
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: -36,
                                    itemsSpacing: 5,
                                    itemWidth: 60,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 1,
                                    itemTextColor: '#777',
                                    symbolSize: 15,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000',
                                                itemBackground: '#f7fafb'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </Widget>
            </Col>
            <Col xs={12} lg={6}>
                <Widget
                    title={<p className={"fw-bold"}>Nivo CirclePackingCanvas Chart</p>}
                    customDropDown
                >
                    <div style={{width: "100%", height: "30vh"}}>
                        <ResponsiveCirclePacking
                            data={cd.canvas}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            id="name"
                            colors={{ scheme: 'nivo' }}
                            colorBy="id"
                            childColor={{ from: 'color', modifiers: [ [ 'brighter', '0.5' ] ] }}
                            padding={2}
                            leavesOnly={true}
                            enableLabels={true}
                            labelsSkipRadius={10}
                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', '1.5' ] ] }}
                            borderColor={{ from: 'color', modifiers: [ [ 'darker', '0.5' ] ] }}
                            animate={false}
                        />
                    </div>
                </Widget>
            </Col>
          <Col xs={12}>
                <Widget
                    title={<p className={"fw-bold"}>Nivo SwarmPlot Chart</p>}
                    customDropDown
                >
                    <div style={{height: "50vh"}}>
                        <ResponsiveSwarmPlot
                            data={cd.SwarmPlot}
                            groups={[ 'group A', 'group B', 'group C' ]}
                            value="price"
                            valueFormat="$.2f"
                            valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
                            size={{ key: 'volume', values: [ 4, 20 ], sizes: [ 6, 20 ] }}
                            spacing={5}
                            gap={5}
                            forceStrength={7}
                            simulationIterations={156}
                            colors={{ scheme: 'category10' }}
                            borderColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        0.6
                                    ],
                                    [
                                        'opacity',
                                        0.5
                                    ]
                                ]
                            }}
                            margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
                            motionStiffness={50}
                            motionDamping={10}
                            theme={{
                                markers: { textColor: "#000", fontSize: "16" },
                                axis: { legend: { text: { fontSize: "16" } } },
                            }}
                        />
                    </div>
                </Widget>
            </Col>
            <Col xs={12} lg={6}>
                <Widget
                    title={<p className={"fw-bold"}>Nivo SunBurst Chart</p>}
                    customDropDown
                >
                    <div style={{width: "100%", height: "30vh"}}>
                        <ResponsiveSunburst
                            data={cd.sunburst}
                            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                            id="name"
                            value="loc"
                            cornerRadius={2}
                            borderColor={{ theme: 'background' }}
                            colors={{ scheme: 'yellow_orange_brown' }}
                            childColor={{ from: 'color', modifiers: [ [ 'brighter', '0.5' ] ] }}
                            enableArcLabels={true}
                            arcLabelsSkipAngle={14}
                            arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', '1.5' ] ] }}
                        />
                    </div>
                </Widget>
            </Col>
            <Col xs={12} lg={6}>
                <Widget
                    title={<p className={"fw-bold"}>Nivo Radar Chart</p>}
                    customDropDown
                >
                    <div style={{width: "100%", height: "30vh"}}>
                        <ResponsiveRadar
                            data={cd.radar}
                            keys={[ 'chardonay', 'carmenere', 'syrah' ]}
                            indexBy="taste"
                            maxValue="auto"
                            margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
                            curve="catmullRomClosed"
                            borderWidth={2}
                            borderColor={{ from: 'color', modifiers: [] }}
                            gridLevels={5}
                            gridShape="circular"
                            gridLabelOffset={10}
                            enableDots={true}
                            dotSize={10}
                            dotColor={{ theme: 'background' }}
                            dotBorderWidth={2}
                            dotBorderColor={{ from: 'color', modifiers: [] }}
                            enableDotLabel={true}
                            dotLabel="value"
                            dotLabelYOffset={-12}
                            colors={{ scheme: 'nivo' }}
                            fillOpacity={0.5}
                            blendMode="multiply"
                            animate={true}
                            motionConfig="wobbly"
                            isInteractive={true}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'column',
                                    translateX: -10,
                                    translateY: -40,
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemTextColor: '#999',
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </Widget>
            </Col>
            <Col xs={12}>
                <Widget
                    title={<p className={"fw-bold"}>Nivo Calendar Chart</p>}
                    customDropDown
                >
                    <div style={{ height: "30vh"}}>
                        <ResponsiveCalendar
                            colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                            data={cd.calendar}
                            from="2020-01-01"
                            to="2020-11-31"
                            emptyColor="#eeeeee"
                            margin={{ top: 20, right: 30, bottom: 30, left: 20 }}
                            monthBorderColor="#ffffff"
                            dayBorderWidth={1}
                            dayBorderColor="#ffffff"
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'row',
                                    translateY: 36,
                                    itemCount: 4,
                                    itemWidth: 30,
                                    itemHeight: 36,
                                    itemsSpacing: 10,
                                    itemDirection: 'right-to-left'
                                }
                            ]}
                        />
                    </div>
                </Widget>
            </Col>
       </Row>
      </div>
    </div>
    );
  }
}


export default NivoCharts;
