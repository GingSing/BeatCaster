const beatMap = {
  notes: [
    { time: 7500.6, position: { x: -21, y: 4 } },
    { time: 9375.750999999998, position: { x: 0, y: 17 } },
    { time: 11250.901, position: { x: 21, y: 30 } },
    { time: 13124.417, position: { x: 21, y: 17 } },
    { time: 14999.567000000001, position: { x: 21, y: 4 } },
    { time: 16875.943, position: { x: 0, y: 17 } },
    { time: 18749.868, position: { x: -21, y: 30 } },
    { time: 20663.485, position: { x: -21, y: 17 } },
    { time: 22500.985, position: { x: -21, y: 4 } }, // first 9 notes
    { time: 22969.568, position: { x: -19, y: 4 } },
    { time: 23903.264, position: { x: -15, y: 10 } },
    { time: 24844.106, position: { x: -9, y: 16 } },
    { time: 25782.497, position: { x: -3, y: 10 } },
    { time: 26719.256, position: { x: 3, y: 6 } },
    { time: 27656.014, position: { x: 9, y: 10 } },
    { time: 28593.589, position: { x: 15, y: 16 } },
    { time: 29532.798, position: { x: 21, y: 24 } },
    { time: 30468.738999999998, position: { x: 21, y: 24 } },
    { time: 31405.498000000003, position: { x: 15, y: 16 } },
    { time: 32343.888999999996, position: { x: 9, y: 10 } },
    { time: 33283.098000000005, position: { x: 3, y: 6 } },
    { time: 34219.039000000004, position: { x: -3, y: 10 } },
    { time: 35156.613999999994, position: { x: -9, y: 16 } },
    { time: 36095.006, position: { x: -15, y: 10 } },
    { time: 37029.314, position: { x: -19, y: 4 } }, // second 16 notes
    { time: 37499.735, position: { x: -14, y: 12 } },
    { time: 37966.89, position: { x: -9, y: 4 } },
    { time: 38435.676999999996, position: { x: -4, y: 12 } },
    { time: 38904.465000000004, position: { x: 1, y: 4 } },
    { time: 39376.519, position: { x: 6, y: 12 } },
    { time: 39844.49, position: { x: 11, y: 4 } },
    { time: 40312.460999999996, position: { x: 16, y: 12 } },
    { time: 40781.248, position: { x: 21, y: 4 } },
    { time: 41250.036, position: { x: 21, y: 30 } },
    { time: 41719.436, position: { x: 16, y: 22 } },
    { time: 42187.815, position: { x: 11, y: 30 } },
    { time: 42656.602, position: { x: 6, y: 22 } },
    { time: 43125.39, position: { x: 1, y: 30 } },
    { time: 43594.177, position: { x: -4, y: 22 } }, // third 14 notes
    { time: 43829.013000000006, position: { x: -21, y: 30 } }, // start at far left
    { time: 44063.204, position: { x: -13, y: 30 } },
    { time: 44297.235, position: { x: -21, y: 24 } },
    { time: 44531.748, position: { x: -13, y: 24 } },
    { time: 44766.208, position: { x: -21, y: 18 } },
    { time: 45000.494000000006, position: { x: -13, y: 18 } },
    { time: 45234.752, position: { x: -21, y: 12 } },
    { time: 45468.307, position: { x: -13, y: 12 } },
    { time: 45703.618, position: { x: -21, y: 6 } },
    { time: 45938.077999999994, position: { x: -13, y: 6 } }, // far left done
    { time: 46172.752, position: { x: -5, y: 6 } }, // starting middle
    { time: 46406.729, position: { x: 3, y: 6 } },
    { time: 46641.135, position: { x: -5, y: 12 } },
    { time: 46875.542, position: { x: 3, y: 12 } },
    { time: 47109.948000000004, position: { x: -5, y: 18 } },
    { time: 47344.247, position: { x: 3, y: 18 } },
    { time: 47578.626, position: { x: -5, y: 24 } },
    { time: 47813.111999999994, position: { x: 3, y: 24 } },
    { time: 48047.358, position: { x: -5, y: 30 } },
    { time: 48281.657, position: { x: 3, y: 30 } }, // middle done
    { time: 48516.197, position: { x: 11, y: 30 } }, // starting far right
    { time: 48750.522, position: { x: 19, y: 30 } },
    { time: 48984.659999999996, position: { x: 11, y: 24 } },
    { time: 49219.496, position: { x: 19, y: 24 } },
    { time: 49453.58, position: { x: 11, y: 18 } },
    { time: 49688.093, position: { x: 19, y: 18 } },
    { time: 49922.392, position: { x: 11, y: 12 } },
    { time: 50156.906, position: { x: 19, y: 12 } },
    { time: 50391.419, position: { x: 11, y: 6 } },
    { time: 50625.718, position: { x: 19, y: 6 } }, // fourth 30 notes
    { time: 52032.155000000006, position: { x: -15, y: 22 } },
    { time: 52266.668000000005, position: { x: -15, y: 15 } },
    { time: 52505.631, position: { x: -15, y: 8 } }, // 1
    { time: 52974.497, position: { x: -10, y: 8 } }, // 2
    { time: 53442.023, position: { x: -5, y: 8 } }, // 3
    { time: 53912.121999999996, position: { x: 0, y: 8 } }, // 1 up
    { time: 54145.455, position: { x: 0, y: 15 } }, // 2 up
    { time: 54379.647, position: { x: 0, y: 22 } }, // 3 up
    { time: 54847.172999999995, position: { x: 7, y: 22 } }, //1 down
    { time: 55087.369000000006, position: { x: 7, y: 15 } }, //1 down
    { time: 55318.987, position: { x: 7, y: 8 } }, // 1 down
    { time: 55786.942, position: { x: 10, y: 10 } }, // 1
    { time: 56021.562000000005, position: { x: 0, y: 10 } }, // 2
    { time: 56255.754, position: { x: 7, y: 20 } }, // 3 end fifth part
    { time: 56724.781, position: { x: 2, y: 20 } },
    { time: 57193.807, position: { x: 2, y: 10 } },
    { time: 57661.869000000006, position: { x: 2, y: 20 } },
    { time: 57897.669, position: { x: 2, y: 10 } },
    { time: 58130.789, position: { x: -8, y: 20 } },
    { time: 58599.681, position: { x: 2, y: 20 } },
    { time: 59068.413, position: { x: -8, y: 10 } }, // end of sixth part
    { time: 60004.536, position: { x: -15, y: 8 } }, // 1
    { time: 60474.635, position: { x: -10, y: 8 } }, // 2
    { time: 60943.662000000004, position: { x: -5, y: 8 } }, // 3
    { time: 61411.938, position: { x: 0, y: 8 } }, // 1
    { time: 61646.237, position: { x: 0, y: 15 } }, //2
    { time: 61880.858, position: { x: 0, y: 22 } }, //3
    { time: 62349.670000000006, position: { x: 7, y: 22 } }, //1
    { time: 62584.076, position: { x: 7, y: 15 } }, //2
    { time: 62818.509, position: { x: 7, y: 8 } }, //3
    { time: 63287.132999999994, position: { x: 10, y: 10 } }, //1
    { time: 63521.379, position: { x: 0, y: 10 } }, //2
    { time: 63755.999, position: { x: 5, y: 20 } }, //3
    { time: 64224.27500000001, position: { x: 15, y: 20 } }, // 1
    { time: 64692.229999999996, position: { x: -15, y: 20 } }, //2
    { time: 65162.436, position: { x: 9, y: 12 } }, //3
    { time: 65396.94900000001, position: { x: -9, y: 12 } }, //4
    { time: 65630.927, position: { x: 0, y: 5 } }, // 5  part 7 done
    { time: 66566.299, position: { x: -12, y: 7 } }, // 1
    { time: 66801.242, position: { x: 12, y: 7 } }, // 2
    { time: 67035.219, position: { x: -5, y: 7 } }, // 3
    { time: 67269.196, position: { x: 5, y: 7 } }, // 4
    { time: 67504.567, position: { x: -12, y: 13 } }, // 5
    { time: 67736.829, position: { x: 12, y: 13 } }, // 6
    { time: 67973.044, position: { x: -5, y: 13 } }, // 7
    { time: 68207.24900000001, position: { x: 5, y: 13 } }, // 8
    { time: 68441.79, position: { x: 0, y: 19 } }, // 9
    { time: 68910.387, position: { x: -12, y: 7 } }, // 1
    { time: 69144.55200000001, position: { x: 12, y: 7 } }, //2
    { time: 69378.958, position: { x: -5, y: 7 } }, // 3
    { time: 69613.257, position: { x: 5, y: 7 } }, // 4
    { time: 69847.449, position: { x: -12, y: 13 } }, // 5
    { time: 70082.284, position: { x: 12, y: 13 } }, // 6
    { time: 70317.119, position: { x: -5, y: 13 } }, // 7
    { time: 70784.644, position: { x: -12, y: 19 } }, // 1
    { time: 71019.479, position: { x: 12, y: 19 } }, // 2
    { time: 71254.315, position: { x: 0, y: 24 } }, // 3 // part 8 done
    { time: 71722.912, position: { x: -10, y: 15 } }, // 1
    { time: 71957.39899999999, position: { x: 10, y: 7 } }, //2
    { time: 72193.27900000001, position: { x: 10, y: 15 } }, //3
    { time: 72660.269, position: { x: -10, y: 7 } }, //4
    { time: 72895.104, position: { x: 10, y: 7 } }, //5
    { time: 73129.40299999999, position: { x: 10, y: 15 } }, //6
    { time: 73597.518, position: { x: -10, y: 15 } }, //7
    { time: 73832.353, position: { x: -10, y: 7 } }, //8 part 9 done
    { time: 74535.57100000001, position: { x: 0, y: 10 } }, // 1 middle
    { time: 75003.794, position: { x: -10, y: 15 } }, //1 top left
    { time: 75238.575, position: { x: 10, y: 15 } }, //2 top right
    { time: 75473.089, position: { x: -10, y: 5 } }, //3 bottom left
    { time: 75707.495, position: { x: 10, y: 5 } }, //4 bottom right
    { time: 75941.365, position: { x: 0, y: 10 } }, //5 // middle
    { time: 76409.105, position: { x: -10, y: 15 } }, //1 // top left
    { time: 76645.01199999999, position: { x: 10, y: 15 } }, //2 top right
    { time: 76880.437, position: { x: -10, y: 5 } }, //3 bottom left
    { time: 77114.039, position: { x: 10, y: 5 } }, //4 bottom right
    { time: 77348.016, position: { x: -15, y: 10 } }, //5 far middle left
    { time: 77582.85100000001, position: { x: 15, y: 10 } }, //6 far middle right
    { time: 77817.954, position: { x: 0, y: 10 } }, //7 middle
    { time: 78285.801, position: { x: -12, y: 19 } }, //1
    { time: 78519.671, position: { x: 12, y: 19 } }, //2
    { time: 78755.84700000001, position: { x: 0, y: 24 } }, //3 Part 10 done
    { time: 79222.997, position: { x: -5, y: 21 } }, // 1
    { time: 79691.863, position: { x: 5, y: 21 } }, //  2
    { time: 80160.648, position: { x: -15, y: 15 } }, // 1
    { time: 80396.368, position: { x: -15, y: 10 } }, // 2
    { time: 80628.844, position: { x: 15, y: 15 } }, // 3
    { time: 80863.679, position: { x: 15, y: 10 } }, // 4
    { time: 81097.656, position: { x: -10, y: 15 } }, // 5
    { time: 81332.49100000001, position: { x: -5, y: 15 } }, // 6
    { time: 81566.039, position: { x: 10, y: 15 } }, // 7
    { time: 81801.518, position: { x: 15, y: 15 } }, // 8
    { time: 82035.495, position: { x: 7.5, y: 8 } }, // 9
    { time: 82270.116, position: { x: 0, y: 8 } }, // 10
    { time: 82504.093, position: { x: -7.5, y: 8 } }, //  11
    { time: 90004.338 },
    { time: 91915.938 },
    { time: 93754.22 },
    { time: 95629.361 },
    { time: 97504.61 },
    { time: 99427.443 },
    { time: 101254.438 },
    { time: 103129.79400000001 },
    { time: 105005.36499999999 },
    { time: 105471.389 },
    { time: 106409.228 },
    { time: 107346.424 },
    { time: 108283.619 },
    { time: 109221.405 },
    { time: 110158.868 },
    { time: 111096.922 },
    { time: 112033.90299999999 },
    { time: 112971.098 },
    { time: 113909.04500000001 },
    { time: 114846.99100000001 },
    { time: 115784.615 },
    { time: 116721.811 },
    { time: 117659.221 },
    { time: 118596.524 },
    { time: 119534.255 },
    { time: 120002.424 },
    { time: 120471.23700000001 },
    { time: 120939.834 },
    { time: 121408.754 },
    { time: 121877.459 },
    { time: 122346.057 },
    { time: 122815.19099999999 },
    { time: 123283.681 },
    { time: 123752.386 },
    { time: 124221.091 },
    { time: 124690.439 },
    { time: 125158.823 },
    { time: 125627.313 },
    { time: 126096.662 },
    { time: 126330.853 },
    { time: 126565.42 },
    { time: 126799.82699999999 },
    { time: 127033.857 },
    { time: 127268.424 },
    { time: 127502.61600000001 },
    { time: 127737.076 },
    { time: 127971.375 },
    { time: 128206.129 },
    { time: 128440.83 },
    { time: 128674.915 },
    { time: 128909.37400000001 },
    { time: 129143.62 },
    { time: 129377.919 },
    { time: 129612.59300000001 },
    { time: 129847.106 },
    { time: 130081.24399999999 },
    { time: 130315.972 },
    { time: 130549.52 },
    { time: 130784.141 },
    { time: 131018.33300000001 },
    { time: 131253.275 },
    { time: 131487.252 },
    { time: 131721.497 },
    { time: 131956.091 },
    { time: 132190.417 },
    { time: 132425.037 },
    { time: 132659.283 },
    { time: 132893.582 },
    { time: 133128.953 },
    { time: 135006.34600000002 },
    { time: 135241.181 },
    { time: 135474.944 },
    { time: 135710.744 },
    { time: 135943.54200000002 },
    { time: 136412.354 },
    { time: 136646.76 },
    { time: 136881.166 },
    { time: 137115.573 },
    { time: 137349.92500000002 },
    { time: 137584.331 },
    { time: 137818.737 },
    { time: 138288.247 },
    { time: 138522.653 },
    { time: 138756.04 },
    { time: 139224.69100000002 },
    { time: 139458.133 },
    { time: 139693.718 },
    { time: 140162.209 },
    { time: 140396.615 },
    { time: 140631.128 },
    { time: 141099.61899999998 },
    { time: 141334.776 },
    { time: 141568.69900000002 },
    { time: 142037.136 },
    { time: 142506.484 },
    { time: 142740.247 },
    { time: 142974.868 },
    { time: 143209.48799999998 },
    { time: 143443.46600000001 },
    { time: 143912.063 },
    { time: 144147.11299999998 },
    { time: 144381.519 },
    { time: 144615.92500000002 },
    { time: 144849.795 },
    { time: 145084.416 },
    { time: 145318.446 },
    { time: 145787.741 },
    { time: 146021.504 },
    { time: 146255.91 },
    { time: 146724.937 },
    { time: 147193.535 },
    { time: 147661.70299999998 },
    { time: 147897.182 },
    { time: 148130.73 },
    { time: 148599.97100000002 },
    { time: 149068.78399999999 },
    { time: 149535.31699999998 },
    { time: 150003.94199999998 },
    { time: 150238.53600000002 },
    { time: 150473.076 },
    { time: 150707.053 },
    { time: 150941.674 },
    { time: 151410.057 },
    { time: 151644.56999999998 },
    { time: 151880.531 },
    { time: 152115.20500000002 },
    { time: 152349.397 },
    { time: 152584.01799999998 },
    { time: 152818.31600000002 },
    { time: 153286.69999999998 },
    { time: 153521.64200000002 },
    { time: 153755.619 },
    { time: 154223.788 },
    { time: 154458.784 },
    { time: 154693.13700000002 },
    { time: 155161.413 },
    { time: 155396.19400000002 },
    { time: 155630.65399999998 },
    { time: 156099.198 },
    { time: 156333.443 },
    { time: 156568.278 },
    { time: 157036.44700000001 },
    { time: 157505.715 },
    { time: 157740.175 },
    { time: 157974.04499999998 },
    { time: 158208.049 },
    { time: 158442.884 },
    { time: 158911.696 },
    { time: 159146.102 },
    { time: 159380.294 },
    { time: 159615.343 },
    { time: 159849.321 },
    { time: 160083.727 },
    { time: 160318.34699999998 },
    { time: 160786.892 },
    { time: 161021.03 },
    { time: 161255.65 },
    { time: 161724.355 },
    { time: 162193.275 },
    { time: 162662.194 },
    { time: 162896.386 },
    { time: 163130.36299999998 },
    { time: 163365.198 },
    { time: 163600.033 },
    { time: 163834.225 },
    { time: 164071.204 },
    { time: 164302.394 },
    { time: 164536.907 },
    { time: 165005.853 },
    { time: 165474.424 },
    { time: 165943.371 },
    { time: 166411.91499999998 },
    { time: 166880.647 },
    { time: 167349.352 },
    { time: 167818.217 },
    { time: 168287.08299999998 },
    { time: 168756.003 },
    { time: 169224.43999999997 },
    { time: 169693.198 },
    { time: 170162.011 },
    { time: 170631.25199999998 },
    { time: 171099.742 },
    { time: 171568.34 },
    { time: 172037.045 },
    { time: 172505.965 },
    { time: 172974.482 },
    { time: 173443.267 },
    { time: 173911.97199999998 },
    { time: 174380.69100000002 },
    { time: 174849.58299999998 },
    { time: 175318.449 },
    { time: 175786.9 },
    { time: 176256.03399999999 },
    { time: 176724.417 },
    { time: 177193.551 },
    { time: 177661.934 },
    { time: 178130.961 },
    { time: 180065.616 }
  ]
};
