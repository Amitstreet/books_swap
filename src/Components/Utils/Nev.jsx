import React from "react";
import DarkLight from "./DarkLight";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";


function Nev() {
  let user = useSelector((store) => store.UserData.items.auth.isSignedin);


  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-3 lg:pl-64 dark:bg-slate-900 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="mr-5 lg:mr-0 lg:hidden">
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
        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          {/* <div className="sm:hidden">
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-slate-900"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div> */}
          <div className="hidden sm:block">
            {/* <label htmlFor="icon" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <input
              type="text"
              id="icon"
              name="icon"
              className="py-2 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search"
            />
          </div> */}
          </div>
          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-slate-900"
            >
              <DarkLight />
            </button>
            {user?(<><button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-slate-900"
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
            </button>
            <button
              type="button"
              className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-slate-900"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </button>
            <div className="hs-dropdown relative inline-flex z-50 [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-slate-900"
              >
                <img
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-slate-900"
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt="Image Description"
                />
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-slate-900 dark:border dark:border-gray-700"
                aria-labelledby="hs-dropdown-with-header"
              >
                <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Signed in as
                  </p>
                  <p className="text-sm font-medium text-slate-900 dark:text-gray-300">
                    james@site.com
                  </p>
                </div>
                <div className="mt-2 py-2 first:pt-0 last:pb-0">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-slate-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    to="#"
                  >
                    <svg
                      className="flex-none"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                    Newsletter
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-slate-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    to="#"
                  >
                    <svg
                      className="flex-none"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                      <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    Purchases
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-slate-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    to="#"
                  >
                    <svg
                      className="flex-none"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                      />
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                    </svg>
                    Downloads
                  </Link>
                </div>
              </div>
            </div></>):(
              <div className="grid gap-3 w-full sm:inline-flex">
              <Link
                className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-4 dark:focus:ring-offset-gray-800"
                to="/signup"
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-1 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                to="/login"
              >
                Login
              </Link>
            </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nev;
