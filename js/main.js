/*const countries = [
  [1, 'China', '1,439,323,776', 0.39, 5, 540, 090, 153, '9,388,211', -348.399, '1.7', '38', 61, 18.47],
  [2, 'India', '1,380,004,385', 0.99, 13, 586, 631, 464, '2,973,190', -532.687, '2.2', '28', 35, 17.7],
  [3, 'United States', '331,002,651', 0.59, 1, 937, 734, 36, '9,147,420', 954.806, '1.8', '38', 83, 4.25],
  [4, 'Indonesia', '273,523,615', 1.07, 2, 898, 047, 151, '1,811,570', -98.955, '2.3', '30', 56, 3.51],
  [5, 'Pakistan', '220,892,340', 2.0, 4, 327, 022, 287, '770.880', -233.379, '3.6', '23', 35, 2.83],
  [6, 'Brazil', '212,559,417', 0.72, 1, 509, 890, 25, '8,358,140', 21.2, '1.7', '33', 88, 2.73],
  [7, 'Nigeria', '206,139,589', 2.58, 5, 175, 990, 226, '910.770', -60.0, '5.4', '18', 52, 2.64],
  [8, 'Bangladesh', '164,689,383', 1.01, 1, 643, 222, 1.265, '130.170', -369.501, '2.1', '28', 39, 2.11],
  [9, 'Russia', '145,934,462', 0.04, 62.206, 9, '16,376,870', 182.456, '1.8', '40', 74, 1.87],
  [10, 'Mexico', '128,932,753', 1.06, 1, 357, 224, 66, '1,943,950', -60.0, '2.1', '29', 84, 1.65],
  [11, 'Japan', '126,476,461', -0.3, -383.84, 347, '364.555', 71.56, '1.4', '48', 92, 1.62],
  [12, 'Ethiopia', '114,963,588', 2.57, 2, 884, 858, 115, '1,000,000', 30.0, '4.3', '19', 21, 1.47],
  [13, 'Philippines', '109,581,078', 1.35, 1, 464, 463, 368, '298.170', -67.152, '2.6', '26', 47, 1.41],
  [14, 'Egypt', '102,334,404', 1.94, 1, 946, 331, 103, '995.450', -38.033, '3.3', '25', 43, 1.31],
  [15, 'Vietnam', '97,338,579', 0.91, 876.473, 314, '310.070', -80.0, '2.1', '32', 38, 1.25],
  [16, 'DR Congo', '89,561,403', 3.19, 2, 770, 836, 40, '2,267,050', 23.861, '6.0', '17', 46, 1.15],
  [17, 'Turkey', '84,339,067', 1.09, 909.452, 110, '769.630', 283.922, '2.1', '32', 76, 1.08],
  [18, 'Iran', '83,992,949', 1.3, 1, 0.79, 043, 52, '1,628,550', -55.0, '2.2', '32', 76, 1.08],
  [19, 'Germany', '83,783,942', 0.32, 266.897, 240, '348.560', 543.822, '1.6', '46', 76, 1.07],
  [20, 'Thailand', '69,799,978', 0.25, 174.396, 137, '510.890', 19.444, '1.5', '40', 51, 0.9],
  [21, 'United Kingdom', '67,886,011', 0.53, 355.839, 281, '241.930', 260.65, '1.8', '40', 83, 0.87],
  [22, 'France', '65,273,511', 0.22, 143.783, 119, '547.557', 36.527, '1.9', '42', 82, 0.84],
  [23, 'Italy', '60,461,826', -0.15, -88.249, 206, '294.140', 148.943, '1.3', '47', 69, 0.78],
  [24, 'Tanzania', '59,734,218', 2.98, 1, 728, 755, 67, '885.800', -40.076, '4.9', '18', 37, 0.77],
  [25, 'South Africa', '59,308,690', 1.28, 750.42, 49, '1,213,090', 145.405, '2.4', '28', 67, 0.76],
  [26, 'Myanmar', '54,409,800', 0.67, 364.38, 83, '653.290', -163.313, '2.2', '29', 31, 0.7],
  [27, 'Kenya', '53,771,296', 2.28, 1, 197, 323, 94, '569.140', -10.0, '3.5', '20', 28, 0.69],
  [28, 'South Korea', '51,269,185', 0.09, 43.877, 527, '97.230', 11.731, '1.1', '44', 82, 0.66],
  [29, 'Colombia', '50,882,891', 1.08, 543.448, 46, '1,109,500', 204.796, '1.8', '31', 80, 0.65],
  [30, 'Spain', '46,754,778', 0.04, 18.002, 94, '498.800', 40.0, '1.3', '45', 80, 0.6],
  [31, 'Uganda', '45,741,007', 3.32, 1, 471, 413, 229, '199.810', 168.694, '5.0', '17', 26, 0.59],
  [32, 'Argentina', '45,195,774', 0.93, 415.097, 17, '2,736,690', 4.8, '2.3', '32', 93, 0.58],
  [33, 'Algeria', '43,851,044', 1.85, 797.99, 18, '2,381,740', -10.0, '3.1', '29', 73, 0.56],
  [34, 'Sudan', '43,849,260', 2.42, 1, 036, 022, 25, '1,765,048', -50.0, '4.4', '20', 35, 0.56],
  [35, 'Ukraine', '43,733,762', -0.59, -259.876, 75, '579.320', 10.0, '1.4', '41', 69, 0.56],
  [36, 'Iraq', '40,222,493', 2.32, 912.71, 93, '434.320', 7.834, '3.7', '21', 73, 0.52],
  [37, 'Afghanistan', '38,928,346', 2.33, 886.592, 60, '652.860', -62.92, '4.6', '18', 25, 0.5],
  [38, 'Poland', '37,846,611', -0.11, -41.157, 124, '306.230', -29.395, '1.4', '42', 60, 0.49],
  [39, 'Canada', '37,742,154', 0.89, 331.107, 4, '9,093,510', 242.032, '1.5', '41', 81, 0.48],
  [40, 'Morocco', '36,910,560', 1.2, 438.791, 83, '446.300', -51.419, '2.4', '30', 64, 0.47],
  [41, 'Saudi Arabia', '34,813,871', 1.59, 545.343, 16, '2,149,690', 134.979, '2.3', '32', 84, 0.45],
  [42, 'Uzbekistan', '33,469,203', 1.48, 487.487, 79, '425.400', -8.863, '2.4', '28', 50, 0.43],
  [43, 'Peru', '32,971,854', 1.42, 461.401, 26, '1,280,000', 99.069, '2.3', '31', 79, 0.42],
  [44, 'Angola', '32,866,272', 3.27, 1, 040, 977, 26, '1,246,700', 6.413, '5.6', '17', 67, 0.42],
  [45, 'Malaysia', '32,365,999', 1.3, 416.222, 99, '328.550', 50.0, '2.0', '30', 78, 0.42],
  [46, 'Mozambique', '31,255,435', 2.93, 889.399, 40, '786.380', -5.0, '4.9', '18', 38, 0.4],
  [47, 'Ghana', '31,072,940', 2.15, 655.084, 137, '227.540', -10.0, '3.9', '22', 57, 0.4],
  [48, 'Yemen', '29,825,964', 2.28, 664.042, 56, '527.970', -30.0, '3.8', '20', 38, 0.38],
  [49, 'Nepal', '29,136,808', 1.85, 528.098, 203, '143.350', 41.71, '1.9', '25', 21, 0.37],
  [50, 'Venezuela', '28,435,940', -0.28, -79.889, 32, '882.050', -653.249, '2.3', '30', 'N.A.', 0.36],
  [51, 'Madagascar', '27,691,018', 2.68, 721.711, 48, '581.795', -1.5, '4.1', '20', 39, 0.36],
  [52, 'Cameroon', '26,545,863', 2.59, 669.483, 56, '472.710', -4.8, '4.6', '19', 56, 0.34],
  [53, "Côte d'Ivoire", '26,378,274', 2.57, 661.73, 83, '318.000', -8.0, '4.7', '19', 51, 0.34],
  [54, 'North Korea', '25,778,816', 0.44, 112.655, 214, '120.410', -5.403, '1.9', '35', 63, 0.33],
  [55, 'Australia', '25,499,884', 1.18, 296.686, 3, '7,682,300', 158.246, '1.8', '38', 86, 0.33],
  [56, 'Niger', '24,206,644', 3.84, 895.929, 19, '1,266,700', 4.0, '7.0', '15', 17, 0.31],
  [57, 'Taiwan', '23,816,775', 0.18, 42.899, 673, '35.410', 30.001, '1.2', '42', 79, 0.31],
  [58, 'Sri Lanka', '21,413,249', 0.42, 89.516, 341, '62.710', -97.986, '2.2', '34', 18, 0.27],
  [59, 'Burkina Faso', '20,903,273', 2.86, 581.895, 76, '273.600', -25.0, '5.2', '18', 31, 0.27],
  [60, 'Mali', '20,250,833', 3.02, 592.802, 17, '1,220,190', -40.0, '5.9', '16', 44, 0.26],
  [61, 'Romania', '19,237,691', -0.66, -126.866, 84, '230.170', -73.999, '1.6', '43', 55, 0.25],
  [62, 'Malawi', '19,129,952', 2.69, 501.205, 203, '94.280', -16.053, '4.3', '18', 18, 0.25],
  [63, 'Chile', '19,116,201', 0.87, 164.163, 26, '743.532', 111.708, '1.7', '35', 85, 0.25],
  [64, 'Kazakhstan', '18,776,707', 1.21, 225.28, 7, '2,699,700', -18.0, '2.8', '31', 58, 0.24],
  [65, 'Zambia', '18,383,955', 2.93, 522.925, 25, '743.390', -8.0, '4.7', '18', 45, 0.24],
  [66, 'Guatemala', '17,915,568', 1.9, 334.096, 167, '107.160', -9.215, '2.9', '23', 52, 0.23],
  [67, 'Ecuador', '17,643,054', 1.55, 269.392, 71, '248.360', 36.4, '2.4', '28', 63, 0.23],
  [68, 'Syria', '17,500,658', 2.52, 430.523, 95, '183.630', -427.391, '2.8', '26', 60, 0.22],
  [69, 'Netherlands', '17,134,872', 0.22, 37.742, 508, '33.720', 16.0, '1.7', '43', 92, 0.22],
  [70, 'Senegal', '16,743,927', 2.75, 447.563, 87, '192.530', -20.0, '4.7', '19', 49, 0.21],
  [71, 'Cambodia', '16,718,965', 1.41, 232.423, 95, '176.520', -30.0, '2.5', '26', 24, 0.21],
  [72, 'Chad', '16,425,864', 3.0, 478.988, 13, '1,259,200', 2.0, '5.8', '17', 23, 0.21],
  [73, 'Somalia', '15,893,222', 2.92, 450.317, 25, '627.340', -40.0, '6.1', '17', 47, 0.2],
  [74, 'Zimbabwe', '14,862,924', 1.48, 217.456, 38, '386.850', -116.858, '3.6', '19', 38, 0.19],
  [75, 'Guinea', '13,132,795', 2.83, 361.549, 53, '245.720', -4.0, '4.7', '18', 39, 0.17],
  [76, 'Rwanda', '12,952,218', 2.58, 325.268, 525, '24.670', -9.0, '4.1', '20', 18, 0.17],
  [77, 'Benin', '12,123,200', 2.73, 322.049, 108, '112.760', -2.0, '4.9', '19', 48, 0.16],
  [78, 'Burundi', '11,890,784', 3.12, 360.204, 463, '25.680', 2.001, '5.5', '17', 14, 0.15],
  [79, 'Tunisia', '11,818,619', 1.06, 123.9, 76, '155.360', -4.0, '2.2', '33', 70, 0.15],
  [80, 'Bolivia', '11,673,021', 1.39, 159.921, 11, '1,083,300', -9.504, '2.8', '26', 69, 0.15],
  [81, 'Belgium', '11,589,623', 0.44, 50.295, 383, '30.280', 48.0, '1.7', '42', 98, 0.15],
  [82, 'Haiti', '11,402,528', 1.24, 139.451, 414, '27.560', -35.0, '3.0', '24', 57, 0.15],
  [83, 'Cuba', '11,326,616', -0.06, -6.867, 106, '106.440', -14.4, '1.6', '42', 78, 0.15],
  [84, 'South Sudan', '11,193,725', 1.19, 131.612, 18, '610.952', -174.2, '4.7', '19', 25, 0.14],
  [85, 'Dominican Republic', '10,847,910', 1.01, 108.952, 225, '48.320', -30.0, '2.4', '28', 85, 0.14],
  [86, 'Czech Republic (Czechia)', '10,708,981', 0.18, 19.772, 139, '77.240', 22.011, '1.6', '43', 74, 0.14],
  [87, 'Greece', '10,423,054', -0.48, -50.401, 81, '128.900', -16.0, '1.3', '46', 85, 0.13],
  [88, 'Jordan', '10,203,134', 1.0, 101.44, 115, '88.780', 10.22, '2.8', '24', 91, 0.13],
  [89, 'Portugal', '10,196,709', -0.29, -29.478, 111, '91.590', -6.0, '1.3', '46', 66, 0.13],
  [90, 'Azerbaijan', '10,139,177', 0.91, 91.459, 123, '82.658', 1.2, '2.1', '32', 56, 0.13],
  [91, 'Sweden', '10,099,265', 0.63, 62.886, 25, '410.340', 40.0, '1.9', '41', 88, 0.13],
  [92, 'Honduras', '9,904,607', 1.63, 158.49, 89, '111.890', -6.8, '2.5', '24', 57, 0.13],
  [93, 'United Arab Emirates', '9,890,402', 1.23, 119.873, 118, '83.600', 40.0, '1.4', '33', 86, 0.13],
  [94, 'Hungary', '9,660,351', -0.25, -24.328, 107, '90.530', 6.0, '1.5', '43', 72, 0.12],
  [95, 'Tajikistan', '9,537,645', 2.32, 216.627, 68, '139.960', -20.0, '3.6', '22', 27, 0.12],
  [96, 'Belarus', '9,449,323', -0.03, -3.088, 47, '202.910', 8.73, '1.7', '40', 79, 0.12],
  [97, 'Austria', '9,006,398', 0.57, 51.296, 109, '82.409', 65.0, '1.5', '43', 57, 0.12],
  [98, 'Papua New Guinea', '8,947,024', 1.95, 170.915, 20, '452.860', -800, '3.6', '22', 13, 0.11],
  [99, 'Serbia', '8,737,371', -0.4, -34.864, 100, '87.460', 4.0, '1.5', '42', 56, 0.11],
  [100, 'Israel', '8,655,535', 1.6, 136.158, 400, '21.640', 10.0, '3.0', '30', 93, 0.11],
  [101, 'Switzerland', '8,654,622', 0.74, 63.257, 219, '39.516', 52.0, '1.5', '43', 74, 0.11],
  [102, 'Togo', '8,278,724', 2.43, 196.358, 152, '54.390', -2.0, '4.4', '19', 43, 0.11],
  [103, 'Sierra Leone', '7,976,983', 2.1, 163.768, 111, '72.180', -4.2, '4.3', '19', 43, 0.1],
  [104, 'Hong Kong', '7,496,981', 0.82, 60.827, 7.14, '1.050', 29.308, '1.3', '45', 'N.A.', 0.1],
  [105, 'Laos', '7,275,560', 1.48, 106.105, 32, '230.800', -14.704, '2.7', '24', 36, 0.09],
  [106, 'Paraguay', '7,132,538', 1.25, 87.902, 18, '397.300', -16.556, '2.4', '26', 62, 0.09],
  [107, 'Bulgaria', '6,948,445', -0.74, -51.674, 64, '108.560', -4.8, '1.6', '45', 76, 0.09],
  [108, 'Libya', '6,871,292', 1.38, 93.84, 4, '1,759,540', -1.999, '2.3', '29', 78, 0.09],
  [109, 'Lebanon', '6,825,445', -0.44, -30.268, 667, '10.230', -30.012, '2.1', '30', 78, 0.09],
  [110, 'Nicaragua', '6,624,554', 1.21, 79.052, 55, '120.340', -21.272, '2.4', '26', 57, 0.08],
  [111, 'Kyrgyzstan', '6,524,195', 1.69, 108.345, 34, '191.800', -4.0, '3.0', '26', 36, 0.08],
  [112, 'El Salvador', '6,486,205', 0.51, 32.652, 313, '20.720', -40.539, '2.1', '28', 73, 0.08],
  [113, 'Turkmenistan', '6,031,200', 1.5, 89.111, 13, '469.930', -5.0, '2.8', '27', 53, 0.08],
  [114, 'Singapore', '5,850,342', 0.79, 46.005, 8.358, '700', 27.028, '1.2', '42', 'N.A.', 0.08],
  [115, 'Denmark', '5,792,202', 0.35, 20.326, 137, '42.430', 15.2, '1.8', '42', 88, 0.07],
  [116, 'Finland', '5,540,720', 0.15, 8.564, 18, '303.890', 14.0, '1.5', '43', 86, 0.07],
  [117, 'Congo', '5,518,087', 2.56, 137.579, 16, '341.500', -4.0, '4.5', '19', 70, 0.07],
  [118, 'Slovakia', '5,459,642', 0.05, 2.629, 114, '48.088', 1.485, '1.5', '41', 54, 0.07],
  [119, 'Norway', '5,421,241', 0.79, 42.384, 15, '365.268', 28.0, '1.7', '40', 83, 0.07],
  [120, 'Oman', '5,106,626', 2.65, 131.64, 16, '309.500', 87.4, '2.9', '31', 87, 0.07],
  [121, 'State of Palestine', '5,101,414', 2.41, 119.994, 847, '6.020', -10.563, '3.7', '21', 80, 0.07],
  [122, 'Costa Rica', '5,094,118', 0.92, 46.557, 100, '51.060', 4.2, '1.8', '33', 80, 0.07],
  [123, 'Liberia', '5,057,681', 2.44, 120.307, 53, '96.320', -5.0, '4.4', '19', 53, 0.06],
  [124, 'Ireland', '4,937,786', 1.13, 55.291, 72, '68.890', 23.604, '1.8', '38', 63, 0.06],
  [125, 'Central African Republic', '4,829,767', 1.78, 84.582, 8, '622.980', -40.0, '4.8', '18', 43, 0.06],
  [126, 'New Zealand', '4,822,233', 0.82, 39.17, 18, '263.310', 14.881, '1.9', '38', 87, 0.06],
  [127, 'Mauritania', '4,649,658', 2.74, 123.962, 5, '1,030,700', 5.0, '4.6', '20', 57, 0.06],
  [128, 'Panama', '4,314,767', 1.61, 68.328, 58, '74.340', 11.2, '2.5', '30', 68, 0.06],
  [129, 'Kuwait', '4,270,571', 1.51, 63.488, 240, '17.820', 39.52, '2.1', '37', 'N.A.', 0.05],
  [130, 'Croatia', '4,105,267', -0.61, -25.037, 73, '55.960', -8.001, '1.4', '44', 58, 0.05],
  [131, 'Moldova', '4,033,963', -0.23, -9.3, 123, '32.850', -1.387, '1.3', '38', 43, 0.05],
  [132, 'Georgia', '3,989,167', -0.19, -7.598, 57, '69.490', -10.0, '2.1', '38', 58, 0.05],
  [133, 'Eritrea', '3,546,421', 1.41, 49.304, 35, '101.000', -39.858, '4.1', '19', 63, 0.05],
  [134, 'Uruguay', '3,473,730', 0.35, 11.996, 20, '175.020', -3.0, '2.0', '36', 96, 0.04],
  [135, 'Bosnia and Herzegovina', '3,280,819', -0.61, -20.181, 64, '51.000', -21.585, '1.3', '43', 52, 0.04],
  [136, 'Mongolia', '3,278,290', 1.65, 53.123, 2, '1,553,560', -852, '2.9', '28', 67, 0.04],
  [137, 'Armenia', '2,963,243', 0.19, 5.512, 104, '28.470', -4.998, '1.8', '35', 63, 0.04],
  [138, 'Jamaica', '2,961,167', 0.44, 12.888, 273, '10.830', -11.332, '2.0', '31', 55, 0.04],
  [139, 'Qatar', '2,881,053', 1.73, 48.986, 248, '11.610', 40.0, '1.9', '32', 96, 0.04],
  [140, 'Albania', '2,877,797', -0.11, -3.12, 105, '27.400', -14.0, '1.6', '36', 63, 0.04],
  [141, 'Puerto Rico', '2,860,853', -2.47, -72.555, 323, '8.870', -97.986, '1.2', '44', 'N.A.', 0.04],
  [142, 'Lithuania', '2,722,289', -1.35, -37.338, 43, '62.674', -32.78, '1.7', '45', 71, 0.03],
  [143, 'Namibia', '2,540,905', 1.86, 46.375, 3, '823.290', -4.806, '3.4', '22', 55, 0.03],
  [144, 'Gambia', '2,416,668', 2.94, 68.962, 239, '10.120', -3.087, '5.3', '18', 59, 0.03],
  [145, 'Botswana', '2,351,627', 2.08, 47.93, 4, '566.730', 3.0, '2.9', '24', 73, 0.03],
  [146, 'Gabon', '2,225,734', 2.45, 53.155, 9, '257.670', 3.26, '4.0', '23', 87, 0.03],
  [147, 'Lesotho', '2,142,249', 0.8, 16.981, 71, '30.360', -10.047, '3.2', '24', 31, 0.03],
  [148, 'North Macedonia', '2,083,374', 0.0, -85, 83, '25.220', -1.0, '1.5', '39', 59, 0.03],
  [149, 'Slovenia', '2,078,938', 0.01, 284, 103, '20.140', 2.0, '1.6', '45', 55, 0.03],
  [150, 'Guinea-Bissau', '1,968,001', 2.45, 47.079, 70, '28.120', -1.399, '4.5', '19', 45, 0.03],
  [151, 'Latvia', '1,886,198', -1.08, -20.545, 30, '62.200', -14.837, '1.7', '44', 69, 0.02],
  [152, 'Bahrain', '1,701,575', 3.68, 60.403, 2.239, '760', 47.8, '2.0', '32', 89, 0.02],
  [153, 'Equatorial Guinea', '1,402,985', 3.47, 46.999, 50, '28.050', 16.0, '4.6', '22', 73, 0.02],
  [154, 'Trinidad and Tobago', '1,399,488', 0.32, 4.515, 273, '5.130', -800, '1.7', '36', 52, 0.02],
  [155, 'Estonia', '1,326,535', 0.07, 887, 31, '42.390', 3.911, '1.6', '42', 68, 0.02],
  [156, 'Timor-Leste', '1,318,445', 1.96, 25.326, 89, '14.870', -5.385, '4.1', '21', 33, 0.02],
  [157, 'Mauritius', '1,271,768', 0.17, 2.1, 626, '2.030', 0, '1.4', '37', 41, 0.02],
  [158, 'Cyprus', '1,207,359', 0.73, 8.784, 131, '9.240', 5.0, '1.3', '37', 67, 0.02],
  [159, 'Eswatini', '1,160,164', 1.05, 12.034, 67, '17.200', -8.353, '3.0', '21', 30, 0.01],
  [160, 'Djibouti', '988.000', 1.48, 14.44, 43, '23.180', 900, '2.8', '27', 79, 0.01],
  [161, 'Fiji', '896.445', 0.73, 6.492, 49, '18.270', -6.202, '2.8', '28', 59, 0.01],
  [162, 'Réunion', '895.312', 0.72, 6.385, 358, '2.500', -1.256, '2.3', '36', 100, 0.01],
  [163, 'Comoros', '869.601', 2.2, 18.715, 467, '1.861', -2.0, '4.2', '20', 29, 0.01],
  [164, 'Guyana', '786.552', 0.48, 3.786, 4, '196.850', -6.0, '2.5', '27', 27, 0.01],
  [165, 'Bhutan', '771.608', 1.12, 8.516, 20, '38.117', 320, '2.0', '28', 46, 0.01],
  [166, 'Solomon Islands', '686.884', 2.55, 17.061, 25, '27.990', -1.6, '4.4', '20', 23, 0.01],
  [167, 'Macao', '649.335', 1.39, 8.89, 21.645, '30', 5.0, '1.2', '39', 'N.A.', 0.01],
  [168, 'Montenegro', '628.066', 0.01, 79, 47, '13.450', -480, '1.8', '39', 68, 0.01],
  [169, 'Luxembourg', '625.978', 1.66, 10.249, 242, '2.590', 9.741, '1.5', '40', 88, 0.01],
  [170, 'Western Sahara', '597.339', 2.55, 14.876, 2, '266.000', 5.582, '2.4', '28', 87, 0.01],
  [171, 'Suriname', '586.632', 0.9, 5.26, 4, '156.000', -1.0, '2.4', '29', 65, 0.01],
  [172, 'Cabo Verde', '555.987', 1.1, 6.052, 138, '4.030', -1.342, '2.3', '28', 68, 0.01],
  [173, 'Maldives', '540.544', 1.81, 9.591, 1.802, '300', 11.37, '1.9', '30', 35, 0.01],
  [174, 'Malta', '441.543', 0.27, 1.171, 1.38, '320', 900, '1.5', '43', 93, 0.01],
  [175, 'Brunei', '437.479', 0.97, 4.194, 83, '5.270', 0, '1.8', '32', 80, 0.01],
  [176, 'Guadeloupe', '400.124', 0.02, 68, 237, '1.690', -1.44, '2.2', '44', 'N.A.', 0.01],
  [177, 'Belize', '397.628', 1.86, 7.275, 17, '22.810', 1.2, '2.3', '25', 46, 0.01],
  [178, 'Bahamas', '393.244', 0.97, 3.762, 39, '10.010', 1.0, '1.8', '32', 86, 0.01],
  [179, 'Martinique', '375.265', -0.08, -289, 354, '1.060', -960, '1.9', '47', 92, 0.0],
  [180, 'Iceland', '341.243', 0.65, 2.212, 3, '100.250', 380, '1.8', '37', 94, 0.0],
  [181, 'Vanuatu', '307.145', 2.42, 7.263, 25, '12.190', 120, '3.8', '21', 24, 0.0],
  [182, 'French Guiana', '298.682', 2.7, 7.85, 4, '82.200', 1.2, '3.4', '25', 87, 0.0],
  [183, 'Barbados', '287.375', 0.12, 350, 668, '430', -79, '1.6', '40', 31, 0.0],
  [184, 'New Caledonia', '285.498', 0.97, 2.748, 16, '18.280', 502, '2.0', '34', 72, 0.0],
  [185, 'French Polynesia', '280.908', 0.58, 1.621, 77, '3.660', -1.0, '2.0', '34', 64, 0.0],
  [186, 'Mayotte', '272.815', 2.5, 6.665, 728, '375', 0, '3.7', '20', 46, 0.0],
  [187, 'Sao Tome & Principe', '219.159', 1.91, 4.103, 228, '960', -1.68, '4.4', '19', 74, 0.0],
  [188, 'Samoa', '198.414', 0.67, 1.317, 70, '2.830', -2.803, '3.9', '22', 18, 0.0],
  [189, 'Saint Lucia', '183.627', 0.46, 837, 301, '610', 0, '1.4', '34', 19, 0.0],
  [190, 'Channel Islands', '173.863', 0.93, 1.604, 915, '190', 1.351, '1.5', '43', 30, 0.0],
  [191, 'Guam', '168.775', 0.89, 1.481, 313, '540', -506, '2.3', '31', 95, 0.0],
  [192, 'Curaçao', '164.093', 0.41, 669, 370, '444', 515, '1.8', '42', 89, 0.0],
  [193, 'Kiribati', '119.449', 1.57, 1.843, 147, '810', -800, '3.6', '23', 57, 0.0],
  [194, 'Micronesia', '115.023', 1.06, 1.208, 164, '700', -600, '3.1', '24', 21, 0.0],
  [195, 'Grenada', '112.523', 0.46, 520, 331, '340', -200, '2.1', '32', 35, 0.0],
  [196, 'St. Vincent & Grenadines', '110.940', 0.32, 351, 284, '390', -200, '1.9', '33', 53, 0.0],
  [197, 'Aruba', '106.766', 0.43, 452, 593, '180', 201, '1.9', '41', 44, 0.0],
  [198, 'Tonga', '105.695', 1.15, 1.201, 147, '720', -800, '3.6', '22', 24, 0.0],
  [199, 'U.S. Virgin Islands', '104.425', -0.15, -153, 298, '350', -451, '2.0', '43', 96, 0.0],
  [200, 'Seychelles', '98.347', 0.62, 608, 214, '460', -200, '2.5', '34', 56, 0.0],
  [201, 'Antigua and Barbuda', '97.929', 0.84, 811, 223, '440', 0, '2.0', '34', 26, 0.0],
  [202, 'Isle of Man', '85.033', 0.53, 449, 149, '570', 0, 'N.A.', 'N.A.', 53, 0.0],
  [203, 'Andorra', '77.265', 0.16, 123, 164, '470', 0, 'N.A.', 'N.A.', 88, 0.0],
  [204, 'Dominica', '71.986', 0.25, 178, 96, '750', 0, 'N.A.', 'N.A.', 74, 0.0],
  [205, 'Cayman Islands', '65.722', 1.19, 774, 274, '240', 0, 'N.A.', 'N.A.', 97, 0.0],
  [206, 'Bermuda', '62.278', -0.36, -228, 1.246, '50', 0, 'N.A.', 'N.A.', 97, 0.0],
  [207, 'Marshall Islands', '59.190', 0.68, 399, 329, '180', 0, 'N.A.', 'N.A.', 70, 0.0],
  [208, 'Northern Mariana Islands', '57.559', 0.6, 343, 125, '460', 0, 'N.A.', 'N.A.', 88, 0.0],
  [209, 'Greenland', '56.770', 0.17, 98, 0, '410.450', 0, 'N.A.', 'N.A.', 87, 0.0],
  [210, 'American Samoa', '55.191', -0.22, -121, 276, '200', 0, 'N.A.', 'N.A.', 88, 0.0],
  [211, 'Saint Kitts & Nevis', '53.199', 0.71, 376, 205, '260', 0, 'N.A.', 'N.A.', 33, 0.0],
  [212, 'Faeroe Islands', '48.863', 0.38, 185, 35, '1.396', 0, 'N.A.', 'N.A.', 43, 0.0],
  [213, 'Sint Maarten', '42.876', 1.15, 488, 1.261, '34', 0, 'N.A.', 'N.A.', 96, 0.0],
  [214, 'Monaco', '39.242', 0.71, 278, 26.337, '1', 0, 'N.A.', 'N.A.', 'N.A.', 0.0],
  [215, 'Turks and Caicos', '38.717', 1.38, 526, 41, '950', 0, 'N.A.', 'N.A.', 89, 0.0],
  [216, 'Saint Martin', '38.666', 1.75, 664, 730, '53', 0, 'N.A.', 'N.A.', 0, 0.0],
  [217, 'Liechtenstein', '38.128', 0.29, 109, 238, '160', 0, 'N.A.', 'N.A.', 15, 0.0],
  [218, 'San Marino', '33.931', 0.21, 71, 566, '60', 0, 'N.A.', 'N.A.', 97, 0.0],
  [219, 'Gibraltar', '33.691', -0.03, -10, 3.369, '10', 0, 'N.A.', 'N.A.', 'N.A.', 0.0],
  [220, 'British Virgin Islands', '30.231', 0.67, 201, 202, '150', 0, 'N.A.', 'N.A.', 52, 0.0],
  [221, 'Caribbean Netherlands', '26.223', 0.94, 244, 80, '328', 0, 'N.A.', 'N.A.', 75, 0.0],
  [222, 'Palau', '18.094', 0.48, 86, 39, '460', 0, 'N.A.', 'N.A.', 'N.A.', 0.0],
  [223, 'Cook Islands', '17.564', 0.09, 16, 73, '240', 0, 'N.A.', 'N.A.', 75, 0.0],
  [224, 'Anguilla', '15.003', 0.9, 134, 167, '90', 0, 'N.A.', 'N.A.', 'N.A.', 0.0],
  [225, 'Tuvalu', '11.792', 1.25, 146, 393, '30', 0, 'N.A.', 'N.A.', 62, 0.0],
  [226, 'Wallis & Futuna', '11.239', -1.69, -193, 80, '140', 0, 'N.A.', 'N.A.', 0, 0.0],
  [227, 'Nauru', '10.824', 0.63, 68, 541, '20', 0, 'N.A.', 'N.A.', 'N.A.', 0.0],
  [228, 'Saint Barthelemy', '9.877', 0.3, 30, 470, '21', 0, 'N.A.', 'N.A.', 0, 0.0],
  [229, 'Saint Helena', '6.077', 0.3, 18, 16, '390', 0, 'N.A.', 'N.A.', 27, 0.0],
  [230, 'Saint Pierre & Miquelon', '5.794', -0.48, -28, 25, '230', 0, 'N.A.', 'N.A.', 100, 0.0],
  [231, 'Montserrat', '4.992', 0.06, 3, 50, '100', 0, 'N.A.', 'N.A.', 10, 0.0],
  [232, 'Falkland Islands', '3.480', 3.05, 103, 0, '12.170', 0, 'N.A.', 'N.A.', 66, 0.0],
  [233, 'Niue', '1.626', 0.68, 11, 6, '260', 0, 'N.A.', 'N.A.', 46, 0.0],
  [234, 'Tokelau', '1.357', 1.27, 17, 136, '10', 0, 'N.A.', 'N.A.', 0, 0.0],
  [235, 'Holy See', '801', 0.25, 2, 2.003, '0', 0, 'N.A.', 'N.A.', 'N.A.', 0.0]
]

console.log(countries[148][1])

function arrayLookup(searchValue, array, searchIndex, returnIndex) {
  var returnVal = null
  var i
  for (i = 0; i < array.length; i++) {
    if (array[i][searchIndex] == searchValue) {
      returnVal = array[i][returnIndex]
      break
    }
  }
  console.log(returnVal)
  return returnVal
}

arrayLookup('Slovenia', countries, 1, 2)
*/
//----------------------------------------------------------------------------------------------------

