const data = [
  {
    id: crypto.randomUUID(),
    title: "Early morning",
    description: "First I want to early rising in morining 7:00",
    tags: ["morning", "getup", "bed"],
    priority: "low",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Font-end designer",
    description: "hello I am font end desiner",
    tags: ["Html", "Css", "Js"],
    priority: "low",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Back-end designer",
    description: "Hello I am backend designer",
    tags: [],
    priority: "High",
    isFavourite: false,
  },
];

export function taskData() {
  return data;
}
