import { Company } from './src/Company';
import { CustomMap } from './src/customMap';
import { User } from './src/User';

const user = new User();
const company = new Company();

const map = new CustomMap('map');
map.showMarker(user);
map.showMarker(company);
