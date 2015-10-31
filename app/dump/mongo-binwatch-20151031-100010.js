
/** binActivity indexes **/
db.getCollection("binActivity").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** binPrediction indexes **/
db.getCollection("binPrediction").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** bins indexes **/
db.getCollection("bins").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** bins indexes **/
db.getCollection("bins").ensureIndex({
  "loc": "2dsphere"
},[
  
]);

/** binActivity records **/
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6721fdfaef48aadbedc"),
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "fill": 12,
  "humidity": 29.18,
  "temperature": 71.98,
  "timestamp": 1445516914842
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6801fdfaef48aadbedd"),
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "fill": 42,
  "humidity": 13.02,
  "temperature": 45.65,
  "timestamp": 1445516928864
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6841fdfaef48aadbede"),
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "fill": 53,
  "humidity": 29.53,
  "temperature": 54.26,
  "timestamp": 1445516932459
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6871fdfaef48aadbedf"),
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "fill": 67,
  "humidity": 10.69,
  "temperature": 46.01,
  "timestamp": 1445516935396
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d68c1fdfaef48aadbee0"),
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "fill": 27,
  "humidity": 17.61,
  "temperature": 54.15,
  "timestamp": 1445516940165
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6a31fdfaef48aadbee1"),
  "binId": ObjectId("56211607990b1b59a5000002"),
  "fill": 13,
  "humidity": 11.08,
  "temperature": 68.46,
  "timestamp": 1445516963837
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6a71fdfaef48aadbee2"),
  "binId": ObjectId("56211607990b1b59a5000002"),
  "fill": 61,
  "humidity": 12.64,
  "temperature": 40.44,
  "timestamp": 1445516967013
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6ab1fdfaef48aadbee3"),
  "binId": ObjectId("56211607990b1b59a5000002"),
  "fill": 37,
  "humidity": 24.36,
  "temperature": 47.13,
  "timestamp": 1445516971097
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6ad1fdfaef48aadbee4"),
  "binId": ObjectId("56211607990b1b59a5000002"),
  "fill": 44,
  "humidity": 17.65,
  "temperature": 60.71,
  "timestamp": 1445516973621
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6c11fdfaef48aadbee7"),
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "fill": 95,
  "humidity": 14.86,
  "temperature": 79.58,
  "timestamp": 1445516993958
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6c71fdfaef48aadbee9"),
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "fill": 4,
  "humidity": 25.61,
  "temperature": 55.96,
  "timestamp": 1445516999070
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6c91fdfaef48aadbeea"),
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "fill": 65,
  "humidity": 18.93,
  "temperature": 42.74,
  "timestamp": 1445517001668
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6d41fdfaef48aadbeeb"),
  "binId": ObjectId("562115d1990b1b59a5000001"),
  "fill": 81,
  "humidity": 15.63,
  "temperature": 79.2,
  "timestamp": 1445517012952
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6d61fdfaef48aadbeec"),
  "binId": ObjectId("562115d1990b1b59a5000001"),
  "fill": 83,
  "humidity": 17.41,
  "temperature": 48.25,
  "timestamp": 1445517014909
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6d81fdfaef48aadbeed"),
  "binId": ObjectId("562115d1990b1b59a5000001"),
  "fill": 35,
  "humidity": 25.17,
  "temperature": 45.83,
  "timestamp": 1445517016018
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6e41fdfaef48aadbef1"),
  "binId": ObjectId("56268ba4990b1b8b61000000"),
  "fill": 14,
  "humidity": 15.86,
  "temperature": 53.07,
  "timestamp": 1445517028973
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6f31fdfaef48aadbef6"),
  "binId": ObjectId("5627c949990b1b3355000000"),
  "fill": 28,
  "humidity": 17.72,
  "temperature": 67.55,
  "timestamp": 1445517043855
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6f51fdfaef48aadbef7"),
  "binId": ObjectId("5627c949990b1b3355000000"),
  "fill": 97,
  "humidity": 29.01,
  "temperature": 64.09,
  "timestamp": 1445517045068
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6f61fdfaef48aadbef8"),
  "binId": ObjectId("5627c949990b1b3355000000"),
  "fill": 79,
  "humidity": 12.49,
  "temperature": 65.07,
  "timestamp": 1445517046095
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6f61fdfaef48aadbef9"),
  "binId": ObjectId("5627c949990b1b3355000000"),
  "fill": 46,
  "humidity": 18.74,
  "temperature": 57.08,
  "timestamp": 1445517046988
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7001fdfaef48aadbefa"),
  "binId": ObjectId("5627cefb990b1be87d000000"),
  "fill": 88,
  "humidity": 15.9,
  "temperature": 76.45,
  "timestamp": 1445517056868
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7031fdfaef48aadbefb"),
  "binId": ObjectId("5627cefb990b1be87d000000"),
  "fill": 50,
  "humidity": 28.83,
  "temperature": 43.31,
  "timestamp": 1445517059044
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7041fdfaef48aadbefc"),
  "binId": ObjectId("5627cefb990b1be87d000000"),
  "fill": 80,
  "humidity": 12.3,
  "temperature": 58.51,
  "timestamp": 1445517060010
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7041fdfaef48aadbefd"),
  "binId": ObjectId("5627cefb990b1be87d000000"),
  "fill": 58,
  "humidity": 14.73,
  "temperature": 74.36,
  "timestamp": 1445517060885
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7051fdfaef48aadbefe"),
  "binId": ObjectId("5627cefb990b1be87d000000"),
  "fill": 1,
  "humidity": 11.88,
  "temperature": 52.08,
  "timestamp": 1445517061694
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7101fdfaef48aadbf01"),
  "binId": ObjectId("5627cf92990b1b1b20000000"),
  "fill": 6,
  "humidity": 28.03,
  "temperature": 78.95,
  "timestamp": 1445517072891
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7121fdfaef48aadbf03"),
  "binId": ObjectId("5627cf92990b1b1b20000000"),
  "fill": 49,
  "humidity": 22.44,
  "temperature": 70.34,
  "timestamp": 1445517074506
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d71e1fdfaef48aadbf04"),
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "fill": 86,
  "humidity": 24.99,
  "temperature": 42.43,
  "timestamp": 1445517086078
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d71f1fdfaef48aadbf05"),
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "fill": 9,
  "humidity": 19.18,
  "temperature": 62.13,
  "timestamp": 1445517087624
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7201fdfaef48aadbf06"),
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "fill": 15,
  "humidity": 21.9,
  "temperature": 60.57,
  "timestamp": 1445517088596
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d72b1fdfaef48aadbf09"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "fill": 49,
  "humidity": 29.6,
  "temperature": 78.54,
  "timestamp": 1445517099062
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d72e1fdfaef48aadbf0b"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "fill": 15,
  "humidity": 26.76,
  "temperature": 73.52,
  "timestamp": 1445517102202
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7301fdfaef48aadbf0c"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "fill": 12,
  "humidity": 19.93,
  "temperature": 51.69,
  "timestamp": 1445517104066
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7311fdfaef48aadbf0d"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "fill": 9,
  "humidity": 18.78,
  "temperature": 68,
  "timestamp": 1445517105194
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d73c1fdfaef48aadbf0e"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "fill": 25,
  "humidity": 15.55,
  "temperature": 73.05,
  "timestamp": 1445517116531
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d73e1fdfaef48aadbf0f"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "fill": 69,
  "humidity": 14.72,
  "temperature": 48.54,
  "timestamp": 1445517118250
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d73f1fdfaef48aadbf10"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "fill": 33,
  "humidity": 12.67,
  "temperature": 75.95,
  "timestamp": 1445517119098
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7401fdfaef48aadbf11"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "fill": 50,
  "humidity": 25.37,
  "temperature": 47.31,
  "timestamp": 1445517120022
});
db.getCollection("binActivity").insert({
  "temperature": 46.86,
  "humidity": 80.56,
  "fill": NumberInt(8),
  "timestamp": 1445959118549,
  "binId": ObjectId("56211590990b1b59a5000000"),
  "_id": ObjectId("562f95ce3a25ca3f33238172")
});
db.getCollection("binActivity").insert({
  "temperature": 70.67,
  "humidity": 26.4,
  "fill": NumberInt(49),
  "timestamp": 1445959265874,
  "binId": ObjectId("56211590990b1b59a5000000"),
  "_id": ObjectId("562f9661e2921a9365b3d3d6")
});
db.getCollection("binActivity").insert({
  "temperature": 45.02,
  "humidity": 41.47,
  "fill": NumberInt(42),
  "timestamp": 1445960055928,
  "binId": ObjectId("56211590990b1b59a5000000"),
  "_id": ObjectId("562f9977e2921a9365b3d3d7")
});
db.getCollection("binActivity").insert({
  "temperature": 77.05,
  "humidity": 80.53,
  "fill": NumberInt(13),
  "timestamp": 1445960071452,
  "binId": ObjectId("56211590990b1b59a5000000"),
  "_id": ObjectId("562f9987e2921a9365b3d3d8")
});
db.getCollection("binActivity").insert({
  "temperature": 66.86,
  "humidity": 50.74,
  "fill": NumberInt(3),
  "timestamp": 1445960422831,
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "_id": ObjectId("562f9ae6e2921a9365b3d3d9")
});
db.getCollection("binActivity").insert({
  "temperature": 58.58,
  "humidity": 76.56,
  "fill": NumberInt(13),
  "timestamp": 1445960595879,
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "_id": ObjectId("562f9b93e2921a9365b3d3da")
});
db.getCollection("binActivity").insert({
  "temperature": 46.11,
  "humidity": 37.46,
  "fill": NumberInt(54),
  "timestamp": 1445960596183,
  "binId": ObjectId("56211607990b1b59a5000002"),
  "_id": ObjectId("562f9b94e2921a9365b3d3db")
});
db.getCollection("binActivity").insert({
  "temperature": 74.12,
  "humidity": 54.84,
  "fill": NumberInt(47),
  "timestamp": 1445960596603,
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "_id": ObjectId("562f9b94e2921a9365b3d3dc")
});
db.getCollection("binActivity").insert({
  "temperature": 55.26,
  "humidity": 44.43,
  "fill": NumberInt(20),
  "timestamp": 1445960596878,
  "binId": ObjectId("562115d1990b1b59a5000001"),
  "_id": ObjectId("562f9b94e2921a9365b3d3dd")
});
db.getCollection("binActivity").insert({
  "temperature": 64.01,
  "humidity": 37.97,
  "fill": NumberInt(9),
  "timestamp": 1445960597159,
  "binId": ObjectId("56268ba4990b1b8b61000000"),
  "_id": ObjectId("562f9b95e2921a9365b3d3de")
});
db.getCollection("binActivity").insert({
  "temperature": 74.91,
  "humidity": 34.33,
  "fill": NumberInt(9),
  "timestamp": 1445960597429,
  "binId": ObjectId("5627c949990b1b3355000000"),
  "_id": ObjectId("562f9b95e2921a9365b3d3df")
});
db.getCollection("binActivity").insert({
  "temperature": 49.31,
  "humidity": 40.99,
  "fill": NumberInt(22),
  "timestamp": 1445960598023,
  "binId": ObjectId("5627cf92990b1b1b20000000"),
  "_id": ObjectId("562f9b96e2921a9365b3d3e1")
});
db.getCollection("binActivity").insert({
  "temperature": 79.83,
  "humidity": 36.87,
  "fill": NumberInt(59),
  "timestamp": 1445960598339,
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "_id": ObjectId("562f9b96e2921a9365b3d3e2")
});
db.getCollection("binActivity").insert({
  "temperature": 66.25,
  "humidity": 78.6,
  "fill": NumberInt(56),
  "timestamp": 1445960598641,
  "binId": ObjectId("56211590990b1b59a5000000"),
  "_id": ObjectId("562f9b96e2921a9365b3d3e3")
});
db.getCollection("binActivity").insert({
  "temperature": 76.34,
  "humidity": 36.04,
  "fill": NumberInt(31),
  "timestamp": 1445960598943,
  "binId": ObjectId("5603a582990b1b67be000002"),
  "_id": ObjectId("562f9b96e2921a9365b3d3e4")
});
db.getCollection("binActivity").insert({
  "temperature": 53.14,
  "humidity": 33.28,
  "fill": NumberInt(52),
  "timestamp": 1445960599254,
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "_id": ObjectId("562f9b97e2921a9365b3d3e5")
});
db.getCollection("binActivity").insert({
  "temperature": 78.97,
  "humidity": 59.4,
  "fill": NumberInt(40),
  "timestamp": 1445960599830,
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "_id": ObjectId("562f9b97e2921a9365b3d3e7")
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7491fdfaef48aadbf13"),
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "fill": 76,
  "humidity": 23.29,
  "temperature": 57.25,
  "timestamp": 1445517129155
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d74b1fdfaef48aadbf14"),
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "fill": 99,
  "humidity": 17.15,
  "temperature": 61.77,
  "timestamp": 1445517131433
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d74c1fdfaef48aadbf15"),
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "fill": 19,
  "humidity": 29.21,
  "temperature": 71.68,
  "timestamp": 1445517132219
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d74d1fdfaef48aadbf17"),
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "fill": 22,
  "humidity": 21.93,
  "temperature": 42.61,
  "timestamp": 1445517133833
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7551fdfaef48aadbf18"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": 37,
  "humidity": 11.85,
  "temperature": 71.43,
  "timestamp": 1445517141345
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7561fdfaef48aadbf19"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": 87,
  "humidity": 23.61,
  "temperature": 53.67,
  "timestamp": 1445517142871
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7581fdfaef48aadbf1b"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": 17,
  "humidity": 10.11,
  "temperature": 73.25,
  "timestamp": 1445517144496
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d75a1fdfaef48aadbf1d"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": 58,
  "humidity": 17.61,
  "temperature": 68.45,
  "timestamp": 1445517146158
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7591fdfaef48aadbf1c"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": 79,
  "humidity": 4.38,
  "temperature": 68.53,
  "timestamp": 1445517145305
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7571fdfaef48aadbf1a"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": 98,
  "humidity": 3.11,
  "temperature": 78.08,
  "timestamp": 1445517143679
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d74d1fdfaef48aadbf16"),
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "fill": 79,
  "humidity": 0.6,
  "temperature": 77.53,
  "timestamp": 1445517133011
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7401fdfaef48aadbf12"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "fill": 57,
  "humidity": 5.52,
  "temperature": 47.81,
  "timestamp": 1445517120857
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d72c1fdfaef48aadbf0a"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "fill": 2,
  "humidity": 1.94,
  "temperature": 79.02,
  "timestamp": 1445517100703
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7221fdfaef48aadbf08"),
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "fill": 60,
  "humidity": 8.19,
  "temperature": 62.99,
  "timestamp": 1445517090507
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7211fdfaef48aadbf07"),
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "fill": 20,
  "humidity": 6.58,
  "temperature": 69.72,
  "timestamp": 1445517089692
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7111fdfaef48aadbf02"),
  "binId": ObjectId("5627cf92990b1b1b20000000"),
  "fill": 41,
  "humidity": 6.29,
  "temperature": 67.03,
  "timestamp": 1445517073746
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d7101fdfaef48aadbf00"),
  "binId": ObjectId("5627cf92990b1b1b20000000"),
  "fill": 67,
  "humidity": 4.92,
  "temperature": 62.62,
  "timestamp": 1445517072030
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d70d1fdfaef48aadbeff"),
  "binId": ObjectId("5627cf92990b1b1b20000000"),
  "fill": 20,
  "humidity": 5.57,
  "temperature": 45.26,
  "timestamp": 1445517069975
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6f11fdfaef48aadbef5"),
  "binId": ObjectId("5627c949990b1b3355000000"),
  "fill": 68,
  "humidity": 0.62,
  "temperature": 45.77,
  "timestamp": 1445517041581
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6e71fdfaef48aadbef4"),
  "binId": ObjectId("56268ba4990b1b8b61000000"),
  "fill": 31,
  "humidity": 9.95,
  "temperature": 70.13,
  "timestamp": 1445517031552
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6e61fdfaef48aadbef3"),
  "binId": ObjectId("56268ba4990b1b8b61000000"),
  "fill": 45,
  "humidity": 0.98,
  "temperature": 50.94,
  "timestamp": 1445517030775
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6e51fdfaef48aadbef2"),
  "binId": ObjectId("56268ba4990b1b8b61000000"),
  "fill": 22,
  "humidity": 0.88,
  "temperature": 52.97,
  "timestamp": 1445517029933
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6e21fdfaef48aadbef0"),
  "binId": ObjectId("56268ba4990b1b8b61000000"),
  "fill": 49,
  "humidity": 7.77,
  "temperature": 48.3,
  "timestamp": 1445517026654
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6da1fdfaef48aadbeef"),
  "binId": ObjectId("562115d1990b1b59a5000001"),
  "fill": 15,
  "humidity": 5,
  "temperature": 40.36,
  "timestamp": 1445517018388
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6d91fdfaef48aadbeee"),
  "binId": ObjectId("562115d1990b1b59a5000001"),
  "fill": 94,
  "humidity": 3.65,
  "temperature": 56.41,
  "timestamp": 1445517017353
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6c41fdfaef48aadbee8"),
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "fill": 41,
  "humidity": 2.62,
  "temperature": 50.79,
  "timestamp": 1445516996483
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6bf1fdfaef48aadbee6"),
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "fill": 18,
  "humidity": 1.8,
  "temperature": 48.25,
  "timestamp": 1445516991321
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5628d6b01fdfaef48aadbee5"),
  "binId": ObjectId("56211607990b1b59a5000002"),
  "fill": 28,
  "humidity": 2.83,
  "temperature": 75.33,
  "timestamp": 1445516976502
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("56212101990b1b9331000000"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "fill": 72,
  "humidity": 40,
  "temperature": 29.9385,
  "timestamp": 1333065610000
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("5603a005990b1b67be000001"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "fill": 70,
  "humidity": 44,
  "temperature": 28.9385,
  "timestamp": 1333065600000
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562cf33f73de0014eb79087a"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": 76,
  "humidity": 8.68,
  "temperature": 53.65,
  "timestamp": 1445786431968
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562cf3d6e56ebf4d4b4398e7"),
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "fill": 6,
  "humidity": 8.51,
  "temperature": 46.75,
  "timestamp": 1445786582536
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562cfa7140b376730fa28361"),
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "fill": 82,
  "humidity": 16.71,
  "temperature": 53.16,
  "timestamp": 1445788273330
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562d06906e6d15a0a60e43be"),
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "fill": 69,
  "humidity": 28.14,
  "temperature": 77.58,
  "timestamp": 1445791376890
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562d2ae9fc53698fe2ffadf8"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "fill": 4,
  "humidity": 10.82,
  "temperature": 72.17,
  "timestamp": 1445800681598
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562f9092f570d1038754d9d0"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "fill": 12,
  "humidity": 56.01,
  "temperature": 78.5,
  "timestamp": 1445957778948
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562f9b97e2921a9365b3d3e6"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "fill": NumberLong(96),
  "humidity": 87.95,
  "temperature": 47.01,
  "timestamp": 1445960599559
});
db.getCollection("binActivity").insert({
  "_id": ObjectId("562f9b95e2921a9365b3d3e0"),
  "binId": ObjectId("5627cefb990b1be87d000000"),
  "fill": NumberLong(99),
  "humidity": 36.81,
  "temperature": 67.72,
  "timestamp": 1445960597699
});

/** binPrediction records **/
db.getCollection("binPrediction").insert({
  "_id": ObjectId("562923c39726dd7ae475b245"),
  "binId": ObjectId("562923c3d6f9eccbfb349d05"),
  "nextFill": 1445513132491.2
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("56292841e267ff67cceee46d"),
  "binId": ObjectId("5627cfce990b1b1b20000001"),
  "nextFill": 1445517142346.2
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fa53838b62c1cd27f0bd"),
  "binId": ObjectId("5603a582990b1b67be000002"),
  "nextFill": 1333065602305.2
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fa8b838b62c1cd27f0be"),
  "binId": ObjectId("5627cf92990b1b1b20000000"),
  "nextFill": 1445517071564.2
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fa96838b62c1cd27f0bf"),
  "binId": ObjectId("5627cf53990b1be87d000001"),
  "nextFill": 1445517131398.3
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fa9f838b62c1cd27f0c0"),
  "binId": ObjectId("5627cefb990b1be87d000000"),
  "nextFill": 1445517026514.5
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629faa9838b62c1cd27f0c1"),
  "binId": ObjectId("5627c949990b1b3355000000"),
  "nextFill": 1445516981144.4
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fab4838b62c1cd27f0c2"),
  "binId": ObjectId("56268ba4990b1b8b61000000"),
  "nextFill": 1445517013613.7
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fabe838b62c1cd27f0c3"),
  "binId": ObjectId("5621161d990b1b4bd6000002"),
  "nextFill": 1445516921948.9
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fac8838b62c1cd27f0c4"),
  "binId": ObjectId("56211607990b1b59a5000002"),
  "nextFill": 1445516945143.9
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fad1838b62c1cd27f0c5"),
  "binId": ObjectId("562115ee990b1b4bd6000001"),
  "nextFill": 1445516992718.3
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fadb838b62c1cd27f0c6"),
  "binId": ObjectId("562115d1990b1b59a5000001"),
  "nextFill": 1445517013837.1
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629fae6838b62c1cd27f0c7"),
  "binId": ObjectId("562115b8990b1b4bd6000000"),
  "nextFill": 1445517085796.9
});
db.getCollection("binPrediction").insert({
  "_id": ObjectId("5629faee838b62c1cd27f0c8"),
  "binId": ObjectId("56211590990b1b59a5000000"),
  "nextFill": 1445516999808.6
});

/** bins records **/
db.getCollection("bins").insert({
  "_id": ObjectId("5621161d990b1b4bd6000002"),
  "address": {
    "area": "Sadduguntepalya",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(40),
  "humidity": 59.4,
  "isActive": true,
  "last_sensed_timestamp": 1445960599830,
  "latitude": 12.927803,
  "loc": [
    77.609117,
    12.927803
  ],
  "longitude": 77.609117,
  "name": "12, 3rd Main Rd, Krishna Murthi Layout, Sadduguntepalya, Bengaluru, Karnataka 560029, India",
  "temperature": 78.97,
  "type": "wet"
});
db.getCollection("bins").insert({
  "_id": ObjectId("56211607990b1b59a5000002"),
  "address": {
    "area": "Sadduguntepalya",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(54),
  "humidity": 37.46,
  "isActive": true,
  "last_sensed_timestamp": 1445960596183,
  "latitude": 12.928702,
  "loc": [
    77.605448,
    12.928702
  ],
  "longitude": 77.605448,
  "name": "11, Tank Bund Rd, Tavarekere, Sadduguntepalya, Bengaluru, Karnataka 560029, India",
  "temperature": 46.11,
  "type": "wet"
});
db.getCollection("bins").insert({
  "_id": ObjectId("562115ee990b1b4bd6000001"),
  "address": {
    "area": "Sadduguntepalya",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(47),
  "humidity": 54.84,
  "isActive": false,
  "last_sensed_timestamp": 1445960596603,
  "latitude": 12.926464,
  "loc": [
    77.600823,
    12.926464
  ],
  "longitude": 77.600823,
  "name": "Tank Bund Rd, Bismillahnagar, Sadduguntepalya, Bengaluru, Karnataka 560029, India",
  "temperature": 74.12,
  "type": "wet"
});
db.getCollection("bins").insert({
  "_id": ObjectId("562115d1990b1b59a5000001"),
  "address": {
    "area": "BTM Layout",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(20),
  "humidity": 44.43,
  "isActive": true,
  "last_sensed_timestamp": 1445960596878,
  "latitude": 12.92478,
  "loc": [
    77.601703,
    12.92478
  ],
  "longitude": 77.601703,
  "name": "21, Bannerghatta Rd, OLd Gurappanapalya, Stage 1, BTM Layout, Bengaluru, Karnataka 560029, India",
  "temperature": 55.26,
  "type": "wet"
});
db.getCollection("bins").insert({
  "_id": ObjectId("56268ba4990b1b8b61000000"),
  "address": {
    "area": "Blackheath NSW 2785",
    "city": "Australia"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(9),
  "humidity": 37.97,
  "isActive": false,
  "last_sensed_timestamp": 1445960597159,
  "latitude": -33.6608795,
  "loc": [
    150.277357,
    -33.6608795
  ],
  "longitude": 150.277357,
  "name": "83 Station St, Blackheath NSW 2785, Australia",
  "temperature": 64.01,
  "type": "dry"
});
db.getCollection("bins").insert({
  "_id": ObjectId("5627c949990b1b3355000000"),
  "address": {
    "area": "Kodbisanhalli",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(9),
  "humidity": 34.33,
  "isActive": false,
  "last_sensed_timestamp": 1445960597429,
  "latitude": 12.9391132,
  "loc": [
    77.6975999,
    12.9391132
  ],
  "longitude": 77.6975999,
  "name": "Kodbisanhalli, Bengaluru, Karnataka, India",
  "temperature": 74.91,
  "type": "dry"
});
db.getCollection("bins").insert({
  "_id": ObjectId("5627cefb990b1be87d000000"),
  "address": {
    "area": "Hoodi",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberLong(99),
  "humidity": 36.81,
  "isActive": false,
  "last_sensed_timestamp": 1445960597699,
  "latitude": 12.9922822,
  "loc": [
    77.715358,
    12.9922822
  ],
  "longitude": 77.715358,
  "name": "Hoodi, Hoodi, Bengaluru, Karnataka 560067",
  "temperature": 67.72,
  "type": "wet"
});
db.getCollection("bins").insert({
  "_id": ObjectId("5627cf92990b1b1b20000000"),
  "address": {
    "area": "Kadugodi",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(22),
  "humidity": 40.99,
  "isActive": false,
  "last_sensed_timestamp": 1445960598023,
  "latitude": 12.9877163,
  "loc": [
    77.7351433,
    12.9877163
  ],
  "longitude": 77.7351433,
  "name": "Kadugodi, Bengaluru, Karnataka, India",
  "temperature": 49.31,
  "type": "wet"
});
db.getCollection("bins").insert({
  "_id": ObjectId("562115b8990b1b4bd6000000"),
  "address": {
    "area": "Sadduguntepalya",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(59),
  "humidity": 36.87,
  "isActive": true,
  "last_sensed_timestamp": 1445960598339,
  "latitude": 12.92546,
  "loc": [
    77.607604,
    12.92546
  ],
  "longitude": 77.607604,
  "name": "7th Cross Rd, Balaji Nagar, Sadduguntepalya, Bengaluru, Karnataka 560029, India",
  "temperature": 79.83,
  "type": "dry"
});
db.getCollection("bins").insert({
  "_id": ObjectId("56211590990b1b59a5000000"),
  "address": {
    "area": "Sadduguntepalya",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(56),
  "humidity": 78.6,
  "isActive": false,
  "last_sensed_timestamp": 1445960598641,
  "latitude": 12.927761,
  "loc": [
    77.607668,
    12.927761
  ],
  "longitude": 77.607668,
  "name": "125-126, 3rd Main Rd, Krishna Murthi Layout, Sadduguntepalya, Bengaluru, Karnataka 560029, India",
  "temperature": 66.25,
  "type": "dry"
});
db.getCollection("bins").insert({
  "_id": ObjectId("5603a582990b1b67be000002"),
  "address": {
    "area": "Sadduguntepalya",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(31),
  "humidity": 36.04,
  "isActive": false,
  "last_sensed_timestamp": 1445960598943,
  "latitude": 12.927991,
  "loc": [
    77.603817,
    12.927991
  ],
  "longitude": 77.603817,
  "name": "1/0, Bismillahnagar, Sadduguntepalya, Bengaluru, Karnataka 560029, India",
  "temperature": 76.34,
  "type": "dry"
});
db.getCollection("bins").insert({
  "_id": ObjectId("5627cf53990b1be87d000001"),
  "address": {
    "area": "Whitefield",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberInt(52),
  "humidity": 33.28,
  "isActive": false,
  "last_sensed_timestamp": 1445960599254,
  "latitude": 12.976733,
  "loc": [
    77.725035,
    12.976733
  ],
  "longitude": 77.725035,
  "name": "Vijayanagar, KIADB Export Promotion Industrial Area, Whitefield, Bengaluru, Karnataka, India",
  "temperature": 53.14,
  "type": "wet"
});
db.getCollection("bins").insert({
  "_id": ObjectId("5627cfce990b1b1b20000001"),
  "address": {
    "area": "Krishnarajapura",
    "city": "Bengaluru"
  },
  "cleared_timestamp": 1333065600000,
  "created_timestamp": 1333065600000,
  "fill": NumberLong(96),
  "humidity": 87.95,
  "isActive": false,
  "last_sensed_timestamp": 1445960599559,
  "latitude": 12.995332,
  "loc": [
    77.696797,
    12.995332
  ],
  "longitude": 77.696797,
  "name": "Devasandra Industrial Estate, Krishnarajapura, Bengaluru, Karnataka, India",
  "temperature": 47.01,
  "type": "wet"
});
