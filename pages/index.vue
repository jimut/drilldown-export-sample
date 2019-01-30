<template>
  <section class="container">
    <div id="chart-container"/>
    <button
      :disabled="isBtnDisabled"
      class="export-btn"
      type="button"
      @click="exportClickListener">Export</button>
  </section>
</template>

<script>
import download from 'downloadjs';

export default {
  data() {
    return {
      isBtnDisabled: true,
      chartConfig: {
        type: 'usa',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
          chart: {
            theme: 'fusion',
            caption: 'Carbon Dioxide Emissions',
            subCaption: 'Wikipedia',
          },
          data: [
            {
              id: 'AL',
              value: 121,
              link: 'newchart-json-A',
            },
            {
              id: 'AK',
              value: 35,
              link: 'newchart-json-A',
            },
            {
              id: 'AZ',
              value: 93,
              link: 'newchart-json-A',
            },
            {
              id: 'AR',
              value: 69,
              link: 'newchart-json-A',
            },
            {
              id: 'CA',
              value: 359,
              link: 'newchart-json-A',
            },
            {
              id: 'CO',
              value: 91,
              link: 'newchart-json-A',
            },
            {
              id: 'CT',
              value: 35,
              link: 'newchart-json-A',
            },
            {
              id: 'DE',
              value: 13,
              link: 'newchart-json-A',
            },
            {
              id: 'DC',
              value: 3,
              link: 'newchart-json-A',
            },
            {
              id: 'FL',
              value: 227,
              link: 'newchart-json-A',
            },
            {
              id: 'GA',
              value: 139,
              link: 'newchart-json-A',
            },
            {
              id: 'HI',
              value: 18,
              link: 'newchart-json-A',
            },
            {
              id: 'ID',
              value: 17,
              link: 'newchart-json-A',
            },
            {
              id: 'IL',
              value: 233,
              link: 'newchart-json-A',
            },
            {
              id: 'IN',
              value: 203,
              link: 'newchart-json-A',
            },
            {
              id: 'IA',
              value: 83,
              link: 'newchart-json-A',
            },
            {
              id: 'KS',
              value: 70,
              link: 'newchart-json-A',
            },
            {
              id: 'KY',
              value: 138,
              link: 'newchart-json-A',
            },
            {
              id: 'LA',
              value: 207,
              link: 'newchart-json-A',
            },
            {
              id: 'ME',
              value: 17,
              link: 'newchart-json-A',
            },
            {
              id: 'MA',
              value: 64,
              link: 'newchart-json-A',
            },
            {
              id: 'MI',
              value: 162,
              link: 'newchart-json-A',
            },
            {
              id: 'MN',
              value: 94,
              link: 'newchart-json-A',
            },
            {
              id: 'MS',
              value: 64,
              link: 'newchart-json-A',
            },
            {
              id: 'MO',
              value: 131,
              link: 'newchart-json-A',
            },
            {
              id: 'MT',
              value: 32,
              link: 'newchart-json-A',
            },
            {
              id: 'NE',
              value: 52,
              link: 'newchart-json-A',
            },
            {
              id: 'NV',
              value: 37,
              link: 'newchart-json-A',
            },
            {
              id: 'NH',
              value: 15,
              link: 'newchart-json-A',
            },
            {
              id: 'NJ',
              value: 114,
              link: 'newchart-json-A',
            },
            {
              id: 'NM',
              value: 50,
              link: 'newchart-json-A',
            },
            {
              id: 'NY',
              value: 170,
              link: 'newchart-json-A',
            },
            {
              id: 'NC',
              value: 126,
              link: 'newchart-json-A',
            },
            {
              id: 'ND',
              value: 55,
              link: 'newchart-json-A',
            },
            {
              id: 'OH',
              value: 229,
              link: 'newchart-json-A',
            },
            {
              id: 'OK',
              value: 104,
              link: 'newchart-json-A',
            },
            {
              id: 'OR',
              value: 38,
              link: 'newchart-json-A',
            },
            {
              id: 'PA',
              value: 242,
              link: 'newchart-json-A',
            },
            {
              id: 'RI',
              value: 11,
              link: 'newchart-json-A',
            },
            {
              id: 'SC',
              value: 74,
              link: 'newchart-json-A',
            },
            {
              id: 'SD',
              value: 15,
              link: 'newchart-json-A',
            },
            {
              id: 'TN',
              value: 103,
              link: 'newchart-json-A',
            },
            {
              id: 'TX',
              value: 709,
              link: 'newchart-json-A',
            },
            {
              id: 'UT',
              value: 64,
              link: 'newchart-json-A',
            },
            {
              id: 'VT',
              value: 6,
              link: 'newchart-json-A',
            },
            {
              id: 'VA',
              value: 103,
              link: 'newchart-json-A',
            },
            {
              id: 'WA',
              value: 73,
              link: 'newchart-json-A',
            },
            {
              id: 'WV',
              value: 97,
              link: 'newchart-json-A',
            },
            {
              id: 'WI',
              value: 101,
              link: 'newchart-json-A',
            },
            {
              id: 'WY',
              value: 65,
              link: 'newchart-json-A',
            },
          ],

          colorrange: {
            minvalue: '0',
            startlabel: 'Low',
            endlabel: 'High',
            code: '#6baa01',
            gradient: '1',
            color: [{
              maxvalue: '250',
              displayvalue: 'Average',
              code: '#f8bd19',
            },
            {
              maxvalue: '1000',
              code: '#e44a00',
            },
            ],
          },

          linkedData: [{
            id: 'A',
            linkedChart: {
              chart: {
                caption: 'This is drill-down chart',
                theme: 'fusion',
              },
              data: [
                {
                  label: '1',
                  value: 100,
                },
                {
                  label: '2',
                  value: 150,
                },
                {
                  label: '3',
                  value: 200,
                },
                {
                  label: '4',
                  value: 250,
                },
                {
                  label: '5',
                  value: 300,
                },
              ],
            },
          }],
        },
        events: {
          linkedItemOpened: (evt) => {
            this.selectedChartConfig = evt.data.item.args;
            this.isBtnDisabled = false;
          },
          linkedItemClosed: () => {
            this.selectedChartConfig = null;
            this.isBtnDisabled = true;
          },
        },
      },
    };
  },

  mounted() {
    this.renderChart();
  },

  methods: {
    renderChart() {
      const chart = new FusionCharts(this.chartConfig);
      chart.render();
      chart.configureLink({
        type: 'column2d',
      });
    },

    async exportClickListener() {
      const url = '/api/export';

      this.isBtnDisabled = true;

      const chartConfig = this.selectedChartConfig;
      delete chartConfig.link;
      delete chartConfig.clickedEntity;

      const res = await this.$axios.post(url, {
        chartConfig,
      }, {
        responseType: 'blob',
      });

      download(
        res.data,
        'Exported Chart.pdf',
        'application/pdf',
      );

      this.isBtnDisabled = false;
    },
  },
};
</script>

<style>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-flow: column nowrap;
}

.export-btn {
  padding: 5px 10px;
}
</style>
