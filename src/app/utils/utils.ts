import { SelectItem } from "primeng/api";

export function sortByName(a: SelectItem, b: SelectItem) {
    if (a.value < b.value) {
        return -1;
    }
    if (a.value > b.value) {
        return 1;
    }
    return 0;
}