import React from "react";
import { Row, Col, Progress, Table, Label, Input } from "reactstrap";

import Widget from "../../components/Widget";
import Map from "./components/am4chartMap/am4chartMap";


import s from "./Dashboard.module.scss";


import stocksImg from "../../images/stocks.svg";
import stocksDownImg from "../../images/stocksDown.svg";
import ApexChart from "react-apexcharts";

const splineArea = {
  series: [
    {
      name: "Users",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sessions",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: ["rgba(255, 205, 101, .2)", "rgba(0,0,0,0)"],
      type: "solid",
    },
    colors: ["#FFBF69", "#323232"],
    legend: {
      position: "top",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: 'rgba(196, 196, 196, 0.2)'
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  state = {
    splineArea: { ...splineArea },
  };

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col lg={8}>
            <Widget
              title={<p className={"fw-bold"}>Geographic Presence</p>}
              customDropDown
            >
              <Map />
            </Widget>
          </Col>

          <Col lg={4}>
            <Widget
              title={<p className={"fw-bold"}> Map Statistics</p>}
              customDropDown
            >
              <p>
                Status: <strong>Live</strong>
              </p>
              <p style={{ fontSize: 14 }}>
                <i
                  className={`fa fa-circle mb-2`}
                  style={{ color: "#323232" }}
                />{" "}
                146 Countries, 2759 Cities
              </p>
              <div className="row progress-stats mb-4">
                <div className="col-12">
                  <div className={"d-flex justify-content-between"}>
                    <h6 className="name">Foreign Visits</h6>
                    <h6>80%</h6>
                  </div>
                  <Progress
                    color="success"
                    value="80"
                    className="progress-xs mb-0"
                    style={{ backgroundColor: "rgba(129, 212, 187, 0.2)" }}
                  />
                  <small className={"fw-thin"}>50k users (+0.9%)</small>
                </div>
              </div>
              <div className="row progress-stats mb-3">
                <div className="col-12">
                  <div className={"d-flex justify-content-between"}>
                    <h6 className="name">Local Visits</h6>
                    <h6>39%</h6>
                  </div>
                  <Progress
                    color="danger"
                    value="39"
                    className="progress-xs mb-0"
                    style={{ backgroundColor: "rgba(255, 119, 105, .2)" }}
                  />
                  <small className={"fw-thin"}>35k users (+0.9%)</small>
                </div>
              </div>
              <div className="row progress-stats mb-4">
                <div className="col-12">
                  <div className={"d-flex justify-content-between"}>
                    <h6 className="name">Sound Frequencies</h6>
                    <h6>80%</h6>
                  </div>
                  <Progress
                    color="info"
                    value="80"
                    className="progress-xs mb-0"
                    style={{ backgroundColor: "rgba(159, 219, 233, .2)" }}
                  />
                  <small className={"fw-thin"}>55k users (+0.9%)</small>
                </div>
              </div>
              <div className="row progress-stats mb-3">
                <div className="col-12">
                  <div className={"d-flex justify-content-between"}>
                    <h6 className="name">Sound Frequencies</h6>
                    <h6>80%</h6>
                  </div>
                  <Progress
                    color="warning"
                    value="80"
                    className="progress-xs mb-0"
                    style={{ backgroundColor: "rgba(255, 191, 105, .2)" }}
                  />
                  <small className={"fw-thin"}>55k users (+0.9%)</small>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={<p className={"fw-bold"}>Userbase Growth</p>}
              customDropDown
            >
              <div className="d-flex justify-content-between mt-4">
                <p className={"mb-1"}>Overlall Growth</p>
                <p className={"mb-1"}>78,3%</p>
              </div>
              <Progress
                color="danger"
                value="60"
                className="progress-xs"
                style={{ backgroundColor: "rgba(255, 119, 105, .2)" }}
              />
              <p style={{ fontSize: 14 }} className={"mb-3"}>
                <img src={stocksImg} alt="up" />
                <span className="text-success">&nbsp;17% higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget
              title={<p className={"fw-bold"}>Traffic Values</p>}
              customDropDown
            >
              <div className="d-flex justify-content-between mt-4">
                <p className={"mb-1"}>Overlall Growth</p>
                <p className={"mb-1"}>78,3%</p>
              </div>
              <Progress
                color="warning"
                value="60"
                className="progress-xs"
                style={{ backgroundColor: "rgba(255, 191, 105, .2)" }}
              />
              <p style={{ fontSize: 14 }} className={"mb-3"}>
                <img src={stocksDownImg} alt="down" />
                <span className="text-danger">&nbsp;17% lower</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
          <Col lg={4} xs={12}>
            <Widget
              title={<p className={"fw-bold"}>Sessions Time</p>}
              customDropDown
            >
              <div className="d-flex justify-content-between mt-4">
                <p className={"mb-1"}>Overlall Growth</p>
                <p className={"mb-1"}>78,3%</p>
              </div>
              <Progress
                color="info"
                value="60"
                className="progress-xs"
                style={{ backgroundColor: "rgba(159, 219, 233, .2)" }}
              />
              <p style={{ fontSize: 14 }} className={"mb-3"}>
                <img src={stocksImg} alt="up" />
                <span className="text-success">&nbsp;17% higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col xs={8}>
            <Widget
              title={<p className={"fw-bold"}>Users, Session Analytics</p>}
              customDropDown
            >
              <Row>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    series={splineArea.series}
                    options={splineArea.options}
                    type={"area"}
                    height={"350px"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xs={4}>
            <Widget
              title={<p className={"fw-bold"}>Recent Sales</p>}
              customDropDown
            >
              <Row>
                <Col sm={12}>
                  <Table className={"mb-0 mt-4"} borderless responsive>
                    <thead>
                      <tr>
                        <th key={0} scope="col" className={"pl-0"}>
                          State
                        </th>
                        <th key={1} scope="col" className={"pl-0"}>
                          Amount
                        </th>
                        <th key={2} scope="col" className={"pl-0"}>
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-dark">
                      <tr key={0}>
                        <td className="fw-thin pl-0 fw-thin">
                          <i className={`fa fa-circle text-danger mr-3`} />
                          California
                        </td>
                        <td className={"pl-0 fw-thin"}>$8400</td>
                        <td className={"pl-0 fw-thin"}>3 Feb, 2020</td>
                      </tr>
                      <tr key={1}>
                        <td className="fw-thin pl-0 fw-thin">
                          <i className={`fa fa-circle text-info mr-3`} />
                          Florida
                        </td>
                        <td className={"pl-0 fw-thin"}>$780</td>
                        <td className={"pl-0 fw-thin"}>3 Feb, 2020</td>
                      </tr>
                      <tr key={1}>
                        <td className="fw-thin pl-0 fw-thin">
                          <i className={`fa fa-circle text-warning mr-3`} />
                          New Mexico
                        </td>
                        <td className={"pl-0 fw-thin"}>$1300</td>
                        <td className={"pl-0 fw-thin"}>3 Feb, 2020</td>
                      </tr>
                      <tr key={1}>
                        <td className="fw-thin pl-0 fw-thin">
                          <i className={`fa fa-circle text-success mr-3`} />
                          Texas
                        </td>
                        <td className={"pl-0 fw-thin"}>$880</td>
                        <td className={"pl-0 fw-thin"}>3 Feb, 2020</td>
                      </tr>
                      <tr key={1}>
                        <td className="fw-thin pl-0 fw-thin">
                          <i className={`fa fa-circle text-info mr-3`} />
                          Mississippi
                        </td>
                        <td className={"pl-0 fw-thin"}>$9400</td>
                        <td className={"pl-0 fw-thin"}>3 Feb, 2020</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
