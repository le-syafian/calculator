# fuzzy-disco.bot
An automated trading bot for HyperLiquid that streams real-time market data, analyzes price action using WaveTrend indicators, and executes trades based on predefined strategies and risk rules. Built for transparency, modularity, and future expansion into a fully autonomous trading system.

# HyperLiquid Trading Framework (JavaScript / Node.js)

## 1. Project Purpose

Project ini adalah **fondasi sistem trading berbasis JavaScript (Node.js)** untuk:

* Mengumpulkan data harga HyperLiquid secara real-time
* Menyimpan data historis jangka panjang
* Melakukan analisis teknikal (WaveTrend)
* Menjadi basis trading bot otomatis

Fokus utama:

* Event-driven architecture (Node.js native)
* Modular & scalable
* Database sebagai single source of truth
* Siap dikembangkan ke service production

---

## 2. Core Objectives

1. Subscribe price feed HyperLiquid via WebSocket.
2. Normalisasi dan simpan candle ke SQLite.
3. Load data historis untuk analisis time-series.
4. Hitung indikator WaveTrend (LazyBear Enhanced).
5. Visualisasi chart candlestick + indikator.
6. Menjadi fondasi trading bot otomatis (future).

---

## 3. High-Level Architecture

```
HyperLiquid WebSocket
        │
        ▼
Price Stream Handler (Node.js)
        │
        ▼
SQLite Database  ←── Historical Source of Truth
        │
        ▼
Data Loader / Analyzer
        │
        ▼
WaveTrend Engine
        │
        ▼
Trading Logic Engine (future)
        │
        ▼
Order Execution Layer (future)
```

Prinsip keras:

* Tidak ada indikator membaca langsung dari WebSocket
* Tidak ada bot membaca langsung dari WebSocket
* Semua keputusan berbasis data historis

---

## 4. Project Folder Structure

```
hyperliquid-chart/
│
├── src/
│   ├── stream/
│   │   └── priceStream.js      # WebSocket listener & normalizer
│   │
│   ├── db/
│   │   └── sqlite.js           # SQLite handler
│   │
│   ├── indicators/
│   │   └── wavetrend.js        # WaveTrend calculation
│   │
│   ├── charts/
│   │   └── chart.js            # Chart visualization
│   │
│   ├── bot/
│   │   └── engine.js           # Trading logic (future)
│   │
│   └── config.js               # Global config
│
├── data/
│   └── prices.db
│
├── package.json
└── README.md
```

Setiap module memiliki tanggung jawab tunggal.

---

## 5. Dependency Management

Dependency dikelola via `package.json`.

Library utama:

* ws (WebSocket client)
* better-sqlite3 (database)
* dayjs (time handling)
* mathjs (numeric helper)
* pino / winston (logging)
* lightweight-charts / plotly (chart)

---

## 6. Database Design

### Engine

* SQLite
* File-based
* Deterministik & ringan

### Table: `prices`

| Column    | Type    | Description     |
| --------- | ------- | --------------- |
| timestamp | INTEGER | Epoch ms        |
| open      | REAL    | Open price      |
| high      | REAL    | High price      |
| low       | REAL    | Low price       |
| close     | REAL    | Close price     |
| volume    | REAL    | Volume          |
| interval  | TEXT    | Candle interval |
| symbol    | TEXT    | Asset symbol    |

Index utama:

```
(symbol, interval, timestamp)
```

---

## 7. Price Stream Module (`priceStream.js`)

Tanggung jawab:

* Connect ke HyperLiquid WebSocket
* Subscribe candle stream
* Validasi payload
* Normalisasi data
* Insert ke SQLite

Karakteristik:

* Event-driven
* Reconnect otomatis
* Logging-based monitoring

---

## 8. Data Loader & Analysis Layer

Data dimuat dari SQLite untuk:

* Indicator calculation
* Backtesting
* Visualization

Analisis **tidak pernah** membaca WebSocket langsung.

---

## 9. WaveTrend Indicator Engine (`wavetrend.js`)

Fungsi:

* Typical Price
* ESA & D (EMA)
* CI
* WT1 & WT2
* Cross detection
* Signal generation

Sinyal:

* Buy: WT1 cross above WT2 di area oversold
* Sell: WT1 cross below WT2 di area overbought

---

## 10. Charting Module (`chart.js`)

Tujuan:

* Visual validation
* Candlestick chart
* WaveTrend overlay
* Backtest sanity check

JS memungkinkan chart interaktif.

---

## 11. Trading Logic Engine (`engine.js`) – Future

Tanggung jawab:

* Consume indicator signals
* Position management
* Risk management
* Order decision
* Logging keputusan

Bot tidak menghitung indikator.

---

## 12. Development Roadmap

### Phase 1 – Foundation

* WebSocket listener
* SQLite storage
* Project structure

### Phase 2 – Analysis

* WaveTrend full implementation
* Chart visualization

### Phase 3 – Strategy

* Signal rules
* Backtesting

### Phase 4 – Execution

* HyperLiquid private API
* Order execution
* Risk & capital control

---

## 13. Design Philosophy

* Event-driven
* Data first
* Deterministic analysis
* Modular & testable
* Production-oriented

---

## 14. License

Private internal project.
Use strictly for research and personal trading systems.