const allCountriesCovidData = []
const table = document.getElementById('table-body')

fetch('https://covid19-server.chrismichael.now.sh/api/v1/AllReports')
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.reports[0].table[0].length; i++) {
      allCountriesCovidData[i] = {
        TotalCases: data.reports[0].table[0][i].TotalCases === '' ? '' : parseInt(data.reports[0].table[0][i].TotalCases.replace(',', '')),
        NewCases: data.reports[0].table[0][i].NewCases === '' ? '' : parseInt(data.reports[0].table[0][i].NewCases.replace('+', '')),
        TotalDeaths: data.reports[0].table[0][i].TotalDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].TotalDeaths.replace(',', '')),
        NewDeaths: data.reports[0].table[0][i].NewDeaths === '' ? '' : parseInt(data.reports[0].table[0][i].NewDeaths.replace('+', '')),
        TotalRecovered: data.reports[0].table[0][i].TotalRecovered === '' ? '' : parseInt(data.reports[0].table[0][i].TotalRecovered.replace(',', '')),
        ActiveCases: data.reports[0].table[0][i].ActiveCases === '' ? '' : parseInt(data.reports[0].table[0][i].ActiveCases.replace(',', '')),
        Deaths_1M_pop: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')),
        FirstCase: data.reports[0].table[0][i].FirstCase,
        Country: data.reports[0].table[0][i].Country,
        Serious_Critical: data.reports[0].table[0][i].Serious_Critical === '' ? '' : parseInt(data.reports[0].table[0][i].Serious_Critical.replace(',', '')),
        TotCases_1M_Pop: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')),
        DeathsPercent: data.reports[0].table[0][i].Deaths_1M_pop === '' ? '' : parseInt(data.reports[0].table[0][i].Deaths_1M_pop.replace(',', '')) * 0.0001,
        CasesPercent: data.reports[0].table[0][i].TotCases_1M_Pop === '' ? '' : parseInt(data.reports[0].table[0][i].TotCases_1M_Pop.replace(',', '')) * 0.0001
      }
    }
    allCountriesCovidData.sort(compareValues('TotalCases', 'desc'))
    showTableData()
    console.log(allCountriesCovidData[1].CasesPercent)
  })

