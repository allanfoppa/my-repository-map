# How Programs Run in Memory

## Summary:

When you open a program, the operating system copies parts of it from disk (HD/SSD) to RAM so the processor (CPU) can execute instructions quickly.

## Simplified Step-by-Step

1. Request: You open a program (click, terminal, shortcut).
2. Loading: The operating system reads the executable from storage and maps its parts into memory.
3. Process Creation: The OS creates a structure (process) with address space and metadata.
4. Execution: The CPU fetches and executes instructions from RAM (fetch-decode-execute cycle).
5. On-Demand Access: The OS may load only the necessary parts (pages) as they are used.

## Difference Between RAM and Storage

- RAM: Volatile, fast, used for temporary data while the program runs.
- HD/SSD: Non-volatile, slow, stores files permanently.

## Short Summary

The disk stores programs; RAM brings parts of them for the CPU to execute. The operating system organizes and protects memory, and the MMU translates addresses so each program works as if it has its own memory space.
