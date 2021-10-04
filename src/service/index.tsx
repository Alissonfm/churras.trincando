import { api, Response } from 'API/fakeAPI'
import Guest from 'models/guest'

function auth(params: { email: string, guestList: Array<any> }): Promise<Response> {
  return api.POST('user/auth', params)
}

function getGuests(): Promise<Response> {
  return api.GET('guest/get-all')
}

function registerGuest(param: Guest): Promise<Response> {
  return api.POST('guest/create', param, param)
}

function getEvents(): Promise<Response> {
  return api.GET('event/get-all')
}

function createEvent(param: any): Promise<Response> {
  return api.POST('event/create', param, param)
}

const service = { auth, getGuests, registerGuest, getEvents, createEvent }

export default service