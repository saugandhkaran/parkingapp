import { Server, Model } from 'miragejs'

export function mockServer({ environment = 'development' } = {}) {

let server = new Server({
  environment,
  models: {
    garageDetail: Model,
    pricing: Model
  },

  seeds(server) {
    server.create('garageDetail',
      {
        'garageId':'f48da692-3092-45fc-94ed-44e45d8ed457',
        'garageName':'ParkBee(26802): ParkBee(26802): Botersloot',
        'name':'ParkBee(26802): Botersloot',
        'latitude':51.922474,
        'longitude':4.486856,
        'streetAddress':'Librijesteeg',
        'postalCode':'3011NH    ',
        'city':'Rotterdam',
        'countryCode':'nl',
        'hasBarrier':true,
        'zoneNumber':26802,
        'isSuspended':false,
        'garageSuspensions':[
    
        ],
        'garageInformation':[
          {
              'id':'cc80e93c-fbee-4f3b-b5cd-0a25676ecb7c',
              'countryCode':'nl',
              'message':'Sensor: bij inchecken auto dichtbij ingang zetten'
          },
          {
              'id':'da5ea4d0-21da-461a-ac8a-9c0f12707fd9',
              'countryCode':'en',
              'message':'Sensor: stop car closely in front of entry'
          },
          {
              'id':'e10c5bb7-596a-4d11-8f4e-209f7d0e27c1',
              'countryCode':'de',
              'message':'Sensor: Beim Check-in Auto in der Nähe vom Eingang'
          }
        ],
        'doors':[
          {
              'doorType':'Entry',
              'description':'The entry door',
              'doorId':'2d0c6f00-c520-46a1-9a13-3f1a1fc5cbf4'
          },
          {
              'doorType':'Exit',
              'description':'The exit door',
              'doorId':'981bc76e-3932-4c1f-a28c-0bbce8aecff4'
          },
          {
              'doorType':'Human',
              'description':'The pedestrian door',
              'doorId':'a25ef938-82e9-42fa-ab2f-82395007d5e7'
          }
        ],
        'isPayPerMinute':false,
        'isPrepaid':false,
        'isReservable':false,
        'active':true,
        'region':'North Holland',
        'timezone':'Europe/Amsterdam',
        'capacity':59,
        'photos':[
          {
              'description':'Entry door',
              'urls':[
                {
                    'name':'Small',
                    'size':'300x225',
                    'url':'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/300x225/29e48488-62f6-4507-9c7a-2b3c4e920fee.jpg'
                },
                {
                    'name':'Large',
                    'size':'1200x900',
                    'url':'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/1200x900/29e48488-62f6-4507-9c7a-2b3c4e920fee.jpg'
                }
              ],
              'extension':'.jpg'
          },
          {
              'description':'Interior',
              'urls':[
                {
                    'name':'Small',
                    'size':'300x225',
                    'url':'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/300x225/6192159d-0d32-44be-a183-306c7e8e22fb.jpg'
                },
                {
                    'name':'Large',
                    'size':'1200x900',
                    'url':'https://ddp49kz334y0n.cloudfront.net/9afdd073-1684-4d12-9189-3e79f5ed8854/1200x900/6192159d-0d32-44be-a183-306c7e8e22fb.jpg'
                }
              ],
              'extension':'.jpg'
          }
        ]
        }
    )
  },

  routes() {

    this.namespace = 'api'

    this.get('/getGarageDetails', schema => {
      return schema.garageDetails.all()
    })

    this.get('/id/getPricing', schema => { 
      return [{
          'type': 'standard',
          'basePrice': 2.0,
          'dailyCap': 25.0
        },
        {
          'type': 'rushhour',
          'rate': 2.0,
          'rushHourRate': 4.0,
          'dailyRate': 32.0,
          'rushHourStartTime': '08:00:00',
          'rushHourEndTime': '18:00:00',
          'includeSaturday': true,
          'includeSunday': false
        },
        {
          'type':'timeblock',
          'schedules':[
             {
                'uniqueId':'90f3c628-053c-4772-bdc3-a1480b939dd8',
                'daysOfWeek':31,
                'startTime':'00:00:00',
                'endTime':'23:59:00',
                'timeBlocks':[
                   {
                      'duration':'08:00:00',
                      'price':9.60
                   },
                   {
                      'duration':'23:59:00',
                      'price':17.60
                   }
                ]
             },
             {
                'uniqueId':'4aac1623-b4d1-4875-8679-89b369ec5b6a',
                'daysOfWeek':96,
                'startTime':'00:00:00',
                'endTime':'23:59:00',
                'timeBlocks':[
                   {
                      'duration':'08:00:00',
                      'price':5.60
                   },
                   {
                      'duration':'23:59:00',
                      'price':12.50
                   }
                ]
             }
          ]
        }]
      }
    )

    this.get('/id/availability', (schema, request) => {
      return {
          'garageId': 'f48da692-3092-45fc-94ed-44e45d8ed457',
          'garageName': 'ParkBee(26802): Botersloot',
          'name': 'Botersloot',
          'zoneNumber': 26802,
          'availableSpaces': 15,
          'capacity': 30
        }
      }
    )

    this.post('/parkingTransactions', (schema, request) => {
      return {
        'transactionId': 'ab83c36e-993b-4e84-a12b-c617886162ab'
      }
    })

    this.post('/id/stopTransaction', (schema, request) => {
      return { 
        'transactionAmount': '15.2'
        }
    })
    
  },
  })

  return server
}
