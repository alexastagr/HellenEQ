export const eventsAPI = "https://api.alexasta.gr/helleneq.php";

export interface IEvent {
  id: number;
  magnitude: string;
  magLevel:string;
  meta: {
    title: string;
    date: string;
    time: string;
  };
  timeAgo: string;
  detailUrl: string;
}