//--------------------------- START "order by" event listeners ----------------------------

document.querySelector('.country-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Country', 'asc'))
  showTableData()
})

document.querySelector('.country-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Country', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.total-cases-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalCases', 'asc'))
  showTableData()
})

document.querySelector('.total-cases-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalCases', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.new-cases-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewCases', 'asc'))
  showTableData()
})

document.querySelector('.new-cases-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewCases', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.total-deaths-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalDeaths', 'asc'))
  showTableData()
})

document.querySelector('.total-deaths-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalDeaths', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.new-deaths-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewDeaths', 'asc'))
  showTableData()
})

document.querySelector('.new-deaths-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('NewDeaths', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.total-recovered-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalRecovered', 'asc'))
  showTableData()
})

document.querySelector('.total-recovered-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotalRecovered', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.active-cases-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('ActiveCases', 'asc'))
  showTableData()
})

document.querySelector('.active-cases-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('ActiveCases', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.deaths-1m-pop-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Deaths_1M_pop', 'asc'))
  showTableData()
})

document.querySelector('.deaths-1m-pop-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Deaths_1M_pop', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.first-case-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('FirstCase', 'asc'))
  showTableData()
})

document.querySelector('.first-case-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('FirstCase', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.serious-critical-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Serious_Critical', 'asc'))
  showTableData()
})

