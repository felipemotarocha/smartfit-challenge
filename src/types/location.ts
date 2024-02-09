interface ILocationSchedule {
  weekdays: string;
  hour: string;
}

export interface ILocation {
  id: string;
  title: string;
  content: string;
  opened: boolean;
  mask: "required" | "recommended";
  towel: "required" | "recommended";
  fountain: "not_allowed" | "partial";
  locker_room: "closed" | "allowed" | "partial";
  schedules: ILocationSchedule[];
}
