# Summary

## Notes

The key of this project is to get the current cursor position `y`, `percent` that is how much `y` takes up of the `height` of the `speed`, and current `playbackRate`.

`y` is where the event point minus the `speed`'s top distance relative to the `html`.

`percent = y / speed.offsetHeight`;

We set the `min` playback rate to 0.4, and `max` to 4. So to calculate the current `playbackRate`, multiply `percent` by `max - min`, which is how much the current cursor position takes up of the playback rate range we set up. Since the `min` playback is not zero, we add the `min`.