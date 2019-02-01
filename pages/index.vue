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
            subCaption: 'CO2 emissions in different states of USA',
            baseFont: 'sans-serif',
            baseFontSize: '8',
            showLabels: '1',
            showLegend: '0',
          },

          data: [
            { id: 'AL', value: 121 },
            { id: 'AK', value: 35 },
            { id: 'AZ', value: 93, link: 'newchart-json-AZ' },
            { id: 'AR', value: 69 },
            { id: 'CA', value: 359, link: 'newchart-json-CA' },
            { id: 'CO', value: 91 },
            { id: 'CT', value: 35 },
            { id: 'DE', value: 13 },
            { id: 'DC', value: 3 },
            { id: 'FL', value: 227 },
            { id: 'GA', value: 139 },
            { id: 'HI', value: 18 },
            { id: 'ID', value: 17 },
            { id: 'IL', value: 233 },
            { id: 'IN', value: 203 },
            { id: 'IA', value: 83 },
            { id: 'KS', value: 70 },
            { id: 'KY', value: 138 },
            { id: 'LA', value: 207 },
            { id: 'ME', value: 17 },
            { id: 'MA', value: 64 },
            { id: 'MI', value: 162 },
            { id: 'MN', value: 94 },
            { id: 'MS', value: 64 },
            { id: 'MO', value: 131 },
            { id: 'MT', value: 32 },
            { id: 'NE', value: 52 },
            { id: 'NV', value: 37 },
            { id: 'NH', value: 15 },
            { id: 'NJ', value: 114 },
            { id: 'NM', value: 50 },
            { id: 'NY', value: 170 },
            { id: 'NC', value: 126 },
            { id: 'ND', value: 55 },
            { id: 'OH', value: 229, link: 'newchart-json-OH' },
            { id: 'OK', value: 104 },
            { id: 'OR', value: 38 },
            { id: 'PA', value: 242 },
            { id: 'RI', value: 11 },
            { id: 'SC', value: 74 },
            { id: 'SD', value: 15 },
            { id: 'TN', value: 103 },
            { id: 'TX', value: 709 },
            { id: 'UT', value: 64 },
            { id: 'VT', value: 6 },
            { id: 'VA', value: 103 },
            { id: 'WA', value: 73 },
            { id: 'WV', value: 97 },
            { id: 'WI', value: 101 },
            { id: 'WY', value: 65 },
          ],

          colorrange: {
            minvalue: '0',
            startlabel: 'Low',
            endlabel: 'High',
            code: '#6baa01',
            gradient: '1',
            color: [
              {
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

          linkedData: [
            {
              id: 'CA',
              linkedChart: {
                chart: {
                  caption: 'This is a drill-down chart',
                  theme: 'fusion',
                  showLabels: '1',
                  nullEntityColor: '#29c3be',
                  baseFont: 'sans-serif',
                  baseFontSize: '8',
                },
              },
            },
            {
              id: 'AZ',
              linkedChart: {
                chart: {
                  caption: 'This is a drill-down chart',
                  theme: 'fusion',
                  showLabels: '1',
                  nullEntityColor: '#29c3be',
                  baseFont: 'sans-serif',
                  baseFontSize: '8',
                },
              },
            },
            {
              id: 'OH',
              linkedChart: {
                chart: {
                  caption: 'This is a drill-down chart',
                  theme: 'fusion',
                  showLabels: '1',
                  nullEntityColor: '#29c3be',
                  baseFont: 'sans-serif',
                  baseFontSize: '8',
                },
              },
            },
          ],
        },
        events: {
          entityClick(eventObj) {
            const maptype = eventObj.data.label.toLowerCase().replace(/\s/g, '');
            eventObj.sender.configureLink({
              type: maptype,
            });
          },
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
  margin-top: 20px;
}
</style>
