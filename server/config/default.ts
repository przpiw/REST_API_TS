export default{
  port:1337,
  origin:'http://localhost:3000',
  host:"localhost",
  dbUri:"mongodb://zenware:qwerty@localhost:27017/?authSource=admin",
  accessTokenTtl: "10s",
  refreshTokenTtl: "1y",
  accessTokenPublicKey: "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZU1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTUFEQ0JpQUtCZ0hOZEYvNFFVNU1NRmF2eW9veWVpT0VqdldXbgpvREJyemJpVzY5dnAzS1NueEF4T2NVMDlmODlUd0JWTWRsN2JUMzEzN0tMWEl6UE95OEl4TTExKzcwVmlubjgzCjUvMWVlaDhZTHBRM25KaWJZeVBqdzRjLy9GYzJoZGhENlJvM29hU25adWNteStqZUdTUFMxY0JnbThVOUR3OVAKakY0eE82UjU4RkorYXJBSkFnTUJBQUU9Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ",
  accessTokenPrivateKey: "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDV3dJQkFBS0JnSE5kRi80UVU1TU1GYXZ5b295ZWlPRWp2V1dub0RCcnpiaVc2OXZwM0tTbnhBeE9jVTA5CmY4OVR3QlZNZGw3YlQzMTM3S0xYSXpQT3k4SXhNMTErNzBWaW5uODM1LzFlZWg4WUxwUTNuSmliWXlQanc0Yy8KL0ZjMmhkaEQ2Um8zb2FTblp1Y215K2plR1NQUzFjQmdtOFU5RHc5UGpGNHhPNlI1OEZKK2FyQUpBZ01CQUFFQwpnWUJWZ3RHLzd0WWtEemNaSjFhNXFPR0pFSGJaSFBFdU14cGdFdTV0S2VIMDRxMzgrVUFlb3RGVUdwNHNxMnFxClVTR1F2UTNZZm1PSGlXZWJYK0RWRXJ2RHlwcDA4alQ3VlMvQlpQbkRNYzVrSldRZTROWmRvZVAxOXlSblpnb3UKbFhiNXhZTklqVW5UeXNhVG5SYW9Sd0JOYjVub0NmbGZham5nMFdHZng4czRBUUpCQU5vTG1iYjVKdnZabWhJVgpPajEySGtGOU96RDhwN0ZBWUdicnovNEVybGVnR0J1enc4dkowakYyR1R0WTgvT3duaVQ1b1pndWpTOFFNTW1XCldNendtSWtDUVFDSGNkdFVUQ2lvWE9JTE54cXk0ZmhGVFZBa0ZVbGFyamlWYmt6UGlIZ2xLT0I0bmdRZmluZWQKcGJ6TXM0WTJJVUErRDlnckcwZy9MWEx2Rk94ZnhIdUJBa0VBaXlyZVNFZUwxekVTd2pua096ZzVwV2p0cjUyQwoxb0lWUlh0Ni9GRTJpVno0Smk0OWFNTitzZTBEdTdwUnNoYm5TUWcvV0dkVjIxVUZIcFVrUm1IRnFRSkFORjYxCnEzWjNFZ0kzOUpZdDRKUzI1alRxazhrWFA5UzFWREg5eVJDL1E3NzJiQ3pNODFVYXd2M2VibGZMd1FwQ1NMemYKbkd0RUdBbCtzeXFuNnErU0FRSkFERDZOVDV1TFM0WTRWWHVQT0lDWU9rTlg2RkxVbmYrTWRVb3ByZnNDdTU0Qgo1OFNBZUh0c0pmZ3hBS3BBaVA0UmNTT0l2UlE4UHZxak10RVA3d2xQVHc9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ",
  refreshTokenPrivateKey: "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDWEFJQkFBS0JnUUN1TEhDcGZYWkNONWpteUtjdFlmNXlja2lBbjF5bkJod0RGZG9rRGp1SDFsZlVKR0g5ClZIVDdKOTJuNzJFemNhMzJ5TVNVcGU0RXlzL2pDRkZILytUYWJJbTIzRzRLQnBHWDRzNVJyNHozZFVpSVB6OUkKdmNRSWNvQ2I0SHM0TVByaTVJdC9NR3FqOVJhTThJSzFmemZTaGFxVlNPVHI0d2JCbmV2YTdwdlhMd0lEQVFBQgpBb0dBQWx0NW51R2kweHliaGl3YkR5TXZaVzhraWhFZUdPaWRRbkZ1UldTbjY1dThEcFA3ZTRsRUdBNGZFdUhMCmgvMjI1QXN0bGZGMCtqMmdlS3NwSm5kUktwblJwZWhMaGk4YVRNLzRGT093VXJFOGlGYWFtT0lYcmhsVERVclgKMTUzY3B3bUNtYktKU2trSklIOW14bUhyWVJRdlRmYVFtY0xaL1VLNGQ1UVNhZUVDUVFEL1pUbmpmOUVkbE4vQwpOelBNWDQvMExsc0JtUjFFNHIvTUc4akxOZlNTOEJxMlZpbklLWS9abzVKK3ZqcjQ2YVlEUzZTazE2UTlMT2NjClA3RURwZXh4QWtFQXJwWDkvN3VUcEhJMW1LOGN6SnF0dzdUL0JmY2hLL0pCdU5KUjBJcXY3c2F5eHJObDBab0YKM3dLTnhmYkNla0NjQ2pKemE1d01vK2NZN2tVSzRYQk5ud0pCQU9LenVpVUZTbHlWeitHWUdyU3BoeURiSFJGWQpGckVWRGVkaUttU25xa2ZjTmZud2xmb0ZXcGw0Snd1MlZLYXEwQ0JRdnY5TUk0L2lFZXZ6WlcrMWt5RUNRRzVJCkJSaGpydEd6NnpNMWVtV3NWNU5HWThtcTMrTll0amMvYzdyZHdHQitWek80NHRwU0J0OW1SNVFEV2JuTDBrV0cKdE80R3R0MVovNStUTVZwU2pGVUNRRE5HeDBhcnFSUEhJWjZ3UFlpVXBuQkN5dU90dTExT2hYeE8xWFdIR21aaAo4d254YVk3UklZNWJ6NllzenZ2bHR4MU93YWw4a2svN3N5NjNpZGhmYmhFPQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ",
  refreshTokenPublicKey: "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDdUxIQ3BmWFpDTjVqbXlLY3RZZjV5Y2tpQQpuMXluQmh3REZkb2tEanVIMWxmVUpHSDlWSFQ3SjkybjcyRXpjYTMyeU1TVXBlNEV5cy9qQ0ZGSC8rVGFiSW0yCjNHNEtCcEdYNHM1UnI0ejNkVWlJUHo5SXZjUUljb0NiNEhzNE1Qcmk1SXQvTUdxajlSYU04SUsxZnpmU2hhcVYKU09UcjR3YkJuZXZhN3B2WEx3SURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ",
  saltWorkFactor: 10,
  accessTokenCookieConfig:{
    maxCookieAge:90, // 15 min
    httpOnly:true,
    domain:'localhost',
    path:'/',
    sameSite:'strict',
    secure:false //set true in production (cookie can only be used over https)
  },
  refreshTokenCookieConfig:{
    maxCookieAge:3.154e10, //1yr
    httpOnly:true,
    domain:'localhost',
    path:'/',
    sameSite:'strict',
    secure:false //set true in production (cookie can only be used over https)
  }
  
}