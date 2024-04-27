// (This problem is an interactive problem.)

// Each ship is located at an integer point on the sea represented by a cartesian plane, and each integer point may contain at most 1 ship.

// You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments and returns true If there is at least one ship in the rectangle represented by the two points, including on the boundary.

// Given two points: the top right and bottom left corners of a rectangle, return the number of ships present in that rectangle. It is guaranteed that there are at most 10 ships in that rectangle.

// Submissions making more than 400 calls to hasShips will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

/**
 * // This is the Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Sea {
 *      hasShips(topRight: number[], bottomLeft: number[]): boolean {}
 * }
 */

function countShips(
  sea: Sea,
  topRight: number[],
  bottomLeft: number[]
): number {
  const step = (topRight: number[], bottomLeft: number[], index: number) => {
    const [ax, ay] = bottomLeft;
    const [bx, by] = topRight;

    if (!sea.hasShips(topRight, bottomLeft)) {
      return 0;
    } else if (ax === bx && ay === by) {
      return 1;
    } else {
      if (index % 2 === 0) {
        const midx1 = Math.floor((ax + bx) / 2);
        const midx2 = midx1 + 1;

        const b1 = [midx1, by];
        const a1 = [midx2, ay];

        return step(b1, bottomLeft, index + 1) + step(topRight, a1, index + 1);
      } else {
        const midy1 = Math.floor((ay + by) / 2);
        const midy2 = midy1 + 1;

        const b1 = [bx, midy1];
        const a1 = [ax, midy2];

        return step(b1, bottomLeft, index + 1) + step(topRight, a1, index + 1);
      }
    }
  };

  return step(topRight, bottomLeft, 0);
}
