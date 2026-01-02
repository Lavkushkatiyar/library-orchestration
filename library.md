# Library Management Flow (Async Simulation)

## Overview

This project simulates a **library book borrowing workflow** using asynchronous
JavaScript functions.\
Each step represents a real-world library operation and tracks **execution mode
(serial / parallel)** and **duration**.

The goal is to demonstrate:

- Controlled async execution
- Serial vs parallel task flow
- Performance tracking using execution duration

---

## High-Level Flow

1. Borrow request is created
2. Customer and book are validated (parallel)
3. Book availability is checked (serial)
4. Book is appointed to customer (serial)
5. Receipt is generated (parallel)
6. Records are updated (parallel)

---
