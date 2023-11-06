import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-slate-900 dark:border-gray-700">
        <div className="flex items-center py-4">
          {/* Navigation Toggle */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-5 h-5"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          {/* End Navigation Toggle */}

          {/* Breadcrumb */}
          <ol
            className="ml-3 flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-slate-900 dark:text-gray-400">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-slate-900 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
          {/* End Breadcrumb */}
        </div>
      </div>
      {/* End Sidebar Toggle */}
      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-slate-900 dark:border-gray-700"
      >
        <div className="px-6">
          <Link
            className="flex  text-xl font-semibold dark:text-white"
            to="#"
            aria-label="CodeDaily"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 1178 1262"
              version="1.1"
              className="pb-1"
            >
              {/* <path
                d="M 0 631.001 L 0 1262.002 589.250 1261.751 L 1178.500 1261.500 1178.751 630.750 L 1179.002 0 589.501 0 L 0 0 0 631.001 M 0.497 631.500 C 0.497 978.550, 0.611 1120.376, 0.750 946.668 C 0.889 772.960, 0.889 489.010, 0.750 315.668 C 0.611 142.326, 0.497 284.450, 0.497 631.500 M 773.015 53.620 C 773.007 54.236, 770.043 60.986, 766.428 68.620 C 762.814 76.254, 759.039 84.300, 758.039 86.500 C 757.040 88.700, 754.640 93.875, 752.706 98 C 743.878 116.834, 739.756 125.679, 724.976 157.500 C 716.290 176.200, 707.106 195.928, 704.567 201.340 C 702.028 206.753, 699.308 212.721, 698.521 214.604 C 697.734 216.487, 696.456 218.271, 695.682 218.569 C 694.907 218.866, 691.849 217.672, 688.887 215.916 C 675.791 208.155, 637.022 186.045, 632.490 183.755 C 615.610 175.224, 588.273 173.628, 568.695 180.030 C 559.579 183.010, 560.079 182.738, 498.500 218.342 C 471.633 233.876, 451.508 245.491, 429 258.453 C 410.402 269.163, 387.501 282.377, 340 309.806 C 322.068 320.161, 307.840 328.418, 300 333.020 C 299.175 333.505, 289.725 338.930, 279 345.076 C 268.275 351.222, 251.175 361.064, 241 366.948 C 230.825 372.831, 211.267 384.137, 197.539 392.072 C 174.331 405.486, 171.942 407.134, 163.539 415.526 C 153.147 425.904, 146.826 435.870, 142.100 449.330 L 139 458.159 139 690.941 L 139 923.722 141.385 931.237 C 145.950 945.619, 152.878 957.003, 163.453 967.500 C 171.257 975.246, 175.453 978.068, 201 992.754 C 210.625 998.287, 220.075 1003.752, 222 1004.899 C 223.925 1006.045, 226.175 1007.293, 227 1007.673 C 227.825 1008.052, 233.225 1011.152, 239 1014.562 C 244.775 1017.971, 258.500 1025.935, 269.500 1032.260 C 280.500 1038.584, 299.400 1049.491, 311.500 1056.497 C 323.600 1063.504, 337.325 1071.364, 342 1073.965 C 346.675 1076.565, 359.725 1084.084, 371 1090.674 C 390.609 1102.134, 408.106 1112.266, 451 1137 C 461.725 1143.184, 479.275 1153.313, 490 1159.508 C 500.725 1165.703, 511.525 1171.899, 514 1173.277 C 516.475 1174.655, 525.925 1180.127, 535 1185.435 C 544.075 1190.744, 554.659 1196.635, 558.520 1198.526 C 579.262 1208.685, 605.780 1209.632, 627.500 1200.987 C 634.833 1198.068, 675.256 1175.395, 675.833 1173.877 C 676.017 1173.395, 676.582 1173, 677.090 1173 C 678.085 1173, 692.528 1164.938, 716.500 1151.003 C 724.750 1146.207, 740.725 1136.971, 752 1130.479 C 763.275 1123.987, 781.642 1113.348, 792.815 1106.838 C 803.988 1100.327, 813.285 1095, 813.475 1095 C 813.664 1095, 822.298 1089.984, 832.660 1083.853 C 843.022 1077.722, 853.750 1071.515, 856.500 1070.060 C 859.250 1068.604, 869.150 1062.972, 878.500 1057.545 C 899.807 1045.176, 925.591 1030.271, 956.500 1012.455 C 1008.062 982.734, 1016.706 977.550, 1022.500 972.874 C 1036.325 961.716, 1046.646 945.618, 1051.590 927.500 C 1053.444 920.705, 1053.500 913.790, 1053.500 691 L 1053.500 461.500 1051.130 453.500 C 1044.879 432.405, 1032.112 415.304, 1014 403.764 C 1005.135 398.116, 929.175 354.388, 926.336 353.299 C 925.231 352.875, 924.998 383.007, 924.961 530.644 C 924.936 628.465, 924.514 714.350, 924.021 721.500 C 918.325 804.249, 884.398 877.804, 825.170 935.813 C 776.419 983.560, 714.870 1014.248, 645.296 1025.496 C 628.957 1028.138, 607.424 1029.268, 585.500 1028.636 C 538.521 1027.281, 495.514 1016.913, 454.202 996.983 C 409.821 975.572, 373.577 947.135, 341.461 908.526 C 335.982 901.940, 331.050 895.760, 330.500 894.791 C 329.950 893.823, 326.953 889.311, 323.840 884.765 C 270.477 806.834, 253.725 708.464, 278.070 616 C 295.573 549.526, 336.764 486.247, 390 444.051 C 395.775 439.473, 400.650 435.339, 400.833 434.864 C 401.017 434.389, 401.551 434, 402.020 434 C 402.490 434, 405.751 432.030, 409.268 429.622 C 438.831 409.383, 474.066 392.878, 507.500 383.608 C 526.086 378.455, 547.123 374.679, 570 372.390 C 577.287 371.660, 690.709 371.889, 693.697 372.639 L 696.022 373.222 695.761 447.861 L 695.500 522.500 639 522.153 C 590.431 521.855, 580.956 522.037, 571.500 523.452 C 558.433 525.407, 540.649 529.886, 533.500 533.021 C 532.400 533.504, 528.144 535.291, 524.041 536.993 C 503.162 545.658, 475.150 565.879, 463.773 580.500 C 461.633 583.250, 458.172 587.379, 456.081 589.675 C 447.874 598.688, 435.088 620.943, 429.178 636.500 C 423.347 651.850, 419.617 667.339, 418.582 680.500 C 418.279 684.350, 417.761 690.650, 417.431 694.500 C 416.730 702.679, 418.362 723.053, 420.636 734.500 C 435.245 808.044, 494.125 865.026, 567.500 876.627 C 623.016 885.405, 679.431 867.739, 719.327 829.084 C 732.106 816.703, 747.367 797.217, 751.113 788.500 C 751.822 786.850, 753.153 784.375, 754.070 783 C 756.682 779.083, 762.494 765.286, 765.893 754.934 C 770.456 741.036, 772.805 728.348, 773.933 711.500 C 775.273 691.489, 775.327 56.097, 773.988 54 C 773.461 53.175, 773.024 53.004, 773.015 53.620"
                stroke="none"
                fill="#ffffff"
                fillRule="evenodd"
              /> */}
              <path
                d="M 773.015 53.620 C 773.007 54.236, 770.043 60.986, 766.428 68.620 C 762.814 76.254, 759.039 84.300, 758.039 86.500 C 757.040 88.700, 754.640 93.875, 752.706 98 C 743.878 116.834, 739.756 125.679, 724.976 157.500 C 716.290 176.200, 707.106 195.928, 704.567 201.340 C 702.028 206.753, 699.308 212.721, 698.521 214.604 C 697.734 216.487, 696.456 218.271, 695.682 218.569 C 694.907 218.866, 691.849 217.672, 688.887 215.916 C 675.791 208.155, 637.022 186.045, 632.490 183.755 C 615.610 175.224, 588.273 173.628, 568.695 180.030 C 559.579 183.010, 560.079 182.738, 498.500 218.342 C 471.633 233.876, 451.508 245.491, 429 258.453 C 410.402 269.163, 387.501 282.377, 340 309.806 C 322.068 320.161, 307.840 328.418, 300 333.020 C 299.175 333.505, 289.725 338.930, 279 345.076 C 268.275 351.222, 251.175 361.064, 241 366.948 C 230.825 372.831, 211.267 384.137, 197.539 392.072 C 174.331 405.486, 171.942 407.134, 163.539 415.526 C 153.147 425.904, 146.826 435.870, 142.100 449.330 L 139 458.159 139 690.941 L 139 923.722 141.385 931.237 C 145.950 945.619, 152.878 957.003, 163.453 967.500 C 171.257 975.246, 175.453 978.068, 201 992.754 C 210.625 998.287, 220.075 1003.752, 222 1004.899 C 223.925 1006.045, 226.175 1007.293, 227 1007.673 C 227.825 1008.052, 233.225 1011.152, 239 1014.562 C 244.775 1017.971, 258.500 1025.935, 269.500 1032.260 C 280.500 1038.584, 299.400 1049.491, 311.500 1056.497 C 323.600 1063.504, 337.325 1071.364, 342 1073.965 C 346.675 1076.565, 359.725 1084.084, 371 1090.674 C 390.609 1102.134, 408.106 1112.266, 451 1137 C 461.725 1143.184, 479.275 1153.313, 490 1159.508 C 500.725 1165.703, 511.525 1171.899, 514 1173.277 C 516.475 1174.655, 525.925 1180.127, 535 1185.435 C 544.075 1190.744, 554.659 1196.635, 558.520 1198.526 C 579.262 1208.685, 605.780 1209.632, 627.500 1200.987 C 634.833 1198.068, 675.256 1175.395, 675.833 1173.877 C 676.017 1173.395, 676.582 1173, 677.090 1173 C 678.085 1173, 692.528 1164.938, 716.500 1151.003 C 724.750 1146.207, 740.725 1136.971, 752 1130.479 C 763.275 1123.987, 781.642 1113.348, 792.815 1106.838 C 803.988 1100.327, 813.285 1095, 813.475 1095 C 813.664 1095, 822.298 1089.984, 832.660 1083.853 C 843.022 1077.722, 853.750 1071.515, 856.500 1070.060 C 859.250 1068.604, 869.150 1062.972, 878.500 1057.545 C 899.807 1045.176, 925.591 1030.271, 956.500 1012.455 C 1008.062 982.734, 1016.706 977.550, 1022.500 972.874 C 1036.325 961.716, 1046.646 945.618, 1051.590 927.500 C 1053.444 920.705, 1053.500 913.790, 1053.500 691 L 1053.500 461.500 1051.130 453.500 C 1044.879 432.405, 1032.112 415.304, 1014 403.764 C 1005.135 398.116, 929.175 354.388, 926.336 353.299 C 925.231 352.875, 924.998 383.007, 924.961 530.644 C 924.936 628.465, 924.514 714.350, 924.021 721.500 C 918.325 804.249, 884.398 877.804, 825.170 935.813 C 776.419 983.560, 714.870 1014.248, 645.296 1025.496 C 628.957 1028.138, 607.424 1029.268, 585.500 1028.636 C 538.521 1027.281, 495.514 1016.913, 454.202 996.983 C 409.821 975.572, 373.577 947.135, 341.461 908.526 C 335.982 901.940, 331.050 895.760, 330.500 894.791 C 329.950 893.823, 326.953 889.311, 323.840 884.765 C 270.477 806.834, 253.725 708.464, 278.070 616 C 295.573 549.526, 336.764 486.247, 390 444.051 C 395.775 439.473, 400.650 435.339, 400.833 434.864 C 401.017 434.389, 401.551 434, 402.020 434 C 402.490 434, 405.751 432.030, 409.268 429.622 C 438.831 409.383, 474.066 392.878, 507.500 383.608 C 526.086 378.455, 547.123 374.679, 570 372.390 C 577.287 371.660, 690.709 371.889, 693.697 372.639 L 696.022 373.222 695.761 447.861 L 695.500 522.500 639 522.153 C 590.431 521.855, 580.956 522.037, 571.500 523.452 C 558.433 525.407, 540.649 529.886, 533.500 533.021 C 532.400 533.504, 528.144 535.291, 524.041 536.993 C 503.162 545.658, 475.150 565.879, 463.773 580.500 C 461.633 583.250, 458.172 587.379, 456.081 589.675 C 447.874 598.688, 435.088 620.943, 429.178 636.500 C 423.347 651.850, 419.617 667.339, 418.582 680.500 C 418.279 684.350, 417.761 690.650, 417.431 694.500 C 416.730 702.679, 418.362 723.053, 420.636 734.500 C 435.245 808.044, 494.125 865.026, 567.500 876.627 C 623.016 885.405, 679.431 867.739, 719.327 829.084 C 732.106 816.703, 747.367 797.217, 751.113 788.500 C 751.822 786.850, 753.153 784.375, 754.070 783 C 756.682 779.083, 762.494 765.286, 765.893 754.934 C 770.456 741.036, 772.805 728.348, 773.933 711.500 C 775.273 691.489, 775.327 56.097, 773.988 54 C 773.461 53.175, 773.024 53.004, 773.015 53.620"
                stroke="none"
                fill="#004aad"
                fillRule="evenodd"
              />
            </svg>
            CodeDaily
          </Link>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                to="/"
              >
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <Link
                className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                to="/"
              >
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
                Community
                <svg
                  className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
              <div
                id="users-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul
                  className="hs-accordion-group pl-3 pt-2"
                  data-hs-accordion-always-open=""
                >
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <Link
                      className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                      to="#"
                    >
                      For DSA
                      <svg
                        className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>
                    <div
                      id="users-accordion-sub-1-child"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                      <ul className="pt-2 pl-2">
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            to="#"
                          >
                            DSA Level 1 Group
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            to="#"
                          >
                            DSA Level 2 Group
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            to="#"
                          >
                            DSA Level 3 Group
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hs-accordion" id="users-accordion-sub-2">
                    <Link
                      className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                      to="#"
                    >
                      For Web-dev
                      <svg
                        className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>
                    <div
                      id="users-accordion-sub-2-child"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"
                    >
                      <ul className="pt-2 pl-2">
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            to="#"
                          >
                            React & Redux
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            to="#"
                          >
                            MongoDB and SQL
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                            to="#"
                          >
                            NodeJs & ExpressJs
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="hs-accordion" id="account-accordion">
          <Link
            className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
            to="#"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            Account
            <svg
              className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <div
            id="account-accordion-child"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
          >
            <ul className="pt-2 pl-2">
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="#"
                >
                  Link 1
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="#"
                >
                  Link 2
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="#"
                >
                  Link 3
                </Link>
              </li>
            </ul>
          </div>
        </li> */}
            {/* <li className="hs-accordion" id="projects-accordion">
          <Link
            className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
            to="#"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
              <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
            </svg>
            Projects
            <svg
              className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <div
            id="projects-accordion-child"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
          >
            <ul className="pt-2 pl-2">
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="#"
                >
                  Link 1
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="#"
                >
                  Link 2
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="#"
                >
                  Link 3
                </Link>
              </li>
            </ul>
          </div>
        </li> */}
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="#"
              >
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                Calendar
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="/compiler"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-earmark-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                  <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                </svg>
                Compiler
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="/question"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-reception-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                </svg>
                DSA Level 1
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-reception-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                </svg>
                DSA Level 2
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-reception-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
                </svg>
                DSA Level 3
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="#"
              >
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
                Documentation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
