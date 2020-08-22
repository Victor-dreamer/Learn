<!-- echart学习第一步 -->
<template>
  <div class="echart">
    <div id="showEchart" ref="chart"></div>
  </div>
</template>

<script>
const echarts = require('echarts')

export default {
  data () {
    return {
      option: {
        title: {
          text: '第一个echart'
        },
        tooltip: {},
        legend: {
          data: ['销量'],
          orient: 'horizontal',
          backgroundColor: 'rgba(0,0,0,0.2)'
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }
        ],
        dataRange: {
          // backgroundColor: 'rgba(0,0,0,.4)'
          splitNumber: 0,
          itemGap: 0
        }
      }
    }
  },

  computed: {},

  watch: {},
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      echarts.init(this.$refs.chart).setOption(this.option)
      // this.$refs.chart.option = this.option
    }
  }
}
</script>

<style scoped lang='scss'>
#showEchart {
  width: 600px;
  height: 400px;
  margin: 50px auto;
}
</style>
