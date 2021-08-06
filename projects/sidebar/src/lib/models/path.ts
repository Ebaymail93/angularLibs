import { Submenu } from "./submenu";

export class Path {
    public icon_class!: string;
    public path!: string;
    public link_name!: string;
    public tooltip!: string;
    public submenu!: Array<Submenu>
}