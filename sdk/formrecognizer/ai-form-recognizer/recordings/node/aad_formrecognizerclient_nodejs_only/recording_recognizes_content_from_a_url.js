let nock = require('nock');

module.exports.hash = "222db2016a0cd59138a04f664b7ebba1";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '14df9074-41c6-47c8-877d-aa263fb79900',
  'x-ms-ests-server',
  '2.1.11198.13 - WUS2 ProdSlices',
  'Set-Cookie',
  'fpc=Aq-_MwWXuGRDr9LfhMScm-v0CyfMAQAAAG5DMtcOAAAA; expires=Wed, 02-Dec-2020 18:14:06 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 02 Nov 2020 18:14:06 GMT',
  'Content-Length',
  '1500'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/v2.1-preview.1/layout/analyze', {"source":"https://storageaccount/testingdata/Invoice_1.pdf?sastoken"})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.1/layout/analyzeResults/e0eb0f74-0277-417c-8847-67857405076a',
  'x-envoy-upstream-service-time',
  '4552',
  'apim-request-id',
  'e0eb0f74-0277-417c-8847-67857405076a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 02 Nov 2020 18:14:12 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/layout/analyzeResults/e0eb0f74-0277-417c-8847-67857405076a')
  .reply(200, {"status":"running","createdDateTime":"2020-11-02T18:14:12Z","lastUpdatedDateTime":"2020-11-02T18:14:12Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '25',
  'apim-request-id',
  '72c43b13-c53c-4972-a4fd-1ba6dfef41db',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 02 Nov 2020 18:14:12 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/layout/analyzeResults/e0eb0f74-0277-417c-8847-67857405076a')
  .reply(200, {"status":"running","createdDateTime":"2020-11-02T18:14:12Z","lastUpdatedDateTime":"2020-11-02T18:14:12Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '10',
  'apim-request-id',
  'dcb6d411-69b6-406d-9115-70ce703a6dcd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 02 Nov 2020 18:14:12 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/layout/analyzeResults/e0eb0f74-0277-417c-8847-67857405076a')
  .reply(200, {"status":"running","createdDateTime":"2020-11-02T18:14:12Z","lastUpdatedDateTime":"2020-11-02T18:14:12Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  '30b77de4-e61c-40a4-927c-df38b8ba85c0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 02 Nov 2020 18:14:17 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/layout/analyzeResults/e0eb0f74-0277-417c-8847-67857405076a')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-11-02T18:14:12Z","lastUpdatedDateTime":"2020-11-02T18:14:20Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0,"width":8.5,"height":11,"unit":"inch","lines":[{"boundingBox":[0.5384,1.1583,1.4466,1.1583,1.4466,1.3534,0.5384,1.3534],"text":"Contoso","words":[{"boundingBox":[0.5384,1.1583,1.4466,1.1583,1.4466,1.3534,0.5384,1.3534],"text":"Contoso","confidence":1}]},{"boundingBox":[0.7994,1.5143,1.3836,1.5143,1.3836,1.6154,0.7994,1.6154],"text":"Address:","words":[{"boundingBox":[0.7994,1.5143,1.3836,1.5143,1.3836,1.6154,0.7994,1.6154],"text":"Address:","confidence":1}]},{"boundingBox":[4.4033,1.5114,5.8155,1.5114,5.8155,1.6155,4.4033,1.6155],"text":"Invoice For: Microsoft","words":[{"boundingBox":[4.4033,1.5143,4.8234,1.5143,4.8234,1.6155,4.4033,1.6155],"text":"Invoice","confidence":1},{"boundingBox":[4.8793,1.5143,5.1013,1.5143,5.1013,1.6154,4.8793,1.6154],"text":"For:","confidence":1},{"boundingBox":[5.2045,1.5114,5.8155,1.5114,5.8155,1.6151,5.2045,1.6151],"text":"Microsoft","confidence":1}]},{"boundingBox":[0.8106,1.7033,2.1445,1.7033,2.1445,1.8342,0.8106,1.8342],"text":"1 Redmond way Suite","words":[{"boundingBox":[0.8106,1.708,0.8463,1.708,0.8463,1.8053,0.8106,1.8053],"text":"1","confidence":1},{"boundingBox":[0.923,1.7047,1.5018,1.7047,1.5018,1.8068,0.923,1.8068],"text":"Redmond","confidence":1},{"boundingBox":[1.5506,1.7309,1.7949,1.7309,1.7949,1.8342,1.5506,1.8342],"text":"way","confidence":1},{"boundingBox":[1.8415,1.7033,2.1445,1.7033,2.1445,1.8078,1.8415,1.8078],"text":"Suite","confidence":1}]},{"boundingBox":[5.2036,1.716,6.5436,1.716,6.5436,1.8459,5.2036,1.8459],"text":"1020 Enterprise Way","words":[{"boundingBox":[5.2036,1.716,5.4935,1.716,5.4935,1.8185,5.2036,1.8185],"text":"1020","confidence":1},{"boundingBox":[5.5488,1.7164,6.2178,1.7164,6.2178,1.8441,5.5488,1.8441],"text":"Enterprise","confidence":1},{"boundingBox":[6.2618,1.7164,6.5436,1.7164,6.5436,1.8459,6.2618,1.8459],"text":"Way","confidence":1}]},{"boundingBox":[0.8019,1.896,2.0384,1.896,2.0384,2.0171,0.8019,2.0171],"text":"6000 Redmond, WA","words":[{"boundingBox":[0.8019,1.896,1.0991,1.896,1.0991,1.9994,0.8019,1.9994],"text":"6000","confidence":1},{"boundingBox":[1.1537,1.8964,1.7689,1.8964,1.7689,2.0171,1.1537,2.0171],"text":"Redmond,","confidence":1},{"boundingBox":[1.8196,1.8976,2.0384,1.8976,2.0384,1.9969,1.8196,1.9969],"text":"WA","confidence":1}]},{"boundingBox":[5.196,1.9047,6.6526,1.9047,6.6526,2.0359,5.196,2.0359],"text":"Sunnayvale, CA 87659","words":[{"boundingBox":[5.196,1.9047,5.9894,1.9047,5.9894,2.0359,5.196,2.0359],"text":"Sunnayvale,","confidence":1},{"boundingBox":[6.0427,1.9047,6.2354,1.9047,6.2354,2.0085,6.0427,2.0085],"text":"CA","confidence":1},{"boundingBox":[6.2801,1.906,6.6526,1.906,6.6526,2.0086,6.2801,2.0086],"text":"87659","confidence":1}]},{"boundingBox":[0.8025,2.0876,1.175,2.0876,1.175,2.1911,0.8025,2.1911],"text":"99243","words":[{"boundingBox":[0.8025,2.0876,1.175,2.0876,1.175,2.1911,0.8025,2.1911],"text":"99243","confidence":1}]},{"boundingBox":[0.5439,2.8733,1.5729,2.8733,1.5729,2.9754,0.5439,2.9754],"text":"Invoice Number","words":[{"boundingBox":[0.5439,2.8733,1.0098,2.8733,1.0098,2.9754,0.5439,2.9754],"text":"Invoice","confidence":1},{"boundingBox":[1.0611,2.8743,1.5729,2.8743,1.5729,2.9754,1.0611,2.9754],"text":"Number","confidence":1}]},{"boundingBox":[1.9491,2.8733,2.7527,2.8733,2.7527,2.9754,1.9491,2.9754],"text":"Invoice Date","words":[{"boundingBox":[1.9491,2.8733,2.415,2.8733,2.415,2.9754,1.9491,2.9754],"text":"Invoice","confidence":1},{"boundingBox":[2.4673,2.8743,2.7527,2.8743,2.7527,2.9754,2.4673,2.9754],"text":"Date","confidence":1}]},{"boundingBox":[3.3495,2.8733,4.4547,2.8733,4.4547,2.9754,3.3495,2.9754],"text":"Invoice Due Date","words":[{"boundingBox":[3.3495,2.8733,3.8155,2.8733,3.8155,2.9754,3.3495,2.9754],"text":"Invoice","confidence":1},{"boundingBox":[3.8677,2.8743,4.1149,2.8743,4.1149,2.9754,3.8677,2.9754],"text":"Due","confidence":1},{"boundingBox":[4.1678,2.8743,4.4547,2.8743,4.4547,2.9754,4.1678,2.9754],"text":"Date","confidence":1}]},{"boundingBox":[4.7468,2.8717,5.289,2.8717,5.289,3.0035,4.7468,3.0035],"text":"Charges","words":[{"boundingBox":[4.7468,2.8717,5.289,2.8717,5.289,3.0035,4.7468,3.0035],"text":"Charges","confidence":1}]},{"boundingBox":[6.141,2.873,6.5875,2.873,6.5875,2.9736,6.141,2.9736],"text":"VAT ID","words":[{"boundingBox":[6.141,2.873,6.4147,2.873,6.4147,2.9736,6.141,2.9736],"text":"VAT","confidence":1},{"boundingBox":[6.4655,2.873,6.5875,2.873,6.5875,2.9736,6.4655,2.9736],"text":"ID","confidence":1}]},{"boundingBox":[0.5397,3.411,1.1457,3.411,1.1457,3.5144,0.5397,3.5144],"text":"34278587","words":[{"boundingBox":[0.5397,3.411,1.1457,3.411,1.1457,3.5144,0.5397,3.5144],"text":"34278587","confidence":1}]},{"boundingBox":[1.9455,3.41,2.551,3.41,2.551,3.5144,1.9455,3.5144],"text":"6/18/2017","words":[{"boundingBox":[1.9455,3.41,2.551,3.41,2.551,3.5144,1.9455,3.5144],"text":"6/18/2017","confidence":1}]},{"boundingBox":[3.346,3.41,3.9514,3.41,3.9514,3.5144,3.346,3.5144],"text":"6/24/2017","words":[{"boundingBox":[3.346,3.41,3.9514,3.41,3.9514,3.5144,3.346,3.5144],"text":"6/24/2017","confidence":1}]},{"boundingBox":[5.3871,3.4047,6.0702,3.4047,6.0702,3.5321,5.3871,3.5321],"text":"$56,651.49","words":[{"boundingBox":[5.3871,3.4047,6.0702,3.4047,6.0702,3.5321,5.3871,3.5321],"text":"$56,651.49","confidence":1}]},{"boundingBox":[6.2285,3.4114,6.3919,3.4114,6.3919,3.5119,6.2285,3.5119],"text":"PT","words":[{"boundingBox":[6.2285,3.4114,6.3919,3.4114,6.3919,3.5119,6.2285,3.5119],"text":"PT","confidence":1}]}],"selectionMarks":[{"boundingBox":[0,9.8562,1.1255,9.8562,1.1255,10.9934,0,10.9934],"confidence":0.881,"state":"unselected"},{"boundingBox":[0,10.4809,1.854,10.4809,1.854,10.9976,0,10.9976],"confidence":0.69,"state":"unselected"},{"boundingBox":[7.5162,10.3545,8.4955,10.3545,8.4955,11,7.5162,11],"confidence":0.553,"state":"unselected"}]}],"pageResults":[{"page":1,"tables":[{"rows":2,"columns":6,"cells":[{"rowIndex":0,"columnIndex":0,"text":"Invoice Number","boundingBox":[0.5075,2.8088,1.9061,2.8088,1.9061,3.3219,0.5075,3.3219],"elements":["#/readResults/0/lines/8/words/0","#/readResults/0/lines/8/words/1"]},{"rowIndex":0,"columnIndex":1,"text":"Invoice Date","boundingBox":[1.9061,2.8088,3.3074,2.8088,3.3074,3.3219,1.9061,3.3219],"elements":["#/readResults/0/lines/9/words/0","#/readResults/0/lines/9/words/1"]},{"rowIndex":0,"columnIndex":2,"text":"Invoice Due Date","boundingBox":[3.3074,2.8088,4.7074,2.8088,4.7074,3.3219,3.3074,3.3219],"elements":["#/readResults/0/lines/10/words/0","#/readResults/0/lines/10/words/1","#/readResults/0/lines/10/words/2"]},{"rowIndex":0,"columnIndex":3,"text":"Charges","boundingBox":[4.7074,2.8088,5.386,2.8088,5.386,3.3219,4.7074,3.3219],"elements":["#/readResults/0/lines/11/words/0"]},{"rowIndex":0,"columnIndex":5,"text":"VAT ID","boundingBox":[6.1051,2.8088,7.5038,2.8088,7.5038,3.3219,6.1051,3.3219],"elements":["#/readResults/0/lines/12/words/0","#/readResults/0/lines/12/words/1"]},{"rowIndex":1,"columnIndex":0,"text":"34278587","boundingBox":[0.5075,3.3219,1.9061,3.3219,1.9061,3.859,0.5075,3.859],"elements":["#/readResults/0/lines/13/words/0"]},{"rowIndex":1,"columnIndex":1,"text":"6/18/2017","boundingBox":[1.9061,3.3219,3.3074,3.3219,3.3074,3.859,1.9061,3.859],"elements":["#/readResults/0/lines/14/words/0"]},{"rowIndex":1,"columnIndex":2,"text":"6/24/2017","boundingBox":[3.3074,3.3219,4.7074,3.3219,4.7074,3.859,3.3074,3.859],"elements":["#/readResults/0/lines/15/words/0"]},{"rowIndex":1,"columnIndex":3,"columnSpan":2,"text":"$56,651.49","boundingBox":[4.7074,3.3219,6.1051,3.3219,6.1051,3.859,4.7074,3.859],"elements":["#/readResults/0/lines/16/words/0"]},{"rowIndex":1,"columnIndex":5,"text":"PT","boundingBox":[6.1051,3.3219,7.5038,3.3219,7.5038,3.859,6.1051,3.859],"elements":["#/readResults/0/lines/17/words/0"]}]}]}]}}, [
  'Content-Length',
  '7988',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '21',
  'apim-request-id',
  'c2666610-0014-43e1-98cf-d3afb50bb00b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 02 Nov 2020 18:14:22 GMT'
]);
