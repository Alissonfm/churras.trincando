export interface BBQ {
  id: any,
  name: string,
  description: string,
  date: string,
  normalValue: any,
  drinkValue: any,
  guests: Array<Guest> | []
}

export interface Guest {
  name: string,
  email: string,
  value?: number,
  paid?: boolean
}

export interface BbqStoreType {
  events: Array<BBQ>,
  selectedEvent?: BBQ
}


export interface UserStoreType {
  logged: boolean,
  user?: Guest,
  guests?: Array<Guest>
}