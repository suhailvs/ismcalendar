const now = new Date()

export default [
  /* {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  }, */
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2024, 3, 25),
    end: new Date(2024, 3, 26),
  },
  {
    id: 2,
    title: 'Meeting',
    start: new Date(2024, 3, 24, 10, 30, 0, 0),
    end: new Date(2024, 3, 24, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 3,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 4,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
]