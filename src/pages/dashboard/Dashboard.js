import React from "react";
import { Row, Col, Table } from "reactstrap";

import usersImg from "../../images/usersImg.svg";
import usersDangerImg from '../../images/theme-icons/red/Users.svg'
import usersSuccessImg from '../../images/theme-icons/green/Users.svg'
import usersInfoImg from '../../images/theme-icons/blue/Users.svg'
import smileImg from "../../images/smileImg.svg";
import smileDangerImg from '../../images/theme-icons/red/Smile.svg'
import smileSuccessImg from '../../images/theme-icons/green/Smile.svg'
import smileInfoImg from '../../images/theme-icons/blue/Smile.svg'
import totalSale from "../../images/total-sale.svg";
import totalSaleDangerImg from '../../images/theme-icons/red/Sale.svg'
import totalSaleSuccessImg from '../../images/theme-icons/green/Sale.svg'
import totalSaleInfoImg from '../../images/theme-icons/blue/Sale.svg'
import orders from "../../images/orders.svg";
import ordersDangerImg from '../../images/theme-icons/red/Orders.svg'
import ordersSuccessImg from '../../images/theme-icons/green/Orders.svg'
import ordersInfoImg from '../../images/theme-icons/blue/Orders.svg'
import stocksImg from "../../images/stocks.svg";
import stocksDownImg from "../../images/stocksDown.svg";

import { chartData } from "./chartsMock";

import Widget from "../../components/Widget";

import s from "./Dashboard.module.scss";
import ApexChart from "react-apexcharts";

// people
import p1 from "../../images/people/p1.png";
import p2 from "../../images/people/p2.png";
import p3 from "../../images/people/p3.png";
import p4 from "../../images/people/p4.png";
import p5 from "../../images/userAvatar.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const orderValueOverride = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 173, 1, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -9,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const orderValueOverrideDanger = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 169, 131, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -9,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const orderValueOverrideInfo = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 119, 105, .3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -9,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};


