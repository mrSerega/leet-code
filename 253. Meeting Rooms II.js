// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

function minMeetingRooms(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const left = intervals[i][0];
    const right = intervals[i][1];

    const meeting = result.find((m) => m[1] <= left);

    if (!meeting) {
      result.push(intervals[i]);
    } else {
      meeting[1] = right;
    }
  }

  return result.length;
}
