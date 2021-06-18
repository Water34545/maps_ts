import {User} from './User'
import {Company} from './Company'
import {CustomMap} from './CustomMap'

const user = new User
const compant = new Company

const map = new CustomMap ('map')

map.addMarker(compant)
map.addMarker(user)