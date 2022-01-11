import {$host} from "./index";

export const sendEmail = async (email) => {
  const {status} = await $host.post('feedback', email)
  return status
}
