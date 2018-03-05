<template>
    <div class="aw-content aw-content-lineChart" >
        <IEcharts :option="line"></IEcharts>
    </div>
</template>

<script>
import IEcharts from "vue-echarts-v3";
export default {
  name: "lineChart",
  data() {
    return {
      line: {
      color: ['#ffd285', '#ff733f', '#ec4863'],

      title: [{
          text: '调度任务分布图',
          left: '1%',
          top: '6%',
          textStyle: {
              color: '#333'
          }
      }
      ],
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          x: 200,
          top: '7%',
          textStyle: {
              color: '#ffd285',
          },
          data: ['主城区', '全市', '全省']
      },
      grid: {
          left: '1%',
          right: '15%',
          top: '16%',
          bottom: '6%',
          containLabel: true
      },
      toolbox: {
          "show": false,
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          "axisLine": {
              lineStyle: {
                  color: '#999'
              }
          },
          "axisTick": {
              "show": false
          },
          axisLabel: {
              textStyle: {
                  color: '#999'
              }
          },
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
          "axisLine": {
              lineStyle: {
                  color: '#999'
              }
          },
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#999'
              }
          },
          "axisTick": {
              "show": false
          },
          axisLabel: {
              textStyle: {
                  color: '#999'
              }
          },
          type: 'value'
      },
      series: [{
          name: '主城区',
          smooth: true,
          type: 'line',
          symbolSize: 8,
        	symbol: 'circle',
          data: [90, 50, 39, 50, 120, 82, 80]
      }, {
          name: '全市',
          smooth: true,
          type: 'line',
          symbolSize: 8,
        	symbol: 'circle',
          data: [70, 50, 50, 87, 90, 80, 70]
      }, {
          name: '全省',
          smooth: true,
          type: 'line',
          symbolSize: 8,
        	symbol: 'circle',
          data: [290, 200,20, 132, 15, 200, 90]
      }
    ]
      }
    };
  },
  components: {
    IEcharts
  }
};
</script>

<style>
.el-col {
  margin-bottom: 16px;
}
.material-icons {
  font-size: 80px;
  color: #ddd;
}

.cart-string {
  height: 100px;
  padding-top: 10px;
  font-size: 1.1rem;
}
.aw-content-lineChart {
  height: 400px;
  width: 100%;
}
</style>
