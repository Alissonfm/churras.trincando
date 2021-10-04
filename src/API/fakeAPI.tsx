import EVENTS_MOCK from './mock/events'
import GUEST_MOCK from './mock/guests'

export interface Response { body: any, status: number }
interface RequestData { path: string, params?: any, payload?: any }

function request(status: number, timeout: number, payload?: any): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ body: payload, status }), timeout)
  })
}

const findGuest = (email: string, list: Array<any>): any => list.find((guest) => guest.email === email)

const fakeBackEnd = (requestData: RequestData): Promise<Response> => {
  const { path, params, payload } = requestData

  switch (path) {
    case 'event/get-all': 
      return request(200, 1000, EVENTS_MOCK)

    case 'event/create':
      return request(200, 2000, payload)

    case 'guest/get-all':
      return request(200, 1000, GUEST_MOCK)
    
    case 'guest/create':
      return request(200, 3000, payload)
    
    case 'user/auth':
      const { email, guestList } = params
      const userFound = findGuest(email, guestList)
      return userFound ? request(200, 3000, userFound) : request(400, 5000, 'Usuário não encontrado, registre-se!')
    default :
    return request(400, 1000, 'Esse endpoint não existe')
  }
}

export const api = {
  GET: (path: string): Promise<Response> => fakeBackEnd({ path }),
  POST: (path: string, params?: any, payload?: any): Promise<Response> => fakeBackEnd({ path, params, payload })
}