import WebSocket from "ws";

const SYMBOL = "btcusdt";
const INTERVAL = "1m";
const WS_URL = `wss://stream.binance.com/ws/${SYMBOL}@kline_${INTERVAL}`;

let ws;
let heartbeat;

function connect() {
  ws = new WebSocket(WS_URL);

  ws.on("open", () => {
    console.log("WS connected");

    heartbeat = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.ping();
      }
    }, 20000);
  });

  ws.on("message", (data) => {
    const msg = JSON.parse(data.toString());
    if (msg.k?.x) {
      console.log({
        time: new Date(msg.k.t).toISOString(),
        open: msg.k.o,
        high: msg.k.h,
        low: msg.k.l,
        close: msg.k.c,
        volume: msg.k.v
      });
    }
  });

  ws.on("close", () => {
    console.log("WS closed, reconnecting...");
    cleanup();
    setTimeout(connect, 3000);
  });

  ws.on("error", (err) => {
    console.error("WS error:", err.message);
    ws.close();
  });
}

function cleanup() {
  clearInterval(heartbeat);
}

connect();