document.querySelector('.serious-critical-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('Serious_Critical', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.tot-cases-1m-pop-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotCases_1M_Pop', 'asc'))
  showTableData()
})

document.querySelector('.tot-cases-1m-pop-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('TotCases_1M_Pop', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.deaths-percent-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('DeathsPercent', 'asc'))
  showTableData()
})

document.querySelector('.deaths-percent-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('DeathsPercent', 'desc'))
  showTableData()
})

//-------------------------------------

document.querySelector('.cases-percent-up').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('CasesPercent', 'asc'))
  showTableData()
})

document.querySelector('.cases-percent-down').addEventListener('click', () => {
  table.innerHTML = ''
  allCountriesCovidData.sort(compareValues('CasesPercent', 'desc'))
  showTableData()
})
//-------------------------------------
//--------------------------- END "order by" event listeners ----------------------------

function showTableData() {
  for (let i = 0; i < allCountriesCovidData.length; i++) {
    DeathsPercent = allCountriesCovidData[i].DeathsPercent
    DeathsPercent = Number(DeathsPercent).toFixed(4)
    CasesPercent = allCountriesCovidData[i].CasesPercent
    CasesPercent = Number(CasesPercent).toFixed(4)
    table.innerHTML += `<tr>
    <td>${allCountriesCovidData[i].Country}</td>
    <td>${allCountriesCovidData[i].TotalCases}</td>
    <td>${allCountriesCovidData[i].NewCases}</td>
    <td>${allCountriesCovidData[i].TotalDeaths}</td>
    <td>${allCountriesCovidData[i].NewDeaths}</td>
    <td>${allCountriesCovidData[i].TotalRecovered}</td>
    <td>${allCountriesCovidData[i].ActiveCases}</td>
    <td>${allCountriesCovidData[i].Deaths_1M_pop}</td>
    <td>${allCountriesCovidData[i].FirstCase}</td>
    <td>${allCountriesCovidData[i].Serious_Critical}</td>
    <td>${allCountriesCovidData[i].TotCases_1M_Pop}</td>
    <td>${DeathsPercent}</td>
    <td>${CasesPercent}</td>
  </tr>
  `
  }
}

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === 'desc' ? comparison * -1 : comparison
  }
}
