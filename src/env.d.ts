/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Provide a minimal JSX namespace so third-party Vue typings that reference JSX do not error.
declare namespace JSX {
  interface Element {}
  interface ElementClass { $props: any }
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

// Minimal Web Bluetooth stubs to satisfy third-party typings in @vueuse/core.
type BluetoothServiceUUID = number | string;
interface BluetoothRemoteGATTServer {}
interface BluetoothDevice { gatt?: BluetoothRemoteGATTServer | null }
interface BluetoothLEScanFilter {
  services?: BluetoothServiceUUID[];
  name?: string;
  namePrefix?: string;
}