const convertionRateOverride = {
  series: [
    {
      data: [280, 300, 170, 200, 230, 190, 260, 100, 290, 280, 300, 250, 240],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 169, 131, .3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -8,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const convertionRateOverrideDanger = {
  series: [
    {
      data: [280, 300, 170, 200, 230, 190, 260, 100, 290, 280, 300, 250, 240],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(50, 50, 50, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -8,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area = {
  series: [
    {
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["rgba(252, 215, 206, .25)"],
    },
    colors: ["rgba(246, 121, 93)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const areaDanger = {
  series: [
    {
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["rgba(194, 194, 194, .3)"],
    },
    colors: ["#323232"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area2 = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["rgba(255, 230, 179, .25)"],
    },
    colors: ["rgba(255, 173, 1)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area2Danger = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["rgba(255, 169, 131, .3)"],
    },
    colors: ["rgba(255, 169, 131, 1)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area2Info = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["rgba(255, 119, 105, .3)"],
    },
    colors: ["#FF7769"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};


const splineArea = {
  series: [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Outcome",
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

const splineAreaDanger = {
  series: [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Outcome",
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
      colors: ["rgba(255, 214, 210, .3)", "rgba(0,0,0,0)"],
      type: "solid",
    },
    colors: ["#FF7769", "#323232"],
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

const splineAreaSuccess = {
  series: [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Outcome",
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
      colors: ["rgba(217, 242, 235, .3)", "rgba(0,0,0,0)"],
      type: "solid",
    },
    colors: ["#81D4BB", "#323232"],
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

const splineAreaInfo = {
  series: [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Outcome",
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
      colors: ["rgba(202, 238, 245, 0.3)", "rgba(0,0,0,0)"],
      type: "solid",
    },
    colors: ["#4DC7DF", "#323232"],
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
  constructor() {
    super();
    this.forceUpdate = this.forceUpdate.bind(this);
    this.updateChartsColor = this.updateChartsColor.bind(this);
  }
  state = {
    orderValue: { ...chartData.apex.column, ...orderValueOverride },
    convertionRate: { ...chartData.apex.column, ...convertionRateOverride },
    area: { ...area },
    area2: { ...area2 },
    splineArea: { ...splineArea },
    pie: {
      options: {
        chart: {
          type: 'donut'
        },
        colors: ['#FFBF69', "#323232", '#FF7769'],
        labels: ["On progress", "Canceled", "Booked"],
        stroke: {
          show: false,
          width: 0
        },
        plotOptions: {
          pie: {
            donut: {
              size: '45%'
            }
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: false
          }
        },
        legend: {
          show: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    },
    usersImg: usersImg,
    smileImg: smileImg,
    saleImg: totalSale,
    ordersImg: orders
  };

  updateChartsColor(themeColor) {
    switch (themeColor) {
      case "warning":
        this.setState({
          orderValue: { ...chartData.apex.column, ...orderValueOverride },
          convertionRate: {
            ...chartData.apex.column,
            ...convertionRateOverride,
          },
          area: { ...area },
          area2: { ...area2 },
          splineArea: { ...splineArea },
              pie: {
                options: {
                  chart: {
                    type: 'donut'
                  },
                  colors: ['#FFBF69', "#323232", '#FF7769'],
                  labels: ["On progress", "Canceled", "Booked"],
                  stroke: {
                    show: false,
                    width: 0
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        size: '45%'
                      }
                    }
                  },
                  dataLabels: {
                    dropShadow: {
                      enabled: false
                    }
                  },
                  legend: {
                    show: false
                  },
                  responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }]
                }
              },
          usersImg: usersImg,
          smileImg: smileImg,
          saleImg: totalSale,
          ordersImg: orders
        });
        break;
      case "danger":
        this.setState({
          orderValue: { ...chartData.apex.column, ...orderValueOverrideDanger },
          convertionRate: {
            ...chartData.apex.column,
            ...convertionRateOverrideDanger,
          },
          area: { ...areaDanger },
          area2: { ...area2Danger },
          pie: {
            options: {
              chart: {
                type: 'donut'
              },
              colors: ['#FF7769', "#323232", '#FFA983'],
              labels: ["On progress", "Canceled", "Booked"],
              stroke: {
                show: false,
                width: 0
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '45%'
                  }
                }
              },
              dataLabels: {
                dropShadow: {
                  enabled: false
                }
              },
              legend: {
                show: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
          },
          splineArea: { ...splineAreaDanger },
          usersImg: usersDangerImg,
          smileImg: smileDangerImg,
          saleImg: totalSaleDangerImg,
          ordersImg: ordersDangerImg
        });
        break;
      case "success":
        this.setState({
          orderValue: { ...chartData.apex.column, ...orderValueOverrideDanger },
          convertionRate: {
            ...chartData.apex.column,
            ...convertionRateOverrideDanger,
          },
          area: { ...areaDanger },
          area2: { ...area2Danger },
          splineArea: { ...splineAreaSuccess },
          pie: {
            options: {
              chart: {
                type: 'donut'
              },
              colors: ['#81D4BB', "#323232", '#FFA983'],
              labels: ["On progress", "Canceled", "Booked"],
              stroke: {
                show: false,
                width: 0
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '45%'
                  }
                }
              },
              dataLabels: {
                dropShadow: {
                  enabled: false
                }
              },
              legend: {
                show: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
          },
          usersImg: usersSuccessImg,
          smileImg: smileSuccessImg,
          saleImg: totalSaleSuccessImg,
          ordersImg: ordersSuccessImg
        });
        break;
      case "info":
        this.setState({
          orderValue: { ...chartData.apex.column, ...orderValueOverrideInfo },
          convertionRate: {
            ...chartData.apex.column,
            ...convertionRateOverrideDanger,
          },
          area: { ...areaDanger },
          area2: { ...area2Info },
          splineArea: { ...splineAreaInfo },
          pie: {
            options: {
              chart: {
                type: 'donut'
              },
              colors: ['#4DC7DF', "#323232", '#FF7769'],
              labels: ["On progress", "Canceled", "Booked"],
              stroke: {
                show: false,
                width: 0
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '45%'
                  }
                }
              },
              dataLabels: {
                dropShadow: {
                  enabled: false
                }
              },
              legend: {
                show: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
          },
          usersImg: usersInfoImg,
          smileImg: smileInfoImg,
          saleImg: totalSaleInfoImg,
          ordersImg: ordersInfoImg
        });
        break;
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dashboardColor !== this.props.dashboardColor) {
      switch (this.props.dashboardColor) {
        case "warning":
          this.updateChartsColor("warning");
          break;
        case "danger":
          this.updateChartsColor("danger");
          break;
        case "success":
          this.updateChartsColor("success")
              break;
        case "info":
          this.updateChartsColor("info")
              break;
      }
    }
  }

  forceUpdate() {
    return this.setState({});
  }

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Average Order Value</p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>872 410 $</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>40%</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.orderValue.series}
                    options={this.state.orderValue.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Convertion Rate</p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>20.7%</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>15%</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.convertionRate.series}
                    options={this.state.convertionRate.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={window.innerWidth > 1280 ? 2 : 4} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={this.state.usersImg} alt="" style={{ paddingTop: 7 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>50873</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h5 className={"fw-thin pt-1 mb-0"}>Visitors</h5>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={2} className={`${s.dashboardBlock}`} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={this.state.smileImg} alt="" style={{ paddingTop: 7 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>6452</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h5 className={"fw-thin pt-1 mb-0"}>Customers</h5>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Upsell Take Rate </p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>20.7%</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>20%</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.area.series}
                    options={this.state.area.options}
                    type={"area"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Number of returns</p>}
              customDropDown
            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>12</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>14%</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.area2.series}
                    options={this.state.area2.options}
                    type={"area"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={window.innerWidth > 1280 ? 2 : 4} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={this.state.saleImg} alt="" style={{ paddingTop: 7 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>$92k</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h5 className={"fw-thin pt-1 mb-0"}>Sales</h5>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-success mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={2} className={`${s.dashboardBlock}`} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <img src={this.state.ordersImg} alt="" style={{ paddingTop: 7 }} />
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h3 className={"fw-semi-bold pt-1 mb-0"}>3240</h3>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <h5 className={"fw-thin pt-1 mb-0"}>Orders</h5>
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksDownImg} alt="" className={"mr-1"} />
                  <p className={"fw-thin text-danger mb-0"}>15%</p>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col xl={8}>
            <Widget
              title={
                <Row>
                  <Col xs={12} sm={5}>
                    <p style={{ fontWeight: 700 }}>Daily Line Chart</p>
                  </Col>
                  <Col xs={12} sm={7}>
                    <div className="chart-legend" />
                  </Col>
                </Row>
              }
              customDropDown
            >
              <Row style={{ marginTop: -36 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    series={this.state.splineArea.series}
                    options={this.state.splineArea.options}
                    type={"area"}
                    height={"350px"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Status</p>}
              customDropDown
            >
              <Row
                className={`${s.row} justify-content-center`}
                noGutters
                style={{ marginBottom: 30, marginTop: 24 }}
              >
                <ApexChart
                  className="sparkline-chart"
                  type={"donut"}
                  height={180}
                  series={chartData.apex.pie.series}
                  options={this.state.pie.options}
                />
              </Row>
              <Row className={`justify-content-between`}>
                <Col sm={4}>
                  <div className={`${s.pieElements}`} style={{borderTopColor: this.state.pie.options.colors[2]}}>
                    <h4 className={"mt-3 mb-1"}>253</h4>
                    <p>Booked</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={`${s.pieElements}`} style={{borderTopColor: this.state.pie.options.colors[0]}}>
                    <h4 className={"mt-3 mb-1"}>1732</h4>
                    <p>On progress</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={`${s.pieElements}`} style={{borderTopColor: this.state.pie.options.colors[1]}}>
                    <h4 className={"mt-3 mb-1"}>50</h4>
                    <p>Canceled</p>
                  </div>
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Widget
              customDropDown
              title={<p className={"fw-bold"}>Recent Order</p>}
            >
              <Table className={"mb-0"} responsive>
                <thead>
                  <tr>
                    <th key={0} scope="col" className={"pl-0"}>
                      Invoices
                    </th>
                    <th key={1} scope="col" className={"pl-0"}>
                      Customers
                    </th>
                    <th key={2} scope="col" className={"pl-0"}>
                      Date
                    </th>
                    <th key={3} scope="col" className={"pl-0"}>
                      Amount
                    </th>
                    <th key={4} scope="col" className={"pl-0"}>
                      Status
                    </th>
                    <th key={5} scope="col" className={"pl-0"}>
                      Tracking
                    </th>
                  </tr>
                </thead>
                <tbody className="text-dark">
                  <tr key={0}>
                    <td className="fw-thin pl-0 fw-thin">
                      <i className={`fa fa-circle text-success mr-3`} />
                      #003486
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p1} alt="" className={"mr-3"} />
                      Kate Claus
                    </td>
                    <td className={"pl-0 fw-thin"}>10 Jan 2020</td>
                    <td className={"pl-0 fw-normal"}>$8400</td>
                    <td className={"pl-0 text-success fw-normal"}>
                      On Delivery
                    </td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={1}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-success mr-3`} />
                      #004326
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p2} alt="" className={"mr-3"} />
                      Maria Gordon
                    </td>
                    <td className={"pl-0 fw-thin"}>08 Jan 2020</td>
                    <td className={"pl-0 fw-normal"}>$8400</td>
                    <td className={"pl-0 text-success fw-normal"}>
                      On Delivery
                    </td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={2}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-danger mr-3`} />
                      #001258
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p3} alt="" className={"mr-3"} />
                      Nick Peru
                    </td>
                    <td className={"pl-0 fw-thin"}>05 Jan 2020</td>
                    <td className={"pl-0 fw-normal"}>$1300</td>
                    <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={3}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-danger mr-3`} />
                      #0014176
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img src={p4} alt="" className={"mr-3"} />
                      Lian Robinson
                    </td>
                    <td className={"pl-0 fw-thin"}>20 Dec 2019</td>
                    <td className={"pl-0 fw-normal"}>$880</td>
                    <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                  <tr key={4}>
                    <td className="fw-normal pl-0 fw-thin">
                      <i className={`fa fa-circle text-danger mr-3`} />
                      #0014177
                    </td>
                    <td className={"pl-0 fw-thin"}>
                      <img
                        src={p5}
                        alt=""
                        className={"mr-3"}
                        width={"34px"}
                        height={"34px"}
                      />
                      Sam Fisher
                    </td>
                    <td className={"pl-0 fw-thin"}>16 Dec 2019</td>
                    <td className={"pl-0 fw-normal"}>$9400</td>
                    <td className={"pl-0 text-danger fw-normal"}>Pending</td>
                    <td className={"pl-0 fw-thin"}>RU00250TF</td>
                  </tr>
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarColor: store.layout.sidebarColor,
    dashboardColor: store.layout.dashboardTheme,
  };
}

export default withRouter(connect(mapStateToProps)(Dashboard));
