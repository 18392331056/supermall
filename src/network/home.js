import {request} from './requet';

export default function getHomeMultidata(){
  return request({
    url:'http://content.mobnv.com/THsys/cozyPlanet/cozyInfo',
    timeout:5000
  });
}