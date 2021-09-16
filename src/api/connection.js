import axios from "axios";
import { GMY_API_KEY } from "./key";

export const registerPlayer = async (data) => {
  await axios
    .post("https://mmu-test.gameconomy.tech/sdkapi/email-register", data, {
      headers: {
        "Content-Type": "application/json",
        "GMY-API-KEY": GMY_API_KEY,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
