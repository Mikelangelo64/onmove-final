const colors = [
    "#FFFDCC",
    "#D0EDFF",
    "#25252F",
    "#FEC5CC",
    "#8CFFB3",
    "#CCCDFD",
    "#7676F6",
    "#9E5FE6"
];

let isMobile = innerWidth < 620;

const createLine = () => {
	var line = document.getElementById("chart-container");

	var lineChart = echarts.init(line, null, {
		renderer: "canvas",
		useDirtyRect: false
	});
	var app = {};

	const data = [
		[
			"3200000",
			"0",
			"0",
			"0",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"9800000",
			"0",
			"0",
			"0",
			"0",
			"0",
			"0",
			"0"
		],
		[
			"0",
			"0",
			"0",
			"0",
			"0",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"20000000",
			"0",
			"0",
			"0",
			"0",
			"0",
			"0"
		],
		[
			"132000000",
			"0",
			"0",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"46750000",
			"0",
			"0",
			"0",
			"0",
			"0",
			"0",
			"0",
			"0"
		],
		[
			"14400000",
			"0",
			"0",
			"0",
			"0",
			"0",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"37136842.11",
			"0",
			"0"
		],
		[
			"4000000",
			"0",
			"0",
			"0",
			"0",
			"0",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"23294117.65",
			"0",
			"0",
			"0",
			"0"
		],
		[
			"25600000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"24576000",
			"0"
		],
		[
			"35200000",
			"0",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"71866666.67",
			"0"
		],
		[
			"0",
			"0",
			"0",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000",
			"130000000"
		]
	].map((nums) => nums.map((str) => Number(str)));

	const sumDataset = data.map((nums) =>
		nums.reduce((acc, num) => acc + num, 0)
	);
	const sum = data[0].map((el, index) =>
		data.reduce((acc, nums) => acc + nums[index], 0)
	);

	const total = sum.reduce((acc, num) => acc + num, 0);

	const percents = data.map((nums) =>
		nums.map((num, index) => (100 * num) / total).map((num) => num)
	);

	let s = [];
	const growth = percents.map((nums, index) => {
		return nums.map((el) => {
			s[index] = s[index] ? s[index] + Number(el) : Number(el);
			return s[index];
		});
	});

	const dataSet = growth;

	var option;

	option = {
		tooltip: {
			trigger: "axis",
			confine: !0,
			axisPointer: {
				type: "cross",
				label: {
					backgroundColor: "#7D53F1"
				}
			},
			valueFormatter: function (n) {
				return (function (n) {
					return "".concat(n.toFixed(2), "%");
				})(n);
			}
		},
		color: colors,
		legend: {
			data: [
				"SEED ROUND",
				"PRIVATE SALE",
				"PUBLIC SALE (IDO/IEO)",
				"FOUNDERS & TEAM",
				"ADVISORS & AMBASADORS& CONSULTING",
				"MARKETING",
				"ECOSYSTEM & TREASURY",
				"USERS REWARDS"
			],
			bottom: "5px"
		},
		grid: {
			left: "15px",
			right: "15px",
			bottom: isMobile ? 150 : "75px",
			containLabel: true,
			show: false
		},
		xAxis: [
			{
				type: "category",
				boundaryGap: false,
				data: [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"10",
					"11",
					"12",
					"13",
					"14",
					"15",
					"16",
					"17",
					"18",
					"19",
					"20",
					"21",
					"22",
					"23",
					"24",
					"25",
					"26",
					"27"
				],
				axisLabel: {
					formatter: "{value} Month"
				},
				axisPointer: {
					label: {
						formatter: "{value} Month"
					}
				},
				splitLine: {
          show: true
        }
			}
		],
		yAxis: [
			{
				type: "value",
				axisPointer: {
					label: {
						formatter: "{value} %"
					}
				},
				axisLabel: {
					formatter: function (n) {
						return "".concat(parseInt(n.toString(), 10), "%");
					}
				},
				splitLine: {
          show: true
        }
			}
		],
		series: [
			{
				name: "SEED ROUND",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[0]
			},
			{
				name: "PRIVATE SALE",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[1]
			},
			{
				name: "PUBLIC SALE (IDO/IEO)",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[2]
			},
			{
				name: "FOUNDERS & TEAM",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[3]
			},
			{
				name: "ADVISORS & AMBASADORS& CONSULTING",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[4]
			},
			{
				name: "MARKETING",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[5]
			},
			{
				name: "ECOSYSTEM & TREASURY",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[6]
			},
			{
				name: "USERS REWARDS",
				type: "line",
				smooth: true,
				stack: "Total",
				areaStyle: {},
				data: dataSet[7]
			}
		]
	};

	if (option && typeof option === "object") {
		lineChart.setOption(option);
	}

	window.addEventListener("resize", lineChart.resize);
};

const createPie = () => {
	var pie = document.getElementById("chart-pie");
	var pieChart = echarts.init(pie, null, {
		renderer: "canvas",
		useDirtyRect: false
	});
	var app = {};

	const data = [
		{ value: 2.00, name: "SEED ROUND" },
		{ value: 4.00, name: "PRIVATE SALE" },
		{ value: 5, name: "ADVISORS & AMBASADORS& CONSULTING" },
		{ value: 8, name: "MARKETING" },
		{ value: 9, name: "FOUNDERS & TEAM" },
		{ value: 11, name: "PUBLIC SALE (IDO/IEO)" },
		{ value: 22, name: "ECOSYSTEM & TREASURY" },
		{ value: 39, name: "USERS REWARDS" }
	];
	
	const colors = [
		"#FFFDCC",
		"#D0EDFF",
		"#25252F",
		"#FEC5CC",
		"#8CFFB3",
		"#CCCDFD",
		"#7676F6",
		"#9E5FE6"
	];
	
	var option;
	
	option = {
		dataZoom: {
			moveOnMouseMove: !1,
			show: !1
		},
		tooltip: {
			trigger: "item",
			confine: true,
			textStyle: {
					fontSize: isMobile ? 12 : 14
			},
			formatter: function({ name, value }) {
					return `${name} ${value}%`
			}
		},
		legend: {
			orient: "vertical",
			right: 20,
			top: "center",
			left: isMobile ? "50%" : "60%",
			itemWidth: isMobile ? 12: 15,
			itemHeight: isMobile ? 12 : 15,
			itemGap: isMobile ? 10 : 18,
			textStyle: {
				fontSize: isMobile ? 11 : 16
			},
			formatter: name => {
				const value = data.find(el => el.name === name).value;
				const formatted = value < 10 ? ` ${value}%` : `${value}%`;
				return `${formatted} ${name}`
			}
		},
		color: colors,
		series: [
			{
				type: "pie",
				seriesLayoutBy: "column",
				left: isMobile ? "-50%" : "-30%",
				radius: ["40%", "80%"],
				label: {
					show: false,
					position: "center"
				},
				emphasis: {
					label: {
						show: false,
						fontSize: "40",
						fontWeight: "bold"
					}
				},
				labelLine: {
					show: false
				},
				data
			}
		]
	};
	
	if (option && typeof option === "object") {
		pieChart.setOption(option);
	}
	
	window.addEventListener("resize", pieChart.resize);
	
}

createLine();
createPie();
  