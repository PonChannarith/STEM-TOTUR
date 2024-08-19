import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
const DashboardDetail = () => {
  const dashboards = [
    { id: 1, chartData: [15, 15, 20,4] },
  ];
  return (
    <section className="max-w-screen-2xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-1 justify-center items-center">
    {dashboards.map((dashboard) => (
      <div className="mx-auto">
        <DashboardCard key={dashboard.id} title={dashboard.title} chartData={dashboard.chartData} />
      </div>
    ))}
  </section>
  );
};
const DashboardCard = ({ title, chartData }) => {
  useEffect(() => {
    const chart = new ApexCharts(document.getElementById(`pie-chart-${title}`), getChartOptions(chartData));
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [chartData]);
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex-col items-center">
          <div className="flex items-center text-center mb-1 ml-32">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center">{title}</h5>
          </div>
        </div>
        <div
          id="dateRangeDropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-80 lg:w-96 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="p-3" aria-labelledby="dateRangeButton">
            <div date-rangepicker datepicker-autohide className="flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  name="start"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Start date"
                />
              </div>
              <span className="mx-2 text-gray-500 dark:text-gray-400">to</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  name="end"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="End date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={`pie-chart-${title}`}></div>
    </div>
  );
};

const getChartOptions = (chartData) => {
  return {
    chart: {
      type: 'pie',
      height: '400',
    },
    labels: ['Total Postforum', 'Total Postarticle', 'Total Follower','Total Like'],
    series: chartData,
    colors: ['#f39c12', '#d35400', '#27ae60'],
    legend: {
      show: true,
      position: 'bottom',
    },
  };
};

export default DashboardDetail;
