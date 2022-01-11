import {$host} from "./index";

export const fetchPosition = async () => {
  const {data} = await $host.get('getposition')
  return data
}
