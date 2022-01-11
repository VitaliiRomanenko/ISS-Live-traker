import {$host} from "./index";

export const fetchAstronauts = async () => {
  const {data} = await $host.get('getpeopleinspace')
  return data
}
