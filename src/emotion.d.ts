import "@emotion/react";
import "@emotion/css";
import { DemonicTheme } from "@styles/types";

declare module "@emotion/react" {
    export interface Theme extends DemonicTheme {}
}

declare module "@emotion/css" {
    export interface Theme extends DemonicTheme {}
}
