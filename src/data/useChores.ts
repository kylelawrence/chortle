import { useData } from "./dataCache";
import chores from "../services/chores";
import DataKeys from "./DataKeys";

export default () => useData(DataKeys.chores, chores.list);