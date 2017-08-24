;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jiahao" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M745.9988 463.6916H535.1451125632972V252.84557070306334c0-11.0385-8.9493-19.9864-19.9873-19.9864-11.04 0-19.9873 8.9479-19.9873 19.9864v210.846046380554H284.31489141416915c-11.039 0-19.9873 8.9479-19.9873 19.9864s8.9483 19.9864 19.9873 19.9864h210.85468556529491v210.8450470580946c0 11.0395 8.9483 19.9864 19.9873 19.9864 11.038 0 19.9873-8.9469 19.9873-19.9864V503.6645154585191h210.8536862018894c11.038 0 19.9873-8.9479 19.9873-19.9864S757.0368 463.6916 745.9988 463.6916z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-danjiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M337.355 896.668l-35.378-35.378 349.291-349.307-349.291-349.273 35.378-35.379 384.668 384.652z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-navlist" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M284.416 118.016l711.168 0C1011.2768 118.016 1024 105.2928 1024 89.6c0-15.6928-12.7232-28.416-28.416-28.416L284.416 61.184C268.7232 61.184 256 73.9072 256 89.6 256 105.2928 268.7232 118.016 284.416 118.016z"  ></path>'+
      ''+
      '<path d="M125.184 61.184 28.416 61.184C12.7232 61.184 0 73.9072 0 89.6c0 15.6928 12.7232 28.416 28.416 28.416l96.768 0C140.8768 118.016 153.6 105.2928 153.6 89.6 153.6 73.9072 140.8768 61.184 125.184 61.184z"  ></path>'+
      ''+
      '<path d="M995.584 342.784 284.416 342.784c-15.6928 0-28.416 12.7232-28.416 28.416 0 15.6928 12.7232 28.416 28.416 28.416l711.168 0c15.6928 0 28.416-12.7232 28.416-28.416C1024 355.5072 1011.2768 342.784 995.584 342.784z"  ></path>'+
      ''+
      '<path d="M125.184 342.784 28.416 342.784C12.7232 342.784 0 355.5072 0 371.2c0 15.6928 12.7232 28.416 28.416 28.416l96.768 0C140.8768 399.616 153.6 386.8928 153.6 371.2 153.6 355.5072 140.8768 342.784 125.184 342.784z"  ></path>'+
      ''+
      '<path d="M585.984 905.984 284.416 905.984c-15.6928 0-28.416 12.7232-28.416 28.3904 0 15.6928 12.7232 28.4416 28.416 28.4416l301.568 0c15.6928 0 28.416-12.7488 28.416-28.4416C614.4 918.7072 601.6768 905.984 585.984 905.984z"  ></path>'+
      ''+
      '<path d="M125.184 905.984 28.416 905.984C12.7232 905.984 0 918.7072 0 934.3744c0 15.6928 12.7232 28.4416 28.416 28.4416l96.768 0c15.6928 0 28.416-12.7488 28.416-28.4416C153.6 918.7072 140.8768 905.984 125.184 905.984z"  ></path>'+
      ''+
      '<path d="M585.984 624.384 284.416 624.384c-15.6928 0-28.416 12.7232-28.416 28.3904 0 15.6928 12.7232 28.4416 28.416 28.4416l301.568 0c15.6928 0 28.416-12.7488 28.416-28.4416C614.4 637.1072 601.6768 624.384 585.984 624.384z"  ></path>'+
      ''+
      '<path d="M125.184 624.384 28.416 624.384C12.7232 624.384 0 637.1072 0 652.7744c0 15.6928 12.7232 28.4416 28.416 28.4416l96.768 0c15.6928 0 28.416-12.7488 28.416-28.4416C153.6 637.1072 140.8768 624.384 125.184 624.384z"  ></path>'+
      ''+
      '<path d="M995.584 729.6256l-122.368 0 0-122.368c0-15.6928-12.7232-28.416-28.3904-28.416-15.6928 0-28.416 12.7232-28.416 28.416l0 122.368L694.016 729.6256c-15.6928 0-28.416 12.7232-28.416 28.416 0 15.6672 12.7232 28.3904 28.416 28.3904l122.3424 0L816.3584 908.8c0 15.6928 12.7232 28.416 28.416 28.416 15.6672 0 28.3904-12.7232 28.3904-28.416l0-122.3424 122.368 0c15.6928 0 28.416-12.7232 28.416-28.3904C1024 742.3488 1011.2768 729.6256 995.584 729.6256z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qiche01" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M944.081321 745.562477c-8.315386-28.183899-13.94357-49.081858-22.571065-63.209624-9.898441-16.189727-76.326363-13.265118-122.999358-20.605294-31.106462-27.925003-82.064041-81.58718-92.350314-86.646406-17.934464-8.830109-200.554712-14.975063-264.169565 5.629207-26.582425 8.609075-114.111944 72.960709-114.111944 72.960709s-233.322 34.511002-238.987023 72.739675c-3.403516 23.289426-50.866505 85.320201-5.611811 100.001575l49.450249-0.147356c-3.183506-8.389064-4.949732-17.512862-4.949732-27.04189 0-40.637536 31.66007-73.548086 70.679759-73.548086 39.055504 0 70.660316 32.910551 70.660316 73.548086 0 9.361205-1.691525 18.320251-4.746094 26.565029l483.60223-1.657756c-3.437286-8.572236-5.296633-17.990746-5.296633-27.852348 0-40.618093 31.66007-73.548086 70.678736-73.548086 39.035038 0 70.677713 32.929993 70.677713 73.548086 0 9.69685-1.820462 18.947538-5.114484 27.429723 0 0 67.992557-1.729387 73.641207-13.465686C955.103352 804.999171 965.330274 755.828284 944.081321 745.562477zM812.899606 747.338936c-30.630624 0-55.437613 25.793456-55.437613 57.643861 0 31.852452 24.806989 57.663304 55.437613 57.663304 30.592762 0 55.398728-25.810852 55.398728-57.663304C868.29731 773.132392 843.492368 747.338936 812.899606 747.338936zM812.87914 783.196609c-11.587919 0-20.951171 9.772574-20.951171 21.786189 0 12.051477 9.362228 21.805632 20.951171 21.805632 11.5695 0 20.933775-9.753131 20.933775-21.805632C833.812915 792.96816 824.44864 783.196609 812.87914 783.196609z"  ></path>'+
      ''+
      '<path d="M200.680067 744.56987c-30.631648 0-55.443753 25.820062-55.443753 57.653071 0 31.833009 24.813129 57.655118 55.443753 57.655118 30.595832 0 55.407937-25.821085 55.407937-57.655118C256.089028 770.389932 231.276922 744.56987 200.680067 744.56987zM200.680067 780.435729c-11.582803 0-20.956288 9.760295-20.956288 21.786189 0 12.024871 9.373485 21.789259 20.956288 21.789259 11.549034 0 20.957311-9.764388 20.957311-21.789259C221.638401 790.196023 212.229101 780.435729 200.680067 780.435729z"  ></path>'+
      ''+
      '<path d="M515.649622 663.662165l-122.280997 1.876744c1.434675-1.839905 2.299369-4.157693 2.299369-6.715959 0-6.124488-4.745071-11.056823-10.633175-11.056823l-9.492188 0c19.683295-15.470343 49.761334-31.44006 69.279876-37.269835 13.778818-6.696516 52.153824-9.880021 85.192288-12.142551C522.714528 614.655008 518.962064 645.817752 515.649622 663.662165z"  ></path>'+
      ''+
      '<path d="M718.634686 662.48434l-157.583015 0.496304-6.640234 0.093121c0.128937-32.578999 3.550873-51.491745 8.608052-64.553225 8.575306-2.189875 8.575306-2.189875 8.575306-2.189875s103.385649-2.133593 130.24539 10.082636C711.774441 619.62009 752.575706 662.48434 718.634686 662.48434z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon1" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M1024.288818 220.586954c-2.022053 4.122901-51.008744 17.311271-63.056128 29.492708 1.182942 16.399505-0.152473 32.606629-3.487428 48.287773 5.634324 13.834076 55.42738 36.034704 56.980759 40.769542 1.732457 5.282307-26.267247 59.747779-31.402197 61.506842-4.318352 1.475608-47.473221-23.100114-65.023946-23.471574-9.671267 11.044544-20.733207 21.004383-33.153074 29.445636-7.472182 11.971659 13.097296 65.375963 10.767228 69.935816-2.53166 4.953825-61.069891 23.781636-65.952084 21.415752-4.021593-1.952468-16.624632-47.882544-28.561499-61.575404-15.384385 1.360997-30.650067 0.605797-45.478797-1.960655 0.019443 0.047072 0.044002 0.086981 0.065492 0.13303-12.948917-6.541997-40.181141 55.096852-45.49517 56.8201-5.314029 1.723248-60.09775-26.114774-61.867046-31.220049-1.485841-4.294816 23.261797-47.246047 23.607674-64.671928-12.910031-10.874675-24.372084-23.609721-33.789571-38.08848-11.174504-8.191566-66.175165 12.812817-70.815859 10.466376-4.981455-2.512217-23.922852-60.71378-21.538549-65.566298 2.109034-4.298909 55.365982-18.46249 64.444754-31.058366-0.737804-14.504342 0.523933-28.836769 3.319605-42.769083-0.358157 0.163729-0.682545 0.343831-1.046842 0.508583 6.577812-12.872169-55.42124-39.945781-57.156768-45.232181-1.731434-5.28026 26.26827-59.747779 31.404244-61.506842 4.66423-1.594311 54.68753 27.240411 68.715011 23.043832 10.012028-11.023054 21.467941-20.883633 34.280758-29.170366 0.684592-0.832971 1.600451-1.691525 2.692319-2.567475 6.935969-12.567223-13.247722-65.075111-10.936073-69.596078 2.530636-4.953825 61.067844-23.783683 65.952084-21.413706 4.496407 2.179642 19.73446 59.378365 32.763195 64.909335 1.167592 0.076748 2.316765 0.163729 3.279696 0.349971 13.715373-0.171915 27.217898 1.434675 40.34794 4.365424 13.728676-2.075265 37.673018-55.579853 42.620703-57.184397 5.313006-1.723248 60.099796 26.114774 61.867046 31.220049 1.619894 4.678556-27.912723 55.251372-23.068392 68.681242 9.843182 9.115612 18.814508 19.283182 26.437116 30.636764 11.313673 8.070816 66.109674-12.846586 70.743204-10.504238C1007.728654 157.534919 1026.672099 215.734436 1024.288818 220.586954zM862.288191 236.5843c-13.877055-42.294268-59.579957-65.403592-102.081956-51.621704-42.504046 13.781888-65.710584 59.237149-51.835575 101.531418 13.877055 42.294268 59.582003 65.407686 102.084003 51.625798C852.959732 324.337923 876.16627 278.878568 862.288191 236.5843zM645.98889 440.000176c0.118704 7.256264-64.228837 64.422242-63.618946 85.34169 9.56075 17.160845 17.421788 35.396161 22.86066 54.676273 12.087293 16.369829 98.107435 11.979846 103.500259 17.340947 5.798053 5.760191 5.584182 95.478562 0.039909 101.168144-4.708232 4.835122-79.085196 1.074472-101.468996 12.615319-5.855358 23.404036-15.135722 45.400003-26.969235 65.757656 1.528819 21.837354 60.832484 75.314313 60.832484 82.616626 0 8.148587-63.99143 71.437006-71.961962 71.567989-6.698562 0.106424-55.656601-53.676503-79.969333-62.132082-18.547425 11.024078-38.539758 19.912515-59.730383 26.068725-15.905248 13.31526-11.649318 97.087199-16.990976 102.392018-5.798053 5.760191-96.082312 5.547343-101.808734 0.039909-4.716418-4.542456-1.278109-74.287937-11.661597-98.779747-22.082948-5.058203-43.036165-13.014408-62.551638-23.297612 0.008186 0.072655 0.023536 0.140193 0.031722 0.211824-15.07023-14.97711-81.275072 58.662051-89.476871 58.662051-8.201799 0-71.89033-63.58927-72.019267-71.510684-0.106424-6.658653 54.076616-55.359842 62.535265-79.506798-13.030781-20.999266-23.192212-43.941791-29.702486-68.390623-11.841699-16.476253-98.185206-12.05557-103.585193-17.425881-5.798053-5.756097-5.584182-95.478562-0.039909-101.168144 4.909823-5.042853 85.692684-0.710175 104.121406-14.167674 5.609765-20.559245 13.932314-39.975457 24.207331-58.140165-0.574075 0.067538-1.110287 0.171915-1.691525 0.23536 15.07023-14.975063-59.033511-80.764442-59.033511-88.917122 0-8.146541 63.993476-71.437006 71.964008-71.567989 7.237845-0.11461 63.826678 62.71332 85.316108 63.205531 19.013029-10.842952 39.506782-19.414165 61.176314-25.176402 1.335415-0.850367 3.006474-1.63422 4.931313-2.361791 15.428388-14.389732 11.30344-96.735182 16.597003-101.992929 5.798053-5.764284 96.082312-5.550413 101.81078-0.039909 5.276167 5.074575 0.354064 91.724051 15.999392 105.327884 1.590218 0.635473 3.152806 1.276063 4.41352 1.971911 19.210527 5.960759 37.314861 14.306844 54.290487 24.332175 20.100804 3.313465 77.995375-60.468187 85.633333-60.468187C582.171422 368.489492 645.859953 432.081833 645.98889 440.000176zM356.657249 529.437138c-65.60109 0-118.785384 52.891627-118.785384 118.142747 0 65.253166 53.184293 118.148887 118.785384 118.148887 65.603137 0 118.785384-52.895721 118.785384-118.148887C475.442632 582.328765 422.260386 529.437138 356.657249 529.437138z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuokuangsousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M792.000112 474.444663c0 191.281511-155.064658 346.346169-346.346169 346.346169-191.281511 0-346.347193-155.064658-346.347193-346.346169 0-191.280488 155.064658-346.347193 346.347193-346.347193C636.935454 128.098493 792.000112 283.164175 792.000112 474.444663L792.000112 474.444663zM445.654966 177.575348c-163.957189 0-296.869315 132.913149-296.869315 296.869315 0 163.957189 132.916219 296.869315 296.869315 296.869315 163.956166 0 296.868291-132.912126 296.868291-296.869315C742.523257 310.488497 609.611132 177.575348 445.654966 177.575348L445.654966 177.575348zM445.654966 177.575348"  ></path>'+
      ''+
      '<path d="M878.736569 962.021413 666.739247 744.643548c-11.178597-11.510148-10.909467-29.906124 0.601704-41.084721l4.273327-4.15053c11.507078-11.174504 29.90203-10.905374 41.080627 0.604774l211.997322 217.377866L878.736569 962.021413zM919.817196 962.619024"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shezhi" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M988.8 390.4l-80 44.8c3.2 25.6 6.4 48 6.4 73.6 0 25.6-3.2 51.2-6.4 73.6l80 44.8c32 19.2 44.8 60.8 25.6 92.8l-67.2 118.4c-19.2 32-60.8 44.8-92.8 25.6l-80-48c-38.4 32-80 57.6-128 76.8l0 57.6c0 38.4-32 67.2-67.2 67.2l-134.4 0c-38.4 0-67.2-28.8-67.2-67.2l0-57.6c-48-16-89.6-41.6-128-76.8l-80 48c-32 19.2-73.6 6.4-92.8-25.6l-67.2-118.4c-19.2-32-6.4-73.6 25.6-92.8l80-44.8c-3.2-25.6-6.4-48-6.4-73.6 0-25.6 3.2-51.2 6.4-73.6l-80-44.8c-32-19.2-44.8-60.8-25.6-92.8l67.2-118.4c19.2-32 60.8-44.8 92.8-25.6l80 48c38.4-32 80-57.6 128-76.8L377.6 67.2c0-44.8 19.2-67.2 67.2-67.2l144 0c41.6 0 60.8 19.2 60.8 60.8l0 67.2c48 16 89.6 41.6 128 76.8l80-48c32-19.2 73.6-6.4 92.8 25.6l67.2 118.4C1033.6 329.6 1020.8 371.2 988.8 390.4L988.8 390.4zM944 300.8l-32-57.6c-12.8-22.4-32-22.4-54.4-12.8l-89.6 51.2c-48-54.4-115.2-96-188.8-112l0-70.4c0-28.8-3.2-44.8-35.2-44.8L480 54.4c-35.2 0-38.4 12.8-41.6 44.8l0 70.4c-73.6 16-137.6 57.6-185.6 112L153.6 224C137.6 214.4 124.8 211.2 112 236.8L73.6 300.8c-16 25.6-3.2 38.4 16 48l96 54.4c-12.8 35.2-16 70.4-16 108.8 0 38.4 6.4 73.6 16 108.8l-105.6 60.8C64 688 64 704 73.6 720l41.6 70.4c9.6 16 22.4 19.2 38.4 9.6l102.4-54.4c48 54.4 105.6 89.6 179.2 105.6l0 73.6c0 19.2 16 41.6 35.2 41.6l76.8 0c19.2 0 35.2-22.4 35.2-38.4l0-70.4c73.6-16 137.6-54.4 185.6-108.8l89.6 51.2c16 9.6 38.4 3.2 48-12.8l38.4-64c9.6-16 0-41.6-16-51.2l-92.8-54.4c12.8-35.2 19.2-67.2 19.2-105.6 0-38.4-9.6-76.8-19.2-112l83.2-48C937.6 342.4 956.8 323.2 944 300.8L944 300.8zM512 675.2c-89.6 0-163.2-73.6-163.2-163.2s73.6-163.2 163.2-163.2c89.6 0 163.2 73.6 163.2 163.2S601.6 675.2 512 675.2L512 675.2zM512 409.6c-57.6 0-102.4 44.8-102.4 102.4 0 57.6 44.8 102.4 102.4 102.4 57.6 0 102.4-44.8 102.4-102.4C614.4 454.4 566.4 409.6 512 409.6L512 409.6zM512 409.6"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icontouxiang" viewBox="0 0 1036 1024">'+
      ''+
      '<path d="M231.633593 295.165243c0-153.595317 124.940454-278.535771 278.537807-278.535771 153.595317 0 278.535771 124.940454 278.535771 278.535771 0 153.60448-124.940454 278.53068-278.535771 278.53068C356.574047 573.695923 231.633593 448.769723 231.633593 295.165243L231.633593 295.165243zM0 1014.090329c5.996914-67.351756 38.330358-306.001432 286.846943-433.813074 61.63687 48.382571 139.069346 77.514946 223.325474 77.514946 84.715315 0 162.56727-29.428658 224.36908-78.30605 249.591753 127.274058 279.721917 364.250911 285.801301 434.597051C1018.86037 1015.51676 1.473266 1014.201308 0 1014.090329L0 1014.090329zM0 1014.090329"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantouyoujiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M723.696401 533.102744c0.486519-0.973037 1.337926-1.824445 1.702815-2.797482 8.514075-17.757928 5.716593-39.651265-9.365483-53.881934L372.30835 151.307281c-18.730966-17.757928-48.28697-16.906521-66.044898 1.824445-17.757928 18.730966-16.906521 48.28697 1.824445 66.044898l308.452785 291.789524L309.304193 807.012709c-18.609336 17.879558-19.095855 47.435562-1.216296 66.044898 9.122224 9.487112 21.406818 14.352298 33.569783 14.352298 11.676446 0 23.352892-4.378667 32.353486-13.136002l340.563012-328.278418c0.608148-0.608148 0.851408-1.581185 1.581185-2.189334 0.486519-0.486519 0.973037-0.851408 1.581185-1.337926C720.53403 539.670745 721.871956 536.265115 723.696401 533.102744L723.696401 533.102744zM723.696401 533.102744"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tongxingfeijisuan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M736.904 130.024 243.096 130.024c-19.048 0-34.44 15.432-34.44 34.464l0 663.192c0 19.032 15.392 34.464 34.44 34.464l493.816 0c19.008 0 34.44-15.432 34.44-34.464L771.352 164.488C771.352 145.456 755.912 130.024 736.904 130.024zM398.36 735.184c0 7.768-7.904 14.008-17.664 14.008l-58.248 0c-9.76 0-17.624-6.232-17.624-14.008l0-42.04c0-7.736 7.864-14.016 17.624-14.016l58.248 0c9.76 0 17.664 6.28 17.664 14.016L398.36 735.184zM398.36 627.496c0 7.736-7.904 14.008-17.664 14.008l-58.248 0c-9.76 0-17.624-6.264-17.624-14.008l0-42.032c0-7.76 7.864-14.024 17.624-14.024l58.248 0c9.76 0 17.664 6.264 17.664 14.024L398.36 627.496zM398.36 515.896c0 7.728-7.904 14.008-17.664 14.008l-58.248 0c-9.76 0-17.624-6.28-17.624-14.008l0-42.032c0-7.736 7.864-14.008 17.624-14.008l58.248 0c9.76 0 17.664 6.264 17.664 14.008L398.36 515.896zM537.648 735.184c0 7.768-7.944 14.008-17.664 14.008l-58.2 0c-9.76 0-17.664-6.232-17.664-14.008l0-42.04c0-7.736 7.904-14.016 17.664-14.016l58.2 0c9.712 0 17.664 6.28 17.664 14.016L537.648 735.184zM537.648 627.496c0 7.736-7.944 14.008-17.664 14.008l-58.2 0c-9.76 0-17.664-6.264-17.664-14.008l0-42.032c0-7.76 7.904-14.024 17.664-14.024l58.2 0c9.712 0 17.664 6.264 17.664 14.024L537.648 627.496zM537.648 515.896c0 7.728-7.944 14.008-17.664 14.008l-58.2 0c-9.76 0-17.664-6.28-17.664-14.008l0-42.032c0-7.736 7.904-14.008 17.664-14.008l58.2 0c9.712 0 17.664 6.264 17.664 14.008L537.648 515.896zM675.168 734.336c0 7.736-7.904 14.008-17.664 14.008l-58.2 0c-9.76 0-17.624-6.264-17.624-14.008l0-42.032c0-7.736 7.864-14.024 17.624-14.024l58.2 0c9.76 0 17.664 6.288 17.664 14.024L675.168 734.336zM675.168 626.608c0 7.76-7.904 14.024-17.664 14.024l-58.2 0c-9.76 0-17.624-6.264-17.624-14.024l0-42.016c0-7.76 7.864-14.024 17.624-14.024l58.2 0c9.76 0 17.664 6.264 17.664 14.024L675.168 626.608zM675.168 515.024c0 7.744-7.904 14.016-17.664 14.016l-58.2 0c-9.76 0-17.624-6.272-17.624-14.016l0-42.024c0-7.76 7.864-14.024 17.624-14.024l58.2 0c9.76 0 17.664 6.264 17.664 14.024L675.168 515.024zM678.488 388.408l-85.28 0c-8.96 0-16.192-10.936-16.192-24.416 0-13.456 7.232-24.368 16.192-24.368l85.288 0c8.96 0 16.192 10.912 16.192 24.368C694.68 377.472 687.448 388.408 678.488 388.408zM718.656 277.256c0 13.136-11.568 23.784-25.736 23.784L287.128 301.04c-14.256 0-25.824-10.648-25.824-23.784l0-60.288c0-13.144 11.568-23.8 25.824-23.8l405.792 0c14.176 0 25.736 10.664 25.736 23.8L718.656 277.256z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shuangjiantou-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M544.388 232.329l-33.448 33.45 229.967 229.946-229.967 230.026 33.468 33.409 263.416-263.394z"  ></path>'+
      ''+
      '<path d="M279.755 232.329l-33.449 33.45 229.967 229.946-229.967 230.026 33.469 33.409 263.415-263.394z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
