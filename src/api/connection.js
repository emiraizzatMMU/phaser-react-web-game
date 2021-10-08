import axios from "axios";
//import WebSocket, { WebSocketServer } from "ws";
import { io } from "socket.io-client";
import { GMY_API_KEY } from "./key";

export const signInAdmin = async () => {
  let data = {
    email: "admin@emirfyp",
    password: "123456",
  };
  await axios
    .post("https://mmu-test.gameconomy.tech/sdkapi/email-login", data, {
      headers: {
        "Content-Type": "application/json",
        "GMY-API-KEY": GMY_API_KEY,
      },
    })
    .then((res) => {
      connectWebsocket(res.data.id_token);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const connectWebsocket = (token) => {
  // const socket = io(
  //   "wss://mmu-test.gameconomy.tech/secured/network-game",
  //   null,
  //   {
  //     headers: { "GMY-USER-TOKEN": token },
  //   }
  // );
  // socket.on("connect", () => {
  //   console.log("ws connected");
  //   //console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // });

  // socket.on("data", () => {
  //   console.log("ws data");
  //   //console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // });

  const socket = new WebSocket(
    `wss://mmu-test.gameconomy.tech/secured/network-game`,
    `GMY_USER_KEY=${token}`
  );

  socket.addEventListener("open", function (event) {
    socket.send("Hello Server!");
  });

  // Listen for messages
  socket.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
  });

  socket.addEventListener("error", function (event) {
    console.log("Error from server ", event);
  });
};
