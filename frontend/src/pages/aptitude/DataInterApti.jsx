import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const DataInterApti = () => {
  // Mock dataset for questions
  const questionsData = [
    {
      "id": 1,
      "question": "In a survey of 100 people, 20 preferred coffee, 30 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "50",
        "60",
        "40",
        "30"
      ],
      "correctAnswer": "50"
    },
    {
      "id": 2,
      "question": "In a survey of 200 people, 40 preferred coffee, 60 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "100",
        "120",
        "80",
        "60"
      ],
      "correctAnswer": "100"
    },
    {
      "id": 3,
      "question": "In a survey of 300 people, 60 preferred coffee, 90 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "150",
        "180",
        "120",
        "90"
      ],
      "correctAnswer": "150"
    },
    {
      "id": 4,
      "question": "In a survey of 400 people, 80 preferred coffee, 120 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "200",
        "240",
        "160",
        "120"
      ],
      "correctAnswer": "200"
    },
    {
      "id": 5,
      "question": "In a survey of 500 people, 100 preferred coffee, 150 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "250",
        "300",
        "200",
        "150"
      ],
      "correctAnswer": "250"
    },
    {
      "id": 6,
      "question": "In a survey of 600 people, 120 preferred coffee, 180 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "300",
        "360",
        "240",
        "180"
      ],
      "correctAnswer": "300"
    },
    {
      "id": 7,
      "question": "In a survey of 700 people, 140 preferred coffee, 210 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "350",
        "420",
        "280",
        "210"
      ],
      "correctAnswer": "350"
    },
    {
      "id": 8,
      "question": "In a survey of 800 people, 160 preferred coffee, 240 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "400",
        "480",
        "320",
        "240"
      ],
      "correctAnswer": "400"
    },
    {
      "id": 9,
      "question": "In a survey of 900 people, 180 preferred coffee, 270 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "450",
        "540",
        "360",
        "270"
      ],
      "correctAnswer": "450"
    },
    {
      "id": 10,
      "question": "In a survey of 1000 people, 200 preferred coffee, 300 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "500",
        "600",
        "400",
        "300"
      ],
      "correctAnswer": "500"
    },
    {
      "id": 11,
      "question": "In a survey of 1100 people, 220 preferred coffee, 330 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "550",
        "660",
        "440",
        "330"
      ],
      "correctAnswer": "550"
    },
    {
      "id": 12,
      "question": "In a survey of 1200 people, 240 preferred coffee, 360 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "600",
        "720",
        "480",
        "360"
      ],
      "correctAnswer": "600"
    },
    {
      "id": 13,
      "question": "In a survey of 1300 people, 260 preferred coffee, 390 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "650",
        "780",
        "520",
        "390"
      ],
      "correctAnswer": "650"
    },
    {
      "id": 14,
      "question": "In a survey of 1400 people, 280 preferred coffee, 420 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "700",
        "840",
        "560",
        "420"
      ],
      "correctAnswer": "700"
    },
    {
      "id": 15,
      "question": "In a survey of 1500 people, 300 preferred coffee, 450 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "750",
        "900",
        "600",
        "450"
      ],
      "correctAnswer": "750"
    },
    {
      "id": 16,
      "question": "In a survey of 1600 people, 320 preferred coffee, 480 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "800",
        "960",
        "640",
        "480"
      ],
      "correctAnswer": "800"
    },
    {
      "id": 17,
      "question": "In a survey of 1700 people, 340 preferred coffee, 510 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "850",
        "1020",
        "680",
        "510"
      ],
      "correctAnswer": "850"
    },
    {
      "id": 18,
      "question": "In a survey of 1800 people, 360 preferred coffee, 540 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "900",
        "1080",
        "720",
        "540"
      ],
      "correctAnswer": "900"
    },
    {
      "id": 19,
      "question": "In a survey of 1900 people, 380 preferred coffee, 570 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "950",
        "1140",
        "760",
        "570"
      ],
      "correctAnswer": "950"
    },
    {
      "id": 20,
      "question": "In a survey of 2000 people, 400 preferred coffee, 600 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1000",
        "1200",
        "800",
        "600"
      ],
      "correctAnswer": "1000"
    },
    {
      "id": 21,
      "question": "In a survey of 2100 people, 420 preferred coffee, 630 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1050",
        "1260",
        "840",
        "630"
      ],
      "correctAnswer": "1050"
    },
    {
      "id": 22,
      "question": "In a survey of 2200 people, 440 preferred coffee, 660 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1100",
        "1320",
        "880",
        "660"
      ],
      "correctAnswer": "1100"
    },
    {
      "id": 23,
      "question": "In a survey of 2300 people, 460 preferred coffee, 690 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1150",
        "1380",
        "920",
        "690"
      ],
      "correctAnswer": "1150"
    },
    {
      "id": 24,
      "question": "In a survey of 2400 people, 480 preferred coffee, 720 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1200",
        "1440",
        "960",
        "720"
      ],
      "correctAnswer": "1200"
    },
    {
      "id": 25,
      "question": "In a survey of 2500 people, 500 preferred coffee, 750 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1250",
        "1500",
        "1000",
        "750"
      ],
      "correctAnswer": "1250"
    },
    {
      "id": 26,
      "question": "In a survey of 2600 people, 520 preferred coffee, 780 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1300",
        "1560",
        "1040",
        "780"
      ],
      "correctAnswer": "1300"
    },
    {
      "id": 27,
      "question": "In a survey of 2700 people, 540 preferred coffee, 810 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1350",
        "1620",
        "1080",
        "810"
      ],
      "correctAnswer": "1350"
    },
    {
      "id": 28,
      "question": "In a survey of 2800 people, 560 preferred coffee, 840 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1400",
        "1680",
        "1120",
        "840"
      ],
      "correctAnswer": "1400"
    },
    {
      "id": 29,
      "question": "In a survey of 2900 people, 580 preferred coffee, 870 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1450",
        "1740",
        "1160",
        "870"
      ],
      "correctAnswer": "1450"
    },
    {
      "id": 30,
      "question": "In a survey of 3000 people, 600 preferred coffee, 900 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1500",
        "1800",
        "1200",
        "900"
      ],
      "correctAnswer": "1500"
    },
    {
      "id": 31,
      "question": "In a survey of 3100 people, 620 preferred coffee, 930 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1550",
        "1860",
        "1240",
        "930"
      ],
      "correctAnswer": "1550"
    },
    {
      "id": 32,
      "question": "In a survey of 3200 people, 640 preferred coffee, 960 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1600",
        "1920",
        "1280",
        "960"
      ],
      "correctAnswer": "1600"
    },
    {
      "id": 33,
      "question": "In a survey of 3300 people, 660 preferred coffee, 990 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1650",
        "1980",
        "1320",
        "990"
      ],
      "correctAnswer": "1650"
    },
    {
      "id": 34,
      "question": "In a survey of 3400 people, 680 preferred coffee, 1020 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1700",
        "2040",
        "1360",
        "1020"
      ],
      "correctAnswer": "1700"
    },
    {
      "id": 35,
      "question": "In a survey of 3500 people, 700 preferred coffee, 1050 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1750",
        "2100",
        "1400",
        "1050"
      ],
      "correctAnswer": "1750"
    },
    {
      "id": 36,
      "question": "In a survey of 3600 people, 720 preferred coffee, 1080 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1800",
        "2160",
        "1440",
        "1080"
      ],
      "correctAnswer": "1800"
    },
    {
      "id": 37,
      "question": "In a survey of 3700 people, 740 preferred coffee, 1110 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1850",
        "2220",
        "1480",
        "1110"
      ],
      "correctAnswer": "1850"
    },
    {
      "id": 38,
      "question": "In a survey of 3800 people, 760 preferred coffee, 1140 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1900",
        "2280",
        "1520",
        "1140"
      ],
      "correctAnswer": "1900"
    },
    {
      "id": 39,
      "question": "In a survey of 3900 people, 780 preferred coffee, 1170 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "1950",
        "2340",
        "1560",
        "1170"
      ],
      "correctAnswer": "1950"
    },
    {
      "id": 40,
      "question": "In a survey of 4000 people, 800 preferred coffee, 1200 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2000",
        "2400",
        "1600",
        "1200"
      ],
      "correctAnswer": "2000"
    },
    {
      "id": 41,
      "question": "In a survey of 4100 people, 820 preferred coffee, 1230 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2050",
        "2460",
        "1640",
        "1230"
      ],
      "correctAnswer": "2050"
    },
    {
      "id": 42,
      "question": "In a survey of 4200 people, 840 preferred coffee, 1260 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2100",
        "2520",
        "1680",
        "1260"
      ],
      "correctAnswer": "2100"
    },
    {
      "id": 43,
      "question": "In a survey of 4300 people, 860 preferred coffee, 1290 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2150",
        "2580",
        "1720",
        "1290"
      ],
      "correctAnswer": "2150"
    },
    {
      "id": 44,
      "question": "In a survey of 4400 people, 880 preferred coffee, 1320 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2200",
        "2640",
        "1760",
        "1320"
      ],
      "correctAnswer": "2200"
    },
    {
      "id": 45,
      "question": "In a survey of 4500 people, 900 preferred coffee, 1350 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2250",
        "2700",
        "1800",
        "1350"
      ],
      "correctAnswer": "2250"
    },
    {
      "id": 46,
      "question": "In a survey of 4600 people, 920 preferred coffee, 1380 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2300",
        "2760",
        "1840",
        "1380"
      ],
      "correctAnswer": "2300"
    },
    {
      "id": 47,
      "question": "In a survey of 4700 people, 940 preferred coffee, 1410 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2350",
        "2820",
        "1880",
        "1410"
      ],
      "correctAnswer": "2350"
    },
    {
      "id": 48,
      "question": "In a survey of 4800 people, 960 preferred coffee, 1440 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2400",
        "2880",
        "1920",
        "1440"
      ],
      "correctAnswer": "2400"
    },
    {
      "id": 49,
      "question": "In a survey of 4900 people, 980 preferred coffee, 1470 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2450",
        "2940",
        "1960",
        "1470"
      ],
      "correctAnswer": "2450"
    },
    {
      "id": 50,
      "question": "In a survey of 5000 people, 1000 preferred coffee, 1500 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2500",
        "3000",
        "2000",
        "1500"
      ],
      "correctAnswer": "2500"
    },
    {
      "id": 51,
      "question": "In a survey of 5100 people, 1020 preferred coffee, 1530 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2550",
        "3060",
        "2040",
        "1530"
      ],
      "correctAnswer": "2550"
    },
    {
      "id": 52,
      "question": "In a survey of 5200 people, 1040 preferred coffee, 1560 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2600",
        "3120",
        "2080",
        "1560"
      ],
      "correctAnswer": "2600"
    },
    {
      "id": 53,
      "question": "In a survey of 5300 people, 1060 preferred coffee, 1590 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2650",
        "3180",
        "2120",
        "1590"
      ],
      "correctAnswer": "2650"
    },
    {
      "id": 54,
      "question": "In a survey of 5400 people, 1080 preferred coffee, 1620 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2700",
        "3240",
        "2160",
        "1620"
      ],
      "correctAnswer": "2700"
    },
    {
      "id": 55,
      "question": "In a survey of 5500 people, 1100 preferred coffee, 1650 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2750",
        "3300",
        "2200",
        "1650"
      ],
      "correctAnswer": "2750"
    },
    {
      "id": 56,
      "question": "In a survey of 5600 people, 1120 preferred coffee, 1680 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2800",
        "3360",
        "2240",
        "1680"
      ],
      "correctAnswer": "2800"
    },
    {
      "id": 57,
      "question": "In a survey of 5700 people, 1140 preferred coffee, 1710 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2850",
        "3420",
        "2280",
        "1710"
      ],
      "correctAnswer": "2850"
    },
    {
      "id": 58,
      "question": "In a survey of 5800 people, 1160 preferred coffee, 1740 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2900",
        "3480",
        "2320",
        "1740"
      ],
      "correctAnswer": "2900"
    },
    {
      "id": 59,
      "question": "In a survey of 5900 people, 1180 preferred coffee, 1770 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "2950",
        "3540",
        "2360",
        "1770"
      ],
      "correctAnswer": "2950"
    },
    {
      "id": 60,
      "question": "In a survey of 6000 people, 1200 preferred coffee, 1800 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3000",
        "3600",
        "2400",
        "1800"
      ],
      "correctAnswer": "3000"
    },
    {
      "id": 61,
      "question": "In a survey of 6100 people, 1220 preferred coffee, 1830 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3050",
        "3660",
        "2440",
        "1830"
      ],
      "correctAnswer": "3050"
    },
    {
      "id": 62,
      "question": "In a survey of 6200 people, 1240 preferred coffee, 1860 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3100",
        "3720",
        "2480",
        "1860"
      ],
      "correctAnswer": "3100"
    },
    {
      "id": 63,
      "question": "In a survey of 6300 people, 1260 preferred coffee, 1890 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3150",
        "3780",
        "2520",
        "1890"
      ],
      "correctAnswer": "3150"
    },
    {
      "id": 64,
      "question": "In a survey of 6400 people, 1280 preferred coffee, 1920 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3200",
        "3840",
        "2560",
        "1920"
      ],
      "correctAnswer": "3200"
    },
    {
      "id": 65,
      "question": "In a survey of 6500 people, 1300 preferred coffee, 1950 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3250",
        "3900",
        "2600",
        "1950"
      ],
      "correctAnswer": "3250"
    },
    {
      "id": 66,
      "question": "In a survey of 6600 people, 1320 preferred coffee, 1980 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3300",
        "3960",
        "2640",
        "1980"
      ],
      "correctAnswer": "3300"
    },
    {
      "id": 67,
      "question": "In a survey of 6700 people, 1340 preferred coffee, 2010 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3350",
        "4020",
        "2680",
        "2010"
      ],
      "correctAnswer": "3350"
    },
    {
      "id": 68,
      "question": "In a survey of 6800 people, 1360 preferred coffee, 2040 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3400",
        "4080",
        "2720",
        "2040"
      ],
      "correctAnswer": "3400"
    },
    {
      "id": 69,
      "question": "In a survey of 6900 people, 1380 preferred coffee, 2070 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3450",
        "4140",
        "2760",
        "2070"
      ],
      "correctAnswer": "3450"
    },
    {
      "id": 70,
      "question": "In a survey of 7000 people, 1400 preferred coffee, 2100 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3500",
        "4200",
        "2800",
        "2100"
      ],
      "correctAnswer": "3500"
    },
    {
      "id": 71,
      "question": "In a survey of 7100 people, 1420 preferred coffee, 2130 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3550",
        "4260",
        "2840",
        "2130"
      ],
      "correctAnswer": "3550"
    },
    {
      "id": 72,
      "question": "In a survey of 7200 people, 1440 preferred coffee, 2160 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3600",
        "4320",
        "2880",
        "2160"
      ],
      "correctAnswer": "3600"
    },
    {
      "id": 73,
      "question": "In a survey of 7300 people, 1460 preferred coffee, 2190 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3650",
        "4380",
        "2920",
        "2190"
      ],
      "correctAnswer": "3650"
    },
    {
      "id": 74,
      "question": "In a survey of 7400 people, 1480 preferred coffee, 2220 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3700",
        "4440",
        "2960",
        "2220"
      ],
      "correctAnswer": "3700"
    },
    {
      "id": 75,
      "question": "In a survey of 7500 people, 1500 preferred coffee, 2250 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3750",
        "4500",
        "3000",
        "2250"
      ],
      "correctAnswer": "3750"
    },
    {
      "id": 76,
      "question": "In a survey of 7600 people, 1520 preferred coffee, 2280 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3800",
        "4560",
        "3040",
        "2280"
      ],
      "correctAnswer": "3800"
    },
    {
      "id": 77,
      "question": "In a survey of 7700 people, 1540 preferred coffee, 2310 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3850",
        "4620",
        "3080",
        "2310"
      ],
      "correctAnswer": "3850"
    },
    {
      "id": 78,
      "question": "In a survey of 7800 people, 1560 preferred coffee, 2340 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3900",
        "4680",
        "3120",
        "2340"
      ],
      "correctAnswer": "3900"
    },
    {
      "id": 79,
      "question": "In a survey of 7900 people, 1580 preferred coffee, 2370 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "3950",
        "4740",
        "3160",
        "2370"
      ],
      "correctAnswer": "3950"
    },
    {
      "id": 80,
      "question": "In a survey of 8000 people, 1600 preferred coffee, 2400 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4000",
        "4800",
        "3200",
        "2400"
      ],
      "correctAnswer": "4000"
    },
    {
      "id": 81,
      "question": "In a survey of 8100 people, 1620 preferred coffee, 2430 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4050",
        "4860",
        "3240",
        "2430"
      ],
      "correctAnswer": "4050"
    },
    {
      "id": 82,
      "question": "In a survey of 8200 people, 1640 preferred coffee, 2460 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4100",
        "4920",
        "3280",
        "2460"
      ],
      "correctAnswer": "4100"
    },
    {
      "id": 83,
      "question": "In a survey of 8300 people, 1660 preferred coffee, 2490 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4150",
        "4980",
        "3320",
        "2490"
      ],
      "correctAnswer": "4150"
    },
    {
      "id": 84,
      "question": "In a survey of 8400 people, 1680 preferred coffee, 2520 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4200",
        "5040",
        "3360",
        "2520"
      ],
      "correctAnswer": "4200"
    },
    {
      "id": 85,
      "question": "In a survey of 8500 people, 1700 preferred coffee, 2550 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4250",
        "5100",
        "3400",
        "2550"
      ],
      "correctAnswer": "4250"
    },
    {
      "id": 86,
      "question": "In a survey of 8600 people, 1720 preferred coffee, 2580 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4300",
        "5160",
        "3440",
        "2580"
      ],
      "correctAnswer": "4300"
    },
    {
      "id": 87,
      "question": "In a survey of 8700 people, 1740 preferred coffee, 2610 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4350",
        "5220",
        "3480",
        "2610"
      ],
      "correctAnswer": "4350"
    },
    {
      "id": 88,
      "question": "In a survey of 8800 people, 1760 preferred coffee, 2640 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4400",
        "5280",
        "3520",
        "2640"
      ],
      "correctAnswer": "4400"
    },
    {
      "id": 89,
      "question": "In a survey of 8900 people, 1780 preferred coffee, 2670 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4450",
        "5340",
        "3560",
        "2670"
      ],
      "correctAnswer": "4450"
    },
    {
      "id": 90,
      "question": "In a survey of 9000 people, 1800 preferred coffee, 2700 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4500",
        "5400",
        "3600",
        "2700"
      ],
      "correctAnswer": "4500"
    },
    {
      "id": 91,
      "question": "In a survey of 9100 people, 1820 preferred coffee, 2730 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4550",
        "5460",
        "3640",
        "2730"
      ],
      "correctAnswer": "4550"
    },
    {
      "id": 92,
      "question": "In a survey of 9200 people, 1840 preferred coffee, 2760 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4600",
        "5520",
        "3680",
        "2760"
      ],
      "correctAnswer": "4600"
    },
    {
      "id": 93,
      "question": "In a survey of 9300 people, 1860 preferred coffee, 2790 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4650",
        "5580",
        "3720",
        "2790"
      ],
      "correctAnswer": "4650"
    },
    {
      "id": 94,
      "question": "In a survey of 9400 people, 1880 preferred coffee, 2820 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4700",
        "5640",
        "3760",
        "2820"
      ],
      "correctAnswer": "4700"
    },
    {
      "id": 95,
      "question": "In a survey of 9500 people, 1900 preferred coffee, 2850 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4750",
        "5700",
        "3800",
        "2850"
      ],
      "correctAnswer": "4750"
    },
    {
      "id": 96,
      "question": "In a survey of 9600 people, 1920 preferred coffee, 2880 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4800",
        "5760",
        "3840",
        "2880"
      ],
      "correctAnswer": "4800"
    },
    {
      "id": 97,
      "question": "In a survey of 9700 people, 1940 preferred coffee, 2910 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4850",
        "5820",
        "3880",
        "2910"
      ],
      "correctAnswer": "4850"
    },
    {
      "id": 98,
      "question": "In a survey of 9800 people, 1960 preferred coffee, 2940 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4900",
        "5880",
        "3920",
        "2940"
      ],
      "correctAnswer": "4900"
    },
    {
      "id": 99,
      "question": "In a survey of 9900 people, 1980 preferred coffee, 2970 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "4950",
        "5940",
        "3960",
        "2970"
      ],
      "correctAnswer": "4950"
    },
    {
      "id": 100,
      "question": "In a survey of 10000 people, 2000 preferred coffee, 3000 preferred tea, and the rest preferred neither. How many preferred neither?",
      "options": [
        "5000",
        "6000",
        "4000",
        "3000"
      ],
      "correctAnswer": "5000"
    }
  ];

  // Helper function to shuffle and select 10 questions
  const getRandomQuestions = (data) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  };

  // Initialize state
  const [questions, setQuestions] = useState(getRandomQuestions(questionsData));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  // Handle answer selection
  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // Handle quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

    // Calculate score
    const calculateScore = () => {
      return questions.reduce((score, question) => {
        return score + (answers[question.id] === question.correctAnswer ? 1 : 0);
      }, 0);
    };

  return (
    <div className="bg-gray-800 text-white transition duration-500">
      <Header />
      <div className="flex mt-8">
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/interpretation' className="font-bold text-sm">Data Interpretation</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Data Interpretation</h1>
          <div className="text-lg text-red-500 font-semibold">
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>
        <form>
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`mb-6 p-4 border bg-gray-700 ${
                submitted &&
                (answers[question.id] === question.correctAnswer
                  ? "border-green-500"
                  : "border-red-500")
              } rounded-lg`}
            >
              <h2 className="font-semibold text-white mb-2">
                {index + 1}. {question.question}
              </h2>
              <div className="space-y-2">
                {question.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-3"
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      disabled={submitted}
                      onChange={() =>
                        handleAnswerChange(question.id, option)
                      }
                      className="h-4 w-4 text-green-500 cursor-pointer"
                    />
                    <span
                      className={`${
                        submitted &&
                        option === question.correctAnswer &&
                        "text-green-600 font-bold"
                      } ${
                        submitted &&
                        answers[question.id] === option &&
                        answers[question.id] !== question.correctAnswer &&
                        "text-red-500"
                      }`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {submitted && (
                <div className="mt-2 text-sm text-gray-500">
                  Correct Answer:{" "}
                  <span className="text-green-600 font-medium">
                    {question.correctAnswer}
                  </span>
                </div>
              )}
            </div>
          ))}
        </form>
        {!submitted && (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
          >
            Submit Quiz
          </button>
        )}
        {submitted && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-green-600">Quiz Submitted!</h2>
            <p className="text-gray-400">
              You scored{" "}
              <span className="text-yellow-400 text-xl font-semibold">
                {calculateScore()}
              </span>{" "}
              out of 20.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DataInterApti;
